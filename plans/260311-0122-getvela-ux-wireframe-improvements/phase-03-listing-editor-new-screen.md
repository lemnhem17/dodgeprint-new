# Phase 3: Listing Editor — New Screen (10-listing-editor.html)

## Context Links
- Source: `docs/getvela/getvela-ux-research.md` Section 8.4 (C1-C7)
- Getvela analysis: `docs/getvela/getvela-uiux-analysis.md` (editor pattern)
- Design system: `docs/design-guidelines.md`
- Depends on: Phase 1 (breadcrumb, empty state, toast components)

## Overview
- **Priority:** P1
- **Status:** Pending
- **Effort:** 4h

Create a full listing editor screen as standalone HTML wireframe. Uses vertical tab layout (not horizontal) to avoid overflow on small viewports. Includes auto-save, field validation, photo drag-to-reorder, rich text toolbar, and side-by-side marketplace preview panel.

## Key Insights
- Getvela uses 10 horizontal tabs that overflow — vertical tabs or scrollable sections solve this
- Chosen approach: **left vertical tabs** (200px sidebar within content area) + scrollable right panel
- Auto-save simulated with "All changes saved" pill in header
- Side-by-side preview: collapsible right panel showing Etsy/Shopify listing preview
- Photo reorder: drag handles on thumbnail grid, visual drop target indicator
- This screen is navigated to from `04-listings.html` row click or "Edit" action

## UX Improvements Applied

| ID | Improvement | Implementation |
|----|-------------|----------------|
| C1 | Vertical tab layout | Left sidebar tabs (200px) within content area; 7 sections |
| C2 | Auto-save draft | Header shows "Saving..." → "All changes saved ✓" pill; debounced on input |
| C3 | Change indicator per tab | Orange dot on tab label when section has unsaved edits |
| C4 | Side-by-side preview | Right panel (350px) toggleable, shows marketplace preview |
| C5 | Field validation inline | Real-time char count, required field indicators, error messages |
| C6 | Photo drag-to-reorder | Drag handle on each photo tile; first = primary badge |
| C7 | Rich text description | Toolbar with bold/italic/list/heading buttons above textarea |

## Related Code Files

### Created
- `docs/wireframes/10-listing-editor.html`

## Implementation Steps

### 1. Page Shell

Standard wireframe HTML boilerplate matching existing pages:
- Same `<head>` pattern: Tailwind CDN, Lucide, Plus Jakarta Sans, JetBrains Mono
- Same `tailwind.config` block
- Import `_shared-tokens.css` and `_shared-navigation.js`
- Full sidebar (copy from `04-listings.html`), mark "Listings" as active nav item
- Breadcrumb: `Listings > Edit: [Listing Title]`

### 2. Page Header

```html
<div class="flex items-center justify-between mb-6">
  <div>
    <div id="breadcrumb" class="breadcrumb mb-1">
      <a href="04-listings.html">Listings</a>
      <i data-lucide="chevron-right" class="w-3.5 h-3.5 breadcrumb-separator"></i>
      <span class="breadcrumb-current">Edit: Sunset Mountain Mug</span>
    </div>
    <h1 class="text-xl font-extrabold tracking-tight">Listing Editor</h1>
  </div>
  <div class="flex items-center gap-3">
    <!-- Auto-save indicator (C2) -->
    <div id="autoSaveStatus" class="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium"
         style="background:var(--success-bg);color:var(--success)">
      <i data-lucide="check-circle" class="w-3.5 h-3.5"></i>
      <span>All changes saved</span>
    </div>
    <!-- Preview toggle (C4) -->
    <button class="btn-ghost px-3 py-2 text-xs font-medium" onclick="togglePreview()">
      <i data-lucide="eye" class="w-4 h-4 mr-1.5"></i> Preview
    </button>
    <!-- Publish -->
    <button class="btn-primary px-5 py-2 text-sm font-semibold">Publish</button>
  </div>
</div>
```

### 3. Vertical Tab Layout (C1)

Two-column layout: left tabs (200px) + right content (flex-1):

