# Analytics, Metrics, and Funnels Strategy

## 1. Overview and Objectives
As a Product Manager, the primary goal of the Regalos App landing page isn't just to look good—it's to validate the market, capture high-quality leads (beta testers), and understand user behavior. 

This document defines the key funnels, core metrics (KPIs), realistic goals, and the analytics events we must track to make data-driven decisions.

---

## 2. Core Funnels to Analyze

To understand where we are losing potential beta testers, we need to track three main funnels:

### Funnel A: The Primary Conversion Funnel (Landing to Beta Form)
This is the most critical funnel. It measures the effectiveness of our value proposition.
1. **Page View:** User lands on the website (Event: `page_view`).
2. **CTA Click:** User clicks the "Download Now" (Hero) or "Join Beta Testing" (CTA Section) button (Event: `button_click` with `button_id: "hero-download"` or `"cta-join-beta"`).
3. **Form View:** The Beta modal/form is rendered (Event: `beta_view`).
4. **Form Submit (Conversion):** User successfully completes the signup and data is sent (Event: `beta_signup`).

### Funnel B: Platform Interest Funnel (iOS vs. Android)
Understanding the hardware distribution of our audience is vital for prioritizing mobile development.
1. **Form View** (Event: `beta_view` or `waitlist_view`).
2. **Platform Selection:** User selects iOS or Android.
3. **Conversion:** Completed signup per platform (Event: `beta_signup` / `waitlist_signup` with `platform` parameter).
*Insight:* If 80% of signups are iOS, we know we must heavily prioritize the TestFlight release and iOS bug fixing.

### Funnel C: Localization Funnel (EN vs. ES vs. DE)
Since the landing page supports multiple languages, we must evaluate which market responds best.
1. **Page View by Locale:** Automatically detected or manually changed language.
2. **Conversion by Locale:** Signups completed in English, Spanish, or German.
*Insight:* Helps direct future marketing budget. If German performs poorly but Spanish is thriving, we double down on Spanish outreach.

---

## 3. Key Performance Indicators (KPIs) & Realistic Goals

As a PM, setting realistic, industry-standard benchmarks helps evaluate if an experiment succeeded or failed.

| Metric | Definition | Realistic Goal (Target) | Action if Missed |
| :--- | :--- | :--- | :--- |
| **Landing Page Conversion Rate** | Total Signups / Total Unique Visitors | **5% - 10%** *(High intent traffic)* | Improve Hero copy, adjust CTA placement, or check traffic quality. |
| **Form Completion Rate** | Total Signups / Total Form Opens | **> 70%** | The form is too long, broken, or intimidating. Simplify the fields. |
| **Bounce Rate** | % of users who leave without any interaction | **< 50%** | Improve page load speed, ensure mobile responsiveness, make Hero message clearer. |
| **Average Engagement Time** | Time spent actively reading the page | **> 45 seconds** | Add more visual appeal, break up text walls, improve localized copy. |
| **Waitlist Drop-off Rate** | Users who open the form but don't submit | **< 30%** | Ensure no technical errors (Firebase Analytics, CORS) are blocking submissions. |

---

## 4. Tracked Events (Analytics Implementation)

To measure the above funnels, the following custom events must be tracked (via Firebase Analytics / GA4):

- `page_view` / `session_start` / `first_visit` / `user_engagement`: Standard engagement events (automatically collected by GA4).
- `button_click`: Triggered when main buttons are clicked.
  - **Key parameters:** `button_id` (`"hero-download"`, `"hero-see-how"`, `"cta-join-beta"`, `"cta-join-waitlist"`).
- `beta_view`: Triggered when the user opens the Beta form.
- `beta_signup`: Triggered when the Beta form is submitted.
  - **Parameters to attach:** `platform` (`"ios"`, `"android"`)
- `beta_skip`: Triggered if the user clicks "Maybe later" on the Beta form.
- `waitlist_view`: Triggered when the Waitlist form is viewed.
- `waitlist_signup`: Triggered when the Waitlist form is submitted.
  - **Parameters to attach:** `platform` (`"ios"`, `"android"`)
- `waitlist_skip`: Triggered if the user clicks "Maybe later" on the Waitlist form.
- `section_view`: Triggered when the user scrolls and views an important section.

---

## 4.5 GA4 Configuration: Mark as "Key Events" (Conversions)
By default, Google Analytics registers all these interactions as standard events. For the dashboard to highlight them as major goals (conversions), you must manually mark them in the GA4 interface:
1. Go to your **Google Analytics (GA4)** dashboard.
2. In the left menu, navigate to **Admin** (gear icon at the bottom left).
3. Under the *Data display* section, click on **Events**.
4. In the list of events, find `beta_signup` and `waitlist_signup`.
5. Toggle the switch under the **"Mark as key event"** column to the ON (blue) position.

*Note: If `beta_signup` doesn't appear in the list yet, it means GA4 hasn't fully processed the first occurrence (can take up to 24h). You can force it by clicking "Create event" and defining `event_name` equals `beta_signup`, then marking it as a key event in the "Key events" tab.*

---

## 5. PM Strategy: Actionable Insights and Next Steps

Once we hit our first 100 visitors, we will run the following analysis:

1. **Traffic Quality vs. Conversion:** Are we getting 1,000 visitors but only 2 signups (0.2% CR)? If so, our traffic source (e.g., ad targeting or reddit post) doesn't match our product's value proposition.
2. **Form Friction:** If `waitlist_form_open` is high, but `waitlist_signup_complete` is low, users are hesitating. We might need to add microcopy clarifying that "It's free" or "We won't spam you."
3. **Post-Signup Behavior:** The real measure of a beta tester is if they *actually* download the app once invited. We must compare *Landing Page Signups* vs. *Actual TestFlight/Play Store Installs*. 

### Long-Term Retention Vision (Post-Launch)
Our current focus is **Acquisition** (getting emails). 
Once the app is in users' hands, our metrics will shift to **Activation** (first gift created) and **Retention** (using the app month-over-month).
