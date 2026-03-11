# Wireframe Screens: Research, POD Hub, Analytics, Settings

## Summary

Built 4 self-contained HTML wireframe screens for Dodgeprint e-commerce seller platform. All screens use the "Warm Organic" design system (sage/gold/coral palette, cream backgrounds, white cards, pill buttons, Plus Jakarta Sans typography, Lucide icons).

## Files Created

| File | Page | Line Count |
|------|------|-----------|
| `docs/wireframes/06-research.html` | Research (5 tabs) | 595 |
| `docs/wireframes/07-pod-hub.html` | POD Hub (5 tabs) | 416 |
| `docs/wireframes/08-analytics.html` | Analytics | 278 |
| `docs/wireframes/09-settings.html` | Settings (7 sub-tabs) | 413 |

## Files Modified

| File | Change |
|------|--------|
| `docs/wireframes/_shared-navigation.js` | Updated file map to include new filenames (`06-research.html`, `07-pod-hub.html`, `08-analytics.html`, `09-settings.html`) |

## Design Patterns Applied

- **Sidebar**: 248px fixed left, white bg, pill active state (sage bg), Lucide icons, 7 nav items (Dashboard, Listings, Orders, Research, POD Hub, Analytics, Settings)
- **Header**: 60px sticky, search pill input, shop switcher, dark mode toggle, notification bell, avatar
- **Cards**: `card-static` (no hover) for data display, `card` (hover) for interactive items, 16px radius, no default shadow
- **KPIs**: Label-above-number pattern, 26px extrabold mono numbers, pill trend badges
- **Tables**: bg-muted header, hover rows, pill status badges
- **Buttons**: `btn-primary` (sage pill), `btn-ai` (dark sage + sparkle), `btn-ghost` (border, rounded-md), `btn-accent` (coral pill)
- **Tabs**: Underline-style (sage color, 2px bottom border)
- **Dark mode**: Full support via CSS variables and `data-theme="dark"`
- **Mobile**: Bottom nav bar, sidebar hidden below 768px
- **Toggle switches**: 44x24px, sage green when on

## Screen Details

### 06-research.html
- 5 tabs: Keywords (default), Trends, Competitors, Niche Finder, Listing Optimizer
- Keywords: pill search input, results table with sparklines, competition bars, CPC
- Trends: 3-column category cards with trend badges, time range selector (7D/30D/90D)
- Competitors: URL input, shop overview card, top listings table with quality grades
- Niche Finder: AI-powered (btn-ai), filter dropdowns, niche cards with competition/demand badges
- Listing Optimizer: URL input, grade circle (B+), score breakdown with progress bars, AI suggestion checkboxes

### 07-pod-hub.html
- 5 tabs: Providers (default), Designs, Mockups, Templates, Push to Market
- Providers: 4-column card grid (Printify, Printful, Gooten, CustomCat) with connect/manage states
- Designs: folder sidebar + 4-column design grid with hover overlay (Edit/Use actions)
- Mockups: 3-step wizard (select design, product type selection cards, color/placement) + generated mockups grid
- Templates: category filters, template cards with "Use Template" CTA
- Push to Market: platform checkboxes, AI optimize toggle, status tracker table

### 08-analytics.html
- Time range selector (7D/30D/90D/Custom) + Export Report button
- 4 KPIs: Total Revenue, Total Orders, Avg Order Value, Profit Margin
- Revenue by Channel: stacked bar chart (Etsy/Shopify/Amazon/TikTok) at 2/3 width
- Revenue by Shop: SVG donut chart at 1/3 width
- Product Performance: 7-row table with sparklines
- SEO Trends: SVG polyline keyword rankings chart + improving/declining keyword lists

### 09-settings.html
- Vertical pill tabs sidebar (7 tabs): Integrations, Billing, Team, Notifications, Account, API Keys, Sync Settings
- Integrations: connected platform cards with disconnect buttons
- Billing: current plan card with usage stats, 3-plan comparison, billing history table
- Team: member cards with role/status badges, invite button
- Notifications: toggle switches per notification type with email/in-app preferences
- Account: profile form, password change, 2FA toggle, danger zone delete
- API Keys: masked key table, usage stats, documentation link
- Sync Settings: shop selector, radio buttons for frequency/conflict resolution, field-level sync toggles, sync event log table
