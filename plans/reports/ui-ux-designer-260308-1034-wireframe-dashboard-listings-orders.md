# Wireframe Report: Dashboard, Listings, Orders

## Summary

Built 3 self-contained wireframe screens for Dodgeprint e-commerce seller platform using the "Warm Organic" design system. All files use shared tokens CSS and navigation JS. Updated `_shared-navigation.js` NAV_FILE_MAP to include new screen routes.

## Files Created/Modified

### New Files
- `/docs/wireframes/03-dashboard.html` — Dashboard with KPIs, sync status, chart, top products, activity feed
- `/docs/wireframes/04-listings.html` — Listings grid with side panel (5 tabs), bulk actions bar, import modal
- `/docs/wireframes/05-orders.html` — Orders table with status filter tabs, order detail side panel, collapsible analytics

### Modified Files
- `/docs/wireframes/_shared-navigation.js` — Added `orders`, `analytics`, updated `dashboard`/`listings` routes to new `03-`/`04-` filenames
- `/docs/wireframes/_shared-tokens.css` — Added `.side-panel` and `.panel-tab` styles

## Design Decisions

### Dashboard (03)
- KPI row: single white card container, 4 columns divided by thin vertical lines (no individual card borders)
- Sync status: green/yellow/red dot indicators, "Retry" link for failed syncs
- Chart: 7 bars (Mon-Sun), sage green at 60% opacity, coral highlight on peak day (Thu)
- Top products: thumbnail + title + platform badge + revenue, sorted by revenue
- Activity feed: color-coded icon circles per event type

### Listings (04)
- Platform tabs: All | Etsy | Shopify | Amazon | TikTok
- Table: 8 rows with editable cells (title, price, stock via `makeEditable`)
- Quality grades: A+/A/B+/B/B-/C with color-coded backgrounds
- Side panel: 5 tabs (Details, Images, SEO, Platforms, History)
  - SEO tab: quality score breakdown bars + AI suggestions
  - History tab: timeline with colored dots
- Bulk action bar: floating pill at bottom center
- Import modal: 2 tabs (From Platform with shop selector, CSV Upload with drag-drop)

### Orders (05)
- KPI row: Revenue, AOV, Pending (with "Action needed" badge), Return Rate
- Status tabs with count badges: All/Pending/Processing/Shipped/Delivered/Cancelled
- Table: 8 rows, status pills color-coded (gold=pending, blue=processing, sage=shipped, muted=delivered, red=cancelled)
- Order detail panel: customer info, itemized order with subtotal/shipping/total, fulfillment section (tracking + carrier + ship/print buttons), order timeline
- Collapsible analytics: revenue trend mini-chart + platform revenue comparison bars

### Shared Patterns
- All 3 screens share identical sidebar (248px, 7 nav items + Settings) and header (search pill, shop switcher, theme toggle, bell, avatar)
- Shop switcher uses dynamic `renderShopDropdown()` from shared JS with localStorage persistence
- Dark mode toggle persists via localStorage
- Side panels: 450px slide-in from right, close on Escape key
- Mobile: sidebar hidden, bottom nav bar shown

## Design Token Compliance
- Colors: sage/gold/coral/cream palette per design-guidelines.md
- Typography: Plus Jakarta Sans (800/700/600/500/400), JetBrains Mono for data
- Shadows: none on cards (white-on-cream contrast), shadow-md on dropdowns/panels
- Radius: 16px cards, pill buttons, 12px ghost buttons, 8px inputs
- Spacing: 28px page padding, 16px grid gaps
