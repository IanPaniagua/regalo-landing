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
  if (!getApps().length) {
    app = initializeApp(firebaseConfig);
    firestore = getFirestore(app);
    
    // Check cookie consent before initializing Analytics
    const cookieConsent = localStorage.getItem('regalo_cookie_consent');
    
    if (cookieConsent === 'accepted') {
      // Initialize Analytics only if user accepted cookies and it's supported
      isSupported().then((supported: boolean) => {
        if (supported) {
          analytics = getAnalytics(app);
        }
      }).catch((error) => {
        console.error('Error initializing Analytics:', error);
      });
    }
  } else {
    app = getApps()[0];
    firestore = getFirestore(app);
  }
}

export { app, analytics, firestore };
