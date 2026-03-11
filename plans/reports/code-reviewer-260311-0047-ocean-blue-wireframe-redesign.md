# Code Review: Ocean Blue Wireframe Redesign

## Scope
- Files reviewed: `_shared-tokens.css`, `_shared-navigation.js`, `01-onboarding.html` through `09-settings.html`
- Review focus: HTML validity, CSS old-palette refs, JS correctness, dark mode, cross-file sidebar consistency

---

## Overall Assessment

Palette swap is largely complete and consistent. CSS variables throughout are correct Ocean Blue values. Sidebar markup is identical across files 03–09. Dark mode variables are fully defined. A handful of minor bugs/remnants found — none are blocking.

---

## Critical Issues

None.

---

## High Priority Findings

### 1. `accent-sage` Tailwind class — old palette remnant (functional bug)
**Files:** `01-onboarding.html` lines 217, 231, 242 · `02-auth.html` lines 103, 183

`accent-sage` is not defined in any Tailwind config. Tailwind will silently ignore it, leaving radio buttons and checkboxes with the browser default accent color (typically blue or OS-dependent). Should be replaced with `accent-[var(--brand-primary)]` or the Tailwind custom color key `accent-blue`.

```html
<!-- Current (broken) -->
<input type="radio" class="w-4 h-4 accent-sage" ...>
<!-- Fix -->
<input type="radio" class="w-4 h-4" style="accent-color:var(--brand-primary)" ...>
```

---

### 2. `_shared-tokens.css` line 273 — `.score-d` uses hardcoded old-palette hex values
`.score-d` is the only score badge that does NOT use CSS variables:
```css
/* current — hardcoded */
.score-d { background: #FFF7ED; color: #EA580C; }
```
`#FFF7ED` is the same value as `--brand-secondary-bg` and `#EA580C` is orange-600. In dark mode, these will stay light — the badge won't adapt.

**Fix:** Use CSS variables for consistency with other badges:
```css
.score-d { background: var(--brand-secondary-bg); color: #EA580C; }
```
Or add a `--score-d-color` token in both `:root` and `[data-theme="dark"]`.

Note: `04-listings.html` line 64 correctly overrides `.score-d` with `var(--danger-bg)` / `var(--danger)` for its local scope, but the shared CSS is still wrong for other pages that use `.score-d`.

---

## Medium Priority Findings

### 3. `hover:border-blue` — unresolved Tailwind class
**Files:** `03-dashboard.html` lines 275, 282, 289 · `04-listings.html` lines 585–586

`hover:border-blue` uses the bare custom color name without a shade, which Tailwind resolves as `border-blue-DEFAULT` (`#3B82F6`). This actually works in this setup since `blue: { DEFAULT: '#3B82F6' }` is in the config, but it is non-obvious and inconsistent. Not a bug in practice — low risk.

### 4. `03-dashboard.html` — missing `#nav-progress-bar` element
`01-onboarding.html` has `<div id="nav-progress-bar"></div>` in the body. Files `03-09` do not include this element. The `navigate()` function in `_shared-navigation.js` does a null-safe check (`if (bar)`) so there is no JS error, but the progress bar animation will silently not run on pages 03–09.

**Fix:** Add `<div id="nav-progress-bar"></div>` at the top of `<body>` in files 03–09 (same as 01-onboarding.html).

### 5. `07-pod-hub.html` — `switchPodTab()` uses implicit `event` global
```js
function switchPodTab(tabId) {
  ...
  event.target.classList.add('active'); // uses window.event — not passed as param
```
`window.event` is deprecated and not available in all contexts (e.g., Firefox in strict mode). Should pass the event explicitly:
```html
onclick="switchPodTab(event, 'providers')"
```
```js
function switchPodTab(e, tabId) {
  e.target.classList.add('active');
```

### 6. `06-research.html` — `_shared-navigation.js` loaded in `<head>` instead of before `</body>`
`06-research.html` and `07-pod-hub.html` both load `<script src="_shared-navigation.js"></script>` inside `<head>` (before the DOM). The DOMContentLoaded listener in the script handles init safely, but inline `onclick` handlers that call functions like `toggleShopDropdown()` or `navigate()` will still work because the script fully runs before first interaction. Technically safe, but inconsistent with files 03, 04, 05 where the script is at end of `<body>`.

---

## Low Priority Findings

### 7. Product image placeholders use warm Tailwind gradients — cosmetic only
**Files:** `04-listings.html` (amber, pink, rose, stone gradients), `05-orders.html` (amber, pink gradients)

These are emoji-backed placeholder thumbnails (`🌿`, `🌸`, `🎁`). The warm gradient backgrounds (`from-amber-100`, `from-pink-100`, `from-rose-200`, `from-stone-100`) are not old brand palette colors — they are generic Tailwind utilities used for placeholder visual variety. Not a palette violation, but worth noting they are warm-toned vs the Ocean Blue theme.

### 8. `_shared-tokens.css` line 273 — `score-d` color `#EA580C` not a CSS variable
Even if background is fixed (see issue 2), `#EA580C` is a hardcoded value. All other score badges use `var(--...)`. Minor inconsistency.

### 9. `02-auth.html` — Tailwind config missing `etsy`/`shopify`/`amazon` color keys
`01-onboarding.html` has `etsy: '#F1641E', shopify: '#96BF48', amazon: '#FF9900'` in Tailwind config. `02-auth.html` does not. No functional impact since those colors are only used via inline `style=` attributes in auth screens, but inconsistent with other files.

---

## Positive Observations

- CSS variable usage is thorough and consistent — virtually no hardcoded hex colors in body markup
- Dark mode token definitions in `[data-theme="dark"]` are complete and correctly cover all semantic tokens
- Sidebar structure (logo, shop-switcher, 3 nav groups + bottom-pinned) is bit-for-bit identical across files 03–09
- Tailwind config block is identical across all app-shell pages (03–09)
- `_shared-navigation.js` handles nulls defensively throughout (`if (bar)`, `if (el)`, etc.)
- `loadTheme()` / `loadSidebarState()` persistence pattern is clean and consistent
- `score-d` local override in `04-listings.html` shows awareness of the dark mode issue even if the shared CSS wasn't updated

---

## Recommended Actions

1. **Replace `accent-sage`** in `01-onboarding.html` (×3) and `02-auth.html` (×2) with `style="accent-color:var(--brand-primary)"` — prevents invisible/wrong-color inputs.
2. **Fix `.score-d` in `_shared-tokens.css`** — replace hardcoded `#FFF7ED` with `var(--brand-secondary-bg)` so dark mode works.
3. **Add `#nav-progress-bar` div** to body of files `03-09` for consistent progress bar behavior.
4. **Fix `switchPodTab` implicit `event`** in `07-pod-hub.html` — pass event explicitly.
5. (Optional) Move `_shared-navigation.js` script tag in `06-research.html` and `07-pod-hub.html` from `<head>` to end of `<body>` for consistency.

---

## Metrics
- Files reviewed: 11 (2 shared + 9 HTML)
- Old palette color refs found: 1 (`.score-d` in `_shared-tokens.css`) + 5 `accent-sage` class refs
- JS bugs: 1 (`window.event` implicit) + 0 broken logic
- Dark mode gaps: 1 (`.score-d` hardcoded bg in light-only hex)
- Sidebar consistency across 03–09: PASS
- Tailwind config consistency across 03–09: PASS

---

## Unresolved Questions

None.
