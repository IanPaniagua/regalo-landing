# 🔧 Fix Dashboard Permission Error

## Quick Fix (2 minutes)

The dashboard can't read Firestore data because security rules aren't deployed yet.

### Steps:

1. **Deploy Firestore Rules**:
```bash
firebase deploy --only firestore:rules
```

If you don't have Firebase CLI installed:
```bash
npm install -g firebase-tools
firebase login
firebase deploy --only firestore:rules
```

2. **Refresh the dashboard** at `/dashboard`

3. **Done!** ✅

---

## Alternative: Quick Fix via Console (No CLI needed)

If you prefer not to use the CLI:

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Select your project
3. **Firestore Database** → **Rules** tab
4. Copy-paste these rules:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /questionnaire_responses/{document=**} {
      allow create: if true;
      allow read: if true;
    }
    
    match /waitlist_signups/{document=**} {
      allow create: if true;
      allow read: if true;
    }
    
    match /analytics_events/{document=**} {
      allow create: if true;
      allow read: if false;
    }
  }
}
```

5. Click **Publish**
6. Refresh dashboard

---

## Dashboard Access

- **URL**: `https://your-domain.com/dashboard` (or `http://localhost:3000/dashboard` locally)
- **Password**: `regalo2024` (default)
- **Change password**: Add `NEXT_PUBLIC_DASHBOARD_PASSWORD=your_password` to `.env.local`

---

## What the Dashboard Shows

### Questionnaires Tab
- All completed questionnaire responses
- Click any response to see full details
- Shows: time spent, progress, all answers in English

### Waitlist Tab
- All waitlist signups
- Name, email, source (landing/questionnaire), date

---

## Files Created

✅ Dashboard is now in **English**:
- `/src/app/dashboard/page.tsx` - Main dashboard
- `/src/components/DashboardAuth.tsx` - Password protection
- `firestore.rules` - Security rules
- `firebase.json` - Firebase config
- `firestore.indexes.json` - Firestore indexes

---

## Troubleshooting

### Still getting errors?

1. **Verify Firebase config**:
```bash
node scripts/check-firebase.js
```

2. **Check if collections exist**:
   - Go to Firebase Console → Firestore Database
   - Look for `questionnaire_responses` and `waitlist_signups` collections
   - If empty, complete a questionnaire first to create data

3. **Clear browser cache** and try again

4. **Check browser console** for specific error messages

---

## Security Note

⚠️ Current rules allow public read access for testing. For production:

1. Implement Firebase Authentication
2. Update rules to require auth:
```javascript
allow read: if request.auth != null;
```
3. Add admin user management
