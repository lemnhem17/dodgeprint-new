# Phase 6: Global UX Polish — All Screens

## Context Links
- Source: `docs/getvela/getvela-ux-research.md` Section 8.4 (A2, G3, H1-H3)
- All wireframes: `docs/wireframes/01-09*.html` + `10-*.html` + `11-*.html`
- Shared: `_shared-tokens.css`, `_shared-navigation.js`
- Depends on: Phases 1-5 (all components and new screens must exist)

## Overview
- **Priority:** P2
- **Status:** Completed
- **Effort:** 3h

Final pass across all 11 wireframe files to apply consistent UX patterns: empty states with illustrations + CTAs, breadcrumbs on sub-pages, sidebar context consistency, onboarding tour improvements, contextual help tooltips, and progress checklist. This phase ensures visual consistency and fills gaps.

## Key Insights
- Empty states are the highest-impact low-effort improvement — every screen with a data table needs one
- Breadcrumbs only needed on sub-pages (Editor, Bulk Edit) — top-level nav pages use page title only
- Sidebar consistency (A2): sidebar nav items stay fixed; contextual filters use a secondary panel (already done in 04-listings.html with filter panel)
- Onboarding tour (H1): enhance existing `01-onboarding.html` with step highlights
- Progress checklist (H3): add to dashboard as a dismissable card

## UX Improvements Applied

| ID | Improvement | Screens Affected |
|----|-------------|-----------------|
| A2 | Sidebar context consistency | All — verify sidebar nav is identical across pages |
| G3 | Empty states with illustration + CTA | 03, 04, 05, 06, 07, 08, 09 |
| H1 | Interactive onboarding tour | 01-onboarding.html, 03-dashboard.html |
| H2 | Contextual help tooltips | 04, 06, 07, 08, 10, 11 |
| H3 | Progress checklist | 03-dashboard.html |

## Related Code Files

### Modified
- `docs/wireframes/01-onboarding.html`
- `docs/wireframes/03-dashboard.html`
- `docs/wireframes/04-listings.html`
- `docs/wireframes/05-orders.html`
- `docs/wireframes/06-research.html`
- `docs/wireframes/07-pod-hub.html`
- `docs/wireframes/08-analytics.html`
- `docs/wireframes/09-settings.html`
- `docs/wireframes/10-listing-editor.html`
- `docs/wireframes/11-bulk-editor.html`

## Implementation Steps

### 1. Empty States per Screen (G3)

Add empty state HTML blocks (hidden by default, togglable) using the `.empty-state` component from Phase 1. Each empty state has:
- Icon in colored background circle
- Title (bold, specific)
- Description (1 sentence, actionable)
- Primary CTA button

| Screen | Icon | Title | Description | CTA |
|--------|------|-------|-------------|-----|
| Dashboard | `layout-dashboard` | Connect your first shop | Import your listings and start tracking performance across all channels. | Connect Shop |
| Listings | `list` | No listings yet | Import from your connected shops or create your first listing manually. | Import Listings / Create Listing |
| Orders | `shopping-cart` | Orders appear once shops are synced | Connect a shop and sync to see your orders here. | Check Sync Status |
| Research | `search` | Discover trending niches | Enter a keyword above to find profitable opportunities and trending products. | _(search input focused)_ |
| POD Hub | `printer` | Upload your first design | Add designs to your library, then apply them to products across all shops. | Upload Design |
| Analytics | `bar-chart-3` | Need 7 days of data | Analytics require at least one week of sales data to generate meaningful trends. | View Dashboard |
| Settings | _(none needed — settings always has content)_ | | | |

HTML pattern per screen:
```html
<!-- Empty state — hidden when data present -->
<div id="emptyState" class="empty-state" style="display:none">
  <div class="empty-state-icon" style="background:var(--brand-primary-bg)">
    <i data-lucide="list" class="w-7 h-7" style="color:var(--brand-primary)"></i>
  </div>
  <div class="empty-state-title">No listings yet</div>
  <div class="empty-state-desc">Import from your connected shops or create your first listing manually.</div>
  <div class="flex items-center gap-2">
    <button class="btn-primary px-4 py-2 text-xs font-semibold">
      <i data-lucide="download" class="w-3.5 h-3.5 mr-1"></i> Import Listings
    </button>
    <button class="btn-ghost px-4 py-2 text-xs font-medium">Create Listing</button>
  </div>
</div>
```

### 2. Sidebar Context Consistency (A2)

Audit all 11 HTML files to ensure:
- Same sidebar nav items in same order across all pages
- Active state correctly set per page
- Shop switcher present on all pages
- Collapse behavior consistent
- Secondary contextual filters (like listings filter panel) do NOT replace sidebar nav — they appear as a separate panel inside the content area

