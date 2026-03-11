# Phase 3: Smart Dashboard Merge

**Priority:** P0 | **Status:** completed | **Effort:** Medium | **Depends on:** Phase 1, 2

## Overview

Redesign `03-dashboard.html` to serve as the primary landing page for BOTH new and returning users. Replace separate Home (onboarding) + Dashboard (basic KPIs) with a unified Smart Dashboard that shows actionable data immediately.

## Context Links
- PSYCH Audit Dashboard section: `plans/reports/brainstorm-260309-0119-psych-framework-audit-design-language.md` → Section 3.3
- PSYCH wireframe updates already applied: `plans/reports/ui-ux-designer-260309-0129-psych-wireframe-updates.md` → "03-dashboard.html"
- DP Dashboard screenshot: `docs/dodgeprint/dp-02-dashboard.png`
- DP Home screenshot: `docs/dodgeprint/dp-10-home-full-sidebar.png`
- Brainstorm: `plans/reports/brainstorm-260310-2246-psych-redesign-ocean-blue.md` → "Smart Dashboard"

## Key Insights
- Current dashboard already has PSYCH elements: greeting line, sync pulse, KPI trends, AI insight card, empty state
- Need to ADD: Quick actions bar, top products widget, pending alerts feed, onboarding overlay for new users
- Getvela skips dashboard entirely (listings = landing) — we differentiate by having a USEFUL dashboard
- DodgePrint current home page is pure onboarding (0 value for returning users 95% of sessions)

## Related Code Files

### Modify
- `docs/wireframes/03-dashboard.html` — Major content restructure

### Reference
- `docs/wireframes/01-onboarding.html` — Onboarding elements to conditionally show

## Implementation Steps

### Step 1: Restructure Dashboard Layout

New layout (top→bottom):

```
┌─────────────────────────────────────────────────────────┐
│ Header: "Good morning, Leo" + Sync Pulse + Shop Switcher │
├─────────────────────────────────────────────────────────┤
│ [KPI Row] Revenue ↑12% | Orders | Listings | Sync ✓     │
│           Each with sparkline + trend arrow              │
├───────────────────────────┬─────────────────────────────┤
│ Quick Actions (3 cards)   │ AI Insight Card (gold)      │
│ Create · Import · Deploy  │ "Vintage trending +34%..."  │
├───────────────────────────┼─────────────────────────────┤
│ Top Products Table (5)    │ Pending Actions Feed        │
│ Rank, Name, Sales, Views  │ • 2 failed deployments      │
│ Platform badge per row    │ • 3 listings expiring       │
│                           │ • 1 shop needs reconnect    │
├───────────────────────────┴─────────────────────────────┤
│ Activity Feed (compact, last 10 items)                   │
└─────────────────────────────────────────────────────────┘
```

### Step 2: Upgrade KPI Cards

Each KPI card gets:
- Large number (font-mono, 24px)
- Trend arrow + percentage: `↑12% vs last week` (green up / red down)
- Mini sparkline (7 bars, using existing `.sparkline` component)
- Subtitle: "Last 7 days" muted text
- Time range selector at row level: 7d / 14d / 30d

```html
<div class="kpi-card card-static rounded-xl p-4">
  <div class="flex items-center justify-between mb-1">
    <span class="text-xs font-medium" style="color:var(--text-secondary)">Revenue</span>
    <i data-lucide="dollar-sign" class="w-4 h-4" style="color:var(--text-tertiary)"></i>
  </div>
  <div class="flex items-end gap-3">
    <span class="text-2xl font-bold font-mono" style="color:var(--text-primary)">$4,823</span>
    <span class="text-xs font-medium mb-1" style="color:var(--success)">↑ 12.3%</span>
  </div>
  <div class="flex items-center justify-between mt-2">
    <span class="text-[11px]" style="color:var(--text-tertiary)">vs last week</span>
    <div class="sparkline">
      <span style="height:8px"></span><span style="height:12px"></span>
      <span style="height:10px"></span><span style="height:14px"></span>
      <span style="height:11px"></span><span style="height:16px"></span>
      <span style="height:18px"></span>
    </div>
  </div>
</div>
```

