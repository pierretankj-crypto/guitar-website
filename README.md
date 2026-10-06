# OsRocks website

Marketing site for **OsRocks**, 1-to-1 electric guitar lessons near Hougang MRT, Singapore.
_"Learn the song you love, the right way."_

Built with Next.js (App Router), TypeScript and Tailwind CSS. Every page is prerendered as static HTML.
Booking is handled by an embedded [Cal.com](https://cal.com) calendar. There is no database, no login and no payment system.

## Editing the content

**All words, prices, the FAQ, the bio, contact details and the Privacy/Terms text live in one file: [`lib/content.ts`](lib/content.ts).**
You never need to touch the components to change content.

- Anything in `[SQUARE BRACKETS]` is a placeholder.
- Prices and policies (assessment fee, package prices, 24-hour rule, minimum age, package expiry) are set once at the top of the file and reused everywhere: the packages section, the FAQ, the Terms and the search-engine data.
- To see what's still left to fill in, run:

  ```bash
  npm run placeholders
  ```

### Photos

Placeholder photos are in `public/images/`. Replace each file with a real photo **using the same file name**:

| File | Shape | Suggested size | Used for |
| --- | --- | --- | --- |
| `hero-teacher.jpg` | Portrait 4:5 | 1200 × 1500 px | Hero (teacher with guitar) |
| `teacher-portrait.jpg` | Portrait 4:5 | 1200 × 1500 px | Meet your teacher |
| `studio.jpg` | Landscape 8:5 | 1600 × 1000 px | Location (don't show anything that reveals the address) |

If your photo has a different shape, update its `width` and `height` in the `images` section of `lib/content.ts`. Next.js resizes and compresses photos automatically, so a normal phone photo is fine. Also update the `alt` text to describe what's in the photo.

### Testimonial videos

Each testimonial in `lib/content.ts` can have an optional `video`:

```ts
// A video file you host yourself (put it in public/videos, vertical 9:16 works best)
video: { kind: "file", src: "/videos/ethan.mp4", poster: "/images/ethan-poster.jpg" },

// Or a YouTube video / Short (the ID is the last part of the link)
video: { kind: "youtube", id: "abc123XYZ" },
```

Videos only load when someone presses play, so they don't slow the page down. Get written consent before posting a student's video, and a parent's consent for anyone under 18.

### Share image, icon and the Cal.com calendar

- **Share image** (the preview on WhatsApp, Facebook and X): generated automatically from the tagline in `lib/og-image.tsx`. To use your own design instead, delete `app/opengraph-image.tsx` and `app/twitter-image.tsx` and add `app/opengraph-image.png` (1200 × 630 px).
- **Favicon**: `app/icon.svg`, `app/favicon.ico` and `app/apple-icon.png`.
- **Cal.com**: set `booking.calLink` to your Song Assessment event, for example `osrocks/song-assessment`. Recommended event settings: 60 minutes, location "In person (address shared after booking)", and a required booking question "Which song do you want to learn?". Put the exact studio address in the confirmation email or the location field, never on the website. The calendar loads only when a visitor scrolls near it, so it doesn't slow the page down. If it fails to load, visitors get a link to your Cal.com page instead.

## Running it locally

Requires Node.js 20.9 or newer.

```bash
npm install
npm run dev          # http://localhost:3000
npm run build        # production build (also type-checks)
npm run lint
npm run placeholders # list remaining placeholders
```

## Deploying to Vercel with osrocks.com

> **Plan note:** Vercel's free **Hobby** plan is limited to non-commercial personal use. A site that advertises paid lessons counts as commercial under Vercel's fair-use guidelines, which require the **Pro** plan for that. Check the current terms before you launch.

1. **Get the code onto your default branch.** In GitHub, merge this branch into `main` (or create `main` from it) and make `main` the default branch.
2. **Import the project.** Sign in at [vercel.com](https://vercel.com) with GitHub, then **Add New → Project** and import `guitar-website`. Vercel detects Next.js automatically, so keep the default settings. No environment variables are needed. Click **Deploy**.
3. **Add your domain.** In the project, open **Settings → Domains** and add `osrocks.com`. Accept the suggestion to also add `www.osrocks.com` and redirect it to `osrocks.com`.
4. **Point your DNS at Vercel.** At the company where you bought osrocks.com, add the records Vercel shows on the Domains page. Use Vercel's exact values. They usually look like this:
   - `A` record for `@` → the IP Vercel shows (commonly `76.76.21.21`)
   - `CNAME` record for `www` → the project-specific `…vercel-dns….com` value Vercel shows

   Remove any old `A`/`AAAA`/`CNAME` records for `@` and `www` that point elsewhere. Alternatively, switch your domain's nameservers to Vercel's. HTTPS is set up automatically once DNS updates (usually minutes, up to 48 hours).
5. **Updating the site later:** edit `lib/content.ts` (or swap photos), then commit and push to `main`. Vercel redeploys automatically in about a minute. Every other branch or pull request gets its own preview link.

### After launch

- Add the site to [Google Search Console](https://search.google.com/search-console), then submit `https://osrocks.com/sitemap.xml`.
- Create a [Google Business Profile](https://www.google.com/business/) as a **service-area business** (Hougang) with the address **hidden**. This matters most for showing up in "guitar lessons Hougang" searches.
- Test the share preview by sending the link to yourself on WhatsApp.

## What's where

```
lib/content.ts            ← all editable content
app/page.tsx              ← home page (section order)
app/privacy, app/terms    ← legal pages (text comes from lib/content.ts)
app/sitemap.ts, robots.ts ← SEO files
app/opengraph-image.tsx   ← share image
components/sections/      ← one file per home page section
components/cal-embed.tsx  ← lazy-loaded Cal.com calendar
lib/structured-data.ts    ← LocalBusiness schema (area only, no street address)
public/images/            ← photos
```
