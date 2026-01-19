# Email System Setup Guide

## Overview
The landing page now sends personalized welcome emails to beta testers based on:
- **Platform**: iOS or Android
- **Language**: English, Spanish, or German

This results in **6 different email templates** (2 platforms × 3 languages).

## Email Templates Created

### iOS Templates
1. **English** - TestFlight instructions
2. **Spanish** - Instrucciones de TestFlight
3. **German** - TestFlight-Anweisungen

### Android Templates
1. **English** - Google Play Beta instructions
2. **Spanish** - Instrucciones de Google Play Beta
3. **German** - Google Play Beta-Anweisungen

## Implementation Details

### Files Created/Modified

1. **`src/lib/emailTemplates.ts`**
   - Contains all 6 email templates (HTML + plain text)
   - `getWelcomeEmail()` function to retrieve the correct template
   - Personalizes with user's name

2. **`src/app/api/send-welcome-email/route.ts`**
   - API endpoint to send emails
   - Validates platform and language
   - Ready for Resend integration

3. **`src/components/ui/WaitlistForm.tsx`**
   - Now captures user's current language
   - Passes language to submission handler

4. **`src/lib/firestoreService.ts`**
   - Saves language preference to Firestore
   - Stores: email, name, platform, language

5. **`src/app/waitlist/page.tsx`**
   - Calls email API after successful signup
   - Non-blocking (doesn't fail if email fails)

## Setup Instructions

### 1. Install Resend

```bash
npm install resend
```

### 2. Get Resend API Key

1. Sign up at [resend.com](https://resend.com)
2. Create a new API key
3. Verify your domain (or use Resend's test domain for development)

### 3. Add Environment Variables

Create/update `.env.local`:

```env
RESEND_API_KEY=re_your_api_key_here
ADMIN_EMAIL=ian@regaloapp.com
```

- `RESEND_API_KEY`: Your Resend API key for sending emails
- `ADMIN_EMAIL`: Email address to receive notifications when someone signs up for beta testing

### 4. Update API Route

Uncomment the Resend code in `src/app/api/send-welcome-email/route.ts`:

```typescript
import { Resend } from 'resend';

// Inside the POST function:
const resend = new Resend(process.env.RESEND_API_KEY);
await resend.emails.send({
  from: 'RegaloApp <hello@regaloapp.com>', // Update with your verified domain
  to: email,
  subject: emailTemplate.subject,
  html: emailTemplate.html,
  text: emailTemplate.text,
});
```

### 5. Configure Sender Email

Update the `from` field with your verified domain:
- Development: `onboarding@resend.dev` (Resend's test domain)
- Production: `hello@regaloapp.com` (your verified domain)

## Email System Features

### Two Emails Sent Per Signup

When a user signs up for beta testing, **two emails are sent**:

1. **Welcome Email to User**
   - Personalized with their name
   - Platform-specific instructions (iOS/Android)
   - In their selected language (EN/ES/DE)
   
2. **Notification Email to Admin**
   - Subject: "🎯 New Beta Tester: [Name]"
   - Contains: Name, Email, Platform, Language, Timestamp
   - Sent to email specified in `ADMIN_EMAIL` env variable
   - Allows you to track signups in real-time

## User Welcome Email Content

Each welcome email includes:

### Greeting
- Personalized with user's name
- "Hi {name}!" / "¡Hola {name}!" / "Hallo {name}!"

### Thank You Message
- Thanks for joining beta testing
- Platform-specific (iOS/Android)

### What Happens Next
- **iOS**: TestFlight instructions within 24-48 hours
- **Android**: Google Play Beta link within 24-48 hours
- Steps to download and start using the app

### Feedback Request
- Encourages sharing thoughts
- Lists what we want to hear about:
  - Features they love
  - Things to improve
  - Bugs encountered
  - New ideas

### Call to Action
- Reply to email with feedback
- Direct line to development team

## Data Flow

```
User fills form → Selects platform → Uses website in language
                                    ↓
                    Form captures: email, name, platform, language
                                    ↓
                    Saves to Firestore with all data
                                    ↓
                    Calls /api/send-welcome-email
                                    ↓
                    Gets correct template based on platform + language
                                    ↓
                    Sends personalized email via Resend
                                    ↓
                    User receives email in their language
```

## Testing

### Test All 6 Combinations

1. **iOS + English**
   - Select iOS platform
   - Use website in English
   - Check for TestFlight mention

2. **iOS + Spanish**
   - Select iOS platform
   - Use website in Spanish
   - Check for "TestFlight" mention

3. **iOS + German**
   - Select iOS platform
   - Use website in German
   - Check for "TestFlight" mention

4. **Android + English**
   - Select Android platform
   - Use website in English
   - Check for "Google Play Beta" mention

5. **Android + Spanish**
   - Select Android platform
   - Use website in Spanish
   - Check for "Google Play Beta" mention

6. **Android + German**
   - Select Android platform
   - Use website in German
   - Check for "Google Play Beta" mention

### Verify Email Content

- ✅ Correct name personalization
- ✅ Correct platform instructions (TestFlight vs Google Play)
- ✅ Correct language throughout
- ✅ All links working
- ✅ HTML renders correctly
- ✅ Plain text fallback works

## Monitoring

Check Firestore for signup data:
```
waitlist_signups/
  - email
  - name
  - platform (ios/android)
  - language (en/es/de)
  - timestamp
  - metadata
```

Check Resend dashboard for:
- Email delivery status
- Open rates
- Click rates
- Bounce rates

## Troubleshooting

### Email not sending
1. Check Resend API key is set
2. Verify domain is verified in Resend
3. Check API route logs for errors
4. Ensure platform and language are valid

### Wrong template sent
1. Verify language detection in form
2. Check platform selection
3. Review `getWelcomeEmail()` logic

### Personalization not working
1. Ensure name is captured correctly
2. Check template string interpolation
3. Verify name is passed to API

## Future Enhancements

- [ ] Add email open tracking
- [ ] Add click tracking for TestFlight/Play Store links
- [ ] Send follow-up emails after 1 week
- [ ] Add unsubscribe functionality
- [ ] Create email templates for other events
- [ ] Add email preview in admin dashboard
