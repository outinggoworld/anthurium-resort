# Anthurium Resort — Website (v1 scaffold)

A Next.js 15 (App Router) + TypeScript + Tailwind CSS build of the Anthurium
Resort site, using **Anthurium's own content only** — Royal Garden Resort was
used solely as a structural reference during planning and none of its
content, branding, or images are in this codebase.

## Run it locally in VS Code

1. **Open the folder** — `File -> Open Folder...` and select `anthurium-resort`.
2. **Install dependencies** (needs Node.js 18.18+):
   ```bash
   npm install
   ```
3. **Start the dev server**:
   ```bash
   npm run dev
   ```
4. Open **http://localhost:3000** in your browser. Edits to any file in
   `src/` hot-reload instantly.
5. **Recommended VS Code extensions**: `Tailwind CSS IntelliSense`,
   `ESLint`, `Prettier`.

To create a production build: `npm run build`, then `npm start`.

> Note: the dev/build process fetches Playfair Display & Manrope from Google
> Fonts on first run — make sure you have an internet connection the first
> time you run `npm run dev` or `npm run build`.

## What's implemented (Phases 1-3 of the spec)

- Design system: color tokens, type scale (Playfair Display / Manrope), spacing
- Header — transparent-over-hero, becomes sticky/blurred on scroll, full-screen mobile menu
- Hero — full-viewport, layered copy, lightweight ambient particle layer (canvas-based stand-in for the full Three.js scene, see below), scroll indicator
- Intro cards (Activities / Accommodation / Events)
- Activities — horizontal-scroll carousel, all 12 activities, "View All" links to theanthurium.in/amenities/
- Accommodation — Glamping Pods / Villas House / Suites Room, large cards
- Weddings — split layout, feature checklist, WhatsApp CTA
- Corporate — six event-type cards
- About — split layout (copy marked [CONTENT REQUIRED], see below)
- Gallery — filterable masonry grid + keyboard-accessible lightbox
- Testimonials — carousel that shows nothing until real reviews are added (no fabricated quotes, per your content rule)
- Final CTA, Contact section with enquiry form, Footer
- Floating WhatsApp button (desktop) + sticky WhatsApp/Call/Enquire bar (mobile)
- Scroll-reveal micro-interactions (Framer Motion), reduced-motion support, focus-visible states
- sitemap.ts, robots.txt, Open Graph metadata

## What's intentionally left for you to plug in

The spec's content rule (section 56) says never invent prices, reviews,
room counts, or stats. Anywhere that applies, the code has a clearly marked
placeholder:

- Real photography — every `image:` field in `/src/data/*.ts` currently
  points at a `/public/images/...` path that doesn't exist yet. Drop
  Anthurium's real photos into those folders (or update the paths) and
  they'll appear automatically.
- `about.body`, `contact.phone`, `contact.email`, `contact.address` in
  `src/data/site.ts` — marked [CONTENT REQUIRED].
- Testimonials — `src/data/gallery.ts` — add real, verified reviews only.
- Google Maps embed in the contact section — currently a placeholder box.

## Still to build (later phases from the spec)

This v1 focuses on a fast, accessible, production-quality frontend with the
full content structure and premium feel. Not yet built:

- Full Three.js / React Three Fiber 3D hero scene — the current
  `AmbientParticles` component is a lightweight canvas stand-in that gives
  the "calm nature" feeling at near-zero performance cost. Swapping in a
  full R3F scene (floating leaves, glowing dust, parallax camera) is a
  self-contained follow-up — it only touches `Hero.tsx` and adds a new
  `components/3d/` folder.
- GSAP + ScrollTrigger cinematic transition between Activities and
  Accommodation (currently a plain section boundary). Framer Motion handles
  the scroll-reveals for now.
- Custom cursor (desktop)
- Booking system, payments, availability calendar, admin dashboard (spec
  explicitly defers this to Phase 7)
- CMS wiring (Sanity/Strapi/WordPress) — the data layer in `/src/data/` is
  already structured so this is a drop-in swap later
- Form backend — the enquiry form currently only shows a confirmation state
  client-side; it needs a real endpoint + server-side validation before launch

## Project structure

```
src/
  app/            Next.js routes, layout, metadata, sitemap
  components/
    sections/     Page sections (Header, Hero, Activities, etc.)
    ui/           Reusable primitives (Button, Reveal, ActivityCard)
  data/           Content, the single source of truth per section
  lib/            Small utilities
public/
  images/         Drop real Anthurium photography here
```

## Content ownership

All copy in `src/data/` is taken directly from Anthurium's existing content.
Nothing from Royal Garden Resort — text, images, pricing, testimonials, or
branding — appears anywhere in this codebase.

## Adding real background videos

Every themed section (Hero, Activities, Accommodation, Weddings,
Corporate, Final CTA) now supports a looping video background, wired up
in `src/data/videos.ts`. To turn one on:

1. Get a short (6-15s), compressed mp4 clip (H.264, 1080p or less, no
   audio needed).
2. Name it to match the path already listed in `src/data/videos.ts`
   (e.g. `hero.mp4`, `weddings.mp4`) and drop it into `public/videos/`.
3. That's it — the section picks it up automatically and loops it,
   muted, behind the existing overlay/particles.

Until a video file exists at that path, each section quietly falls back
to its existing poster image (or gradient) — nothing breaks.

### Where to source suitable footage
If Anthurium doesn't have its own drone/handheld footage yet, royalty-free
options that match each section's mood:
- **Pexels Videos** (pexels.com/videos) — free, no attribution required
- **Pixabay Videos** (pixabay.com/videos) — free, no attribution required
- **Coverr** (coverr.co) — free, resort/nature/lifestyle footage

Search terms that match the moods described for each section: "resort
aerial drone", "tropical pool resort", "outdoor adventure activities",
"cozy cabin interior", "wedding decor flowers", "conference room modern".

Always confirm the license allows commercial use before publishing.
