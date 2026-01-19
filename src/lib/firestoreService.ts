import { firestore } from './firebase';
import { 
  collection, 
  addDoc, 
  getDocs, 
  doc,
  updateDoc,
  query, 
  orderBy, 
  limit as firestoreLimit,
  serverTimestamp,
  Timestamp,
} from 'firebase/firestore';
import { QuestionnaireResponse } from './questionnaireStorage';

/**
 * Save questionnaire response to Firestore
 * Stores responses with metadata for analysis
 */
export const saveQuestionnaireToFirestore = async (
  responses: QuestionnaireResponse,
  metadata: {
    timeSpent: number;
    completedSteps: number;
    totalSteps: number;
  }
): Promise<string | null> => {
  if (typeof window === 'undefined' || !firestore) {
    console.warn('Firestore not available');
    return null;
  }

  try {
    const isDevelopment = process.env.NODE_ENV === 'development' || 
                         window.location.hostname === 'localhost' ||
                         window.location.hostname === '127.0.0.1';
    
    const docRef = await addDoc(collection(firestore, 'questionnaire_responses'), {
      responses,
      metadata: {
        ...metadata,
        userAgent: navigator.userAgent,
        language: navigator.language,
        screenResolution: `${window.screen.width}x${window.screen.height}`,
        referrer: document.referrer || 'direct',
        viewport: `${window.innerWidth}x${window.innerHeight}`,
        environment: isDevelopment ? 'development' : 'production',
        hostname: window.location.hostname,
      },
      timestamp: serverTimestamp(),
      createdAt: new Date().toISOString(),
    });

    return docRef.id;
  } catch (error) {
    console.error('Error saving questionnaire response:', error);
    return null;
  }
};

/**
 * Log analytics event to Firestore (backup/detailed tracking)
 * Useful for custom analysis beyond GA4
 */
export const logAnalyticsEvent = async (
  eventName: string,
  eventData: Record<string, any>
): Promise<void> => {
  if (typeof window === 'undefined' || !firestore) {
    return;
  }

  try {
    await addDoc(collection(firestore, 'analytics_events'), {
      eventName,
      eventData,
      timestamp: serverTimestamp(),
      createdAt: new Date().toISOString(),
      sessionId: getSessionId(),
      page: window.location.pathname,
    });
  } catch (error) {
    console.error('Error logging analytics event:', error);
  }
};

/**
 * Get or create session ID
 * Used to track user sessions across events
 */
