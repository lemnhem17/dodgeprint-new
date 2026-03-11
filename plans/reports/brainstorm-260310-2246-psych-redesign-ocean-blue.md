# Brainstorm: PSYCH Redesign + Ocean Blue Palette
**Date:** 2026-03-10 | **Status:** Approved

---

## Problem Statement

DodgePrint (v1.6.0) has strong feature breadth (multi-platform, fulfillment, AI, analytics) but UX/UI lags behind Getvela's polished experience. Current wireframes use "Warm Organic" palette (Sage/Gold/Coral). User wants full redesign with Ocean Blue palette while maintaining competitive parity with Getvela's core UX patterns.

## Context & References

| Document | Path | Status |
|----------|------|--------|
| PSYCH Audit (approved) | `plans/reports/brainstorm-260309-0119-psych-framework-audit-design-language.md` | Build on top |
| PSYCH Wireframe Updates | `plans/reports/ui-ux-designer-260309-0129-psych-wireframe-updates.md` | Integrate |
| PSYCH Wireframe Batch 2 | `plans/reports/ui-ux-designer-260309-0134-psych-wireframe-updates-batch2.md` | Integrate |
| Wireframe Feature Reqs | `plans/reports/brainstorm-260308-1019-wireframe-feature-requirements.md` | Maintain |
| Getvela UX Research | `docs/getvela/getvela-ux-research.md` | Reference |
| Getvela UI/UX Analysis | `docs/wireframes/getvela/getvela-uiux-analysis.md` | Reference |
| DP UI/UX Analysis | `docs/wireframes/dodgeprint/dodgeprint-uiux-analysis.md` | Reference |
| DP vs Getvela | `docs/wireframes/dodgeprint/dodgeprint-vs-getvela-improvements.md` | Reference |
| Current Design Tokens | `docs/wireframes/_shared-tokens.css` | Update |
| 9 Wireframe HTMLs | `docs/wireframes/01-*.html` → `09-*.html` | Update |
| DP Screenshots (21) | `docs/dodgeprint/dp-01` → `dp-21` | Visual reference |
| Getvela Screenshots (50) | `docs/getvela/screenshots/` + `docs/wireframes/getvela/` | Visual reference |

---

## Decisions Made

