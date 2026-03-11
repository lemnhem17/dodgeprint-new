# Phase 4: Listings/Products Core UX

**Priority:** P0 | **Status:** completed | **Effort:** High | **Depends on:** Phase 1, 2

## Overview

Major UX upgrade to `04-listings.html` — the #1 screen where sellers spend 70% of time. Add Listing Quality Score, filter sidebar panel, hover quick actions, contextual toolbar states, and bulk action improvements. This is the highest-impact phase per PSYCH audit (highest volatility screen).

## Context Links
- PSYCH Audit Listings section: `plans/reports/brainstorm-260309-0119-psych-framework-audit-design-language.md` → Section 3.4 (P0)
- Getvela listings patterns: `docs/wireframes/getvela/getvela-uiux-analysis.md` → Sections 2.2, 2.11, 2.13-2.15
- Getvela screenshots: `15-bulk-select-actions.png`, `17-bulk-edit-title-ai.png`, `25-listing-hover-actions.png`
- DP Products screenshot: `docs/dodgeprint/dp-03-products.png`
- Current listings wireframe: `docs/wireframes/04-listings.html` (709 lines)

## Key Insights
- Current wireframe already has: Confidence Bar, Recovery Toast, floating bulk bar, side panel, inline editing, platform tabs
- Need to ADD: Quality Score badges, filter sidebar panel, hover row actions, toolbar state management, bulk edit enhancements
- Getvela's killer patterns: Score bar chart in filter panel, toolbar transforms on selection, hover progressive disclosure
- Current table columns: checkbox, thumbnail, title, platform, tags, quality grade (already exists!), price, stock, status, sync
- Quality grade badges already exist in wireframe — need to ENHANCE them with scoring system

## Related Code Files

### Modify
- `docs/wireframes/04-listings.html` — Table enrichment, filter panel, hover actions
- `docs/wireframes/_shared-tokens.css` — New component styles (score badges, filter panel, hover actions)

## Implementation Steps

### Step 1: Add Filter Sidebar Panel (Left of Table)

Collapsible panel (260px) on the left side of listings content:

