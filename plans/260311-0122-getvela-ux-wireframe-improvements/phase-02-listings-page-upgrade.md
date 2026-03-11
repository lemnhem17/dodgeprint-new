# Phase 2: Listings Page Upgrade

## Context Links
- Source: `docs/getvela/getvela-ux-research.md` Section 8.4 (B1-B5, B7, F1-F2)
- Target: `docs/wireframes/04-listings.html`
- Depends on: Phase 1 (skeleton, breadcrumb, empty state components)

## Overview
- **Priority:** P1
- **Status:** Pending
- **Effort:** 3h

Upgrade the listings page with card view toggle, skeleton loading states, sticky table header, inline quick-edit enhancements, saved filter views, and image hover preview. The page already has editable cells, row selection, floating bar, and side panel — extend these.

## Key Insights
- `04-listings.html` already implements: editable cells (`makeEditable()`), row selection with floating bar, side panel with tabs, platform tabs, filter panel
- Skeleton loading: base `.skeleton` class exists in shared CSS — use skeleton variants from Phase 1
- Card view: add toggle button + grid layout alongside existing table
- Sticky header: add `position: sticky; top: 0` to `thead`
- Saved filters: store in localStorage, render as pill chips above table

## UX Improvements Applied

| ID | Improvement | Implementation |
|----|-------------|----------------|
| B1 | Skeleton loading | Loading state shown on initial render — 5 skeleton rows matching table columns |
| B2 | Card view toggle | Grid/List toggle button; card view shows large thumbnail + title + price + status |
| B3 | Column customization | Medium priority — include dropdown to show/hide columns |
| B4 | Inline quick-edit | Already exists via `makeEditable()` — enhance with save indicator + validation |
| B5 | Sticky table header | CSS `position: sticky` on `thead` |
| B7 | Saved filters/views | Save current filter set to localStorage, render as clickable pills |
| F1 | Image preview on hover | Tooltip-style enlarged image on row thumbnail hover |
| F2 | Bulk select + batch actions | Already exists via floating bar — enhance with more actions |

## Related Code Files

### Modified
- `docs/wireframes/04-listings.html`

## Implementation Steps

### 1. Skeleton Loading State

Add a skeleton table body that shows on page load, hidden after 1.5s (simulated):

```html
<!-- Skeleton loading state — shown initially, hidden after data "loads" -->
<tbody id="skeletonBody">
  <!-- Repeat 5x -->
  <tr class="skeleton-row">
    <td class="px-4 py-3"><div class="skeleton" style="width:16px;height:16px;border-radius:4px"></div></td>
    <td class="px-4 py-3"><div class="flex items-center gap-3">
      <div class="skeleton skeleton-thumbnail"></div>
      <div class="space-y-1.5"><div class="skeleton skeleton-text"></div><div class="skeleton skeleton-text-sm"></div></div>
    </div></td>
    <td class="px-4 py-3"><div class="skeleton skeleton-badge"></div></td>
    <td class="px-4 py-3"><div class="skeleton skeleton-text" style="width:50px"></div></td>
    <td class="px-4 py-3"><div class="skeleton skeleton-text" style="width:30px"></div></td>
    <td class="px-4 py-3"><div class="skeleton" style="width:60px;height:20px;border-radius:9999px"></div></td>
    <td class="px-4 py-3"><div class="skeleton skeleton-text" style="width:70px"></div></td>
  </tr>
</tbody>
```

JS: `setTimeout(function(){ document.getElementById('skeletonBody').style.display='none'; document.getElementById('dataBody').style.display=''; }, 1500);`

### 2. Card View Toggle

Add toggle button in toolbar area (near existing view controls):

```html
<!-- View toggle — above table, in toolbar -->
<div class="flex items-center gap-1 border rounded-lg p-0.5" style="border-color:var(--border)">
  <button id="viewList" onclick="switchView('list')" class="view-toggle active"
    style="padding:5px 10px;border-radius:6px;font-size:12px;font-weight:500">
    <i data-lucide="list" class="w-4 h-4"></i>
  </button>
  <button id="viewGrid" onclick="switchView('grid')" class="view-toggle"
    style="padding:5px 10px;border-radius:6px;font-size:12px;font-weight:500">
    <i data-lucide="grid-3x3" class="w-4 h-4"></i>
  </button>
</div>
```

Card view CSS (add to page `<style>`):
```css
.view-toggle { transition: background 0.12s; color: var(--text-secondary); cursor: pointer; border: none; background: none; display: flex; align-items: center; }
.view-toggle.active { background: var(--brand-primary-bg); color: var(--brand-primary); }
.card-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: 16px; }
.listing-card {
  background: var(--bg-card); border: 1px solid var(--border);
  border-radius: 12px; overflow: hidden; cursor: pointer;
  transition: transform 0.15s, box-shadow 0.15s;
}
.listing-card:hover { transform: translateY(-2px); box-shadow: var(--shadow-sm); }
.listing-card-img { width: 100%; aspect-ratio: 1; object-fit: cover; background: var(--bg-muted); }
.listing-card-body { padding: 12px; }
```

Card view HTML (hidden by default):
```html
<div id="cardView" class="card-grid" style="display:none">
  <!-- Cards generated from same data as table rows -->
  <div class="listing-card" onclick="openListingPanel('L001')">
    <img src="..." alt="..." class="listing-card-img">
    <div class="listing-card-body">
      <div class="text-sm font-semibold truncate" style="color:var(--text-primary)">Sunset Mountain Mug</div>
      <div class="flex items-center justify-between mt-2">
        <span class="font-mono text-sm font-medium" style="color:var(--text-primary)">$24.99</span>
        <span class="status-synced">Synced</span>
      </div>
      <div class="flex items-center gap-1.5 mt-2">
        <i data-lucide="store" class="w-3 h-3" style="color:#F1641E"></i>
        <span class="text-xs" style="color:var(--text-tertiary)">Etsy</span>
        <span class="score-badge score-a ml-auto">A</span>
      </div>
    </div>
  </div>
  <!-- Repeat for each listing -->
</div>
```

