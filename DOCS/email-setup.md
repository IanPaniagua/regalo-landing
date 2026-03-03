# Email System Setup Guide

## Overview
The landing page now automates beta tester signups using **n8n**. When a user signs up for the waitlist, their details are sent to an n8n webhook which handles:
- **Logging** the signup in Google Sheets.
- **Emailing** a personalized welcome/thank you email based on their platform (iOS/Android) and language (English, Spanish, or German).
- **Notifying** the admin about the new beta tester.

*(Note: Previously, we used Resend directly in the Next.js API, but this has been replaced entirely by the n8n workflow to allow for easier management and multi-step sequences.)*

## Implementation Details

### Files Modified

1. **`src/app/api/send-welcome-email/route.ts`**
   - API endpoint that receives the form submission.
   - Validates the required fields (email, name, platform, language).
   - Forwards the data as a JSON payload to the n8n webhook.

2. **`src/components/ui/WaitlistForm.tsx`**
   - Captures user's selected platform and current language.
   - Passes the data to the submission handler.

3. **`src/lib/firestoreService.ts`**
   - Saves the raw signup data to Firebase Firestore as a backup/database.

## Setup Instructions

### 1. Configure Environment Variables

Create or update your `.env.local` file with the n8n webhook URL:

```env
N8N_WEBHOOK_URL_BETA_SIGNUP=https://your-n8n-instance.com/webhook/beta-signup
```

- `N8N_WEBHOOK_URL_BETA_SIGNUP`: The URL of the Production Webhook node in your n8n workflow.

### 2. Verify Data Flow

```
User fills form → Selects platform → Uses website in language
                                ↓
                Form captures: email, name, platform, language
                                ↓
                Saves to Firestore (as backup/record)
                                ↓
                Calls local /api/send-welcome-email
                                ↓
                Forwards data to n8n Webhook URL
                                ↓
                n8n processes workflow (Google Sheets, Emails)
```

## n8n Workflow Architecture

The n8n workflow assumes the responsibility of the email templates. We maintain different templates combinations (2 platforms × 3 languages) entirely within the n8n nodes. 

### Triggered Actions in n8n

1. **Welcome Email to User**
   - Personalized with their name.
   - Platform-specific details for TestFlight (iOS) or Google Play Beta (Android).
   - Delivered in the exact language the user browsed the website in (EN/ES/DE).
   
2. **Notification Email to Admin**
   - Sends a summary email to the internal team indicating a new beta signup.

3. **Google Sheets Logging**
   - Adds a new row with the user's details for easy tracking.
   - Provides a "Status" column where you can mark them to trigger a secondary email (Download Instructions) later.
   
## Troubleshooting

### Webhook not triggering
1. Check that `N8N_WEBHOOK_URL_BETA_SIGNUP` is set correctly in `.env.local`.
2. Ensure you are using the Production URL in n8n, not the Test URL (unless you are actively testing the node).
3. Check the API route logs in your Next.js console for fetch errors.

### Emails not sending from n8n
1. Verify your email node credentials within n8n.
2. Check the Executions tab in your n8n dashboard for any failed workflow runs.
