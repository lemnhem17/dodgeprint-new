# Wireframe Feature Requirements Brainstorm
**Date:** 2026-03-08 | **Status:** Approved

---

## Decision: Wireframe Structure
**Split per-screen + shared base.** Each screen = 1 HTML file. Shared CSS tokens + JS nav in `_shared.css` / `_shared.js`.

Benefits: smaller files (~200-300 lines each), easier agent updates, no token limit issues.

---

## Multi-Shop Context (CRITICAL)
Users have MULTIPLE shops PER platform:
- Etsy: Shop A, Shop B
- Amazon: Store 1, Store 2
- TikTok: Shop X
- Shopify: Store Y

**UI Pattern:** Shop switcher dropdown in header: "All Shops" | "Etsy - Shop A" | "Amazon - Store 1"
Dashboard/Listings/Orders data filters by selected shop.

---

## Screen Requirements (9 total)

### 1. Dashboard (UPDATE)
**Existing:** KPI cards, Sales chart, Activity feed, Quick actions
**Add:**
- Shop switcher dropdown (header) — filter all data by shop
- Sync Status panel — per-shop sync status (synced 5m ago / syncing... / error)
- Top Products widget — top 5-10 bestsellers across platforms
- Multi-shop awareness in KPIs (aggregate or per-shop based on switcher)

### 2. Listings (UPDATE)
**Existing:** Spreadsheet grid, inline editing, platform tabs, bulk actions, quality grades
**Add:**
- Side panel detail view — click listing → 400-500px panel slides from right
  - Tabs: Details, Images, SEO Score, Platform Status, History
  - Edit fields inline within panel
  - Quick actions: sync, duplicate, delete
- Import/Export flow
  - Import: CSV upload, platform import (pull from connected shop)
  - Export: CSV/Excel download, filtered export
- Shop filter in grid (which shop owns this listing)

### 3. Research (UPDATE)
**Existing:** Keyword research, Trends, Competitor analysis
**Add:**
- Niche Finder — AI suggests profitable niches based on market data
  - Input: category/interest → Output: niche suggestions with competition score, demand, trend
- Listing Optimizer — paste listing URL → AI analyzes
  - SEO score breakdown (title, tags, description, images)
  - Specific improvement suggestions
  - "Apply fixes" button → auto-update listing

### 4. POD Hub (UPDATE)
**Existing:** POD providers, Design upload, Templates, Push-to-marketplace
**Add:**
- Mockup Generator — upload design → auto-generate mockups
  - Product type selector (t-shirt, mug, poster, phone case...)
  - Color/placement options
  - Download or use directly in listings
- Design Library — asset management
  - Grid view of all uploaded designs
  - Tags, folders, search
  - Usage tracking (which listings use this design)

### 5. Settings (UPDATE)
**Existing:** Integrations, Billing, Team, Notifications, Account (5 tabs)
**Add:**
- API Keys tab — generate/revoke API keys, usage stats
- Sync Settings tab — per-shop sync config
  - Sync frequency (real-time / 5min / 15min / manual)
  - Conflict resolution rules (platform wins / dodgeprint wins / ask me)
  - Auto-sync toggles per field (price, inventory, title, images)
**Total: 7 tabs**

### 6. Onboarding (KEEP)
4-step wizard: Welcome → Connect Shop → Import → Success
No changes.

### 7. Auth (NEW)
- Login page — email + password, social login (Google), "Remember me"
- Register page — name, email, password, terms checkbox
- Forgot Password — email input → reset link
- Design: centered card on cream bg, brand logo on top, minimal

### 8. Orders (NEW)
- Order list table — all orders from all platforms
  - Columns: Order ID, Customer, Platform, Shop, Items, Total, Status, Date
  - Status filter tabs: All | Pending | Shipped | Delivered | Cancelled
  - Platform/shop filter
- Fulfillment actions — mark shipped, add tracking #, print label
- Order detail side panel (same pattern as listings)
- Order analytics section:
  - Revenue per order trend
  - Average order value
  - Return rate
  - Platform comparison chart

### 9. Analytics (NEW)
- Revenue dashboard — total revenue, revenue by channel/shop, trends
- Product performance — top/bottom sellers, conversion rates
- SEO trends — keyword ranking changes, listing visibility
- Time range selector (7d / 30d / 90d / custom)
- Exportable reports

---

## File Structure (post-split)

```
docs/wireframes/
├── _shared-tokens.css          # Design tokens, variables, common styles
├── _shared-components.css      # Reusable component styles (cards, buttons, badges)
├── _shared-navigation.js       # Sidebar, header, shop switcher, dark mode
├── 01-onboarding.html
├── 02-auth.html
├── 03-dashboard.html
├── 04-listings.html
├── 05-orders.html
├── 06-research.html
├── 07-pod-hub.html
├── 08-analytics.html
├── 09-settings.html
└── dodgeprint-wireframe-full.html  # Legacy (archive)
```

---

## Resolved Decisions
1. **Analytics = separate screen** (Dashboard stays lightweight overview)
2. **Shop switcher persists** across page navigation (stored in state/localStorage)
3. Order fulfillment shipping API integration → defer post-MVP
4. Design Library storage → defer decision to implementation planning
