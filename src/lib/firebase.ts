import { initializeApp, getApps, FirebaseApp } from 'firebase/app';
import { getFirestore, Firestore } from 'firebase/firestore';
import { getAnalytics, Analytics, isSupported } from 'firebase/analytics';

/**
 * Firebase configuration from environment variables
 * Make sure to set these in .env.local
 */
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

/**
 * Initialize Firebase App (Singleton pattern)
 * Only runs on client-side
 */
let app: FirebaseApp;
let analytics: Analytics | null = null;
let firestore: Firestore;

if (typeof window !== 'undefined') {
  // Client-side initialization only
  console.log('🔧 Initializing Firebase...');
  console.log('📊 Measurement ID:', firebaseConfig.measurementId);
  
  if (!getApps().length) {
    app = initializeApp(firebaseConfig);
    firestore = getFirestore(app);
    console.log('✅ Firebase app initialized');
    
    // Initialize Analytics only if supported (not blocked by ad blockers)
    isSupported().then((supported: boolean) => {
      console.log('📊 Analytics supported:', supported);
      if (supported) {
        analytics = getAnalytics(app);
        console.log('✅ Firebase Analytics initialized');
        console.log('📊 Analytics object:', analytics);
      } else {
        console.warn('⚠️ Firebase Analytics not supported in this browser');
        console.warn('⚠️ Possible causes: ad blocker, privacy extension, or browser settings');
      }
    }).catch((error) => {
      console.error('❌ Error initializing Firebase Analytics:', error);
    });
  } else {
    app = getApps()[0];
    firestore = getFirestore(app);
    console.log('✅ Using existing Firebase app');
  }
}

export { app, analytics, firestore };
