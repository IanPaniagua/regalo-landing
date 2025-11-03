#!/usr/bin/env node

/**
 * Quick script to verify Firebase configuration
 * Run with: node scripts/check-firebase.js
 */

require('dotenv').config({ path: '.env.local' });

const requiredEnvVars = [
  'NEXT_PUBLIC_FIREBASE_API_KEY',
  'NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN',
  'NEXT_PUBLIC_FIREBASE_PROJECT_ID',
  'NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET',
  'NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID',
  'NEXT_PUBLIC_FIREBASE_APP_ID',
  'NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID',
];

console.log('🔍 Checking Firebase configuration...\n');

let allPresent = true;

requiredEnvVars.forEach((varName) => {
  const value = process.env[varName];
  if (value) {
    console.log(`✅ ${varName}: ${value.substring(0, 20)}...`);
  } else {
    console.log(`❌ ${varName}: MISSING`);
    allPresent = false;
  }
});

console.log('\n');

if (allPresent) {
  console.log('✅ All Firebase environment variables are configured!');
  console.log('\n📋 Next steps:');
  console.log('1. Deploy Firestore rules: firebase deploy --only firestore:rules');
  console.log('2. Access dashboard at: /dashboard');
  console.log('3. Default password: regalo2024');
} else {
  console.log('❌ Some Firebase environment variables are missing.');
  console.log('Please check your .env.local file.');
}
