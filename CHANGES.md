# CHANGES — restaurant-website

## 2026-06-07 — Initial build: ALMA Portuguese restaurant website

- Scaffolded Next.js 16.2.7 + Tailwind v4 + Framer Motion (`motion/react`) project
- Brand name: **ALMA** (Portuguese for "soul")
- Fonts: Playfair Display (italic serif display) + DM Sans (body), loaded via `next/font/google`
- Palette: warm cream/ink/burgundy/gold, all OKLCH tokens in `@theme {}`
- Sections built: Nav, Hero (parallax + scroll-driven opacity), About (2-col image + stats), Menu (4 dishes with images), Gallery (mosaic grid on dark bg), Reservations (form + contact), Footer
- All animations via Framer Motion: entrance reveals, parallax, stagger, scroll-fade
- Build passes locally and on Vercel
- Deployed to: **https://restaurant-website-delta-plum.vercel.app**
- GitHub: https://github.com/apexmedialx-debug/restaurant-website

## 2026-06-07 — Alteration #1: Major redesign (innovative fonts, darker hero, more animations)

- Fonts changed: Cormorant Garamond (display) + Raleway (body), then Bodoni Moda + Jost (final)
- Hero: multi-stop dark overlay (0.97→0.35 gradient + radial vignette), per-character letter animation
- Nav: adaptive light/dark — cream text on dark hero, ink when scrolled, gold hover underlines
- Added Marquee component: dark bg, scrolling gold text strip between Hero and About
- Menu: split layout with 44% sticky food image column + scrollable dish list (numbered, italic, hover gold bars)
- Gallery: dark bg mosaic, 5-image CSS grid, hover caption reveals with clipPath entrance
- About: animated counters (useMotionValue + useTransform), clipPath image wipe-in
- Reservations: inline form with keyboard focus states, success confirmation state
- Footer: large faded italic watermark "Alma", dark bg

## 2026-06-07 — Alteration #2: Tighter spacing, Bodoni Moda + Jost fonts, subtle bg images

- Font swap: Bodoni Moda (display) + Jost (body) — updated globals.css @theme tokens and layout.tsx imports
- Hero: paddingBottom 6rem → 3.5rem; CTA marginTop 3rem → 2rem
- Gallery: section padding 8rem → 5rem; heading margin/padding trimmed
- Menu: dish list padding reduced (3rem 3.5rem 6rem → 2.5rem 2.5rem 4rem); desktop pt 7rem → 4.5rem
- Footer: paddingTop 5rem → 3.5rem; paddingBottom 3rem → 2.5rem
- About: padding 9rem → 5.5rem; grid gap 5rem → 3rem; added 4.5% opacity Unsplash food bg image
- Reservations: padding 9rem → 5.5rem; gap 5rem → 4rem; added 5% opacity Unsplash table bg image
- Build passes; deployed to production
