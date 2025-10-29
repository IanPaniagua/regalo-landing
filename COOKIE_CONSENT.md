# Cookie Consent Implementation

## Overview
Regalo now includes a GDPR-compliant cookie consent system that respects user privacy and complies with international data protection regulations.

## What Was Implemented

### 1. Cookie Consent Banner
- **Component:** `src/components/ui/CookieBanner.tsx`
- **Location:** Fixed at bottom of screen on first visit
- **Options:** Accept or Decline
- **Persistence:** Choice saved in localStorage (`regalo_cookie_consent`)
- **Behavior:**
  - Shows only on first visit
  - Hides after user makes a choice
  - Reloads page after acceptance to initialize analytics

### 2. Conditional Analytics Initialization
- **File:** `src/lib/firebase.ts`
- **Logic:**
  - Analytics only initializes if user accepts cookies
  - If declined: Analytics remains disabled
  - If no choice yet: Analytics waits for consent
- **Console Messages:**
  - `✅ Firebase Analytics initialized` - User accepted
  - `🍪 Analytics disabled - User declined cookies` - User declined
  - `🍪 Analytics pending - Waiting for cookie consent` - No choice yet

### 3. Updated Privacy Policy
- **File:** `src/app/privacy-policy/page.tsx`
- **New Section:** "Cookies and Similar Technologies"
- **Content:**
  - Types of cookies (Essential vs Analytics)
  - What data is collected
  - How to manage cookie preferences
  - Links to opt-out tools

### 4. Footer with Privacy Link
- **File:** `src/components/sections/Footer.tsx`
- **Added:**
  - Link to Privacy Policy
  - Copyright notice: "© 2025 Ian Manuel Paniagua. All rights reserved."

## Cookie Types

### Essential Cookies (Always Active)
These cannot be disabled:
- `regalo_cookie_consent` - Stores user's cookie preference
- Session management cookies
- Security cookies

### Analytics Cookies (Requires Consent)
Only active if user accepts:
- Google Analytics cookies
- Firebase Analytics cookies

## User Flow

### First Visit
1. User lands on website
2. Cookie banner appears at bottom
3. User sees two options: "Accept" or "Decline"
4. User makes choice

### If User Accepts
1. Choice saved: `localStorage.setItem('regalo_cookie_consent', 'accepted')`
2. Page reloads
3. Analytics initializes
4. Events start tracking

### If User Declines
1. Choice saved: `localStorage.setItem('regalo_cookie_consent', 'declined')`
2. Banner disappears
3. Analytics never initializes
4. No tracking events sent
5. Firestore still works (for questionnaire/waitlist)

## Data Collection Based on Consent

### Always Collected (No Consent Needed)
- Questionnaire responses (when user submits)
- Waitlist signups (when user joins)
- Essential functionality data

### Only with Consent
- Page views
- Button clicks
- Navigation patterns
- Time on page
- Device/browser info
- Geographic location (city level)
- Referral sources

## Compliance

### GDPR (EU)
- ✅ Explicit consent required before analytics
- ✅ Clear information about data collection
- ✅ Easy opt-out mechanism
- ✅ Privacy policy accessible
- ✅ User rights documented

### CCPA (California)
- ✅ Disclosure of data collection
- ✅ Opt-out option available
- ✅ Privacy policy with contact info

### ePrivacy Directive (Cookie Law)
- ✅ Consent before non-essential cookies
- ✅ Clear information about cookie purposes
- ✅ Option to refuse cookies

## Testing

### Test Cookie Banner
1. Open website in incognito/private mode
2. Banner should appear at bottom
3. Click "Decline"
4. Banner disappears
5. Open console: Should see "🍪 Analytics disabled"
6. Navigate site: No analytics events

### Test Analytics Acceptance
1. Clear localStorage or use new incognito window
2. Open website
3. Click "Accept"
4. Page reloads
5. Open console: Should see "✅ Firebase Analytics initialized"
6. Navigate site: Should see "📊 Tracking event:" messages

### Test Persistence
1. Accept or decline cookies
2. Close browser
3. Reopen website
4. Banner should NOT appear (choice remembered)

## Managing Consent

### User Wants to Change Mind
Currently, users can:
1. Clear browser cookies/localStorage
2. Use browser settings to delete site data
3. Visit Privacy Policy for opt-out tools

### Future Enhancement (Optional)
Add a "Cookie Settings" link in footer to allow users to change their choice without clearing all data.

## Technical Details

### localStorage Keys
- `regalo_cookie_consent` - Values: `'accepted'`, `'declined'`, or `null`

### Analytics Initialization Check
```typescript
const cookieConsent = localStorage.getItem('regalo_cookie_consent');

if (cookieConsent === 'accepted') {
  // Initialize analytics
} else if (cookieConsent === 'declined') {
  // Don't initialize
} else {
  // Wait for consent
}
```

### Firestore (Always Works)
Firestore writes (questionnaire, waitlist) work regardless of cookie consent because:
- They're essential functionality
- User explicitly submits data
- No tracking/profiling involved

## Important Notes

1. **Analytics vs Firestore:**
   - Analytics requires consent (tracking behavior)
   - Firestore doesn't (user-initiated submissions)

2. **First-Party Cookies:**
   - All cookies are first-party (from your domain)
   - No third-party tracking cookies

3. **Reload After Accept:**
   - Page reloads to ensure analytics initializes properly
   - Alternative: Could initialize without reload (more complex)

4. **No Consent = No Analytics:**
   - If user never interacts with banner, analytics won't start
   - This is intentional and compliant

## Deployment Checklist

- [ ] Push code to Git
- [ ] Deploy to Vercel
- [ ] Test cookie banner in production
- [ ] Test analytics with acceptance
- [ ] Test analytics with decline
- [ ] Verify Privacy Policy is accessible
- [ ] Check footer links work
- [ ] Test on mobile devices
- [ ] Verify GDPR compliance

## Future Enhancements (Optional)

1. **Cookie Settings Page**
   - Allow users to change preferences
   - Toggle individual cookie categories

2. **More Granular Consent**
   - Separate consent for different analytics tools
   - Marketing cookies (if added later)

3. **Consent Banner Customization**
   - A/B test different messages
   - Multi-language support

4. **Analytics Dashboard**
   - Show consent rate
   - Track decline reasons (survey)

## Resources

- [GDPR Official Text](https://gdpr-info.eu/)
- [Google Analytics & GDPR](https://support.google.com/analytics/answer/9019185)
- [Firebase Analytics Privacy](https://firebase.google.com/support/privacy)
- [Cookie Consent Best Practices](https://gdpr.eu/cookies/)
