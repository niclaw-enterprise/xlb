# XLB — 老板不在

**A restaurant that does not exist yet.**  
Dim sum counter · Sham Shui Po, Kowloon, Hong Kong · Est. TBD

> 老板不在 — The boss is not here.

---

## What This Is

Pre-launch teaser site for XLB — a restaurant concept in design phase. Features:

- **Planimetry** — 3 architectural floor plan variants (Linear / Social / Omakase bar), with north arrow, scale bar, cut section hatching, door leaf SVG
- **Menu** — Two design variants: Traditional offset print (A) and Kowloon Neon edition (B)
- **Workwear** — Drop 001 t-shirt product page with invite-only buy flow Easter egg
- **Concept** — Manifesto page

Live: [xlb.hk](https://xlb.hk) · Dev preview: [xlb.hk/dev](https://xlb.hk/dev)

---

## Stack

| Layer | Choice |
|---|---|
| Framework | Next.js 16 (App Router, static export) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| Font | IBM Plex Mono |
| Hosting | GitHub Pages (via JamesIves deploy action) |
| Domain | xlb.hk (CNAME → GitHub Pages) |

**Intentionally static** — no backend, no database, no Vercel until v1.0.0. Everything runs as a pre-built static export.

---

## Local Dev

```bash
npm install
npm run dev       # http://localhost:3000
npm run build     # static export to /out
```

### Branches

| Branch | Purpose | Deploys to |
|---|---|---|
| `main` | Production | xlb.hk |
| `dev` | Development preview | xlb.hk/dev |

Push to either branch to trigger GitHub Actions deploy.

---

## Architecture

```
app/
  page.tsx              # Main SPA — 4 tabs: PLANIMETRY, MENU, WORKWEAR, CONCEPT
  layout.tsx            # Root layout, metadata, IBM Plex Mono
  globals.css           # Keyframes, tab animations, blueprint grid, print stylesheet
  opengraph-image.tsx   # OG image 1200×630 (blueprint aesthetic)

components/
  Planimetry.tsx        # SVG floor plans — Variant A (Linear), B (Social), C (Omakase)
  MenuDesign.tsx        # Menu card — MenuA (offset print), MenuB (neon)
  TShirt.tsx            # Workwear product SVG (front/back)
  RunningBuyButton.tsx  # Interactive buy button with invite code Easter egg
```

### Key Design Decisions

- **`h-[100dvh]`** — dynamic viewport height for mobile browser chrome
- **Static export** — `output: "export"` in next.config.ts; no server-side features
- **`.nojekyll`** in `public/` — required for GitHub Pages to serve `_next/` assets
- **`basePath`** — only set for `/dev` subdirectory deploys (env-controlled)
- **Hash routing** — `xlb.hk/#planimetry`, `#menu`, `#workwear`, `#concept`

---

## Navigation

- **Click** tab buttons
- **Arrow keys** (← →) — cycle through tabs from anywhere on the page
- **Escape** — close planimetry zoom modal

---

## Easter Egg

In the Workwear tab, chase the Buy button 7 times. When it surrenders, enter the invite code. Try `老板不在`.

---

## Print / PDF Export

On the Planimetry tab, click **⊙ Export PDF** in the sidebar.  
Renders A4 landscape with exact color (dark background preserved).

---

## Versioning

| Version | Status | Notes |
|---|---|---|
| v0.1.0 | Released | Stable baseline |
| v0.2.0 | Released | Visual polish, planimetry details, mobile, keyboard nav |
| v0.3.0 | In progress | Form backend, analytics, social links |

---

## Roadmap (v0.3.0)

- [ ] #10 — Notify-me email form with real submission (Formspree / API)
- [ ] #12 — Footer social links
- [ ] #13 — Privacy-friendly analytics (Plausible / Umami)

---

*The merch precedes the place.*
