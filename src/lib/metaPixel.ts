/**
 * Meta Pixel (Facebook Pixel) integration
 * Tracks conversions and user behavior for Meta Ads campaigns
 * Only initializes if user has accepted cookies
 */

// Extend Window interface for Meta Pixel
declare global {
  interface Window {
    fbq?: (...args: any[]) => void;
    _fbq?: (...args: any[]) => void;
  }
}

const PIXEL_ID = '1528497405010554';

/**
 * Initialize Meta Pixel
 * Should be called once on app load, after checking cookie consent
 */
export const initMetaPixel = () => {
  if (typeof window === 'undefined') return;
  
  // Check cookie consent
  const cookieConsent = localStorage.getItem('regalo_cookie_consent');
  if (cookieConsent !== 'accepted') {
    return;
  }

  // Check if already initialized
  if (window.fbq) return;

  // Initialize fbq function
  const fbq: any = function(...args: any[]) {
    if (fbq.callMethod) {
      fbq.callMethod.apply(fbq, args);
    } else {
      fbq.queue.push(args);
    }
  };

  if (!window._fbq) window._fbq = fbq;
  window.fbq = fbq;
  fbq.push = fbq;
  fbq.loaded = true;
  fbq.version = '2.0';
  fbq.queue = [] as any[];

  // Load the pixel script
  const script = document.createElement('script');
  script.async = true;
  script.src = 'https://connect.facebook.net/en_US/fbevents.js';
  
  const firstScript = document.getElementsByTagName('script')[0];
  if (firstScript && firstScript.parentNode) {
    firstScript.parentNode.insertBefore(script, firstScript);
  }

  // Initialize pixel with ID
  if (window.fbq) {
    window.fbq('init', PIXEL_ID);
    
    // Track initial PageView
    window.fbq('track', 'PageView');
  }
};

/**
 * Track a standard Meta event
 */
export const trackMetaEvent = (eventName: string, parameters?: Record<string, any>) => {
  if (typeof window === 'undefined' || !window.fbq) return;
  
  try {
    if (parameters) {
      window.fbq('track', eventName, parameters);
    } else {
      window.fbq('track', eventName);
    }
  } catch (error) {
    console.error('Meta Pixel error:', error);
  }
};

/**
 * Track custom Meta event
 */
export const trackMetaCustomEvent = (eventName: string, parameters?: Record<string, any>) => {
  if (typeof window === 'undefined' || !window.fbq) return;
  
  try {
    if (parameters) {
      window.fbq('trackCustom', eventName, parameters);
    } else {
      window.fbq('trackCustom', eventName);
    }
  } catch (error) {
    console.error('Meta Pixel error:', error);
  }
};

// ==================== STANDARD EVENTS ====================

/**
 * Track Lead event (when user joins waitlist)
 */
export const trackMetaLead = (source?: string) => {
  trackMetaEvent('Lead', {
    content_name: 'Waitlist Signup',
    content_category: 'Lead Generation',
    source: source || 'unknown',
  });
};

/**
 * Track CompleteRegistration event (when user completes questionnaire)
 */
export const trackMetaCompleteRegistration = (timeSpent?: number) => {
  trackMetaEvent('CompleteRegistration', {
    content_name: 'Questionnaire Complete',
    status: 'completed',
    ...(timeSpent && { time_spent: timeSpent }),
  });
};

/**
 * Track ViewContent event (when user views specific content)
 */
export const trackMetaViewContent = (contentName: string, contentType?: string) => {
  trackMetaEvent('ViewContent', {
    content_name: contentName,
    content_type: contentType || 'page',
  });
};