```html
<div class="flex gap-0" style="min-height:calc(100vh - 160px)">
  <!-- Left: Vertical tabs -->
  <div class="flex-shrink-0" style="width:200px;border-right:1px solid var(--border)">
    <nav class="space-y-1 p-3">
      <button class="editor-tab active" data-tab="basics" onclick="switchEditorTab(this,'basics')">
        <i data-lucide="file-text" class="w-4 h-4"></i>
        <span>Basics</span>
        <span class="change-dot" id="dot-basics" style="display:none"></span>
      </button>
      <button class="editor-tab" data-tab="photos" onclick="switchEditorTab(this,'photos')">
        <i data-lucide="image" class="w-4 h-4"></i>
        <span>Photos</span>
        <span class="change-dot" id="dot-photos" style="display:none"></span>
      </button>
      <button class="editor-tab" data-tab="pricing" onclick="switchEditorTab(this,'pricing')">
        <i data-lucide="dollar-sign" class="w-4 h-4"></i>
        <span>Pricing</span>
        <span class="change-dot" id="dot-pricing" style="display:none"></span>
      </button>
      <button class="editor-tab" data-tab="inventory" onclick="switchEditorTab(this,'inventory')">
        <i data-lucide="package" class="w-4 h-4"></i>
        <span>Inventory</span>
        <span class="change-dot" id="dot-inventory" style="display:none"></span>
      </button>
      <button class="editor-tab" data-tab="seo" onclick="switchEditorTab(this,'seo')">
        <i data-lucide="search" class="w-4 h-4"></i>
        <span>SEO & Tags</span>
        <span class="change-dot" id="dot-seo" style="display:none"></span>
      </button>
      <button class="editor-tab" data-tab="shipping" onclick="switchEditorTab(this,'shipping')">
        <i data-lucide="truck" class="w-4 h-4"></i>
        <span>Shipping</span>
        <span class="change-dot" id="dot-shipping" style="display:none"></span>
      </button>
      <button class="editor-tab" data-tab="variations" onclick="switchEditorTab(this,'variations')">
        <i data-lucide="layers" class="w-4 h-4"></i>
        <span>Variations</span>
        <span class="change-dot" id="dot-variations" style="display:none"></span>
      </button>
    </nav>
  </div>

  <!-- Center: Tab content -->
  <div class="flex-1 p-6 overflow-y-auto" id="editorContent">
    <!-- Tab panels rendered here -->
  </div>

  <!-- Right: Preview panel (C4) — hidden by default -->
  <div id="previewPanel" class="flex-shrink-0" style="width:350px;border-left:1px solid var(--border);display:none">
    <!-- Marketplace preview -->
  </div>
</div>
```

### 4. Editor Tab CSS (page-scoped `<style>`)

```css
.editor-tab {
  display: flex; align-items: center; gap: 8px;
  width: 100%; padding: 10px 12px; border-radius: 8px;
  font-size: 13px; font-weight: 500;
  color: var(--text-secondary);
  border: none; background: none; cursor: pointer;
  transition: all 0.12s;
  position: relative;
}
.editor-tab:hover { background: var(--bg-muted); color: var(--text-primary); }
.editor-tab.active {
  background: var(--brand-primary-bg);
  color: var(--brand-primary);
  font-weight: 600;
}
/* Change indicator dot (C3) */
.change-dot {
  width: 6px; height: 6px; border-radius: 50%;
  background: var(--brand-secondary);
  position: absolute; right: 10px; top: 50%;
  transform: translateY(-50%);
}
```

### 5. Basics Tab Content

```html
<div class="editor-panel active" id="panel-basics">
  <h2 class="text-lg font-bold mb-4">Basic Information</h2>

  <!-- Title with char count (C5) -->
  <div class="mb-5">
    <label class="block text-xs font-semibold mb-1.5" style="color:var(--text-secondary)">
      Title <span style="color:var(--danger)">*</span>
    </label>
    <input type="text" value="Sunset Mountain Mug — Ceramic Coffee Cup, Nature Lover Gift"
      class="w-full h-10 px-3 rounded-md border text-sm"
      style="border-color:var(--border)"
      oninput="updateCharCount(this, 'titleCount', 140); markChanged('basics')">
    <div class="flex justify-between mt-1">
      <span id="titleError" class="text-xs" style="color:var(--danger);display:none">Title is required</span>
      <span id="titleCount" class="text-xs" style="color:var(--text-tertiary)">58 / 140</span>
    </div>
  </div>

  <!-- Description with rich text toolbar (C7) -->
  <div class="mb-5">
    <label class="block text-xs font-semibold mb-1.5" style="color:var(--text-secondary)">Description</label>
    <!-- Rich text toolbar -->
    <div class="flex items-center gap-1 p-1.5 border border-b-0 rounded-t-md" style="border-color:var(--border);background:var(--bg-muted)">
      <button class="richtext-btn" onclick="execFormat('bold')" title="Bold"><i data-lucide="bold" class="w-3.5 h-3.5"></i></button>
      <button class="richtext-btn" onclick="execFormat('italic')" title="Italic"><i data-lucide="italic" class="w-3.5 h-3.5"></i></button>
      <div style="width:1px;height:16px;background:var(--border);margin:0 4px"></div>
      <button class="richtext-btn" title="Bullet List"><i data-lucide="list" class="w-3.5 h-3.5"></i></button>
      <button class="richtext-btn" title="Numbered List"><i data-lucide="list-ordered" class="w-3.5 h-3.5"></i></button>
      <div style="width:1px;height:16px;background:var(--border);margin:0 4px"></div>
      <button class="richtext-btn" title="Heading"><i data-lucide="heading" class="w-3.5 h-3.5"></i></button>
      <button class="richtext-btn ml-auto" title="AI Enhance">
        <i data-lucide="sparkles" class="w-3.5 h-3.5" style="color:var(--brand-primary)"></i>
      </button>
    </div>
    <textarea rows="8" class="w-full px-3 py-2 rounded-b-md border text-sm"
      style="border-color:var(--border);resize:vertical"
      oninput="markChanged('basics')">Beautiful handcrafted ceramic mug featuring a stunning sunset mountain landscape...</textarea>
  </div>

  <!-- Category -->
  <div class="mb-5">
    <label class="block text-xs font-semibold mb-1.5" style="color:var(--text-secondary)">Category</label>
    <select class="w-full h-10 px-3 rounded-md border text-sm" style="border-color:var(--border)">
      <option>Home & Living > Kitchen & Dining > Drinkware > Mugs</option>
    </select>
  </div>
</div>
```

