# Zariya House — Premium Jewellery Design Showcase

> Designs to Adorn Every Story.

An editorial, non-transactional jewellery catalogue built with **TanStack Start (React + Vite)**, **Tailwind v4**, **Framer Motion**, **GSAP + ScrollTrigger** and **Lenis** smooth scroll.

This is a **showcase**, not an ecommerce site — there are no prices, cart, checkout, stock, delivery or coupons anywhere.

---

## Quick start

```bash
bun install     # or: npm install / pnpm install
bun run dev     # local dev at http://localhost:3000
bun run build   # production build
bun run start   # preview the production build
```

## Deployment (Vercel)

The project is Vercel-ready:

1. Push the repo to GitHub / GitLab.
2. In Vercel, **New Project → Import** the repo.
3. Framework preset auto-detects **Vite / TanStack Start**.
4. Build command `bun run build` (or leave default), output as detected.
5. No env vars are required.

All images are bundled from `src/assets/` so they resolve identically on Lovable preview, localhost after ZIP export, and Vercel deployment.

---

## Editing content

Everything you'll want to change is in **`src/data/`**:

| File | What lives here |
|---|---|
| `site.ts` | Business name, phone, WhatsApp number, email, socials |
| `navigation.ts` | Navbar mega menus, top links, featured tiles |
| `collections.ts` | Editorial collection chapters |
| `categories.ts` | Browse-by-category tiles & material list |
| `designs.ts` | Every jewellery design shown across the site |
| `bridal.ts` | Bridal chapters and bride styles |
| `misc.ts` | Craft pillars, testimonials |
| `images.ts` | Central image registry — swap any picture in one place |

### Replace an image
1. Drop the new file into `src/assets/`.
2. Update the corresponding import in `src/data/images.ts`.
3. Every page that references it updates automatically.

### Add a design
Append a new entry in `src/data/designs.ts` matching the `Design` type. It appears immediately in search, category pages, similar-designs and the lookbook.

### Add a category / subcategory
Add the entry to `src/data/categories.ts` (for browse tiles) and/or `src/data/navigation.ts` (for mega menu links). Routes are file-based: `/category/$category` and `/category/$category/$subcategory`.

### Configure WhatsApp / phone / email
Update `src/data/site.ts` — the phone number, `whatsappNumber` (E.164 without `+`), email and social URLs propagate to the footer, contact page, and design detail CTAs.

---

## Tech notes

- Routing: **TanStack Router** file-based (`src/routes/`)
- Animations: **GSAP** + **ScrollTrigger** for hero timeline & pinned sections; **Framer Motion** for micro-interactions
- Smooth scroll: **Lenis**
- Type-safe forms: React state + native validation
- SEO: per-route `head()` metadata, `sitemap.xml` server route, `robots.txt`, JSON-LD Organization + LocalBusiness
- Accessibility: keyboard-navigable menus, focus-visible states, alt text everywhere, `prefers-reduced-motion` respected

---

## Structure

```
src/
  assets/            All bundled images
  components/
    brand/           Logo & monogram
    layout/          Navbar, Footer, Preloader, PageBanner
    providers/       Lenis smooth-scroll provider
    ui/              shadcn/ui primitives + SafeImage, Reveal
    Viewer360.tsx    Simulated 360° drag viewer
    DesignCard.tsx   Reusable jewellery card
  data/              All editable content (see table above)
  routes/            File-based routes
  styles.css         Tailwind v4 design tokens & luxury utilities
```

Have fun building. — The Zariya House studio
