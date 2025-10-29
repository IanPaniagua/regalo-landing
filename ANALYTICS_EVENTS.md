# Analytics KPIs and Events

## Overview
This document summarizes all GA4/Firebase Analytics events implemented in the Regalo landing and questionnaire, and the KPIs derived from them.

## Global Event Properties (automatically captured)
- Browser, OS, device.
- Language.
- Referrer.
- Screen resolution and viewport.
- Timestamp.

Optional custom context we add when relevant:
- session_id
- source
- step_id
- step_number
- page_name
- button_id
- location

---

# Events

## Landing Page
- **page_view**
  - When: On page load (manually called where needed).
  - Params: `page_name`
  - Example values: `home`, `waitlist`

- **section_view**
  - When: When a key section comes into view.
  - Params: `section_name`
  - Example values: `hero`, `features`, `cta`

- **button_click**
  - When: On any tracked button click.
  - Params: `button_id`, `location`
  - Example values:
    - `button_id`: `hero-cta-discover`, `hero-waitlist`, `cta-participate`
    - `location`: `hero`, `cta-section`

## Questionnaire
- **questionnaire_start**
  - When: Questionnaire page mounts.
  - Params: none

- **questionnaire_step**
  - When: Each step is shown.
  - Params: `step_id`, `step_number`

- **question_response**
  - When: A user answers a question.
  - Params: `question_id`, `response_type`
  - Example values:
    - `response_type`: `single-choice`, `multiple-choice`

- **questionnaire_complete**
  - When: Questionnaire submission is finalized.
  - Params: `time_spent_seconds`

- **questionnaire_exit**
  - When: User exits the questionnaire manually or drops off.
  - Params: `step_id`, `step_number`

## Waitlist
- **waitlist_view**
  - When: Waitlist form is displayed.
  - Params: `source`
  - Example values: `landing`, `questionnaire`

- **waitlist_signup**
  - When: Waitlist form is successfully submitted.
  - Params: `source`, `timestamp`

- **waitlist_skip**
  - When: User dismisses/declines the waitlist form.
  - Params: `source`

---

# Firestore Data (not Analytics events)
- Collection: `questionnaire_responses`
  - Contains: full responses + metadata (timeSpent, device info, etc.)
- Collection: `waitlist_signups`
  - Contains: `email`, `name`, `source`, `metadata`, `timestamp`

Note: Firestore is for detailed data and future analysis/exports; GA4 is for behavioral funnels and conversions.

---

# KPIs and How to Measure

## Landing Page
- **Landing → Questionnaire Conversion**
  - What: % of visitors who start the questionnaire.
  - GA4: `questionnaire_start` ÷ `page_view (home)`
  - Target: >20%

- **CTA Engagement (Hero, CTA section)**
  - What: % of visitors clicking key CTAs.
  - GA4: Count `button_click` grouped by `button_id`, `location`.

- **Section Engagement**
  - What: Sections viewed.
  - GA4: Count `section_view` by `section_name`.

## Questionnaire
- **Completion Rate**
  - What: % of started that complete.
  - GA4: `questionnaire_complete` ÷ `questionnaire_start`
  - Target: >50%

- **Drop-off by Step**
  - What: Where users exit.
  - GA4: Count `questionnaire_exit` grouped by `step_id` and `step_number`.

- **Time to Complete**
  - What: Median/avg time spent.
  - GA4: Distribution/avg of `time_spent_seconds` on `questionnaire_complete`.

## Waitlist
- **Questionnaire → Waitlist Conversion**
  - What: % of completes that sign up to waitlist.
  - GA4: `waitlist_signup (source=questionnaire)` ÷ `questionnaire_complete`
  - Target: >60%

- **Landing → Waitlist Conversion**
  - What: % of landing visitors who sign up directly.
  - GA4: `waitlist_signup (source=landing)` ÷ `page_view (home)`
  - Target: >5–10%

- **Total (End-to-End) Conversion**
  - What: % of landing visitors who end in waitlist (either path).
  - GA4: `waitlist_signup (all sources)` ÷ `page_view (home)`

---

# Recommended GA4 Explorations

- Funnel Exploration A (Landing-first):
  - Steps: `page_view (home)` → `button_click (hero-cta-discover)` → `questionnaire_start` → `questionnaire_complete` → `waitlist_signup`
- Funnel Exploration B (Direct waitlist):
  - Steps: `page_view (home)` → `button_click (hero-waitlist)` → `waitlist_view (source=landing)` → `waitlist_signup (source=landing)`
- Drop-off Analysis:
  - Breakdown: `questionnaire_exit` by `step_id`, `step_number`
- Attribution by Source:
  - `waitlist_signup` grouped by `source` and GA4 traffic source/medium

---

# Notes and Caveats

- Real-time Analytics:
  - Use Firebase Console → Analytics → Events (Real-time)
  - Or GA4 → Reports → Real-time
  - Historical reports populate in 24–48 hours.

- Ad Blockers:
  - GA4 may be blocked by browser extensions or privacy settings.
  - Firestore writes are not affected by ad blockers.

- Security:
  - Firebase config keys are public by design for web apps.
  - Protection depends on Firestore security rules (we allow only `create` for public collections; no public reads).