```html
<div id="filterPanel" class="flex-shrink-0 overflow-y-auto p-4 space-y-5"
     style="width:240px;border-right:1px solid var(--border);background:var(--bg-card)">

  <!-- Status Tabs -->
  <div>
    <div class="text-[11px] font-semibold uppercase tracking-wider mb-2" style="color:var(--text-tertiary)">Status</div>
    <div class="space-y-1">
      <button class="w-full flex items-center justify-between px-3 py-1.5 rounded-lg text-xs font-medium"
              style="background:var(--brand-primary-bg);color:var(--brand-primary)">
        Active <span class="font-mono">247</span>
      </button>
      <button class="w-full flex items-center justify-between px-3 py-1.5 rounded-lg text-xs font-medium"
              style="color:var(--text-secondary)">
        Draft <span class="font-mono">12</span>
      </button>
      <button class="w-full flex items-center justify-between px-3 py-1.5 rounded-lg text-xs font-medium"
              style="color:var(--text-secondary)">
        Processing <span class="font-mono">3</span>
      </button>
      <button class="w-full flex items-center justify-between px-3 py-1.5 rounded-lg text-xs font-medium"
              style="color:var(--text-secondary)">
        Failed <span class="font-mono text-red-500">2</span>
      </button>
    </div>
  </div>

  <!-- Quality Score Distribution (Getvela-inspired bar chart) -->
  <div>
    <div class="text-[11px] font-semibold uppercase tracking-wider mb-2" style="color:var(--text-tertiary)">Listing Score</div>
    <div class="space-y-1.5">
      <div class="flex items-center gap-2">
        <span class="text-[10px] font-mono w-3 text-center" style="color:var(--text-tertiary)">F</span>
        <div class="flex-1 h-2 rounded-full" style="background:var(--bg-muted)">
          <div class="h-full rounded-full" style="width:8%;background:var(--danger)"></div>
        </div>
        <span class="text-[10px] font-mono w-4 text-right" style="color:var(--text-tertiary)">5</span>
      </div>
      <div class="flex items-center gap-2">
        <span class="text-[10px] font-mono w-3 text-center" style="color:var(--text-tertiary)">D</span>
        <div class="flex-1 h-2 rounded-full" style="background:var(--bg-muted)">
          <div class="h-full rounded-full" style="width:15%;background:#F97316"></div>
        </div>
        <span class="text-[10px] font-mono w-4 text-right" style="color:var(--text-tertiary)">12</span>
      </div>
      <!-- C, B, A bars similarly, with increasing widths and green colors -->
      <div class="flex items-center gap-2">
        <span class="text-[10px] font-mono w-3 text-center" style="color:var(--text-tertiary)">A</span>
        <div class="flex-1 h-2 rounded-full" style="background:var(--bg-muted)">
          <div class="h-full rounded-full" style="width:45%;background:var(--success)"></div>
        </div>
        <span class="text-[10px] font-mono w-4 text-right" style="color:var(--text-tertiary)">89</span>
      </div>
    </div>
  </div>

  <!-- Platform Filter -->
  <div>
    <div class="text-[11px] font-semibold uppercase tracking-wider mb-2" style="color:var(--text-tertiary)">Platform</div>
    <div class="space-y-1">
      <!-- Etsy, Shopify, Amazon, TikTok with checkbox + icon + count -->
    </div>
  </div>

  <!-- Category Filter -->
  <div>
    <div class="text-[11px] font-semibold uppercase tracking-wider mb-2" style="color:var(--text-tertiary)">Category</div>
    <!-- Category list with counts -->
  </div>

  <!-- Tags Filter -->
  <div>
    <div class="text-[11px] font-semibold uppercase tracking-wider mb-2" style="color:var(--text-tertiary)">Tags</div>
    <input placeholder="Search tags..." class="w-full px-3 py-1.5 rounded-lg text-xs"
           style="border:1px solid var(--border);background:var(--bg-page)">
  </div>
</div>
```

Add toggle button in toolbar: `<button onclick="toggleFilterPanel()">Filters</button>`

### Step 2: Enhance Quality Score Badges

CSS for score badges (add to `_shared-tokens.css`):

```css
.score-badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 22px;
  border-radius: 6px;
  font-size: 11px;
  font-weight: 700;
  font-family: 'JetBrains Mono', monospace;
}
.score-a { background: var(--success-bg); color: var(--success); }
.score-b { background: var(--brand-primary-bg); color: var(--brand-primary); }
.score-c { background: var(--brand-secondary-bg); color: var(--brand-secondary); }
.score-d { background: #FFF7ED; color: #EA580C; }
.score-f { background: var(--danger-bg); color: var(--danger); }
```

Score badge with tooltip:
```html
<span class="score-badge score-a" title="Quality: A+ — All criteria met">A+</span>
```

### Step 3: Add Hover Quick Actions on Table Rows

On hover, show 4 action icons at the row's right end:

```css
/* Add to _shared-tokens.css */
.listing-row .row-actions { opacity: 0; transition: opacity 0.15s; }
.listing-row:hover .row-actions { opacity: 1; }
.row-action-btn {
  width: 28px; height: 28px;
  display: flex; align-items: center; justify-content: center;
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.1s;
  color: var(--text-secondary);
}
.row-action-btn:hover { background: var(--bg-muted); color: var(--text-primary); }
.row-action-btn.danger:hover { background: var(--danger-bg); color: var(--danger); }
```

