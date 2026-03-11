# Phase 1: Shared Infrastructure — Tokens CSS & Navigation JS

## Context Links
- Source: `docs/getvela/getvela-ux-research.md` Section 8.4 (A1, A3, G1-G6, B1)
- Tokens: `docs/wireframes/_shared-tokens.css`
- Navigation: `docs/wireframes/_shared-navigation.js`
- Design system: `docs/design-guidelines.md`

## Overview
- **Priority:** P1 — all subsequent phases depend on these shared components
- **Status:** Pending
- **Effort:** 3h

Add reusable CSS components and JS utilities that all wireframes will consume. This phase creates the building blocks; later phases wire them into specific pages.

## Key Insights
- `_shared-tokens.css` already has `.skeleton` class with shimmer animation — extend it, don't duplicate
- `_shared-navigation.js` already has toast system, modal system, sidebar collapse — add to existing patterns
- All new CSS must use existing `var(--*)` tokens for dark mode compatibility
- Nav file map in JS needs entries for new screens (10, 11)

## UX Improvements Applied

| ID | Improvement | Component |
|----|-------------|-----------|
| A1 | Persistent breadcrumb | CSS `.breadcrumb` + JS `updateBreadcrumb()` |
| A3 | Cmd+K command palette | CSS `.command-palette` + JS `initCommandPalette()` |
| B1 | Skeleton loading variants | CSS `.skeleton-text`, `.skeleton-thumbnail`, `.skeleton-row` |
| G1 | Consistent overlay theme | CSS `.overlay-panel` light/dark aware |
| G2 | Toast notifications | Already exists — enhance with undo countdown variant |
| G3 | Empty state component | CSS `.empty-state` reusable pattern |
| G4 | Subtle shadows for depth | Review/adjust shadow tokens |
| G6 | Success/error color coding | CSS `.status-synced`, `.status-pending`, `.status-error` |

## Related Code Files

### Modified
- `docs/wireframes/_shared-tokens.css`
- `docs/wireframes/_shared-navigation.js`

## Implementation Steps

### 1. Skeleton Loading Variants (`_shared-tokens.css`)

Extend existing `.skeleton` class with specific shapes:

```css
/* Skeleton variants — extend existing .skeleton base */
.skeleton-text { height: 14px; width: 60%; }
.skeleton-text-sm { height: 10px; width: 40%; }
.skeleton-thumbnail { width: 48px; height: 48px; border-radius: 8px; }
.skeleton-avatar { width: 32px; height: 32px; border-radius: 50%; }
.skeleton-badge { width: 28px; height: 22px; border-radius: 6px; }
.skeleton-row {
  display: flex; align-items: center; gap: 12px;
  padding: 12px 16px;
  border-bottom: 1px solid var(--border-light);
}
```

### 2. Breadcrumb Component (`_shared-tokens.css`)

```css
.breadcrumb {
  display: flex; align-items: center; gap: 6px;
  font-size: 13px; color: var(--text-secondary);
}
.breadcrumb a {
  color: var(--text-secondary); text-decoration: none;
  transition: color 0.12s;
}
.breadcrumb a:hover { color: var(--brand-primary); }
.breadcrumb .breadcrumb-separator { color: var(--text-tertiary); }
.breadcrumb .breadcrumb-current {
  color: var(--text-primary); font-weight: 600;
}
```

### 3. Command Palette (`_shared-tokens.css`)

```css
.command-palette-overlay {
  position: fixed; inset: 0;
  background: rgba(0,0,0,0.4);
  z-index: 700; display: none;
  align-items: flex-start; justify-content: center;
  padding-top: 20vh;
}
.command-palette-overlay.active { display: flex; }

.command-palette {
  width: 520px; max-height: 400px;
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 16px;
  box-shadow: var(--shadow-lg);
  overflow: hidden;
}
.command-palette-input {
  width: 100%; height: 48px;
  padding: 0 16px 0 44px;
  border: none; border-bottom: 1px solid var(--border-light);
  background: transparent;
  font-size: 15px; font-weight: 500;
  color: var(--text-primary);
}
.command-palette-input::placeholder { color: var(--text-tertiary); }
.command-palette-results {
  max-height: 320px; overflow-y: auto;
  padding: 8px;
}
.command-result {
  display: flex; align-items: center; gap: 10px;
  padding: 10px 12px; border-radius: 8px;
  cursor: pointer; transition: background 0.1s;
  font-size: 13px; color: var(--text-primary);
}
.command-result:hover,
.command-result.highlighted { background: var(--bg-muted); }
.command-result-icon { color: var(--text-tertiary); }
.command-result-shortcut {
  margin-left: auto; font-size: 11px;
  color: var(--text-tertiary); font-family: 'JetBrains Mono', monospace;
}
```

