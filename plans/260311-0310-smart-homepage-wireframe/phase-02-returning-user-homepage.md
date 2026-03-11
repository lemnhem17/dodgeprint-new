# Phase 2: Returning User Homepage Layout

## Overview
- **Priority:** P1
- **Status:** Complete
- **Effort:** 3h
- Create HTML/CSS mockup for returning user (has data) homepage with all 8 sections

## Context Links
- Brainstorm: `plans/reports/brainstorm-260311-0303-smart-homepage-redesign.md`
- Design tokens: `docs/wireframes/_shared-tokens.css`
- Existing dashboard ref: `docs/wireframes/03-dashboard.html`
- KPI pattern ref: `docs/design-guidelines.md` → KPI Cards section

## Key Insights
- Current dashboard has only 4 basic KPI cards — no trends, no actions, no engagement
- New design adds 8 sections, ordered by priority: KPIs → Quick Actions → Next Step → Recent/Pending → Revenue → What's New → Tip → Community
- Revenue chart: SVG mock sparkline (Recharts for real React impl later)
- What's New and Daily Tip are conditional/dismissible

## Requirements

### Functional
- 4 KPI cards with trend indicators (↑↓%)
- Quick Actions bar (3 buttons)
- Personalized "Suggested Next Step" card
- 2-column: Recent Products + Pending Actions
- Revenue Trend mini chart (SVG sparkline + platform breakdown)
- What's New section (2-3 items, dismissible)
- Daily Tip (1 tip, dismissible, with CTA)
- Community Stats footer line

### Non-functional
- Mock data for all sections
- Ocean Blue design tokens
- Dark mode support
- Desktop-first layout

## Architecture

```
13-homepage-returning-user.html
├── Sidebar (reuse _shared-navigation.js)
├── Main Content
│   ├── Section 1: KPI Row (4 columns)
│   │   ├── Products: 247 (↑12 this week)
│   │   ├── Orders: 58 (↑5 this week)
│   │   ├── Revenue: $4,230 (↑18%)
│   │   └── Shops: 3 (All synced ✓)
│   ├── Section 2: Quick Actions Bar
│   │   ├── [+ Create Product]
│   │   ├── [Import Products]
│   │   └── [Deploy to Shop]
│   ├── Section 3: Suggested Next Step (card)
│   │   └── "You have 12 products but 0 deployed. Deploy to Etsy!"
│   ├── Section 4: Two-Column Grid
│   │   ├── Recent Products (list, 5 items)
│   │   └── Pending Actions (list, alerts)
│   ├── Section 5: Revenue Trend
│   │   ├── SVG sparkline (7-day mock)
│   │   └── Platform breakdown: Etsy 60% | Shopify 30% | TikTok 10%
│   ├── Section 6: What's New (dismissible)
│   │   ├── v1.7.0 items (2-3 bullets)
│   │   └── [See all updates →]
│   ├── Section 7: Daily Tip (dismissible)
│   │   ├── Tip text + CTA button
│   │   └── [Dismiss ×]
│   └── Section 8: Community Stats (footer)
│       └── "12,450 sellers · 2.3M products deployed"
```

## Related Code Files
- **Create:** `docs/wireframes/13-homepage-returning-user.html`
- **Reference:** `docs/wireframes/_shared-tokens.css` (no modify)
- **Reference:** `docs/wireframes/_shared-navigation.js` (no modify)
- **Reference:** `docs/wireframes/03-dashboard.html` (KPI pattern reference)

## Implementation Steps

1. Create `13-homepage-returning-user.html` with standard boilerplate (copy head from `03-dashboard.html`)
2. Include shared tokens + Tailwind + Lucide + Jakarta Sans

3. **Section 1: KPI Cards** (4-column grid)
   - Each card: white bg, 16px radius, 20px padding, no shadow (white-on-cream contrast)
   - Layout per card: small label (12px, 500, text-secondary) ABOVE → large number (26px, 800, text-primary) → trend badge (pill, green bg for up / red bg for down)
   - Mock data: Products 247 ↑12, Orders 58 ↑5, Revenue $4,230 ↑18%, Shops 3 ✓ synced

4. **Section 2: Quick Actions** (horizontal bar, margin-top 16px)
   - 3 buttons: "+ Create Product" (blue primary pill), "Import Products" (ghost), "Deploy to Shop" (ghost)
   - Icons: plus, upload, rocket