### 6. Photos Tab Content (C6)

```html
<div class="editor-panel" id="panel-photos" style="display:none">
  <h2 class="text-lg font-bold mb-4">Photos</h2>
  <p class="text-xs mb-4" style="color:var(--text-secondary)">Drag to reorder. First image is the primary listing photo.</p>

  <div class="grid grid-cols-4 gap-3" id="photoGrid">
    <!-- Photo tile with drag handle -->
    <div class="photo-tile" draggable="true">
      <div class="photo-tile-badge">Primary</div>
      <img src="..." class="photo-tile-img" alt="">
      <div class="photo-tile-actions">
        <button class="photo-action-btn" title="Replace"><i data-lucide="replace" class="w-3.5 h-3.5"></i></button>
        <button class="photo-action-btn danger" title="Remove"><i data-lucide="trash-2" class="w-3.5 h-3.5"></i></button>
      </div>
      <div class="photo-tile-drag"><i data-lucide="grip-vertical" class="w-4 h-4"></i></div>
    </div>
    <!-- More photo tiles... -->

    <!-- Upload slot -->
    <div class="upload-zone flex flex-col items-center justify-center rounded-lg" style="aspect-ratio:1;min-height:120px">
      <i data-lucide="plus" class="w-6 h-6 mb-1" style="color:var(--text-tertiary)"></i>
      <span class="text-xs" style="color:var(--text-tertiary)">Add photo</span>
    </div>
  </div>
</div>
```

Photo tile CSS:
```css
.photo-tile {
  position: relative; border-radius: 12px; overflow: hidden;
  border: 1px solid var(--border); cursor: grab;
  aspect-ratio: 1; background: var(--bg-muted);
}
.photo-tile.dragging { opacity: 0.5; border: 2px dashed var(--brand-primary); }
.photo-tile-img { width: 100%; height: 100%; object-fit: cover; }
.photo-tile-badge {
  position: absolute; top: 6px; left: 6px;
  font-size: 10px; font-weight: 600;
  background: var(--brand-primary); color: #fff;
  padding: 2px 6px; border-radius: 6px;
}
.photo-tile-actions {
  position: absolute; bottom: 6px; right: 6px;
  display: none; gap: 4px;
}
.photo-tile:hover .photo-tile-actions { display: flex; }
.photo-action-btn {
  width: 28px; height: 28px; border-radius: 6px;
  display: flex; align-items: center; justify-content: center;
  background: rgba(255,255,255,0.9); border: none; cursor: pointer;
  color: var(--text-secondary);
}
.photo-action-btn.danger:hover { background: var(--danger-bg); color: var(--danger); }
.photo-tile-drag {
  position: absolute; top: 6px; right: 6px;
  display: none; color: rgba(255,255,255,0.8);
}
.photo-tile:hover .photo-tile-drag { display: block; }
```

### 7. Pricing, Inventory, SEO, Shipping, Variations Tabs

Each tab follows same panel structure. Key fields:

**Pricing:** Price input, Compare-at price, Cost per item, Profit margin calc (auto)
**Inventory:** SKU, Quantity, Low stock threshold, Track inventory toggle
**SEO & Tags:** Tags input (chip-style), Meta title, Meta description with char counts
**Shipping:** Weight, dimensions, shipping profile select, processing time
**Variations:** Variant grid (Size x Color matrix), individual variant price/stock overrides

All inputs include `oninput="markChanged('tabname')"` for change indicators.

### 8. Preview Panel (C4)

