# Dysolve Campaign — Launch Package

## File Structure

```
dysolve-campaign/
├── index.html              ← Parents / IDEA Advocates
├── therapists.html         ← Therapists & Specialists
├── voucher-families.html   ← Voucher Families (AZ & FL)
├── og-switchers.html       ← OG Switchers
├── remarketing.html        ← Remarketing (general)
├── admin.html              ← CMS Content Manager
├── assets/
│   ├── content.js          ← ALL page content (edit here)
│   ├── app.js              ← Renders content into pages
│   └── styles.css          ← Shared stylesheet
└── README.md
```

---

## How to Launch

### Option A — Simple (any web host / Netlify / GitHub Pages)
1. Upload the entire `dysolve-campaign/` folder to your hosting provider.
2. Your pages are immediately live.

### Option B — Netlify (recommended, free)
1. Go to https://netlify.com
2. Drag the `dysolve-campaign/` folder into the Netlify dashboard.
3. Done. Instant HTTPS live site.

### Option C — Local preview
Open `index.html` directly in any browser. (Video iframes may not load locally — upload to a server for full video support.)

---

## How to Edit Content (CMS)

1. Open `admin.html` in your browser (on your live server or locally).
2. Use the sidebar to navigate to any page.
3. Edit headlines, subheadlines, CTAs, steps, features.
4. Click **Export content.js**.
5. Replace `assets/content.js` on your server.
6. All pages update instantly — no redeploy needed.

---

## Video Setup

Each page embeds the assigned Google Drive folder using the Drive embed viewer.

**Requirements:**
- Each Google Drive folder must be set to **"Anyone with the link can view"**
- To update video folder links: open `admin.html` → 🎬 Video Links → paste new URLs → Save → Export content.js

**Current video folder assignments:**
- Parents:         https://drive.google.com/drive/u/2/folders/1Jgl0sFXnJj74yJ8BTDnri9vPzID8CWO3
- Therapists:      https://drive.google.com/drive/folders/1haCjoh_pCgcQA6gfsU_BsESwjLLPH3Gu
- Voucher Families:https://drive.google.com/drive/folders/1JhWCc55HvtBj2UaY_qQKSCRsP4i2NMRE
- OG Switchers:    https://drive.google.com/drive/u/2/folders/1-F5wrFlNwocWs_rGiXT0vMtKwTgXWNl9
- Remarketing:     https://drive.google.com/drive/folders/1zK39l54e3GHnHFIz2p9dFP5NqmhuwOOQ

---

## Ad URL Targeting

Point each Meta/Google ad to the matching page:

| Audience           | URL                        |
|--------------------|----------------------------|
| Parents / IDEA     | /index.html                |
| Therapists         | /therapists.html           |
| Voucher Families   | /voucher-families.html     |
| OG Switchers       | /og-switchers.html         |
| Remarketing        | /remarketing.html          |

---

## Changing the Price

Quick change: open `admin.html` → Dashboard → Quick Edit → update price → Save → Export.

---

## Design Tokens (for custom CSS)

```
--teal:   #10A9AB   (primary)
--purple: #6A4E9E   (therapists / voucher)
--charcoal:#1E2235  (OG switchers)
```

---

© 2026 Dysolve AI · dysolve.ai
