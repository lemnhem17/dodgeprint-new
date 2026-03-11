# Phase 5: Dashboard, Analytics & Notifications

## Context
- Source: v1.5.2 (Top Products on dashboard, Notification page), v1.5.4.1 (Ads Fee vs Platform Fee)
- Target: `03-dashboard.html`, `08-analytics.html`, `_shared-navigation.js`
- Current state: Dashboard has basic "Top Products" mention. Analytics shows revenue by platform but no fee breakdown. No notification bell or page.

## Overview
- Priority: MEDIUM
- Status: Pending
- Effort: 2h

## Requirements

### A. Dashboard — Enhance Top Products (03-dashboard.html)

**Top Products Section:**
- Table/cards showing top 5-10 products
- Columns: Rank, Product Image/Name, Shop, Platform, Sales Count, Revenue, Views
- Time filter: 7d / 30d / All time
- "View All" link to full listings page
- Per-shop or aggregate toggle

### B. Analytics — Fee Breakdown (08-analytics.html)

**Etsy Fee Analysis Section:**
Add new card/section within Etsy platform analytics:

- **Ads Fee** (Etsy Ads spend): amount + % of revenue
- **Platform Fee** (listing fees, transaction fees): amount + % of revenue
- **Shipping Label Cost**: if applicable
- **Net Revenue**: Revenue - All Fees
- Visual: stacked bar or donut chart showing fee composition
- Time period selector aligned with existing analytics

**Fee Comparison Table:**
- Columns: Fee Type, Amount, % of Revenue, vs Previous Period
- Rows: Ads Fee, Listing Fee, Transaction Fee, Payment Processing Fee, Shipping Label
- Total row

### C. Notification System

**Notification Bell in Nav (_shared-navigation.js):**
- Bell icon in top bar (near account menu)
- Unread count badge (red circle with number)
- Click → dropdown with recent 5 notifications
- "View All" link to full notification page

**Notification Page (21-notifications.html or modal):**
- Notification list with:
  - Icon per type (order=cart, disconnect=unplug, sync=refresh, error=alert)
  - Title + description + timestamp
  - Read/unread state (bold vs normal)
  - "Mark as Read" per item + "Mark All Read" bulk
- Filter tabs: All | Orders | Shops | Sync | Errors
- Empty state when no notifications

## Implementation Steps

1. **Dashboard**: Open `03-dashboard.html`, locate/enhance Top Products section with table, time filter, aggregate toggle
2. **Analytics**: Open `08-analytics.html`, add "Fee Breakdown" card in Etsy section with stacked visualization + table
3. **Nav bell**: Open `_shared-navigation.js`, add notification bell component with dropdown
4. **Notification page**: Create `21-notifications.html` using shared template pattern from other wireframes

## Todo
- [ ] Enhance Top Products section in dashboard (table + filters)
- [ ] Add Fee Breakdown card in analytics (Ads vs Platform)
- [ ] Fee comparison table
- [ ] Notification bell + dropdown in shared nav
- [ ] Create 21-notifications.html (or modal)

## Success Criteria
- Top Products shows ranked products with revenue data
- Fee breakdown clearly separates Ads Fee from Platform Fee
- Notification bell visible in nav with unread count
- Notification list filterable by type
