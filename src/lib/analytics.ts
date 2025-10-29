import { analytics } from './firebase';
import { logEvent as firebaseLogEvent } from 'firebase/analytics';

/**
 * Safely log analytics events
 * Only logs if analytics is initialized and in browser
 */
export const logEvent = (eventName: string, params?: Record<string, any>) => {
  if (typeof window !== 'undefined' && analytics) {
    try {
      firebaseLogEvent(analytics, eventName, params);
    } catch (error) {
      console.error('Analytics error:', error);
    }
  }
};

// ==================== LANDING PAGE EVENTS ====================

/**
 * Track page view
 */
export const trackPageView = (pageName: string) => {
  logEvent('page_view', { page_name: pageName });
};

/**
 * Track button clicks
 */
export const trackButtonClick = (buttonId: string, location: string) => {
  logEvent('button_click', { button_id: buttonId, location });
};

/**
 * Track section visibility (when user scrolls to section)
 */
export const trackSectionView = (sectionName: string) => {
  logEvent('section_view', { section_name: sectionName });
};

// ==================== QUESTIONNAIRE EVENTS ====================

/**
 * Track when user starts questionnaire
 */
export const trackQuestionnaireStart = () => {
  logEvent('questionnaire_start', { 
    timestamp: new Date().toISOString() 
  });
};

/**
 * Track each step progression
 */
export const trackQuestionnaireStep = (stepId: string, stepNumber: number) => {
  logEvent('questionnaire_step', { 
    step_id: stepId, 
    step_number: stepNumber 
  });
};

/**
 * Track questionnaire completion
 */
export const trackQuestionnaireComplete = (timeSpent: number) => {
  logEvent('questionnaire_complete', { 
    time_spent_seconds: timeSpent,
    timestamp: new Date().toISOString()
  });
};

/**
 * Track when user abandons questionnaire
 */
export const trackQuestionnaireDropoff = (stepId: string, stepNumber: number) => {
  logEvent('questionnaire_dropoff', { 
    step_id: stepId, 
    step_number: stepNumber,
    timestamp: new Date().toISOString()
  });
};

/**
 * Track individual question responses (without PII)
 */
export const trackQuestionResponse = (questionId: string, responseType: string) => {
  logEvent('question_response', { 
    question_id: questionId,
    response_type: responseType
  });
};

/**
 * Track questionnaire exit
 */
export const trackQuestionnaireExit = (stepId: string, stepNumber: number) => {
  logEvent('questionnaire_exit', {
    step_id: stepId,
    step_number: stepNumber
  });
};

// ==================== WAITLIST EVENTS ====================

/**
 * Track when waitlist form is shown
 */
export const trackWaitlistView = (source: string) => {
  logEvent('waitlist_view', { source });
};

/**
 * Track waitlist signup success
 */
export const trackWaitlistSignup = (source: string) => {
  logEvent('waitlist_signup', { 
    source,
    timestamp: new Date().toISOString()
  });
};

/**
 * Track when user skips waitlist
 */
export const trackWaitlistSkip = (source: string) => {
  logEvent('waitlist_skip', { source });
};