Checklist:
```
Sidebar items (in order):
1. Dashboard (layout-dashboard)
2. Listings (list)
3. Orders (shopping-cart)
4. Research (search)
5. POD Hub (printer)
6. Analytics (bar-chart-3)
7. Settings (settings)
```

Each page should have `data-nav="pagename"` on its nav item + correct `.active` class.

### 3. Onboarding Tour Enhancement (H1)

In `01-onboarding.html`, the existing 4-step onboarding flow exists. Enhance with:

**Interactive highlight overlay** — when user would first visit dashboard after onboarding, show a tour:

Add to `03-dashboard.html`:
```html
<!-- Onboarding tour overlay — shown once for new users -->
<div id="onboardingTour" class="fixed inset-0 z-[800]" style="display:none">
  <!-- Dimmed backdrop with spotlight hole -->
  <div class="absolute inset-0" style="background:rgba(0,0,0,0.5)"></div>

  <!-- Tour tooltip — positioned near highlighted element -->
  <div id="tourTooltip" class="absolute z-[801] rounded-xl p-4"
    style="background:var(--bg-card);border:1px solid var(--border);box-shadow:var(--shadow-lg);width:300px">
    <div class="flex items-center justify-between mb-2">
      <span class="text-xs font-bold px-2 py-0.5 rounded-full"
        style="background:var(--brand-primary-bg);color:var(--brand-primary)">
        Step <span id="tourStep">1</span> of 4
      </span>
      <button class="text-xs" style="color:var(--text-tertiary)" onclick="dismissTour()">Skip tour</button>
    </div>
    <h4 class="text-sm font-bold mb-1" id="tourTitle">Your Dashboard</h4>
    <p class="text-xs mb-3" style="color:var(--text-secondary)" id="tourDesc">
      This is your command center. Monitor sales, sync status, and quick actions at a glance.
    </p>
    <div class="flex items-center justify-between">
      <button class="text-xs font-medium" style="color:var(--text-tertiary)" id="tourPrev"
        onclick="tourStep(-1)">Back</button>
      <button class="btn-primary px-4 py-1.5 text-xs font-semibold" onclick="tourStep(1)">Next</button>
    </div>
  </div>
</div>
```

Tour steps data (JS):
```js
var TOUR_STEPS = [
  { target: '#kpiRow', title: 'Your Dashboard', desc: 'Monitor sales, sync status, and key metrics at a glance.', position: 'bottom' },
  { target: '[data-nav="listings"]', title: 'Manage Listings', desc: 'View, edit, and bulk-update all your listings across shops.', position: 'right' },
  { target: '[data-nav="research"]', title: 'Research & Discover', desc: 'Find trending niches, analyze competitors, and optimize your SEO.', position: 'right' },
  { target: '#scheduleWidget', title: 'Schedule Actions', desc: 'Automate publishes, price updates, and AI optimizations.', position: 'top' }
];
```

### 4. Progress Checklist (H3)

Add to `03-dashboard.html` as a dismissable card:

```html
<!-- Setup progress checklist — shown for new accounts -->
<div id="setupChecklist" class="card-static rounded-xl p-5 mb-5">
  <div class="flex items-center justify-between mb-3">
    <div class="flex items-center gap-2">
      <i data-lucide="rocket" class="w-5 h-5" style="color:var(--brand-primary)"></i>
      <h3 class="text-sm font-bold">Get Started</h3>
    </div>
    <button class="text-xs" style="color:var(--text-tertiary)" onclick="dismissChecklist()">Dismiss</button>
  </div>
  <!-- Progress bar -->
  <div class="h-1.5 rounded-full mb-4" style="background:var(--bg-muted)">
    <div class="h-full rounded-full" style="width:25%;background:var(--brand-primary)"></div>
  </div>
  <div class="space-y-2.5">
    <label class="flex items-center gap-3 cursor-pointer">
      <div class="w-5 h-5 rounded-full border-2 flex items-center justify-center"
        style="border-color:var(--brand-primary);background:var(--brand-primary)">
        <i data-lucide="check" class="w-3 h-3 text-white"></i>
      </div>
      <span class="text-xs font-medium line-through" style="color:var(--text-tertiary)">Create your account</span>
    </label>
    <label class="flex items-center gap-3 cursor-pointer">
      <div class="w-5 h-5 rounded-full border-2" style="border-color:var(--border)"></div>
      <span class="text-xs font-medium">Connect your first shop</span>
    </label>
    <label class="flex items-center gap-3 cursor-pointer">
      <div class="w-5 h-5 rounded-full border-2" style="border-color:var(--border)"></div>
      <span class="text-xs font-medium">Import or create a listing</span>
    </label>
    <label class="flex items-center gap-3 cursor-pointer">
      <div class="w-5 h-5 rounded-full border-2" style="border-color:var(--border)"></div>
      <span class="text-xs font-medium">Run your first AI optimization</span>
    </label>
  </div>
</div>
```