HTML per row:
```html
<td class="relative">
  <div class="row-actions absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-1">
    <button class="row-action-btn" title="Edit"><i data-lucide="pencil" class="w-3.5 h-3.5"></i></button>
    <button class="row-action-btn" title="Deploy"><i data-lucide="upload" class="w-3.5 h-3.5"></i></button>
    <button class="row-action-btn" title="Duplicate"><i data-lucide="copy" class="w-3.5 h-3.5"></i></button>
    <button class="row-action-btn danger" title="Delete"><i data-lucide="trash-2" class="w-3.5 h-3.5"></i></button>
  </div>
</td>
```

### Step 4: Contextual Toolbar States

Toolbar transforms based on state:

**State 1: Default** (no selection)
```
[Search] [Filters toggle] [Platform tabs] ........... [Sort] [View] [+ Create Listing]
```

**State 2: Selected** (1+ rows checked) — Getvela pattern
```
[✕ Clear] "12 selected" ........... [Edit] [Deploy] [Export] [Duplicate] [Delete]
```

JS: modify existing `updateFloatingBar()` to transform the toolbar header instead of showing a floating bar at the bottom. This is cleaner and matches Getvela.

### Step 5: Enrich Table Columns

Update table to show more data per row:

| Column | Width | Content |
|--------|-------|---------|
| Checkbox | 40px | Select |
| Thumbnail | 56px | 48x48 rounded image |
| Title + SKU | flex | Title (bold) + SKU (mono, muted) + platform badge |
| Platform | 80px | Icon + "Etsy" text |
| Tags | 120px | First 2 tags as chips + "+3" overflow |
| Price | 80px | $40.00 +3 variants (muted) |
| Stock | 60px | Number |
| Score | 50px | Badge A-F |
| Status | 80px | Synced ✓ / Pending / Failed |
| Actions | 140px | Hover quick actions |

### Step 6: Better Empty State

Replace generic "No data" with Smart Empty:

```html
<div class="py-16 text-center">
  <div class="w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center"
       style="background:var(--brand-primary-bg)">
    <i data-lucide="package" class="w-8 h-8" style="color:var(--brand-primary)"></i>
  </div>
  <h3 class="text-lg font-semibold mb-2">No listings yet</h3>
  <p class="text-sm mb-6 max-w-sm mx-auto" style="color:var(--text-secondary)">
    Import from your connected shop or create your first listing.
  </p>
  <div class="flex gap-3 justify-center">
    <button class="btn-primary px-5 py-2 text-sm font-semibold rounded-full">
      <i data-lucide="plus" class="w-4 h-4 inline mr-1"></i> Create Listing
    </button>
    <button class="btn-ghost px-5 py-2 text-sm font-medium">
      <i data-lucide="download" class="w-4 h-4 inline mr-1"></i> Import
    </button>
  </div>
</div>
```

## Todo List

- [x] Add filter sidebar panel (collapsible, 240px)
- [x] Add score distribution bar chart in filter panel
- [x] Add platform/category/tags filters
- [x] Add score badge CSS classes to `_shared-tokens.css`
- [x] Enhance table score badges with color coding + tooltips
- [x] Add hover quick actions on table rows (edit/deploy/duplicate/delete)
- [x] Implement contextual toolbar states (default vs selected)
- [x] Enrich table columns (tags chips, price+variants, platform badge)
- [x] Replace empty state with Smart Empty
- [x] Add filter panel toggle JS
- [x] Test bulk select → toolbar transform
- [x] Verify Confidence Bar + Recovery Toast still work

## Success Criteria
- Filter panel shows score distribution bar chart (Getvela parity)
- Hover any row → 4 quick action icons appear
- Select rows → toolbar transforms to show bulk actions
- Quality Score badges color-coded A-F
- Empty state guides users to next action
- All existing PSYCH elements preserved

## Risk Assessment
- **High effort:** Most complex phase, many interacting components
- **Watch for:** Existing side panel (detail view) may conflict with filter sidebar layout
- **Mitigation:** Filter panel on left, detail panel on right — they don't overlap
- **Watch for:** Floating bar vs toolbar transform — pick ONE, not both
- **Decision:** Toolbar transform (Getvela pattern) — remove floating bottom bar