JS toggle function:
```js
function switchView(view) {
  var table = document.getElementById('listingsTable'); // or parent container
  var cards = document.getElementById('cardView');
  document.querySelectorAll('.view-toggle').forEach(function(b) { b.classList.remove('active'); });
  if (view === 'grid') {
    table.style.display = 'none';
    cards.style.display = 'grid';
    document.getElementById('viewGrid').classList.add('active');
  } else {
    table.style.display = '';
    cards.style.display = 'none';
    document.getElementById('viewList').classList.add('active');
  }
  localStorage.setItem('dodgeprint_listings_view', view);
}
```

### 3. Sticky Table Header

Add to page `<style>`:
```css
thead { position: sticky; top: 0; z-index: 10; background: var(--bg-muted); }
```

### 4. Image Hover Preview

Add CSS for thumbnail hover enlargement:
```css
.thumb-preview {
  position: relative;
}
.thumb-preview .thumb-enlarged {
  display: none; position: absolute;
  left: 56px; top: -20px; z-index: 50;
  width: 200px; height: 200px;
  border-radius: 12px; overflow: hidden;
  border: 2px solid var(--border);
  box-shadow: var(--shadow-lg);
  background: var(--bg-card);
}
.thumb-preview:hover .thumb-enlarged { display: block; }
.thumb-enlarged img { width: 100%; height: 100%; object-fit: cover; }
```

Wrap each thumbnail cell:
```html
<div class="thumb-preview">
  <img src="..." class="w-12 h-12 rounded-lg object-cover">
  <div class="thumb-enlarged"><img src="..." alt=""></div>
</div>
```

### 5. Saved Filter Views

Add filter pills bar above table:
```html
<div id="savedFilters" class="flex items-center gap-2 mb-3" style="display:none">
  <span class="text-xs font-medium" style="color:var(--text-tertiary)">Saved:</span>
  <!-- Dynamically rendered pills -->
</div>
```

JS for saved filters:
```js
function saveCurrentFilter(name) {
  var filters = JSON.parse(localStorage.getItem('dodgeprint_saved_filters') || '[]');
  filters.push({ name: name, params: getCurrentFilterParams() });
  localStorage.setItem('dodgeprint_saved_filters', JSON.stringify(filters));
  renderSavedFilters();
}
function renderSavedFilters() {
  var filters = JSON.parse(localStorage.getItem('dodgeprint_saved_filters') || '[]');
  var container = document.getElementById('savedFilters');
  if (!filters.length) { container.style.display = 'none'; return; }
  container.style.display = 'flex';
  container.innerHTML = '<span class="text-xs font-medium" style="color:var(--text-tertiary)">Saved:</span>'
    + filters.map(function(f, i) {
      return '<button class="btn-ghost text-xs px-3 py-1" style="border-radius:9999px" onclick="applyFilter(' + i + ')">'
        + f.name + '</button>';
    }).join('');
}
```

### 6. Column Customization (B3 — Medium)

Add column config dropdown button in toolbar:
```html
<button class="btn-ghost px-2 py-1.5" onclick="toggleColumnConfig()" title="Customize columns">
  <i data-lucide="columns-3" class="w-4 h-4"></i>
</button>
```

Dropdown with checkboxes for each column — toggle `display: none` on `th`/`td` by index. Store preferences in localStorage.

### 7. Enhanced Inline Edit (B4)

Enhance existing `makeEditable()`:
- After save, show brief green check icon animation
- Add basic validation: price must be numeric > 0, stock must be integer >= 0
- Show inline error text below cell if validation fails

```js
// In makeEditable save callback:
var save = function() {
  var newValue = input.value;
  // Validate
  if (type === 'price' && (isNaN(parseFloat(newValue)) || parseFloat(newValue) < 0)) {
    input.style.borderColor = 'var(--danger)';
    return;
  }
  cell.classList.remove('editing');
  cell.textContent = newValue || originalValue;
  // Brief success indicator
  cell.style.background = 'var(--success-bg)';
  setTimeout(function() { cell.style.background = ''; }, 800);
};
```

## Todo List

- [ ] Add skeleton loading tbody + JS auto-hide after simulated load
- [ ] Add card view toggle button in toolbar
- [ ] Add card view grid HTML + CSS
- [ ] Add `switchView()` JS function with localStorage persistence
- [ ] Add sticky thead CSS
- [ ] Add image hover preview CSS + wrap thumbnails
- [ ] Add saved filters UI + localStorage persistence
- [ ] Add column customization dropdown
- [ ] Enhance `makeEditable()` with validation + success flash
- [ ] Add breadcrumb to page header (using shared component)
- [ ] Verify dark mode for all new elements
- [ ] Test card view with skeleton loading state

## Success Criteria

- Page shows skeleton rows for 1.5s on load, then reveals real data
- Grid/List toggle switches between table and card views; persists across page reload
- Table header stays visible when scrolling down
- Hovering thumbnail shows 200x200 enlarged preview
- Saved filters render as clickable pills; persist via localStorage
- Inline edit shows green flash on successful save, red border on invalid input
- All states work in dark mode

## Risk Assessment

- **Medium:** Card view data duplication — cards repeat listing data from table. For wireframe this is acceptable; in production, both views render from same data source.
- **Low:** Sticky header z-index conflicts with floating bar — floating bar already uses higher z-index.
