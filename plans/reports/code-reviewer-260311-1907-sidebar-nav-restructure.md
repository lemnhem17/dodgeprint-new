# Code Review: Sidebar Nav Restructure

**Date:** 2026-03-11
**Files reviewed:** 3
**Lines analyzed:** ~893 JS + ~841 CSS + ~82 HTML = ~1,816

---

## Scope

- `docs/wireframes/_shared-navigation.js` — 5-group sidebar, collapsible groups, command palette update
- `docs/wireframes/_shared-tokens.css` — collapsible nav CSS additions
- `docs/wireframes/index.html` — user-journey-ordered index

**No given plan file** — standalone review, no plan status update needed.

---

## Overall Assessment

The restructure is clean and well-scoped. The 5-group layout and collapsible implementation are functionally correct for a wireframe/prototype context. A handful of medium-priority logic bugs and one high-priority edge case are noted below.

---

## Critical Issues

None.

---

## High Priority Findings

### 1. `toggleNavGroup` collapse detection is fragile

**File:** `_shared-navigation.js` line 848

```js
var isCollapsed = items.style.maxHeight === '0px';
```

On page load, collapsed sections are rendered with `style="max-height:0;overflow:hidden;opacity:0"` (line 821 — note `max-height:0` without `px`). The check `=== '0px'` fails because the inline style value is `"0"`, not `"0px"`. Result: clicking a collapsed group on first load **expands correctly** but the chevron stays rotated, and a second click re-collapses without visual change.

**Fix:**
```js
var isCollapsed = items.style.maxHeight === '0px' || items.style.maxHeight === '0';
```
Or normalise on write:
```js
// line 821 — change:
(isCollapsed ? ' style="max-height:0px;overflow:hidden;opacity:0"' : '')
```

---

## Medium Priority Findings

### 2. `localStorage.removeItem` vs `localStorage.setItem('...', 'expanded')`

**File:** `_shared-navigation.js` line 854

On expand, the key is removed (`removeItem`). On load, absence of the key → expanded (correct). But this creates an asymmetry: if something else sets the key to a non-`"collapsed"` value (e.g., from a future migration), `removeItem` is safer than writing `"expanded"`. Current behaviour is correct but worth noting — no change required.

### 3. `sidebar-section-items` transition on initial hidden state

**File:** `_shared-tokens.css` line 642

```css
.sidebar-section-items { transition: max-height 0.2s ease, opacity 0.15s ease; }
```

The transition fires on page load when collapsed sections go from no inline style to `max-height:0` during `initSidebar()`. This causes a brief 0.2s animation on load rather than instant hidden state.

**Fix:** Add a no-transition class during init, remove it after render:
```js
// in initSidebar(), before nav.innerHTML = html:
nav.classList.add('no-transition');
// after:
requestAnimationFrame(function() { nav.classList.remove('no-transition'); });
```
```css
.no-transition * { transition: none !important; }
```

Alternatively, render collapsed sections with `display:none` on load and switch to `max-height` only after first user interaction — but the current approach is acceptable for wireframe fidelity.

### 4. Duplicate `product-tour` / `notifications` file mapping conflict

**File:** `_shared-navigation.js` lines 281–282

```js
'product-tour': '21-product-tour.html',
'notifications': '21-notifications.html'
```

Both map to `21-*.html`. This is intentional (two different files share the number), but the `navigate()` function also checks `document.getElementById('screen-' + screenId)`. In single-page mode, if a page has both `screen-product-tour` and `screen-notifications` elements, only one can be active. For wireframe-only use this is fine, but worth documenting.

### 5. `showUndoToast` Undo button doesn't call `undoCallback`

**File:** `_shared-navigation.js` line 729–730

The Undo button only removes the toast:
```js
'onclick="this.closest(\'.toast-undo\').remove()"'
```
The `undoCallback` parameter is accepted but never wired. This is likely a pre-existing issue, not introduced in this diff, but it's dead code.

---

## Low Priority Suggestions

### 6. Missing `href` on nav `<a>` elements (accessibility)

**File:** `_shared-navigation.js` line 825

Nav items are rendered as `<a>` with `onclick` but no `href`. Screen readers and keyboard navigation benefit from `href="#"` or `role="button"` + `tabindex="0"`. For wireframes this is acceptable; flag for production.

### 7. `index.html` — `21-product-tour.html` and `21-notifications.html` share same number

**File:** `index.html`

`product-tour` (line 33) is linked as `21-product-tour.html` and `notifications` (line 77) as `21-notifications.html`. Two files with the same prefix number may cause confusion in the file index. Consider renumbering one to `22-*` when the wireframe set expands.

### 8. `index.html` missing `<link>` for Google Font

The page uses `'Plus Jakarta Sans'` but does not load it. Falls back to `system-ui` (declared in font-family). No functional impact for index page.

---

## Positive Observations

- `storageKey` derivation (`section.label.toLowerCase().replace(/[^a-z0-9]/g, '_')`) is deterministic and collision-resistant for the current set of labels.
- Graceful null-guard pattern throughout (`if (!nav) return`, `if (!items) return`).
- `initSidebar` correctly skips re-injection (`if (!nav) return`) but there's no double-init guard — calling `initSidebar()` twice would double the nav HTML. Unlikely given single `DOMContentLoaded` call, but low risk.
- CSS `.sidebar-chevron.collapsed { transform: rotate(-90deg) }` is clean; no JS-managed inline transforms.
- `index.html` user-journey ordering (Entry → Daily → Production → Analytics → Settings) aligns well with the 5-group sidebar structure.
- Dark mode token coverage in CSS is thorough.

---

## Recommended Actions

1. **(High)** Fix `toggleNavGroup` `'0px'` vs `'0'` mismatch — change line 821 in `initSidebar` to emit `max-height:0px` instead of `max-height:0`.
2. **(Medium)** Suppress load-time transition flash on collapsed groups (no-transition class on init, or use `display:none` initial state).
3. **(Low)** Wire `undoCallback` in `showUndoToast` or remove the parameter.
4. **(Low)** Consider renumbering `notifications` to `22-*` to avoid dual `21-*` confusion.

---

## Metrics

- Type Coverage: N/A (vanilla JS)
- Linting Issues: 0 syntax errors; no linter configured for wireframes
- Test Coverage: N/A (wireframe prototype)

---

## Unresolved Questions

- Will wireframe pages ever run in single-page mode (all screens in one HTML)? If so, the `product-tour` / `notifications` dual `21-*` mapping needs resolution before that mode is exercised.
- Is `showUndoToast` used anywhere in the wireframes yet? If not, the callback wiring can wait until first real usage.
