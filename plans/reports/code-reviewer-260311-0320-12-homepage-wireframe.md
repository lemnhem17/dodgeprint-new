# Code Review — `docs/wireframes/12-homepage.html`

**Date:** 2026-03-11
**Scope:** Smart Homepage wireframe (new user + returning user merged view)

---

## Scope

- Files reviewed: `docs/wireframes/12-homepage.html`, `_shared-tokens.css`, `_shared-navigation.js`, `03-dashboard.html` (reference)
- LOC analyzed: ~703 (homepage) + 788 (tokens) + 557 (nav)
- Review focus: Structure, design token usage, JS correctness, dark mode, accessibility, pattern consistency

---

## Overall Assessment

Solid wireframe. Structure is clean, token usage is thorough, and the JS logic for view switching + dismissible cards + localStorage persistence is correct. No duplicate IDs, no broken token references, and the page is consistent with `03-dashboard.html` patterns. A few medium-priority items worth fixing before this page is used as a design reference.

---

## Critical Issues

None.

---

## High Priority Findings

### 1. `border-opacity` is not a valid CSS shorthand on an inline `style` attribute (line 429)

```html
style="background:var(--brand-primary-bg);border:1px solid var(--brand-primary);border-opacity:20%"
```

`border-opacity` is a Tailwind utility class, not a standard CSS property. When set via inline `style`, it is silently ignored. The intent is a semi-transparent border on the "Suggested Next Step" card. Fix with either:

- Use a Tailwind class: `border border-blue-500/20` (but Tailwind CDN opacity modifier requires JIT, which CDN build supports for v3)
- Or replace the inline style with a concrete rgba value:
  ```html
  style="background:var(--brand-primary-bg);border:1px solid rgba(59,130,246,0.2)"
  ```

### 2. Icon z-index inside the "Suggested Next Step" icon wrapper is obscured by opacity on the container (line 432–433)

```html
<div class="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
     style="background:var(--brand-primary);opacity:0.15">
  <i data-lucide="target" class="w-5 h-5" style="color:var(--brand-primary)"></i>
</div>
```

`opacity:0.15` on the wrapper applies to **both** background and child icon. The icon becomes nearly invisible. Intent is likely a dimmed background with a visible icon. Fix:

```html
<div class="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
     style="background:rgba(59,130,246,0.15)">
  <i data-lucide="target" class="w-5 h-5" style="color:var(--brand-primary)"></i>
</div>
```

---

## Medium Priority Improvements

### 3. `loadTheme()` and `loadSidebarState()` not called at page init (homepage-specific `DOMContentLoaded`)

The page has its own `DOMContentLoaded` listener (lines 680–696) that runs `switchView` and card-restore logic. The shared nav's `DOMContentLoaded` (in `_shared-navigation.js`) also runs, but since the homepage script is inline after the shared script, both will fire — this is fine. However, if the homepage `DOMContentLoaded` is later moved before `_shared-navigation.js`, theme/sidebar won't load. Minor fragility; document the load order dependency with a comment.

### 4. `lucide.createIcons()` called before DOM ready (line 699)

```js
// Init Lucide
if (window.lucide) lucide.createIcons();
```

This inline script fires synchronously after the `</script>` block, which is before `_shared-navigation.js`'s `DOMContentLoaded` runs. Lucide is also initialized in `_shared-navigation.js`'s `DOMContentLoaded` + inside `switchView`. The extra call at line 699 is harmless but redundant — the DOMContentLoaded handler in `_shared-navigation.js` already covers this. Can be removed.

### 5. Missing `aria-label` on icon-only buttons

The close (`x`) buttons on dismissible cards have no accessible label:

```html
<button class="w-7 h-7 ..." onclick="dismissCard(...)">
  <i data-lucide="x" class="w-4 h-4"></i>
</button>
```

For a wireframe this is low-urgency, but since accessibility basics were a stated review concern:

```html
<button aria-label="Dismiss" class="w-7 h-7 ..." onclick="dismissCard(...)">
```

Same applies to the notification bell button (line 203) and the theme toggle (line 182).

### 6. Hardcoded Etsy/Shopify/TikTok colors in revenue legend (lines 565–576)

The chart legend uses literal hex values (`#F1641E`, `#22C55E`, `#06B6D4`) instead of token variables. `_shared-tokens.css` doesn't define platform-specific brand tokens, so this isn't a strict violation, but `--brand-secondary` maps to the same orange as Etsy in light mode. At minimum the Shopify entry could use `var(--success)` and Etsy `var(--brand-secondary)` for consistency. Not critical for a wireframe but worth noting for design hand-off.

