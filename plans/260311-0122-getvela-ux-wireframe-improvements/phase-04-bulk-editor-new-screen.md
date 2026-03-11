# Phase 4: Bulk Editor — New Screen (11-bulk-editor.html)

## Context Links
- Source: `docs/getvela/getvela-ux-research.md` Section 8.4 (D1-D5)
- Getvela bulk editor: `docs/getvela/getvela-ux-research.md` Section 3 (Bulk Editor)
- Design system: `docs/design-guidelines.md`
- Depends on: Phase 1 (breadcrumb, toast, undo toast components)

## Overview
- **Priority:** P1
- **Status:** Pending
- **Effort:** 3h

Create a spreadsheet-like bulk editor screen. Sellers select multiple listings from the listings page and navigate here to edit fields in bulk. Features diff preview before sync, undo stack, AI optimization progress, smart apply logic, and keyboard navigation.

## Key Insights
- Getvela's bulk editor uses a spreadsheet-like grid — proven UX for power sellers
- Key Getvela weakness: "Apply to all" vs "Apply to selected" is confusing (small dropdown)
- Diff preview is critical for trust — sellers fear accidental bulk changes
- Undo stack prevents anxiety around destructive edits
- Navigate here from listings page floating bar "Bulk Edit" button

## UX Improvements Applied

| ID | Improvement | Implementation |
|----|-------------|----------------|
| D1 | Diff preview before sync | Right panel showing before → after for each changed field |
| D2 | Undo stack per-session | Ctrl+Z tracks last 20 changes; undo button in toolbar |
| D3 | AI optimization progress | Progress bar + ETA when optimizing multiple listings |
| D4 | Smart apply logic | Two clear buttons: "Apply to All" (blue) vs "Apply to Selected" (ghost); visual distinction |
| D5 | Keyboard navigation | Tab between cells, Enter to edit, Escape to cancel |

## Related Code Files

### Created
- `docs/wireframes/11-bulk-editor.html`

## Implementation Steps

### 1. Page Shell

Standard wireframe boilerplate. Sidebar with "Listings" active. Breadcrumb: `Listings > Bulk Edit (12 listings)`.

### 2. Page Header & Toolbar

```html
<div class="flex items-center justify-between mb-5">
  <div>
    <div id="breadcrumb" class="breadcrumb mb-1">
      <a href="04-listings.html">Listings</a>
      <i data-lucide="chevron-right" class="w-3.5 h-3.5 breadcrumb-separator"></i>
      <span class="breadcrumb-current">Bulk Edit (12 listings)</span>
    </div>
    <h1 class="text-xl font-extrabold tracking-tight">Bulk Editor</h1>
  </div>
  <div class="flex items-center gap-3">
    <!-- Undo (D2) -->
    <button class="btn-ghost px-3 py-2 text-xs font-medium" id="undoBtn" onclick="undoLastChange()" disabled
      style="opacity:0.4">
      <i data-lucide="undo-2" class="w-4 h-4 mr-1"></i> Undo
      <span id="undoCount" class="ml-1 text-xs" style="color:var(--text-tertiary)"></span>
    </button>
    <!-- Review changes / Diff preview (D1) -->
    <button class="btn-ghost px-3 py-2 text-xs font-medium" onclick="toggleDiffPanel()">
      <i data-lucide="git-compare" class="w-4 h-4 mr-1"></i> Review Changes
      <span id="changeCount" class="ml-1 px-1.5 py-0.5 rounded-full text-xs font-bold"
        style="background:var(--brand-secondary-bg);color:var(--brand-secondary)">0</span>
    </button>
    <!-- Cancel -->
    <button class="btn-ghost px-4 py-2 text-sm font-medium" onclick="window.location.href='04-listings.html'">Cancel</button>
    <!-- Publish -->
    <button class="btn-primary px-5 py-2 text-sm font-semibold" onclick="showDiffBeforePublish()">
      <i data-lucide="upload" class="w-4 h-4 mr-1.5"></i> Publish Changes
    </button>
  </div>
</div>
```

### 3. Bulk Action Bar (D4 — Smart Apply Logic)

