import { analytics } from './firebase';
import { logEvent as firebaseLogEvent } from 'firebase/analytics';

/**
 * Safely log analytics events
 * Only logs if analytics is initialized and available
 */
export const logEvent = (eventName: string, eventParams?: Record<string, any>) => {
  if (typeof window === 'undefined') return;

  if (analytics) {
    try {
      firebaseLogEvent(analytics, eventName, eventParams);
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

// ==================== BETA EVENTS ====================

/**
 * Track when beta program form is shown
 */
export const trackBetaView = (source: string) => {
  logEvent('beta_view', { source });
};

/**
 * Track beta signup success
 */
export const trackBetaSignup = (source: string, platform: string) => {
  logEvent('beta_signup', {
    source,
    platform
  });
};

/**
 * Track when user skips beta signup
 */
export const trackBetaSkip = (source: string) => {
  logEvent('beta_skip', { source });
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
export const trackWaitlistSignup = (source: string, platform: string) => {
  logEvent('waitlist_signup', {
    source,
    platform
  });
};

/**
 * Track when user skips waitlist
 */
export const trackWaitlistSkip = (source: string) => {
  logEvent('waitlist_skip', { source });
};
