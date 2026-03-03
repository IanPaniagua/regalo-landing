# Regalos App – Lean Marketing Strategy (Product Validation Phase)

> **Goal:** Drive traffic to the landing page, build a credible reputation, and recruit real beta testers — with near-zero budget and heavy use of n8n automation.

---

## 0. Guiding Principles

- **No budget, high-effort.** Every tactic is free or uses tools already in the stack (n8n, Firebase, Google Sheets).
- **Validate before building.** Success = enough signups and feedback to know if the core problem (forget birthdays + group gift chaos) resonates with real people.
- **Automate the boring parts.** Content research, scheduling, and email follow-up should run on autopilot via n8n so you can focus on community and code.

---

## 1. Target Audiences (Who to Reach)

| Segment | Where to Find Them | Rationale |
| :--- | :--- | :--- |
| **"Thoughtful Gifters"** (25–40, social) | Reddit (r/gifts, r/Frugal), Instagram, TikTok | Core users who already feel the pain of forgetting birthdays |
| **Productivity/Apps enthusiasts** | Product Hunt, r/androidapps, r/iosapps | Early adopters, happy to give feedback and star/upvote |
| **Friend group organizers** | Facebook Groups, WhatsApp communities | The person who always sets up the group gift — perfect power user |
| **Spanish-speaking tech community** | Twitter/X (Spain/LatAm), LinkedIn Spain | Your native market; lower competition, high cultural fit |

---

## 2. The Marketing Plan (6 Channels)

### Channel 1 – Reddit (Highest ROI, Zero Cost)

**Goal:** Authentic visibility and 1st wave of beta testers.

**Tactics:**
1. Post a genuine "I built this to solve my own problem" story in:
   - `r/SideProject` — *"I got tired of forgetting birthdays and Venmo chaos, so I built Regalos App"*
   - `r/gifts` — Ask for advice AND mention you're building a tool for this pain
   - `r/androidapps` / `r/iosapps` — Share beta for feedback
2. **Do NOT start with self-promotion.** Engage in 3–4 threads first. Comment genuinely.
3. Link to the landing page in the post (not in comments — Reddit moderation).

**Metrics to watch:** Post upvotes, link clicks (GA4 `page_view` spikes), beta signups within 48h.

---

### Channel 2 – Product Hunt Launch

**Goal:** Credibility, tech early adopters, and international visibility.

**Timing:** Launch when you have at least 20 beta testers providing feedback (more credible).

**Tactics:**
1. Prepare a short demo GIF/video of the app's core loop (birthday reminder → group gift → payment split).
2. Get 5–10 friends/colleagues to upvote on launch day (the first 2h are critical).
3. Reply to every single comment on launch day.
4. Use the tagline: *"Never forget a birthday — or stress about group gifts — again."*

**Expected Result:** 100–300 visits on launch day, 10–30 beta signups, instant social proof.

---

### Channel 3 – Twitter/X & LinkedIn (Organic Content)

**Goal:** Build in public, grow an audience, establish credibility.

**Content pillars (rotate weekly):**
- 🔨 **"Build in Public"** — Share progress, screenshots, GA4 metrics, learnings.
- 💡 **"Problem post"** — A relatable story about a birthday gift gone wrong or painful group logistics.
- 📊 **"Product insight"** — Share something you learned from beta tester feedback.
- 🎉 **"Milestone"** — Celebrate sign-up numbers, first real user story.

**Posting cadence:** 3–4 posts/week on Twitter/X, 1–2 on LinkedIn.

> Key: **Consistency over virality.** Even 50 followers who care are more valuable than 5000 passive ones.

---

### Channel 4 – SEO Content (Blog / Landing Page Copy)

**Goal:** Get organic search traffic from people actively searching for gift solutions.

**Topics to target:**
- *"how to organize a group birthday gift"*
- *"app to remember birthdays"*
- *"birthday reminder app iOS Android"*
- *"how to collect money for group gift"*

**Tactics:**
1. Add a simple blog section to the landing page (Next.js Static pages work perfectly).
2. Write 1 article/week targeting the above keywords. Keep them short: 400–600 words.
3. Optimize landing page meta tags for the #1 keyphrase: *"birthday reminder group gift app"*.

**Timeline to ROI:** 2–3 months for Google to index and rank. Plant the seeds now.

---

### Channel 5 – WhatsApp / Telegram / Discord (Direct Community Seeding)

**Goal:** Reach friend-group organizers directly; highest conversion intent.

**Tactics:**
1. Join relevant Telegram groups (tech communities, Spanish-speaking startup groups) and share the app when it's contextually relevant.
2. Send a personal message to 10–20 people you know who fit the "organizer" persona: *"Hey, I'm working on something that might solve your birthday/gift chaos. Can you try it and give me 5 minutes of feedback?"*
3. Use a short referral message template (automatable via n8n — see below).

