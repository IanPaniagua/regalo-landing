# Automation A+ – Weekly Content Generator with PiAPI

## Proposal Summary

This document describes the detailed plan for the enhanced **Automation A** n8n workflow. Beyond just generating content ideas, the workflow will produce a **ready-to-post reel** (2 AI-generated images + a caption) using PiAPI's image and video generation APIs, every week, fully automatically.

---

## Pipeline Overview

```
[Schedule Trigger: Monday 9:00 AM]
           ↓
[1. Fetch Reddit Trending Posts]
           ↓
[2. GPT/Gemini: Analyze + Generate Content Brief]
   - Hook copy (for caption/text overlay)
   - CTA copy
   - 2 image prompts (visual descriptions)
           ↓
[3. PiAPI: Generate Image 1 (Flux txt2img)]
           ↓
[4. PiAPI: Generate Image 2 (Flux txt2img)]
           ↓
[5. Wait for both images to be ready (poll GET endpoint)]
           ↓
[6. PiAPI: Create short video/reel from Image 1 → Image 2 (SkyReels img2video)]
           ↓
[7. Wait for video to be ready (poll GET endpoint)]
           ↓
[8. Save All Assets to Google Drive]
   - image_1.jpg, image_2.jpg, reel.mp4, caption.txt
           ↓
[9. Notify via Telegram with preview + caption]
```

---

## Step-by-Step Node Breakdown

### Node 1 – Schedule Trigger
- **Type:** `n8n-nodes-base.scheduleTrigger`
- **Config:** Every Monday at 09:00
- **Output:** Triggers the workflow start

---

### Node 2 – Fetch Reddit Trending (HTTP Request)
- **Type:** `n8n-nodes-base.httpRequest`
- **Method:** GET
- **URL:** `https://www.reddit.com/r/gifts/top.json?limit=5&t=week`
- **Headers:** `User-Agent: n8n-regalos-bot/1.0`
- **Output:** JSON list of top post titles from the past week

---

### Node 3 – Content Brief Generator (OpenAI / Gemini)
- **Type:** `n8n-nodes-base.openAi` (or HTTP Request to Gemini)
- **Prompt (System):**
  ```
  You are a social media content strategist for Regalos App — a mobile app that reminds you of birthdays and helps coordinate group gifts. The app's USP: "Never forget a birthday or stress about group gift logistics again."

  Based on the trending Reddit posts provided, generate a content brief for a social media Reel with 2 slides (max):
  
  Return a JSON object with these exact keys:
  {
    "hook": "short punchy first line (max 8 words, problem-focused)",
    "cta": "call to action text (max 10 words)",
    "caption": "full Instagram/TikTok caption with hook + context + CTA + 5 hashtags",
    "image_prompt_1": "detailed visual description for slide 1 (show the PROBLEM — stress, chaos, forgetting)",
    "image_prompt_2": "detailed visual description for slide 2 (show the SOLUTION — Regalos App, calm, organized, celebration)"
  }

  Style: warm, vibrant, relatable. Not corporate. Aspect ratio: 9:16 (vertical, phone screen). Avoid text in the image prompts — text will be overlaid separately.
  ```
- **User Message:** `{{$json.data.children[0].data.title}} {{$json.data.children[1].data.title}} ...` (mapped from Node 2 output)
- **Output:** Parsed JSON object with `hook`, `cta`, `caption`, `image_prompt_1`, `image_prompt_2`

---

### Node 4 & 5 – Generate Image 1 & 2 (PiAPI Flux — Parallel)
- **Type:** `n8n-nodes-base.httpRequest`
- **Method:** POST
- **URL:** `https://api.piapi.ai/api/v1/task`
- **Headers:**
  - `Authorization: Bearer {{$env.PIAPI_KEY}}`
  - `Content-Type: application/json`
- **Body (Image 1):**
```json
{
  "model": "flux1-schnell",
  "task_type": "txt2img",
  "input": {
    "prompt": "{{image_prompt_1 from Node 3}}",
    "width": 576,
    "height": 1024,
    "steps": 20
  }
}
```
- **Body (Image 2):** Same structure, using `image_prompt_2`
- **Output:** `task_id` for each image