### 4. Empty State Component (`_shared-tokens.css`)

```css
.empty-state {
  display: flex; flex-direction: column;
  align-items: center; justify-content: center;
  padding: 48px 24px; text-align: center;
}
.empty-state-icon {
  width: 64px; height: 64px;
  border-radius: 16px;
  display: flex; align-items: center; justify-content: center;
  margin-bottom: 16px;
}
.empty-state-title {
  font-size: 16px; font-weight: 700;
  color: var(--text-primary); margin-bottom: 6px;
}
.empty-state-desc {
  font-size: 13px; color: var(--text-secondary);
  max-width: 320px; margin-bottom: 20px;
}
```

### 5. Recovery Toast with Undo (`_shared-tokens.css`)

```css
.toast-undo {
  display: flex; align-items: center; gap: 12px;
  padding: 12px 16px;
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 12px;
  box-shadow: var(--shadow-md);
  min-width: 320px;
}
.toast-undo-progress {
  height: 3px; border-radius: 2px;
  background: var(--bg-muted);
  margin-top: 8px; overflow: hidden;
}
.toast-undo-progress-fill {
  height: 100%; background: var(--brand-primary);
  border-radius: 2px;
  animation: undoCountdown 10s linear forwards;
}
@keyframes undoCountdown {
  from { width: 100%; }
  to { width: 0%; }
}
```

### 6. Status Color Badges (`_shared-tokens.css`)

```css
.status-synced {
  background: var(--success-bg); color: var(--success);
  font-size: 11px; font-weight: 600;
  padding: 2px 8px; border-radius: 9999px;
}
.status-pending {
  background: var(--brand-secondary-bg); color: var(--brand-secondary);
  font-size: 11px; font-weight: 600;
  padding: 2px 8px; border-radius: 9999px;
}
.status-error {
  background: var(--danger-bg); color: var(--danger);
  font-size: 11px; font-weight: 600;
  padding: 2px 8px; border-radius: 9999px;
}
.status-draft {
  background: var(--bg-muted); color: var(--text-secondary);
  font-size: 11px; font-weight: 600;
  padding: 2px 8px; border-radius: 9999px;
}
```

### 7. Breadcrumb JS (`_shared-navigation.js`)

Add `updateBreadcrumb(items)` function:
```js
// items = [{label: 'Listings', href: '04-listings.html'}, {label: 'Edit: Sunset Mug'}]
function updateBreadcrumb(items) {
  var el = document.getElementById('breadcrumb');
  if (!el) return;
  el.innerHTML = items.map(function(item, i) {
    var isLast = i === items.length - 1;
    if (isLast) return '<span class="breadcrumb-current">' + item.label + '</span>';
    var sep = '<i data-lucide="chevron-right" class="w-3.5 h-3.5 breadcrumb-separator"></i>';
    return '<a href="' + (item.href || '#') + '" onclick="' + (item.onclick || '') + '">' + item.label + '</a>' + sep;
  }).join('');
  if (window.lucide) lucide.createIcons();
}
```

### 8. Command Palette JS (`_shared-navigation.js`)