5. **Section 3: Suggested Next Step** (single card, blue-bg tint)
   - Icon (pin/target) + text + CTA button
   - Mock: "You have 12 products but 0 deployed. Deploy to Etsy to start selling!"
   - CTA: "Deploy Now →" blue button

6. **Section 4: Two-Column Grid** (gap 16px)
   - **Left — Recent Products:**
     - Card title "Recent Products" + "View All →" link
     - 5 items: thumbnail (40x40 placeholder) + product name + "Edited 2h ago" text
   - **Right — Pending Actions:**
     - Card title "Pending Actions"
     - Alert items with color-coded icons:
       - ⚠ 3 failed deployments (danger)
       - 🔄 2 syncing (info/blue)
       - 📦 5 orders pending (orange/secondary)
     - Each item: icon + text + "View →" link

7. **Section 5: Revenue Trend** (card)
   - Title: "Revenue Trend (7 days)" + date range subtitle
   - SVG sparkline: hardcoded path mimicking upward trend
   - Below chart: 3 platform pills — "Etsy 60%" (orange) | "Shopify 30%" (green) | "TikTok 10%" (cyan)

8. **Section 6: What's New** (card, dismissible)
   - Header: "🆕 What's New — v1.7.0" + "×" dismiss button
   - 2-3 bullet items with blue dot markers
   - Footer link: "See all updates →"
   - JS: dismiss button hides card, stores in localStorage

9. **Section 7: Daily Tip** (card, dismissible)
   - Subtle blue-bg tinted card
   - "💡 Did you know?" header + tip text + CTA button + dismiss "×"
   - Mock: "Listings with 10+ tags get 40% more views on Etsy" → [Try Tag Optimizer →]
   - JS: dismiss hides, localStorage tracks

10. **Section 8: Community Stats** (footer line, margin-top 24px)
    - Centered text, text-tertiary, 12px
    - "🌍 12,450 sellers · 2.3M products deployed · Join 340 sellers who started this week"

11. Dark mode support + Lucide init

## Mock Data Summary

| Section | Data |
|---------|------|
| KPI - Products | 247, ↑12 this week |
| KPI - Orders | 58, ↑5 this week |
| KPI - Revenue | $4,230, ↑18% |
| KPI - Shops | 3, All synced |
| Recent Products | 5 items: "Vintage Sunset Tee", "Mountain Mug Set", "Abstract Poster A3", "Retro Cat Hoodie", "Ocean Wave Sticker" |
| Pending Actions | 3 failed deploys, 2 syncing, 5 orders pending |
| Revenue Trend | 7-day: [320, 410, 380, 520, 490, 610, 580] |
| Platform Split | Etsy 60%, Shopify 30%, TikTok 10% |
| What's New | v1.7.0: AI Background Removal upgraded, TikTok analytics, Bulk deploy |
| Daily Tip | "Listings with 10+ tags get 40% more views on Etsy" |
| Community | 12,450 sellers, 2.3M products, 340 this week |

## Todo List

- [ ] Create HTML file with boilerplate + sidebar
- [ ] KPI cards row (4 cols) with trend badges
- [ ] Quick Actions bar (3 buttons)
- [ ] Suggested Next Step card
- [ ] Recent Products + Pending Actions (2 cols)
- [ ] Revenue Trend SVG sparkline + platform breakdown
- [ ] What's New dismissible section
- [ ] Daily Tip dismissible section
- [ ] Community Stats footer
- [ ] Dark mode support
- [ ] Hover states and micro-interactions

## Success Criteria
- All 8 sections render on desktop
- KPI cards show trend indicators with correct color coding
- Dismissible sections (What's New, Daily Tip) work via JS + localStorage
- SVG sparkline renders a convincing revenue trend
- Dark mode toggle works for all sections
- Visual consistency with existing wireframes (Ocean Blue palette)

## Risk Assessment
- **SVG sparkline complexity** — keep simple, hardcoded path. Not interactive.
- **8 sections may feel long** — mitigate with generous spacing, card grouping, and dismissible sections
- **Responsive at tablet** — 4-col KPI → 2-col, 2-col grid stays 2-col. Low risk for mockup.

## Next Steps
- Phase 3: Merge both views into single file with mode toggle
