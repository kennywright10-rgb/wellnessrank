# IV Ranker — North Atlanta IV Therapy Directory

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Deploy to Vercel

1. Push this repo to GitHub
2. Import in Vercel → Framework: Next.js
3. Deploy (zero config needed)

## Architecture

```
src/
├── app/
│   ├── layout.js          # Global nav, footer, AdSense head tag
│   ├── page.js            # Homepage — city grid
│   ├── [city]/page.js     # Dynamic city pages (SSG)
│   ├── admin/page.js      # Password-protected admin panel
│   ├── sitemap.js         # Auto-generated sitemap
│   └── robots.js          # Robots.txt
├── components/
│   ├── AdZone.js          # AdSense placement component
│   ├── FaqAccordion.js    # Collapsible FAQ section
│   └── ProviderCard.js    # Provider listing card w/ sponsor tiers
├── data/
│   └── sites.js           # ★ MASTER DATA — cities, providers, FAQs
└── styles/
    └── globals.css        # Tailwind + custom styles
```

## Key Files

### `src/data/sites.js` — The Single Source of Truth
All cities, providers, IV types, and FAQs live here. To add content:
- **New city**: Add object to `cities[]` → redeploy → page auto-generates
- **New provider**: Add object to `providers[]` with city slug
- **Thrive is #1**: `sortOrder: 0` + `sponsored: true` + `sponsorTier: "platinum"`

### `src/app/[city]/page.js` — Dynamic City Routes
Uses `generateStaticParams()` to build all city pages at deploy time.
Each page includes: hero, providers, treatments, local guide, FAQ, nearby cities.
Full Schema.org (FAQPage + BreadcrumbList) auto-generated per city.

### `src/app/admin/page.js` — Admin Panel
- **Password**: `ivranker2026` (change in the file)
- Add/edit/delete providers
- Set sponsor tiers (Platinum $200/mo, Gold $100/mo, Silver $50/mo)
- Control sort order (lower number = higher ranking)
- View AdSense configuration

### `src/components/AdZone.js` — AdSense Integration
9 ad zones pre-wired:
- `leaderboardTop` — 728×90 top of city pages
- `midListing` — in-article between provider cards
- `midPage` — 728×90 mid-page
- `sidebar` — 300×250 city sidebar
- `bottomLeaderboard` — 728×90 above footer
- `homeLeaderboard` / `homeBottom` — homepage zones
- `blogSidebar` / `blogInArticle` — blog page zones

To activate: Add your publisher ID in `data/sites.js` → uncomment AdSense code in `AdZone.js`.

## Sponsored Listings

Thrive 4 Peak Performance is set as Platinum sponsor by default:
- `sortOrder: 0` — always first
- `sponsored: true` — teal highlight + accent bar
- `sponsorTier: "platinum"` — "⭐ Featured Partner" badge

### Tier Pricing
| Tier | Price | Placement |
|------|-------|-----------|
| Platinum | $200/mo | Always #1, full highlight, expanded card |
| Gold | $100/mo | Top 3, featured badge, highlighted |
| Silver | $50/mo | Above organic, promoted badge |

## Scaling to National

The architecture supports national expansion:
1. Add state-level grouping to `cities[]` (already has `stateSlug`)
2. Create `/[state]/[city]` route structure
3. Move data to Supabase for 100+ cities
4. Add API routes for real-time provider management

## SEO Features
- Dynamic meta titles/descriptions per city
- Schema.org FAQPage + BreadcrumbList on every city page
- Auto-generated sitemap.xml with all pages
- Robots.txt blocking /admin
- Canonical URLs on all pages
- Open Graph tags for social sharing
- Internal cross-linking between city pages