```html
<!-- Bulk action bar — sticky below header -->
<div class="flex items-center gap-3 p-3 rounded-lg mb-4" style="background:var(--bg-muted);border:1px solid var(--border)">
  <!-- Field selector -->
  <select class="h-9 px-3 rounded-md border text-xs font-medium" style="border-color:var(--border)" id="bulkField">
    <option value="">Select field...</option>
    <option value="price">Price</option>
    <option value="title">Title</option>
    <option value="tags">Tags</option>
    <option value="description">Description</option>
    <option value="quantity">Quantity</option>
    <option value="shipping">Shipping Profile</option>
  </select>

  <!-- Action type -->
  <select class="h-9 px-3 rounded-md border text-xs font-medium" style="border-color:var(--border)" id="bulkAction">
    <option value="set">Set to</option>
    <option value="increase">Increase by</option>
    <option value="decrease">Decrease by</option>
    <option value="append">Append text</option>
    <option value="replace">Find & Replace</option>
  </select>

  <!-- Value input -->
  <input type="text" class="h-9 px-3 rounded-md border text-xs flex-1" placeholder="Enter value..."
    style="border-color:var(--border)" id="bulkValue">

  <!-- Smart apply buttons (D4) — clear visual distinction -->
  <button class="btn-primary px-4 py-2 text-xs font-semibold" onclick="applyToAll()">
    Apply to All (12)
  </button>
  <button class="btn-ghost px-4 py-2 text-xs font-semibold" onclick="applyToSelected()">
    Apply to Selected (<span id="bulkSelectedCount">0</span>)
  </button>
</div>
```

### 4. Spreadsheet Grid

```html
<div class="overflow-x-auto rounded-lg border" style="border-color:var(--border)">
  <table class="w-full text-sm">
    <thead style="background:var(--bg-muted);position:sticky;top:0;z-index:5">
      <tr>
        <th class="px-3 py-2.5 text-left"><input type="checkbox" id="bulkSelectAll" onchange="toggleBulkSelectAll()"></th>
        <th class="px-3 py-2.5 text-left text-xs font-semibold" style="color:var(--text-secondary);min-width:60px">Image</th>
        <th class="px-3 py-2.5 text-left text-xs font-semibold" style="color:var(--text-secondary);min-width:250px">Title</th>
        <th class="px-3 py-2.5 text-left text-xs font-semibold" style="color:var(--text-secondary);min-width:80px">Price</th>
        <th class="px-3 py-2.5 text-left text-xs font-semibold" style="color:var(--text-secondary);min-width:60px">Stock</th>
        <th class="px-3 py-2.5 text-left text-xs font-semibold" style="color:var(--text-secondary);min-width:100px">Tags</th>
        <th class="px-3 py-2.5 text-left text-xs font-semibold" style="color:var(--text-secondary);min-width:80px">Status</th>
        <th class="px-3 py-2.5 text-left text-xs font-semibold" style="color:var(--text-secondary);min-width:60px">Score</th>
      </tr>
    </thead>
    <tbody id="bulkBody">
      <!-- Editable rows — each cell is an editable-cell -->
      <tr class="bulk-row" id="bulk-row-1">
        <td class="px-3 py-2"><input type="checkbox" onchange="toggleBulkRow(this, 'bulk-row-1')"></td>
        <td class="px-3 py-2"><img src="..." class="w-10 h-10 rounded-lg object-cover"></td>
        <td class="px-3 py-2">
          <div class="editable-cell bulk-cell" data-field="title" data-row="1"
            onclick="makeBulkEditable(this)" tabindex="0">
            Sunset Mountain Mug — Ceramic Coffee Cup
          </div>
        </td>
        <td class="px-3 py-2">
          <div class="editable-cell bulk-cell" data-field="price" data-row="1"
            onclick="makeBulkEditable(this)" tabindex="0">
            $24.99
          </div>
        </td>
        <td class="px-3 py-2">
          <div class="editable-cell bulk-cell" data-field="stock" data-row="1"
            onclick="makeBulkEditable(this)" tabindex="0">
            47
          </div>
        </td>
        <td class="px-3 py-2">
          <div class="flex flex-wrap gap-1">
            <span class="text-xs px-2 py-0.5 rounded-full" style="background:var(--bg-muted)">mug</span>
            <span class="text-xs px-2 py-0.5 rounded-full" style="background:var(--bg-muted)">nature</span>
          </div>
        </td>
        <td class="px-3 py-2"><span class="status-synced">Synced</span></td>
        <td class="px-3 py-2"><span class="score-badge score-a">A</span></td>
      </tr>
      <!-- Repeat for 12 rows with varied data -->
    </tbody>
  </table>
</div>
```

### 5. Cell Editing CSS