function getSessionId(): string {
  let sessionId = sessionStorage.getItem('regalo_session_id');
  
  if (!sessionId) {
    sessionId = `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    sessionStorage.setItem('regalo_session_id', sessionId);
  }
  
  return sessionId;
}

/**
 * Save beta tester to Firestore (separate collection)
 */
export const saveBetaTester = async (
  email: string,
  name: string,
  platform: string,
  language: string,
  source: 'questionnaire' | 'landing' = 'landing'
): Promise<string | null> => {
  console.log('🔵 saveBetaTester called with:', { email, name, platform, language, source });
  
  if (typeof window === 'undefined' || !firestore) {
    console.warn('❌ Firestore not available');
    return null;
  }

  console.log('✅ Firestore is available, attempting to save...');

  try {
    const data = {
      email: email.toLowerCase().trim(),
      name: name.trim(),
      platform,
      language,
      source,
      downloadedApp: false,
      metadata: {
        userAgent: navigator.userAgent,
        language: navigator.language,
        referrer: document.referrer || 'direct',
        sessionId: getSessionId(),
      },
      timestamp: serverTimestamp(),
      createdAt: new Date().toISOString(),
    };

    console.log('📝 Data to save:', data);

    const docRef = await addDoc(collection(firestore, 'beta_testers'), data);

    console.log('✅ Beta tester saved successfully! ID:', docRef.id);
    return docRef.id;
  } catch (error) {
    console.error('❌ Error saving beta tester:', error);
    return null;
  }
};

/**
 * Save waitlist signup to Firestore (legacy)
 */
export const saveWaitlistSignup = async (
  email: string,
  name: string,
  source: 'questionnaire' | 'landing' = 'questionnaire',
  platform?: string,
  language?: string
): Promise<string | null> => {
  if (typeof window === 'undefined' || !firestore) {
    console.warn('Firestore not available');
    return null;
  }

  try {
    const docRef = await addDoc(collection(firestore, 'waitlist_signups'), {
      email: email.toLowerCase().trim(),
      name: name.trim(),
      source,
      platform: platform || 'not-specified',
      language: language || 'en',
      metadata: {
        userAgent: navigator.userAgent,
        language: navigator.language,
        referrer: document.referrer || 'direct',
        sessionId: getSessionId(),
      },
      timestamp: serverTimestamp(),
      createdAt: new Date().toISOString(),
    });

    return docRef.id;
  } catch (error) {
    console.error('Error saving waitlist signup:', error);
    return null;
  }
};

/**
 * Calculate feature interest scores from questionnaire responses
 * Returns aggregated scores for each feature
 */
export const calculateFeatureScores = (responses: QuestionnaireResponse): Record<string, number> => {
  const scores: Record<string, number> = {
    calendar: 0,
    profile: 0,
    access: 0,
    reminders: 0,
    overall: 0,
  };

  // Calendar feature score
  if (responses['forgot-gift']?.value === 'very-often' || responses['forgot-gift']?.value === 'once') {
    scores.calendar += 2;
  }
  if (responses['use-calendar']?.value === 'very-often') {
    scores.calendar += 1;
  }

  // Profile feature score
  if (responses['profile-useful']?.value === 'awesome') {
    scores.profile = 3;
  } else if (responses['profile-useful']?.value === 'yes-use') {
    scores.profile = 2;
  } else if (responses['profile-useful']?.value === 'could-try') {
    scores.profile = 1;
  }

  // Access feature score (based on sharing willingness)
  const shareWith = responses['share-with']?.value;
  if (Array.isArray(shareWith)) {
    scores.access = shareWith.length;
  }

  // Reminders feature score
  const reminderTimes = responses['reminder-time']?.value;
  if (Array.isArray(reminderTimes)) {
    scores.reminders = reminderTimes.length;
  }

  // Overall satisfaction score
  if (responses['overall-opinion']?.value === 'need-it') {
    scores.overall = 4;
  } else if (responses['overall-opinion']?.value === 'very-useful') {
    scores.overall = 3;
  } else if (responses['overall-opinion']?.value === 'good') {
    scores.overall = 2;
  } else if (responses['overall-opinion']?.value === 'not-useful') {
    scores.overall = 1;
  }

  return scores;
};

/**
 * Fetch all questionnaire responses from Firestore
 * Used for dashboard analytics
 */
export const fetchQuestionnaireResponses = async (maxResults: number = 100) => {
  if (!firestore) {
    console.warn('Firestore not available');
    return [];
  }

  try {
    const q = query(
      collection(firestore, 'questionnaire_responses'),
      orderBy('createdAt', 'desc'),
      firestoreLimit(maxResults)
    );
    
    const querySnapshot = await getDocs(q);
    const responses: any[] = [];
    
    querySnapshot.forEach((doc) => {
      responses.push({
        id: doc.id,
        ...doc.data(),
      });
    });
    
    return responses;
  } catch (error) {
    console.error('Error fetching questionnaire responses:', error);
    return [];
  }
};

/**
 * Fetch beta testers from Firestore
 */
export const fetchBetaTesters = async (limit: number = 100) => {
  if (typeof window === 'undefined' || !firestore) {
    console.warn('Firestore not available');
    return [];
  }

  try {
    const q = query(
      collection(firestore, 'beta_testers'),
      orderBy('timestamp', 'desc'),
      firestoreLimit(limit)
    );
    
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
    }));
  } catch (error) {
    console.error('Error fetching beta testers:', error);
    return [];
  }
};

/**
 * Update beta tester downloadedApp status
 */
export const updateBetaTesterDownloadStatus = async (
  testerId: string,
  downloadedApp: boolean
): Promise<boolean> => {
  if (typeof window === 'undefined' || !firestore) {
    console.warn('Firestore not available');
    return false;
  }

  try {
    const docRef = doc(firestore, 'beta_testers', testerId);
    await updateDoc(docRef, {
      downloadedApp,
      lastUpdated: serverTimestamp(),
    });
    return true;
  } catch (error) {
    console.error('Error updating beta tester download status:', error);
    return false;
  }
};

/**
 * Fetch waitlist signups from Firestore
 */
export const fetchWaitlistSignups = async (limit: number = 100) => {
  if (typeof window === 'undefined' || !firestore) {
    console.warn('Firestore not available');
    return [];
  }

  try {
    const q = query(
      collection(firestore, 'waitlist_signups'),
      orderBy('timestamp', 'desc'),
      firestoreLimit(limit)
    );
    
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
    }));
  } catch (error) {
    console.error('Error fetching waitlist signups:', error);
    return [];
  }
};
