# Phase 6: Analytics, Scoring & Charts

**Priority:** P1 | **Status:** completed | **Effort:** Medium | **Depends on:** Phase 1

## Overview

Upgrade `08-analytics.html` with Business Performance Score (0-100), trend visualizations, revenue-by-platform breakdown, and comparison arrows. Add the second layer of the dual scoring system (Layer 1 = Listing Quality A-F in Phase 4, Layer 2 = Business Performance 0-100 here).

## Context Links
- Dual scoring design: `plans/reports/brainstorm-260310-2246-psych-redesign-ocean-blue.md` → "Dual-Layer Scoring"
- PSYCH Audit Analytics section: `plans/reports/brainstorm-260309-0119-psych-framework-audit-design-language.md` → Section 3.6
- DP Analytics screenshots: `docs/dodgeprint/dp-04-analytics.png`, `dp-05-analytics-2.png`
- Current wireframe: `docs/wireframes/08-analytics.html`

## Key Insights
- Current analytics wireframe has basic KPI cards + placeholder chart areas
- Need to ADD: Business Performance Score gauge, revenue trend chart, platform comparison, conversion funnel
- Listing Quality Score (A-F) lives on products table (Phase 4) — Business Performance Score (0-100) lives here
- Score composition: Revenue weight 30% + Order volume 20% + Conversion rate 20% + Growth trend 15% + Customer retention 15%

## Related Code Files

### Modify
- `docs/wireframes/08-analytics.html` — Charts, score gauge, trend visualizations
- `docs/wireframes/_shared-tokens.css` — Score gauge component styles

## Implementation Steps

### Step 1: Business Performance Score Gauge

Hero card at top of analytics page:

```html
<div class="card-static rounded-2xl p-6" style="border:1px solid var(--border)">
  <div class="flex items-center justify-between mb-4">
    <div>
      <h3 class="text-sm font-semibold" style="color:var(--text-secondary)">Business Performance Score</h3>
      <div class="flex items-end gap-2 mt-1">
        <span class="text-4xl font-bold font-mono" style="color:var(--text-primary)">78</span>
        <span class="text-sm font-medium mb-1" style="color:var(--success)">↑ 5 pts</span>
      </div>
      <span class="text-xs" style="color:var(--text-tertiary)">vs last month</span>
    </div>
    <!-- Score ring (CSS-only circular gauge) -->
    <div class="relative w-24 h-24">
      <svg viewBox="0 0 100 100" class="w-full h-full -rotate-90">
        <circle cx="50" cy="50" r="42" fill="none" stroke="var(--bg-muted)" stroke-width="8"/>
        <circle cx="50" cy="50" r="42" fill="none" stroke="var(--brand-primary)" stroke-width="8"
                stroke-dasharray="264" stroke-dashoffset="58" stroke-linecap="round"/>
      </svg>
      <div class="absolute inset-0 flex items-center justify-center">
        <span class="text-lg font-bold font-mono" style="color:var(--brand-primary)">78</span>
      </div>
    </div>
  </div>
  <!-- Score breakdown bars -->
  <div class="grid grid-cols-5 gap-3 mt-4">
    <div class="text-center">
      <div class="text-[10px] font-medium mb-1" style="color:var(--text-tertiary)">Revenue</div>
      <div class="h-1.5 rounded-full" style="background:var(--bg-muted)">
        <div class="h-full rounded-full" style="width:85%;background:var(--success)"></div>
      </div>
      <div class="text-[10px] font-mono mt-0.5" style="color:var(--text-secondary)">85</div>
    </div>
    <!-- Orders, Conversion, Growth, Retention similarly -->
  </div>
</div>
```

### Step 2: Revenue Trend Chart Area

Placeholder chart with labeled axes (wireframe fidelity):

```html
<div class="card-static rounded-xl p-5" style="border:1px solid var(--border)">
  <div class="flex items-center justify-between mb-4">
    <h3 class="text-sm font-semibold" style="color:var(--text-primary)">Revenue Trend</h3>
    <div class="flex gap-1">
      <button class="px-2.5 py-1 rounded-md text-[11px] font-medium"
              style="background:var(--brand-primary-bg);color:var(--brand-primary)">7d</button>
      <button class="px-2.5 py-1 rounded-md text-[11px] font-medium"
              style="color:var(--text-tertiary)">14d</button>
      <button class="px-2.5 py-1 rounded-md text-[11px] font-medium"
              style="color:var(--text-tertiary)">30d</button>
    </div>
  </div>
  <!-- Wireframe chart: CSS bars representing daily revenue -->
  <div class="flex items-end gap-1 h-32">
    <div class="flex-1 rounded-t" style="height:45%;background:var(--brand-primary);opacity:0.7"></div>
    <div class="flex-1 rounded-t" style="height:60%;background:var(--brand-primary);opacity:0.8"></div>
    <div class="flex-1 rounded-t" style="height:52%;background:var(--brand-primary);opacity:0.7"></div>
    <div class="flex-1 rounded-t" style="height:70%;background:var(--brand-primary);opacity:0.85"></div>
    <div class="flex-1 rounded-t" style="height:65%;background:var(--brand-primary);opacity:0.8"></div>
    <div class="flex-1 rounded-t" style="height:80%;background:var(--brand-primary);opacity:0.9"></div>
    <div class="flex-1 rounded-t" style="height:90%;background:var(--brand-primary)"></div>
  </div>
  <div class="flex justify-between mt-2">
    <span class="text-[10px] font-mono" style="color:var(--text-tertiary)">Mon</span>
    <span class="text-[10px] font-mono" style="color:var(--text-tertiary)">Sun</span>
  </div>
</div>
```