### 7. `<a>` elements used as interactive controls without `href` (multiple locations)

Several `<a>` tags with `onclick` handlers but no `href` or `role`:

```html
<a class="..." onclick="showToast(...)">View All &rarr;</a>
```

This is consistent with `03-dashboard.html` so it's a pattern-level choice, not unique to this file. For wireframe fidelity it's fine. If the pattern is ever promoted to production, these should become `<button>` elements or get `href="#"` with `return false` (already done on two links).

---

## Low Priority Suggestions

### 8. `w-4.5` and `h-4.5` Tailwind classes (e.g., line 95, 241, 327)

Tailwind's default scale does not include `4.5` — this resolves because the Tailwind config doesn't explicitly block it and CDN's JIT generates it, but it's non-standard. Other wireframes use the same pattern so this is a codebase-wide convention. No action needed unless upgrading Tailwind config.

### 9. Progress bar hardcoded at `width:40%` (line 250)

```html
<div class="h-full rounded-full transition-all duration-500" style="width:40%;background:var(--brand-primary)"></div>
```

The subtitle says "2 of 5 complete" = 40%, so this is intentional static data for the wireframe. Fine as-is.

### 10. `var(--warning)` token not defined in `_shared-tokens.css`

Line 531 calls `showToast('Viewing pending orders...','warning')` — the `showToast` function handles `warning` type via `var(--brand-secondary)` (orange), which is a reasonable fallback. But `--warning` as an explicit token doesn't exist. Consistent with other wireframes; not a bug.

---

## Positive Observations

- **No duplicate IDs.** All `id` attributes are unique across both view sections (`view-new-user`, `view-returning-user`, `whatsNewCard`, `dailyTipCard`).
- **Token coverage is excellent.** Nearly every color, background, and border uses CSS variable references from `_shared-tokens.css`. No stray hardcoded color values in structural elements.
- **Pattern consistency with `03-dashboard.html`.** Head section, tailwind config block, sidebar structure, header layout, nav groups, and shop switcher are identical in structure. The file correctly extends the pattern for homepage-specific needs.
- **View switching JS is correct.** `switchView()` properly manages `hidden-view`/`active-view` classes, pill states, and calls `lucide.createIcons()` for newly visible icons.
- **`dismissCard()` is clean.** Fade-out, `display:none`, and `localStorage` key set. Restore on load is also implemented correctly in `DOMContentLoaded`.
- **Dark mode.** All inline `style` references use CSS variables that have dark-mode overrides in `_shared-tokens.css`. The `[data-theme="dark"]` selector on `<html>` is consistent with how `toggleTheme()` works in `_shared-navigation.js`.
- **LocalStorage key naming.** Uses consistent `dodgeprint_` prefix: `dodgeprint_homepage_mode`, `dodgeprint_dismiss_whatsnew`, `dodgeprint_dismiss_dailytip`. No key collisions with existing keys in `_shared-navigation.js`.
- **SVG chart** uses `var(--brand-primary)` and `var(--brand-primary-bg)` for stroke and fill — will respond correctly to dark mode.
- **`NAV_FILE_MAP` in `_shared-navigation.js`** already maps `'home'` → `'12-homepage.html'`, so nav links from other wireframes will correctly route to this page.

---

## Recommended Actions

1. **(High)** Fix `border-opacity` → replace with `rgba()` value on the Suggested Next Step card border (line 429).
2. **(High)** Fix icon visibility in Suggested Next Step icon wrapper — move opacity to background only (lines 432–433).
3. **(Medium)** Add `aria-label` to icon-only close buttons on dismissible cards and bell button.
4. **(Low)** Remove redundant `lucide.createIcons()` call at line 699 — covered by shared nav init.
5. **(Low)** Add a comment near the page's `DOMContentLoaded` block noting it depends on `_shared-navigation.js` loading first.

---

## Metrics

- Duplicate IDs: 0
- Broken CSS token references: 0
- Invalid CSS properties (inline): 1 (`border-opacity`)
- Missing `aria-label` on interactive icon buttons: 3
- Consistency with `03-dashboard.html` pattern: High
- Dark mode coverage: Full (all colors via CSS variables)
- localStorage key conflicts: None

---

## Unresolved Questions

- None.
