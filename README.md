# Flawless Dance & Fitness Studio — Website Documentation

Production-grade website built for **Flawless Dance & Fitness Studio** (Ghansoli, Navi Mumbai) inspired by the editorial dark-theme interaction architecture of `gang.tv`.

- **Domain**: `flawlessdance.in`
- **Framework**: Next.js 14 (App Router) + TypeScript + Tailwind CSS + GSAP + Lenis

---

## 1. How to Edit Website Content & Copy

All copy, instructors, studio locations, class lists, and social channels are centralized in **one single file**:
📂 [`src/content/site.ts`](file:///D:/fdfs/src/content/site.ts)

You can edit this file directly to update:
- **Hero Statement & Inline Links**: Change the title or class links.
- **About Copy**: Update the studio story, year founded, or founder bio.
- **Classes**: Add or edit dance styles, descriptions, and batches.
- **Schedule**: Adjust morning, afternoon, or evening timing slots.
- **Master Faculty**: Update instructor names, photos, or awards.
- **Studios**: Update addresses, phone numbers, or Google Maps links.
- **WhatsApp Constant**: Change `whatsappNumber` (e.g. `918850120018`).
- **Social Links**: Update Instagram or YouTube links.

---

## 2. Media & Photography Replacement

All media files live in:
📂 [`/public/media/`](file:///D:/fdfs/public/media/)

To replace any photo with new studio pictures, simply overwrite these files with the same name:
- `hero.jpg` — Main hero background image (16:9 or 21:9 landscape)
- `class-dance.jpg` — Dance class hover preview
- `class-zumba.jpg` — Zumba & fitness hover preview
- `class-yoga.jpg` — Yoga hover preview
- `class-ladies.jpg` — Ladies batch hover preview
- `team-avinash.jpg` — Avinash Mishra portrait (4:5 vertical)
- `team-ankit.jpg` — Ankit Gupta portrait (4:5 vertical)
- `team-tisa.jpg` — Tisa Pal portrait (4:5 vertical)
- `studio-sec16.jpg` — Sector 16 Krishna Vihar studio image
- `studio-sec5.jpg` — Sector 5 Tilak School Road studio image
- `news-performance.jpg`, `news-workshop.jpg`, `news-batch.jpg` — Studio Life news cards

---

## 3. Brand Colors & Logo

Brand colors are defined in [`src/app/globals.css`](file:///D:/fdfs/src/app/globals.css) and [`tailwind.config.js`](file:///D:/fdfs/tailwind.config.js):
- `--bg-main: #0A0A0A` (Near black canvas)
- `--bg-surface: #141414` (Raised surfaces)
- `--border-hairline: rgba(255, 255, 255, 0.12)` (Thin dividers)
- `--color-accent: #FF3D6E` (Bold accent color)

To change the accent color to match a new Canva logo:
Simply change `--color-accent` in `src/app/globals.css`!

---

## 4. Local Development

```bash
# Install dependencies
npm install

# Run development server (runs on http://localhost:3001)
npm run dev

# Build for production
npm run build

# Start production server
npm run start
```

---

## 5. Deployment Options

### Option A: Vercel (Recommended)
1. Push this folder to a GitHub repository.
2. Import the repository into [Vercel](https://vercel.com).
3. Connect your custom domain `flawlessdance.in`.

### Option B: Static Export (For Apache / cPanel / Shared Hosting)
In `next.config.mjs`, add `output: 'export'`:
```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true }
};
export default nextConfig;
```
Run `npm run build` to generate the `/out` directory, which can be uploaded directly to any static web host.

---

## 6. [TODO] Placeholders Awaiting Client Confirmation

1. **WhatsApp Primary Number**: Confirm whether `8850120018` or `9892226202` is the primary WhatsApp number.
2. **Year Established**: Confirm if "Since 2018" is officially marketed.
3. **Exact Batch Timings**: Provide exact start and end times for each batch across Sector 16 & Sector 5.
4. **Avinash Mishra Awards**: Provide specific awards or competition titles to list under founder bio.
5. **Tisa Pal Bio**: Confirm personalized bio and teaching background.
6. **Class Etiquette Rules**: Provide studio rules to finalize on the Terms & Policies page.