```css
.bulk-cell {
  min-height: 32px; display: flex; align-items: center;
}
.bulk-cell.changed {
  background: var(--brand-primary-bg);
  border-color: var(--brand-primary);
}
.bulk-cell.changed::after {
  content: '●'; position: absolute; top: 2px; right: 4px;
  font-size: 8px; color: var(--brand-primary);
}
/* Keyboard focus (D5) */
.bulk-cell:focus {
  outline: 2px solid var(--brand-primary);
  outline-offset: -2px;
  border-radius: 6px;
}
```

### 6. Diff Preview Panel (D1)

Right-side panel showing all pending changes:

```html
<div id="diffPanel" class="fixed top-0 right-0 h-full z-40"
  style="width:400px;background:var(--bg-card);border-left:1px solid var(--border);
  box-shadow:var(--shadow-lg);transform:translateX(100%);transition:transform 0.25s ease">
  <div class="p-4 border-b" style="border-color:var(--border)">
    <div class="flex items-center justify-between">
      <h3 class="text-sm font-bold">Review Changes</h3>
      <button onclick="toggleDiffPanel()" style="color:var(--text-secondary)">
        <i data-lucide="x" class="w-5 h-5"></i>
      </button>
    </div>
    <p class="text-xs mt-1" style="color:var(--text-secondary)">
      <span id="diffCount">3</span> changes across <span id="diffListings">2</span> listings
    </p>
  </div>
  <div class="p-4 overflow-y-auto" style="max-height:calc(100vh - 120px)">
    <!-- Diff items -->
    <div class="diff-item mb-4">
      <div class="text-xs font-semibold mb-2" style="color:var(--text-primary)">
        Sunset Mountain Mug
      </div>
      <div class="rounded-lg overflow-hidden border" style="border-color:var(--border)">
        <div class="px-3 py-2 text-xs" style="background:var(--danger-bg)">
          <span class="font-mono" style="color:var(--danger)">- </span>
          <span style="color:var(--danger)">$24.99</span>
        </div>
        <div class="px-3 py-2 text-xs" style="background:var(--success-bg)">
          <span class="font-mono" style="color:var(--success)">+ </span>
          <span style="color:var(--success)">$29.99</span>
        </div>
      </div>
    </div>
    <!-- More diff items -->
  </div>
</div>
```

### 7. AI Optimization Progress (D3)

Modal/overlay shown when user triggers "Optimize with AI":

```html
<div class="modal-overlay" id="aiProgressModal">
  <div class="rounded-xl p-6" style="background:var(--bg-card);width:440px;border:1px solid var(--border)">
    <div class="flex items-center gap-3 mb-4">
      <div class="w-10 h-10 rounded-lg flex items-center justify-center" style="background:var(--brand-primary-bg)">
        <i data-lucide="sparkles" class="w-5 h-5" style="color:var(--brand-primary)"></i>
      </div>
      <div>
        <div class="text-sm font-bold">AI Optimization</div>
        <div class="text-xs" style="color:var(--text-secondary)">Optimizing 12 listings...</div>
      </div>
    </div>
    <!-- Progress -->
    <div class="mb-3">
      <div class="flex justify-between text-xs mb-1">
        <span style="color:var(--text-secondary)"><span id="aiDone">5</span> of <span id="aiTotal">12</span> complete</span>
        <span style="color:var(--text-tertiary)">~15s remaining</span>
      </div>
      <div class="h-2 rounded-full overflow-hidden" style="background:var(--bg-muted)">
        <div class="h-full rounded-full transition-all" style="width:42%;background:var(--brand-primary)"></div>
      </div>
    </div>
    <!-- Current item -->
    <div class="text-xs p-2 rounded-md" style="background:var(--bg-muted);color:var(--text-secondary)">
      <i data-lucide="loader" class="w-3 h-3 inline animate-spin mr-1"></i>
      Processing: "Vintage Floral Tea Set — Hand-Painted..."
    </div>
    <!-- Cancel -->
    <div class="flex justify-end mt-4">
      <button class="btn-ghost px-4 py-2 text-xs font-medium" onclick="closeModal('aiProgressModal')">Cancel</button>
    </div>
  </div>
</div>
```

### 8. Undo Stack JS (D2)