### 5. Contextual Help Tooltips (H2)

Add `?` icon buttons near complex features across screens. Each triggers a small popover:

```html
<!-- Tooltip pattern — reusable -->
<button class="help-tooltip-btn" onclick="toggleHelp(this)">
  <i data-lucide="help-circle" class="w-3.5 h-3.5"></i>
</button>
```

CSS:
```css
.help-tooltip-btn {
  display: inline-flex; align-items: center; justify-content: center;
  width: 20px; height: 20px; border-radius: 50%;
  border: none; background: none; cursor: pointer;
  color: var(--text-tertiary); transition: color 0.12s;
  position: relative;
}
.help-tooltip-btn:hover { color: var(--brand-primary); }
.help-tooltip {
  position: absolute; bottom: calc(100% + 8px); left: 50%;
  transform: translateX(-50%);
  width: 220px; padding: 10px 12px;
  background: var(--bg-card); border: 1px solid var(--border);
  border-radius: 10px; box-shadow: var(--shadow-md);
  font-size: 12px; color: var(--text-secondary);
  z-index: 100; display: none;
}
.help-tooltip.active { display: block; }
```

Placement locations:
| Screen | Element | Tooltip Text |
|--------|---------|-------------|
| Listings (04) | AI Score column header | "AI Score rates your listing's SEO, photos, and pricing on a scale of A-F." |
| Research (06) | Saturation bar | "Higher saturation means more competition. Look for low saturation + high demand." |
| POD Hub (07) | Mockup generator | "Upload a design, then generate product mockups automatically." |
| Analytics (08) | Conversion rate KPI | "Percentage of visitors who made a purchase in the selected period." |
| Editor (10) | SEO tags section | "Add up to 13 tags. Use specific, long-tail keywords for better discoverability." |
| Bulk Editor (11) | AI Optimize button | "AI analyzes your titles, tags, and descriptions to suggest improvements." |

### 6. Toast Notification Consistency (G2)

Verify all screens use `showToast()` from shared JS for feedback. Check that:
- Save actions trigger success toast
- Delete/destructive actions trigger undo toast (`showUndoToast()`)
- Error states trigger error toast
- No `alert()` calls remain anywhere

### 7. Breadcrumb on Sub-pages

Only `10-listing-editor.html` and `11-bulk-editor.html` need breadcrumbs (built in Phases 3-4). Top-level pages (Dashboard, Listings, Orders, etc.) use page title only — no breadcrumb needed since sidebar shows current location.

## Todo List

- [x] Add empty state blocks to: Dashboard, Listings, Orders, Research, POD Hub, Analytics
- [x] Audit sidebar consistency across all 11 HTML files
- [x] Fix any sidebar nav item ordering or naming inconsistencies
- [x] Add onboarding tour overlay to `03-dashboard.html`
- [x] Add tour step JS with 4 highlight positions
- [x] Add setup progress checklist card to `03-dashboard.html`
- [x] Add help tooltip CSS to `_shared-tokens.css` (already existed)
- [x] Add `?` help tooltips to: Listings (AI Score), Research (saturation), POD Hub (mockup), Analytics (conversion), Editor (SEO tags), Bulk Editor (AI optimize)
- [x] Verify `showToast()` used consistently across all screens
- [x] Replace any remaining `alert()` calls with `showToast()` (none found)
- [x] Add `toggleHelp()` JS function to `_shared-navigation.js` (already existed)
- [x] Dark mode verification pass on all modified screens (all use var(--*) CSS tokens)
- [x] Final visual consistency check: font sizes, spacing, border-radius match design system

## Success Criteria

- Every data screen has an empty state with icon + title + description + CTA button
- Sidebar navigation is identical across all 11 pages (same items, same order)
- Dashboard shows onboarding tour overlay (togglable for demo)
- Dashboard shows setup checklist with 1/4 completed + progress bar
- 6 screens have contextual `?` help tooltips near complex features
- No `alert()` calls; all feedback uses toast system
- All new elements support dark mode

## Risk Assessment

- **Low:** This phase touches many files with small changes — risk of merge conflicts if Phase 2-5 are still in progress. Mitigate by running Phase 6 last.
- **Low:** Onboarding tour positioning needs manual adjustment per target element — acceptable for wireframe.
- **Low:** Empty states require hiding existing data content — use `style="display:none"` toggle, keep both versions in HTML.
