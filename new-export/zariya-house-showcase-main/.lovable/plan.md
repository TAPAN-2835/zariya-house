# Zariya House — Production Hardening Plan

The brief lists 23 workstreams. Delivering all of them at true production quality in a single pass would blow past reasonable turn budget and result in shallow fixes everywhere. Below is a prioritized pass that hits every **critical** item end-to-end, and defers polish items I'll flag explicitly. Nothing is skipped silently.

## Pass 1 — Ship in this turn (production blockers)

1. **Dead links / navigation audit.** Grep `href="#"`, unresolved `to=`, footer social, WhatsApp; wire every one to a real route or a configurable constant in `src/data/site.ts` (WhatsApp number, socials). Hide unset socials.
2. **Content expansion for materials + categories.** Extend `src/data/designs.ts` from 13 to ~45 designs covering the required Gold/Silver/Rose Gold/Platinum × category matrix. Add missing categories (Chokers, Haram, Studs, Jhumkas, Hoops, Wedding Rings, Men's Rings, Charms, Brooches, Pendant Sets) to `categories.ts`. Add `/material/$slug` route so Gold/Silver/Rose Gold/Platinum tiles land somewhere real.
3. **Simulated 360° viewer.** New `Viewer360` component: drag/auto-rotate across N synthesized frames (CSS-filter hue/brightness variations on the base image so it works with a single asset — no external deps, ships in ZIP/Vercel). Graceful reduced-motion fallback.
4. **Hero readability.** Deeper burgundy → transparent gradient overlay, text-shadow on gold accents, clamp() sizing, mobile fallback stack.
5. **Premium 404 page** (`src/routes/$.tsx` + root notFoundComponent) with editorial layout, links back to Collections + Consultation.
6. **Missing macro imagery.** Generate the ring/necklace macro + gallery assets you flagged plus material category heroes (Silver, Rose Gold, Platinum). Register in `IMG` with `FallbackImage` component (blurred ivory + gold Z monogram on error).
7. **Site config + WhatsApp/share/save/download.** `src/data/site.ts` for phone, WhatsApp, email, socials. Wire Share (navigator.share + clipboard fallback), Save-to-Inspiration (localStorage), WhatsApp deep link, Catalogue PDF (client-side print-to-PDF via `window.print` on a print stylesheet — no server dep).
8. **Collections/category filter + sort completion.** Add sort dropdown (Featured / Latest / A–Z), material+occasion+style+gender chips, empty state, consultation CTA. Persist to URL search params.
9. **Search suggestions in navbar.** Debounced dropdown searching designs+collections+categories, keyboard nav (↑↓ Enter Esc), routes to `/search?q=`.
10. **GSAP + ScrollTrigger.** Real usage in 3 flagship spots: hero timeline reveal, craft pinned section, gallery stagger. `src/animations/gsap.ts` central module, `prefers-reduced-motion` guard.
11. **SEO polish.** BreadcrumbList JSON-LD on category/design pages, LocalBusiness JSON-LD at root, alt text sweep on `<img>`s, canonical/og:url self-reference confirmed.
12. **README.md** with setup, dev/build, Vercel deploy, how to swap images/designs/categories, how to configure WhatsApp.

## Pass 2 — Explicitly deferred (call out to user, ship next turn if requested)

- Bridal chapters as first-class drill-down routes (currently sections).
- Full accessibility audit sweep (focus rings, aria on custom widgets) beyond obvious fixes.
- Ultra-wide + landscape breakpoint tuning beyond spot checks.
- Analytics event instrumentation.
- i18n scaffolding.
- Micro-interactions: magnetic buttons, cursor follower, tilt (perf risk on mobile — will note in README).

## Technical notes

- **360 viewer**: single-image simulated rotation. Frames are the same source image rendered onto a canvas with per-frame hue-rotate + brightness so drag/auto-rotate feels alive without needing 36 unique photos. This is honest ("Interactive preview") and works offline.
- **Fallback image**: `<SafeImage>` wrapping `<img>` with onError → gold-monogram SVG data URI.
- **GSAP**: dynamic import inside `useLayoutEffect` behind `matchMedia('(prefers-reduced-motion: reduce)')` check so SSR stays clean.
- **No ecommerce**: reconfirmed — no price/cart/stock anywhere in new content.

## Out of scope confirmations

- No Lovable Cloud enable (no auth/db needed for a showcase).
- No image asset externalization to CDN (keep in `src/assets` for ZIP portability, per your "must work after export" requirement).

Say go and I'll execute Pass 1 in one shot, then report back on Pass 2 items you'd like next.