### Step 3: Revenue by Platform Breakdown

Horizontal bar chart comparing platforms:

```html
<div class="card-static rounded-xl p-5" style="border:1px solid var(--border)">
  <h3 class="text-sm font-semibold mb-4" style="color:var(--text-primary)">Revenue by Platform</h3>
  <div class="space-y-3">
    <div>
      <div class="flex items-center justify-between mb-1">
        <span class="text-xs font-medium" style="color:var(--text-secondary)">🟠 Etsy</span>
        <span class="text-xs font-mono font-semibold" style="color:var(--text-primary)">$2,840</span>
      </div>
      <div class="h-2 rounded-full" style="background:var(--bg-muted)">
        <div class="h-full rounded-full" style="width:58%;background:var(--brand-secondary)"></div>
      </div>
    </div>
    <div>
      <div class="flex items-center justify-between mb-1">
        <span class="text-xs font-medium" style="color:var(--text-secondary)">🟢 Shopify</span>
        <span class="text-xs font-mono font-semibold" style="color:var(--text-primary)">$1,420</span>
      </div>
      <div class="h-2 rounded-full" style="background:var(--bg-muted)">
        <div class="h-full rounded-full" style="width:29%;background:var(--success)"></div>
      </div>
    </div>
    <div>
      <div class="flex items-center justify-between mb-1">
        <span class="text-xs font-medium" style="color:var(--text-secondary)">🔵 Amazon</span>
        <span class="text-xs font-mono font-semibold" style="color:var(--text-primary)">$563</span>
      </div>
      <div class="h-2 rounded-full" style="background:var(--bg-muted)">
        <div class="h-full rounded-full" style="width:12%;background:var(--brand-primary)"></div>
      </div>
    </div>
  </div>
</div>
```

### Step 4: Comparison KPI Cards with Arrows

Upgrade existing KPI cards with trend comparison:

```html
<div class="grid grid-cols-4 gap-3">
  <div class="card-static rounded-xl p-4" style="border:1px solid var(--border)">
    <span class="text-xs font-medium" style="color:var(--text-secondary)">Total Revenue</span>
    <div class="flex items-end gap-2 mt-1">
      <span class="text-xl font-bold font-mono" style="color:var(--text-primary)">$4,823</span>
      <span class="text-[11px] font-medium" style="color:var(--success)">↑ 12.3%</span>
    </div>
    <div class="text-[10px] mt-1" style="color:var(--text-tertiary)">$4,293 last period</div>
  </div>
  <!-- Total Orders, Avg Order Value, Conversion Rate similarly -->
</div>
```

### Step 5: Conversion Funnel Visualization

Simple funnel showing visitor → view → cart → purchase:

```html
<div class="card-static rounded-xl p-5" style="border:1px solid var(--border)">
  <h3 class="text-sm font-semibold mb-4" style="color:var(--text-primary)">Conversion Funnel</h3>
  <div class="space-y-2">
    <div class="flex items-center gap-3">
      <div class="h-8 rounded" style="width:100%;background:var(--brand-primary-bg)">
        <div class="h-full rounded flex items-center px-3" style="width:100%;background:var(--brand-primary);opacity:0.15">
          <span class="text-xs font-medium" style="color:var(--brand-primary)">Visitors — 12,450</span>
        </div>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <div class="h-8 rounded" style="width:100%;background:var(--brand-primary-bg)">
        <div class="h-full rounded flex items-center px-3" style="width:65%;background:var(--brand-primary);opacity:0.25">
          <span class="text-xs font-medium" style="color:var(--brand-primary)">Product Views — 8,093</span>
        </div>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <div class="h-8 rounded" style="width:100%;background:var(--brand-primary-bg)">
        <div class="h-full rounded flex items-center px-3" style="width:18%;background:var(--brand-primary);opacity:0.4">
          <span class="text-xs font-medium" style="color:var(--brand-primary)">Add to Cart — 2,241</span>
        </div>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <div class="h-8 rounded" style="width:100%;background:var(--brand-primary-bg)">
        <div class="h-full rounded flex items-center px-3" style="width:5%;background:var(--brand-primary);opacity:0.6;min-width:140px">
          <span class="text-xs font-medium" style="color:var(--brand-primary)">Purchases — 623</span>
        </div>
      </div>
    </div>
  </div>
  <div class="text-[10px] mt-2 text-right" style="color:var(--text-tertiary)">Overall conversion: 5.0%</div>
</div>
```

## Todo List

- [x] Add Business Performance Score gauge card with circular ring
- [x] Add score breakdown bars (Revenue, Orders, Conversion, Growth, Retention)
- [x] Add Revenue Trend bar chart with time range selector
- [x] Add Revenue by Platform horizontal bars
- [x] Upgrade KPI cards with comparison arrows and last-period values
- [x] Add Conversion Funnel visualization
- [x] Apply Ocean Blue tokens throughout
- [x] Verify PSYCH patterns (Confidence Bar, trend arrows = trust signals)

## Success Criteria
- Business Performance Score (0-100) visible as hero card
- Score composition transparent via breakdown bars
- Revenue trend shows 7d/14d/30d toggle
- Platform revenue comparison is scannable at a glance
- Conversion funnel shows drop-off points clearly
- All charts use Ocean Blue palette consistently