```html
<div id="previewPanel" style="width:350px;border-left:1px solid var(--border);display:none;overflow-y:auto">
  <div class="p-4">
    <div class="flex items-center justify-between mb-3">
      <span class="text-xs font-semibold" style="color:var(--text-secondary)">Marketplace Preview</span>
      <select class="text-xs border rounded-md px-2 py-1" style="border-color:var(--border)">
        <option>Etsy</option>
        <option>Shopify</option>
      </select>
    </div>
    <!-- Simulated Etsy listing card -->
    <div class="rounded-lg border overflow-hidden" style="border-color:var(--border)">
      <div style="aspect-ratio:4/3;background:var(--bg-muted)" class="flex items-center justify-center">
        <span class="text-xs" style="color:var(--text-tertiary)">Photo preview</span>
      </div>
      <div class="p-3">
        <div class="text-sm font-semibold mb-1" id="previewTitle">Sunset Mountain Mug...</div>
        <div class="text-lg font-bold font-mono" id="previewPrice">$24.99</div>
        <div class="text-xs mt-1" style="color:var(--text-tertiary)">Free shipping</div>
      </div>
    </div>
  </div>
</div>
```

### 9. Auto-save JS Logic (C2)

```js
var saveTimer = null;
function markChanged(tabName) {
  // Show change dot (C3)
  var dot = document.getElementById('dot-' + tabName);
  if (dot) dot.style.display = '';

  // Update auto-save indicator
  var status = document.getElementById('autoSaveStatus');
  status.style.background = 'var(--brand-secondary-bg)';
  status.style.color = 'var(--brand-secondary)';
  status.querySelector('span').textContent = 'Unsaved changes';
  status.querySelector('i').setAttribute('data-lucide', 'loader');
  if (window.lucide) lucide.createIcons();

  // Debounce auto-save (1.5s)
  clearTimeout(saveTimer);
  saveTimer = setTimeout(function() {
    status.style.background = 'var(--success-bg)';
    status.style.color = 'var(--success)';
    status.querySelector('span').textContent = 'All changes saved';
    status.querySelector('i').setAttribute('data-lucide', 'check-circle');
    if (window.lucide) lucide.createIcons();
  }, 1500);
}
```

### 10. Field Validation JS (C5)

```js
function updateCharCount(input, countId, max) {
  var count = input.value.length;
  var el = document.getElementById(countId);
  el.textContent = count + ' / ' + max;
  el.style.color = count > max ? 'var(--danger)' : 'var(--text-tertiary)';
}
```

### 11. Rich Text Toolbar CSS

```css
.richtext-btn {
  width: 28px; height: 28px; border-radius: 6px;
  display: flex; align-items: center; justify-content: center;
  border: none; background: none; cursor: pointer;
  color: var(--text-secondary); transition: all 0.12s;
}
.richtext-btn:hover { background: var(--bg-card); color: var(--text-primary); }
.richtext-btn.active { background: var(--brand-primary-bg); color: var(--brand-primary); }
```

## Todo List

- [ ] Create `10-listing-editor.html` with standard boilerplate
- [ ] Add sidebar (copy from existing pages, set Listings active)
- [ ] Add page header with breadcrumb + auto-save indicator + Preview + Publish buttons
- [ ] Build vertical tab navigation (7 tabs) with change dot indicators
- [ ] Build Basics panel: title (char count), description (rich text toolbar), category
- [ ] Build Photos panel: drag-to-reorder grid, upload slot, primary badge
- [ ] Build Pricing panel: price, compare-at, cost, profit calc
- [ ] Build Inventory panel: SKU, quantity, low-stock threshold
- [ ] Build SEO & Tags panel: tag chips, meta title/desc with char counts
- [ ] Build Shipping panel: weight, dimensions, profile, processing time
- [ ] Build Variations panel: variant matrix grid
- [ ] Build side-by-side preview panel (Etsy/Shopify toggle)
- [ ] Implement auto-save JS with debounce + status indicator
- [ ] Implement change indicator dots per tab
- [ ] Implement field validation (char count, required fields)
- [ ] Add photo drag-to-reorder JS (basic HTML5 drag & drop)
- [ ] Add dark mode verification
- [ ] Add loading skeleton state for initial page load
- [ ] Add empty state for Photos tab (no photos uploaded yet)

## Success Criteria

- Vertical tabs switch between 7 content panels without page reload
- Change dots appear on tabs when input is modified
- Auto-save indicator transitions: "Unsaved changes" (amber) → "All changes saved" (green) after 1.5s debounce
- Title field shows live character count, turns red when over limit
- Photo grid supports drag handle visibility on hover
- Preview panel toggles on/off via button; shows Etsy/Shopify switch
- Rich text toolbar buttons have hover/active states
- Breadcrumb links back to listings page
- Full dark mode support

## Risk Assessment

- **Medium:** Photo drag-to-reorder is complex in vanilla JS — wireframe only needs visual representation of drag handles and drop targets, not full implementation
- **Low:** Rich text toolbar is visual-only in wireframe; no actual contentEditable needed
- **Low:** Large file size — aim for under 800 lines by keeping CSS in page `<style>` and JS minimal
