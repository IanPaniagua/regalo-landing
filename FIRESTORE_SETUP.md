# Firestore Setup - Fix Permission Error

## The Problem

You're getting: `FirebaseError: Missing or insufficient permissions`

This happens because Firestore security rules haven't been deployed yet, so the dashboard can't read data.

## Solution

### Option 1: Deploy Firestore Rules (Recommended)

1. **Install Firebase CLI** (if not already installed):
```bash
npm install -g firebase-tools
```

2. **Login to Firebase**:
```bash
firebase login
```

3. **Initialize Firebase** (if not already done):
```bash
firebase init firestore
```
- Select your Firebase project
- Accept default `firestore.rules` file (already created)
- Accept default `firestore.indexes.json`

4. **Deploy the rules**:
```bash
firebase deploy --only firestore:rules
```

### Option 2: Temporary Fix via Firebase Console

If you need a quick fix while testing:

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Select your project
3. Go to **Firestore Database** → **Rules**
4. Replace with these temporary rules:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /questionnaire_responses/{document=**} {
      allow create: if true;
      allow read: if true;  // ⚠️ Temporary - anyone can read
    }
    
    match /waitlist_signups/{document=**} {
      allow create: if true;
      allow read: if true;  // ⚠️ Temporary - anyone can read
    }
    
    match /analytics_events/{document=**} {
      allow create: if true;
      allow read: if false;
    }
  }
}
```

5. Click **Publish**

⚠️ **Warning:** This allows anyone to read your data. Only use for testing.

## Verify It Works

1. Go to `/dashboard` in your browser
2. Enter password: `regalo2024`
3. You should now see questionnaire responses and waitlist data

## Production Security (Later)

For production, you should:

1. **Add Firebase Authentication** to the dashboard
2. **Update Firestore rules** to require authentication:

```javascript
match /questionnaire_responses/{document=**} {
  allow create: if true;
  allow read: if request.auth != null;  // Only authenticated users
}
```

3. **Restrict dashboard access** to specific admin users

## Troubleshooting

### Still getting permission errors?

1. **Check Firebase config** in `.env.local`:
```env
NEXT_PUBLIC_FIREBASE_API_KEY=your_key
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
# ... etc
```

2. **Clear browser cache** and reload

3. **Check Firebase Console** → Firestore Database → Rules tab to confirm rules are deployed

4. **Test in Firebase Console**:
   - Go to Firestore Database → Data
   - Check if `questionnaire_responses` and `waitlist_signups` collections exist
   - Try to read a document manually

### Rules not deploying?

Make sure `firebase.json` exists with:

```json
{
  "firestore": {
    "rules": "firestore.rules",
    "indexes": "firestore.indexes.json"
  }
}
```

If it doesn't exist, run `firebase init firestore` again.