Add initialization and keyboard handler:
```js
var COMMAND_ITEMS = [
  { label: 'Dashboard', icon: 'layout-dashboard', action: "navigate('dashboard')" },
  { label: 'Listings', icon: 'list', action: "navigate('listings')" },
  { label: 'Orders', icon: 'shopping-cart', action: "navigate('orders')" },
  { label: 'Research', icon: 'search', action: "navigate('research')" },
  { label: 'POD Hub', icon: 'printer', action: "navigate('pod-hub')" },
  { label: 'Analytics', icon: 'bar-chart-3', action: "navigate('analytics')" },
  { label: 'Settings', icon: 'settings', action: "navigate('settings')" },
  { label: 'New Listing', icon: 'plus', action: "navigate('listing-editor')", shortcut: 'N' },
  { label: 'Bulk Edit', icon: 'edit-3', action: "navigate('bulk-editor')" }
];

function initCommandPalette() {
  // Inject command palette HTML into DOM if not present
  if (document.getElementById('commandPalette')) return;
  var html = '<div class="command-palette-overlay" id="commandPalette">'
    + '<div class="command-palette">'
    + '<div style="position:relative">'
    + '<i data-lucide="search" class="w-4.5 h-4.5" style="position:absolute;left:14px;top:14px;color:var(--text-tertiary)"></i>'
    + '<input class="command-palette-input" placeholder="Type a command or search..." id="commandInput">'
    + '</div>'
    + '<div class="command-palette-results" id="commandResults"></div>'
    + '</div></div>';
  document.body.insertAdjacentHTML('beforeend', html);
  // Filter on input
  document.getElementById('commandInput').addEventListener('input', filterCommands);
}

function toggleCommandPalette() {
  var el = document.getElementById('commandPalette');
  if (!el) { initCommandPalette(); el = document.getElementById('commandPalette'); }
  el.classList.toggle('active');
  if (el.classList.contains('active')) {
    var input = document.getElementById('commandInput');
    input.value = '';
    filterCommands();
    setTimeout(function() { input.focus(); }, 50);
  }
}

function filterCommands() {
  var query = (document.getElementById('commandInput').value || '').toLowerCase();
  var results = COMMAND_ITEMS.filter(function(c) {
    return c.label.toLowerCase().indexOf(query) !== -1;
  });
  var container = document.getElementById('commandResults');
  container.innerHTML = results.map(function(c) {
    return '<div class="command-result" onclick="' + c.action + ';toggleCommandPalette()">'
      + '<i data-lucide="' + c.icon + '" class="w-4 h-4 command-result-icon"></i>'
      + '<span>' + c.label + '</span>'
      + (c.shortcut ? '<span class="command-result-shortcut">' + c.shortcut + '</span>' : '')
      + '</div>';
  }).join('');
  if (window.lucide) lucide.createIcons();
}

// Cmd+K / Ctrl+K listener
document.addEventListener('keydown', function(e) {
  if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
    e.preventDefault();
    toggleCommandPalette();
  }
  if (e.key === 'Escape') {
    var el = document.getElementById('commandPalette');
    if (el && el.classList.contains('active')) {
      el.classList.remove('active');
    }
  }
});
```

### 9. Recovery Toast JS (`_shared-navigation.js`)

Enhance existing `showToast` or add new function:
```js
function showUndoToast(message, undoCallback) {
  var container = document.getElementById('toast-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toast-container';
    container.className = 'fixed top-4 right-4 z-[600] space-y-2';
    document.body.appendChild(container);
  }
  var toast = document.createElement('div');
  toast.className = 'toast-undo toast-enter';
  toast.innerHTML = '<i data-lucide="check-circle" class="w-5 h-5 flex-shrink-0" style="color:var(--success)"></i>'
    + '<div style="flex:1"><div class="text-sm font-medium">' + message + '</div>'
    + '<div class="toast-undo-progress"><div class="toast-undo-progress-fill"></div></div></div>'
    + '<button class="btn-ghost text-xs px-3 py-1" style="border-radius:8px;font-weight:600;color:var(--brand-primary)" '
    + 'onclick="this.closest(\'.toast-undo\').remove()">Undo</button>';
  container.appendChild(toast);
  if (window.lucide) lucide.createIcons();
  setTimeout(function() { if (toast.parentNode) toast.remove(); }, 10000);
}
```

### 10. Update Nav File Map (`_shared-navigation.js`)

Add entries for new screens:
```js
// Add to NAV_FILE_MAP:
'listing-editor': '10-listing-editor.html',
'bulk-editor': '11-bulk-editor.html'
```

### 11. Dark Mode Coverage

All new CSS classes use `var(--*)` tokens — verify no hardcoded colors. The overlay backgrounds already have dark mode overrides in existing `.modal-overlay` dark rule. Command palette overlay uses same pattern.

## Todo List

- [ ] Add skeleton variant classes to `_shared-tokens.css`
- [ ] Add breadcrumb CSS to `_shared-tokens.css`
- [ ] Add command palette CSS to `_shared-tokens.css`
- [ ] Add empty state CSS to `_shared-tokens.css`
- [ ] Add recovery toast CSS to `_shared-tokens.css`
- [ ] Add status badge classes to `_shared-tokens.css`
- [ ] Add `updateBreadcrumb()` to `_shared-navigation.js`
- [ ] Add command palette JS to `_shared-navigation.js`
- [ ] Add `showUndoToast()` to `_shared-navigation.js`
- [ ] Add new screen entries to `NAV_FILE_MAP`
- [ ] Add `initCommandPalette()` call in DOMContentLoaded
- [ ] Verify dark mode for all new components

## Success Criteria

- All new CSS classes render correctly in both light and dark mode
- Cmd+K opens command palette with navigation items
- Skeleton shimmer animation works on all variant sizes
- Empty state component centers correctly with icon + title + desc + CTA
- Recovery toast shows undo button + countdown progress bar
- Breadcrumb renders with clickable links and separator icons

## Risk Assessment

- **Low:** CSS specificity conflicts with page-scoped styles — mitigate by using unique class names
- **Low:** Command palette Cmd+K may conflict with browser shortcuts — already standard pattern (VS Code, Linear, Notion)