---

### Node 6 & 7 – Poll Image Status (Wait + HTTP GET)
- **Type:** `n8n-nodes-base.wait` (5 seconds) + `n8n-nodes-base.httpRequest`
- **Poll URL:** `GET https://api.piapi.ai/api/v1/task/{{task_id}}`
- **Loop condition:** If `status != "completed"`, wait and retry (up to 5 attempts)
- **Output:** `image_url_1`, `image_url_2` (direct download URLs)

---

### Node 8 – Download Images (HTTP Request)
- **Type:** `n8n-nodes-base.httpRequest`
- **Method:** GET each image URL as binary
- **Output:** Binary image data for both images

---

### Node 9 – Create Reel / Slideshow Video (PiAPI SkyReels)
- **Type:** `n8n-nodes-base.httpRequest`
- **Method:** POST
- **URL:** `https://api.piapi.ai/api/v1/task`
- **Body:**
```json
{
  "model": "Qubico/skyreels",
  "task_type": "img2video",
  "input": {
    "image_url": "{{image_url_1}}",
    "prompt": "{{hook from Node 3}} — smooth transition, mobile reel style, vibrant colors",
    "duration": 5,
    "fps": 24,
    "aspect_ratio": "9:16"
  }
}
```
> Note: SkyReels animates from 1 image. For a 2-slide effect, we can either: (a) use img2video on Image 1 only (5s clip), or (b) if n8n supports it, run two parallel video tasks and use a `Merge` node — but option (a) is simplest and most reliable.
- **Output:** video `task_id`

---

### Node 10 – Poll Video Status
- Same polling pattern as Nodes 6 & 7
- **Output:** `video_url` (direct MP4 download URL)

---

### Node 11 – Save to Google Drive
- **Type:** `n8n-nodes-base.googleDrive`
- **Folder:** `/RegalosApp/Content/{{date}}/`
- **Files uploaded:**
  - `slide_1.jpg`
  - `slide_2.jpg`
  - `reel.mp4`
  - `caption.txt` (content from `caption` field of Node 3)

---

### Node 12 – Telegram Notification
- **Type:** `n8n-nodes-base.telegram`
- **Message:**
  ```
  🎬 *New Reel Ready!*
  
  📝 *Caption:*
  {{caption}}
  
  📂 Saved to Google Drive → /RegalosApp/Content/{{date}}/
  
  Ready to post to TikTok, Instagram & Twitter/X 🚀
  ```
- **Also send:** Photo/video preview (using `sendPhoto` with the Drive link or image URL)

---

## Technology Stack

| Component | Tool |
| :--- | :--- |
| Orchestration | n8n (self-hosted or cloud) |
| Trend Research | Reddit public JSON API |
| Content Brief | OpenAI GPT-4o / Gemini |
| Image Generation | PiAPI – Flux (flux1-schnell) |
| Video/Reel Generation | PiAPI – SkyReels (img2video) |
| Storage | Google Drive |
| Notification | Telegram Bot |

---

## Estimated Costs per Run

| Step | Approximate Cost |
| :--- | :--- |
| Reddit API | Free |
| GPT-4o mini (brief generation) | ~$0.01 |
| PiAPI Flux (2 images) | ~$0.04–$0.10 |
| PiAPI SkyReels (1 video, 5s) | ~$0.10–$0.30 |
| Google Drive | Free |
| Telegram | Free |
| **Total per weekly reel** | **~$0.15–$0.40** |

---

## Open Questions Before Building

1. **PiAPI Key:** Do you have an active PiAPI account and API key?
2. **LLM preference:** OpenAI (GPT-4o) or Gemini for the content brief? (Both work via HTTP Request in n8n)
3. **Telegram Bot:** Do you have a bot token and your chat ID ready for the notifications?
4. **Google Drive:** Is the n8n Google Drive credential already connected?
5. **Video approach:** Simple 5s animation from Image 1 (recommended), or do you want to attempt a 2-image slideshow effect somehow?