### 1. Color Palette: Ocean Blue
**From:** Warm Organic (Sage #4A7C59, Gold #D4A843, Coral #E8734A)
**To:** Ocean Blue

```css
:root {
  --brand-primary: #3B82F6;        /* Blue 500 — CTAs, active states */
  --brand-primary-light: #60A5FA;  /* Blue 400 */
  --brand-primary-bg: #EFF6FF;     /* Blue 50 */
  --brand-primary-dark: #2563EB;   /* Blue 600 */
  --brand-secondary: #F97316;      /* Orange 500 — Brand continuity, highlights */
  --brand-secondary-bg: #FFF7ED;   /* Orange 50 */
  --brand-accent: #06B6D4;         /* Cyan 500 — Data viz, analytics */
  --brand-accent-bg: #ECFEFF;      /* Cyan 50 */
  --bg-page: #F9FAFB;             /* Gray 50 */
  --bg-card: #FFFFFF;
  --bg-sidebar: #FFFFFF;
  --bg-muted: #F3F4F6;            /* Gray 100 */
  --text-primary: #111827;         /* Gray 900 */
  --text-secondary: #6B7280;       /* Gray 500 */
  --text-tertiary: #9CA3AF;        /* Gray 400 */
  --border: #E5E7EB;              /* Gray 200 */
  --border-light: #F3F4F6;        /* Gray 100 */
  --danger: #EF4444;              /* Red 500 */
  --danger-bg: #FEF2F2;           /* Red 50 */
  --info: #3B82F6;                /* Same as primary */
  --info-bg: #EFF6FF;
  --success: #22C55E;             /* Green 500 */
  --success-bg: #F0FDF4;          /* Green 50 */
  --purple: #8B5CF6;              /* Violet 500 — AI/Premium features */
  --purple-bg: #F5F3FF;           /* Violet 50 */
  --shadow-xs: none;
  --shadow-sm: 0 1px 2px rgba(0,0,0,0.05);
  --shadow-md: 0 4px 6px -1px rgba(0,0,0,0.07);
  --shadow-lg: 0 10px 15px -3px rgba(0,0,0,0.08);
}

[data-theme="dark"] {
  --brand-primary: #60A5FA;        /* Blue 400 for dark */
  --brand-primary-light: #3B82F6;
  --brand-primary-bg: #1E293B;     /* Slate 800 */
  --brand-primary-dark: #93C5FD;
  --brand-secondary: #FB923C;      /* Orange 400 */
  --brand-secondary-bg: #1C1917;
  --brand-accent: #22D3EE;         /* Cyan 400 */
  --brand-accent-bg: #164E63;
  --bg-page: #111827;              /* Gray 900 */
  --bg-card: #1F2937;             /* Gray 800 */
  --bg-sidebar: #1F2937;
  --bg-muted: #374151;            /* Gray 700 */
  --text-primary: #F9FAFB;        /* Gray 50 */
  --text-secondary: #9CA3AF;      /* Gray 400 */
  --text-tertiary: #6B7280;       /* Gray 500 */
  --border: #374151;              /* Gray 700 */
  --border-light: #1F2937;
  --danger: #F87171;
  --danger-bg: #1F1215;
  --success: #4ADE80;
  --success-bg: #14261C;
  --purple: #A78BFA;
  --purple-bg: #1E1633;
  --shadow-sm: 0 1px 2px rgba(0,0,0,0.2);
  --shadow-md: 0 4px 6px -1px rgba(0,0,0,0.25);
  --shadow-lg: 0 10px 15px -3px rgba(0,0,0,0.3);
}
```

**Font:** Keep Plus Jakarta Sans (excellent readability) + JetBrains Mono (data)

### 2. Dual-Layer Scoring System

**Layer 1: Listing Quality Score** (Products table inline)
- Grade: A+ → F, color-coded badge
- Factors: Title (20%), Tags (20%), Description (20%), Photos (15%), Price/Shipping (15%), Category/Details (10%)
- Actionable tooltips: "Add 3 more tags to reach A"
- Real-time update during editing
- Filter panel: bar chart distribution (F→A)

**Layer 2: Business Performance Score** (Analytics/Dashboard)
- Rating: 0-100 scale with star visualization ★★★★☆
- Factors: Sales volume, Views, Conversion rate, Favorers growth, Revenue trend
- Time-based: 7d/14d/30d comparison
- Available only when shop connected + data exists
- Insights: "Trending up 12%, top 15% in category"

### 3. UX Strategy: Competitive Parity First

Priority order for Getvela-parity features:

| Priority | Feature | Getvela Reference |
|----------|---------|-------------------|
| P0 | Collapsible sidebar (icon rail 48px ↔ expanded 220px) | Icon sidebar + sub-nav |
| P0 | Smart Dashboard (merge Home + Dashboard) | Listings as landing |
| P0 | Products table enrichment (score, hover actions, bulk bar) | Listings page |
| P0 | Confidence Bar + Recovery Toast (PSYCH) | N/A — DP advantage |
| P1 | Filter sidebar panel (Products) | Filter sidebar with score chart |
| P1 | Bulk edit mode (select → edit title/tags/price) | Bulk Editor core feature |
| P1 | Listing Quality Score system | AI Score A-F |
| P2 | Advanced Product Editor (horizontal tabs, sticky bar) | Listing Editor multi-tab |
| P2 | Dark mode (Ocean Blue dark palette) | Dark default + Light |
| P2 | AI inline integration (title/tags/description assist) | Vela AI |
| P3 | Business Performance Score | N/A — DP differentiation |
| P3 | Charts & graphs (Analytics upgrade) | N/A — DP differentiation |

---

## PSYCH Framework Application (addendum to approved audit)

### New Insights from Screenshot Analysis

**From Getvela screenshots:**
1. **Bulk Edit + AI** — AI is INLINE in workflow, not separate page. Title style toggle (Classic/Concise), instruction input, real-time score badges
2. **Toolbar state management** — Header transforms on selection: "Draft 5 selected" + action buttons replace title
3. **Hover progressive disclosure** — 4 icon buttons appear at row end on hover, no context menu needed
4. **Tags chip design** — Teal outlined chips with X, "0 remaining" counter, AI button adjacent

**From DodgePrint screenshots:**
1. **Create Products cognitive overload** — 6 choices upfront; need smart default
2. **Analytics potential** — Medal rankings, country flags; needs charts/trends
3. **Calculator isolation** — Good tool, needs embedding in product editor flow
4. **Button inconsistency** — Green, purple, blue gradient CTAs; need unified system
5. **What's New** — 31K px tall page; needs pagination/modal
6. **Imports dual CTA** — 2 green buttons same priority; need primary/secondary

### PSYCH Additions to Wireframe Updates

| Screen | New PSYCH Element | Type |
|--------|-------------------|------|
| All | Ocean Blue tokens swap | Visual refresh |
| Dashboard | Business Performance mini-cards + AI Insight | Yearning + Persuasion |
| Listings/Products | Quality Score badges + filter bar chart | Persuasion + Habit |
| Listings/Products | Hover quick actions (Edit/Deploy/Duplicate/Delete) | Simplicity + Habit |
| Listings/Products | Contextual toolbar (empty/data/selected states) | Simplicity |
| Product Editor | AI inline buttons (title/desc/tags) | Yearning |
| Analytics | Trend charts, comparison arrows | Credibility + Yearning |
| Settings | Simplified, "Saved ✓" auto-feedback | Simplicity |
| All | Skeleton loading states | Credibility (speed feel) |

---

## Implementation Approach

Update existing 9 wireframe HTML files + `_shared-tokens.css`:

1. **Phase 1: Design System Swap** — Update tokens to Ocean Blue, verify all 9 screens render correctly
2. **Phase 2: Navigation & Dashboard** — Collapsible sidebar, Smart Dashboard merge
3. **Phase 3: Products/Listings Core** — Table enrichment, filter panel, bulk actions, Quality Score
4. **Phase 4: Editor & AI** — Product editor horizontal tabs, AI inline, sticky action bar
5. **Phase 5: Analytics & Polish** — Charts, Business Score, micro-animations, dark mode verification

---

## Success Criteria

- [ ] All 9 wireframes use Ocean Blue palette (light + dark)
- [ ] Sidebar collapses to 48px icon rail
- [ ] Dashboard shows KPIs + trends + quick actions (not onboarding)
- [ ] Products table has Quality Score, hover actions, bulk action bar
- [ ] Filter sidebar panel with score distribution chart
- [ ] Listing Editor has horizontal tabs + AI buttons
- [ ] PSYCH patterns maintained: Confidence Bar, Recovery Toast, Sync Pulse
- [ ] Visual parity with Getvela on core flows
- [ ] DodgePrint differentiators highlighted: Analytics, Fulfillment, Multi-platform

---

## Unresolved Questions

1. **Font change?** — Keep Plus Jakarta Sans or switch to Inter/Geist? (Recommendation: keep, it's excellent)
2. **Logo update?** — DodgePrint logo uses orange/green; does Ocean Blue palette create conflict?
3. **Sidebar grouping** — Exact menu items and grouping for reduced 4-section sidebar?
4. **Product Editor scope** — How much of Getvela's editor complexity to replicate vs. DodgePrint's template-first approach?
5. **Mobile wireframes** — Current wireframes are desktop-only; mobile needed?