KPIs: Revenue, Orders, Active Listings, Sync Status (4 cards)

### Step 3: Add Quick Actions Row

3 action cards in a row below KPIs:

```html
<div class="grid grid-cols-3 gap-3">
  <button class="card-static rounded-xl p-4 text-left hover:border-blue cursor-pointer transition-all"
          style="border:1px solid var(--border)" onclick="navigate('listings')">
    <i data-lucide="plus-circle" class="w-5 h-5 mb-2" style="color:var(--brand-primary)"></i>
    <div class="text-sm font-semibold" style="color:var(--text-primary)">Create Listing</div>
    <div class="text-xs mt-0.5" style="color:var(--text-tertiary)">Add a new product</div>
  </button>
  <!-- Import Products, Deploy to Shop similarly -->
</div>
```

### Step 4: Add Top Products Widget

Table showing top 5 products by revenue:

| # | Product | Platform | Revenue | Sales |
|---|---------|----------|---------|-------|
| 1 | Scrunchie Set... | 🟠 Etsy | $1,240 | 47 |
| 2 | Vintage Tote... | 🟢 Shopify | $890 | 23 |

With "View all →" link to Analytics.

### Step 5: Add Pending Actions Feed

Right column, alert-style cards:

```html
<div class="space-y-2">
  <div class="flex items-start gap-3 p-3 rounded-lg" style="background:var(--danger-bg)">
    <i data-lucide="alert-circle" class="w-4 h-4 mt-0.5 flex-shrink-0" style="color:var(--danger)"></i>
    <div>
      <div class="text-xs font-medium" style="color:var(--danger)">2 failed deployments</div>
      <div class="text-[11px] mt-0.5" style="color:var(--text-secondary)">Etsy — CozyPrints · 3h ago</div>
    </div>
    <button class="ml-auto text-xs font-medium" style="color:var(--danger)">Fix</button>
  </div>
  <!-- More alerts: expiring listings (warning), shop reconnect (info) -->
</div>
```

### Step 6: Conditional Onboarding for New Users

Add a hidden onboarding overlay that shows when no shops connected:

```html
<div id="dashboardOnboarding" class="hidden">
  <!-- Full-width card overlaying the dashboard content -->
  <div class="card-static rounded-2xl p-8 text-center" style="border:2px dashed var(--border)">
    <i data-lucide="rocket" class="w-12 h-12 mx-auto mb-4" style="color:var(--brand-primary)"></i>
    <h2 class="text-xl font-bold mb-2">Welcome to Dodgeprint</h2>
    <p class="text-sm mb-6" style="color:var(--text-secondary)">Connect your first shop to unlock all features</p>
    <div class="flex gap-3 justify-center">
      <button class="btn-primary px-6 py-2.5 text-sm font-semibold">Connect Shop</button>
      <button class="btn-ghost px-6 py-2.5 text-sm font-medium">Watch Tutorial</button>
    </div>
  </div>
</div>
```

JS toggle: `if (!hasConnectedShops) show onboarding overlay`

### Step 7: Maintain PSYCH Elements
Ensure existing PSYCH patterns are preserved:
- Greeting line: "Good morning, Leo. All 3 shops are synced." ✓
- Sync Pulse in header ✓
- Recovery Toast ✓
- AI Insight Card (gold-tinted) ✓
- Empty state for new users ✓

## Todo List

- [x] Restructure dashboard layout (grid: KPIs → actions → products+alerts → activity)
- [x] Upgrade KPI cards with sparklines + trend arrows
- [x] Add time range selector (7d/14d/30d)
- [x] Add Quick Actions row (3 cards)
- [x] Add Top Products widget
- [x] Add Pending Actions feed
- [x] Add conditional onboarding overlay
- [x] Preserve all existing PSYCH elements
- [x] Test layout in light + dark mode

## Success Criteria
- Dashboard loads with actionable data for returning users
- New users see onboarding overlay on top of real dashboard structure
- KPIs show trends with sparklines
- Quick actions reduce clicks to common tasks
- Pending actions create urgency to act