```js
var undoStack = [];
var MAX_UNDO = 20;

function pushUndo(change) {
  // change = { row, field, oldValue, newValue }
  undoStack.push(change);
  if (undoStack.length > MAX_UNDO) undoStack.shift();
  updateUndoUI();
}

function undoLastChange() {
  if (!undoStack.length) return;
  var change = undoStack.pop();
  // Revert cell value
  var cell = document.querySelector('[data-row="' + change.row + '"][data-field="' + change.field + '"]');
  if (cell) {
    cell.textContent = change.oldValue;
    cell.classList.remove('changed');
  }
  updateUndoUI();
  showToast('Reverted ' + change.field + ' for row ' + change.row, 'info');
}

function updateUndoUI() {
  var btn = document.getElementById('undoBtn');
  var count = document.getElementById('undoCount');
  if (undoStack.length > 0) {
    btn.disabled = false;
    btn.style.opacity = '1';
    count.textContent = '(' + undoStack.length + ')';
  } else {
    btn.disabled = true;
    btn.style.opacity = '0.4';
    count.textContent = '';
  }
  document.getElementById('changeCount').textContent = undoStack.length;
}

// Ctrl+Z handler
document.addEventListener('keydown', function(e) {
  if ((e.metaKey || e.ctrlKey) && e.key === 'z' && !e.shiftKey) {
    e.preventDefault();
    undoLastChange();
  }
});
```

### 9. Keyboard Navigation JS (D5)

```js
document.addEventListener('keydown', function(e) {
  var active = document.activeElement;
  if (!active || !active.classList.contains('bulk-cell')) return;

  var row = parseInt(active.dataset.row);
  var field = active.dataset.field;
  var fields = ['title', 'price', 'stock'];
  var fieldIdx = fields.indexOf(field);

  if (e.key === 'Tab') {
    e.preventDefault();
    var nextField = e.shiftKey ? fieldIdx - 1 : fieldIdx + 1;
    if (nextField >= 0 && nextField < fields.length) {
      var next = document.querySelector('[data-row="' + row + '"][data-field="' + fields[nextField] + '"]');
      if (next) next.focus();
    }
  }
  if (e.key === 'Enter') {
    makeBulkEditable(active);
  }
  if (e.key === 'ArrowDown') {
    var nextRow = document.querySelector('[data-row="' + (row + 1) + '"][data-field="' + field + '"]');
    if (nextRow) nextRow.focus();
  }
  if (e.key === 'ArrowUp') {
    var prevRow = document.querySelector('[data-row="' + (row - 1) + '"][data-field="' + field + '"]');
    if (prevRow) prevRow.focus();
  }
});
```

### 10. Diff Panel Toggle & Publish Confirmation (D1)

```js
function toggleDiffPanel() {
  var panel = document.getElementById('diffPanel');
  var isOpen = panel.style.transform === 'translateX(0px)';
  panel.style.transform = isOpen ? 'translateX(100%)' : 'translateX(0px)';
}

function showDiffBeforePublish() {
  // Always show diff panel before allowing publish
  toggleDiffPanel();
  // After review, user clicks "Confirm Publish" inside diff panel
}
```

## Todo List

- [ ] Create `11-bulk-editor.html` with standard boilerplate
- [ ] Add sidebar (Listings active) + breadcrumb
- [ ] Build toolbar: undo button, review changes, cancel, publish
- [ ] Build bulk action bar: field selector, action type, value, Apply to All / Apply to Selected
- [ ] Build spreadsheet grid with 12 editable rows
- [ ] Add editable cell click handler with undo tracking
- [ ] Build diff preview slide-in panel with before/after display
- [ ] Build AI optimization progress modal
- [ ] Implement undo stack JS (max 20, Ctrl+Z)
- [ ] Implement keyboard navigation (Tab, Enter, Arrow keys)
- [ ] Add cell `.changed` visual indicator
- [ ] Add skeleton loading state for grid
- [ ] Add dark mode verification
- [ ] Wire "Publish Changes" to show diff panel first

## Success Criteria

- Spreadsheet grid renders 12 rows with editable title, price, stock cells
- Clicking a cell enters edit mode; changed cells show blue background + dot
- Undo button tracks change count; Ctrl+Z reverts last change
- "Review Changes" opens diff panel showing before → after per field
- "Apply to All" (blue) vs "Apply to Selected" (ghost) buttons are visually distinct
- AI progress modal shows progress bar + ETA + current item + cancel
- Tab/Arrow keys navigate between cells
- Dark mode fully supported

## Risk Assessment

- **Medium:** Spreadsheet-like editing with full keyboard nav is complex — wireframe needs visual demonstration, not production-grade implementation
- **Low:** Diff panel data is static/hardcoded in wireframe — adequate for demonstrating the pattern