---

### Channel 6 – TikTok / Instagram Reels (Viral Potential)

**Goal:** Awareness at scale with very low effort per video.

**Content ideas:**
- *"POV: You forgot your best friend's birthday... again" → app demo*
- *"How we organized a €300 group gift with 8 people and nobody lost track of who paid"*
- *"Building an app to solve my own problem (week 1 update)"*

**Effort:** 1 short video/week, filmed on phone, no production needed. Authenticity > polish.

---

## 3. Automation with n8n

These are the workflows you can build to put distribution on autopilot.

### Automation A – Content Research & Idea Generator (Weekly)
**Trigger:** Schedule (every Monday 9:00 AM)
**Workflow:**
1. `HTTP Request` → Call a free Reddit API to fetch top posts from `r/gifts`, `r/SideProject` from the past week.
2. `HTTP Request` → Call OpenAI API (or Gemini) with a prompt: *"Based on these trending posts, generate 3 Twitter/X post ideas and 1 Reddit post idea for Regalos App that addresses [USP]."*
3. `Google Sheets` → Save generated ideas to a content calendar spreadsheet.
4. `Email / Telegram Bot` → Notify you with the weekly ideas.

**Time saved:** ~2h/week of manual research.

---

### Automation B – Beta Signup Welcome Sequence (Already partially built)
**Trigger:** n8n webhook receives new `beta_signup` payload from the landing page.
**Current flow:** Logs to Google Sheets + sends welcome email.
**Enhance it with:**
1. **Day 0:** Welcome email (existing) — include a short survey link (Typeform/Google Form) with 3 questions: *Why did you sign up? What's your biggest pain?*
2. **Day 3:** Follow-up email — *"How's your first week? Any quirks or things you love?"*
3. **Day 7:** Ask for referral — *"Know anyone who'd love Regalos App? Share this link."*

**n8n node:** `Wait` node + 3 `Send Email` nodes in sequence.

---

### Automation C – Social Listening & Engagement Alerts
**Trigger:** Schedule (every 6h)
**Workflow:**
1. `HTTP Request` → Monitor Reddit for new posts containing keywords: *"birthday reminder app"*, *"group gift app"*, *"forgot birthday"*.
2. `IF` → If a relevant post is found, send a Telegram/Slack alert with the post URL.
3. You manually reply within the hour (fast responses win on Reddit).

**Value:** Never miss a high-intent conversation where you can add value and mention the app organically.

---

### Automation D – Weekly Metrics Report
**Trigger:** Schedule (every Monday 8:00 AM)
**Workflow:**
1. `Google Sheets` → Read new rows added since last Monday (new signups).
2. `HTTP Request` → Pull GA4 data using the Reporting API (page_view, beta_signup counts).
3. `OpenAI` → Summarize the week's metrics + generate one actionable insight.
4. `Telegram Bot` / `Email` → Send the weekly report to yourself.

**Value:** Stay informed without manually checking dashboards every day.

---

## 4. Execution Timeline (8-Week Sprint)

| Week | Focus | Key Action |
| :--- | :--- | :--- |
| 1 | Setup | Configure n8n Automations A, C, D. Set up Twitter/X to post Build in Public |
| 2 | Seed | Post on Reddit r/SideProject + r/androidapps. Reach out to 10 personal contacts |
| 3 | Content | First TikTok/Reel + first SEO blog post. Engage Reddit comments |
| 4 | Review | Review beta feedback. Share a "Week 1 learnings" post on Twitter/X + LinkedIn |
| 5 | Scale | Automate email sequence (Automation B Day 3 + Day 7). Submit to directories/newsletters |
| 6 | Product Hunt | Prep the PH launch (assets, supporters list, tagline) |
| 7 | Launch | Product Hunt Launch Day 🚀 |
| 8 | Iterate | Analyze metrics, compile first beta feedback report, decide next feature |

---

## 5. Success Metrics for Validation

| Metric | Target (8 weeks) | Status |
| :--- | :--- | :--- |
| Landing page visits | 500+ unique visitors | ⬜ |
| Beta signups | 50+ testers | ⬜ |
| Form Completion Rate | > 70% | ⬜ |
| Avg. Engagement Time | > 45 seconds | ⬜ |
| Qualitative feedback | 10+ survey responses | ⬜ |
| Product Hunt ranking | Top 10 of the day | ⬜ |

**Rule:** If after 8 weeks you have < 20 signups, revisit the USP or the landing page copy. If you have 20–50 signups but low engagement in the app, revisit onboarding. If you have 50+ happy testers, you've validated the market — accelerate.
