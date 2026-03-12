# Code Review — PSYCH Onboarding + Product Tour

**Date:** 2026-03-11
**Reviewer:** code-reviewer
**Scope:** Wireframe HTML static prototypes

---

## Scope

| File | Lines | Focus |
|------|-------|-------|
| `docs/wireframes/01-onboarding.html` | 1,033 | PSYCH branching onboarding (5 steps) |
| `docs/wireframes/21-product-tour.html` | 1,037 | Spotlight/coachmark tour + checklist |
| `docs/wireframes/_shared-navigation.js` | 719 | NAV_FILE_MAP + COMMAND_ITEMS additions |

---

## Overall Assessment

Both new wireframes are well-structured and consistent with existing patterns. The PSYCH branching logic in `01-onboarding.html` is correctly implemented with a clean sequence-array approach. The tour engine in `21-product-tour.html` has sound architecture (spotlight vs coachmark duality, viewport clamping, DOM-off-screen measurement). Three bugs found: one CSS syntax error (invalid property), one JS logic conflict (function override timing), and one missing keyword search in command palette. Dark mode gaps are localised and partially mitigated by existing `_shared-tokens.css` patches.

---

## Critical Issues

None.

---

## High Priority Findings

### 1. CSS Syntax Error in `.tour-banner` — `gap-12px` is invalid (21-product-tour.html:174)

```css
/* Line 174 — BROKEN */
display: flex; align-items: center; gap-12px;

/* Should be */
display: flex; align-items: center; gap: 12px;
```

`gap-12px` is not a valid CSS declaration (missing colon). The banner layout will render as if `gap` is unset (items flush together). The banner is visible before/during tour, so this is visually noticeable.

**Fix:** Add the colon — `gap: 12px;`

---

### 2. `goToObStep` in `_shared-navigation.js` hardcodes "of 4" — conflicts with 5-step onboarding (shared-navigation.js:348)

```js
// _shared-navigation.js line 348 — hardcoded, wrong for 5-step flow
if (indicator) indicator.textContent = 'Step ' + step + ' of 4';
```

The onboarding page correctly overrides `goToObStep` with a branching-aware version in its own `<script>` block (loaded after `_shared-navigation.js`). The override works because scripts load sequentially and the page script comes last — so the page's version wins at call time. **No runtime bug today**, but the shared version is a trap for any future page that calls `goToObStep` directly without an override.

**Fix:** Replace the hardcoded `'of 4'` with a configurable fallback:

```js
// _shared-navigation.js — make it configurable
var obTotalSteps = 4; // override per page
if (indicator) indicator.textContent = 'Step ' + step + ' of ' + obTotalSteps;
```

---

## Medium Priority Improvements

### 3. `filterCommands` ignores `keywords` field on Product Tour entry (shared-navigation.js:568–571)

```js
// Current — only searches label
return c.label.toLowerCase().indexOf(query) !== -1;
```

The Product Tour command was added with a `keywords` field (`'tour guide onboarding walkthrough help'`) but `filterCommands` never reads it. Searching "onboarding" or "help" in the command palette returns no result.

**Fix:**
```js
return c.label.toLowerCase().indexOf(query) !== -1 ||
       (c.keywords && c.keywords.toLowerCase().indexOf(query) !== -1);
```

---

### 4. Dark mode: `bg-white` on platform option cards in onboarding (01-onboarding.html:347–432)

Platform cards use Tailwind `bg-white` class. `_shared-tokens.css` line 464 patches this:
```css
[data-theme="dark"] .bg-white { background: var(--bg-card) !important; }
```
So dark mode **works** for these cards, but the header (line 195) also uses `bg-white`:
```html
<header class="... bg-white border-b flex-shrink-0" ...>
```
This is also patched by the same rule. No action required, but noted for awareness if the patch is ever removed.

---

### 5. `obStep` global var in shared nav is unused by onboarding (potential confusion)

`_shared-navigation.js` declares `var obStep = 1` (line 340). The onboarding page declares its own `var obCurrentStep = 1` (line 865). Both variables coexist in the global scope but `obStep` is never read by the onboarding page (the override of `goToObStep` uses `obCurrentStep`). Not a bug, but creates confusion for future maintainers.

---

### 6. Tour overlay has no click-to-skip/advance gesture

The `#tourOverlay` `div` has `pointer-events: auto` when active but no `onclick`. Clicking the dark backdrop does nothing — users cannot skip or advance the tour by clicking outside the tooltip. This is a common UX expectation for spotlight tours.

**Suggestion (low effort):**
```html
<div id="tourOverlay" class="tour-overlay" onclick="skipTour()"></div>
```

---

### 7. Platform pill colors in tour are hardcoded (21-product-tour.html:609–666)

```html
<span class="platform-pill" style="color:#F1641E;background:#FFF0EC;">Etsy</span>
```

These light tints (`#FFF0EC`, `#F0F7E6`, `#FFF8EC`) won't adapt in dark mode. The `_shared-tokens.css` does not have specific patches for these tints (unlike `bg-white`). Impact is cosmetic — pills will have a white-ish background against a dark page.

**Fix:** Use CSS variables or add dark mode patches to `_shared-tokens.css`. Or use the existing `.platform-pill` class's `var(--bg-muted)` default and override only the text color.

---

## Low Priority Suggestions

### 8. `positionCard` renders card off-screen to measure size — potential flicker on slow renders

The function appends card to `body` at `-9999px`, measures `offsetWidth/Height`, then removes and repositions. If Tailwind or Lucide hasn't fully rendered by the time `offsetWidth` is read, dimensions could be 0. In practice this is unlikely (both are synchronous), but the pattern is fragile.

**Alternative:** Use a placeholder element with known dimensions, or set `width: 320px` explicitly in the coachmark class so measurement is guaranteed.

---

### 9. `obStep5` confetti elements reference `.confetti` class — works, confirmed in `_shared-tokens.css`

`_shared-tokens.css` line 108–113 defines `@keyframes confettiDrop` and `.confetti` animation. Confirmed no issue.

---

### 10. `21-product-tour.html` redefines `toggleSidebar` and `toggleTheme` locally

Lines 1002–1022 redefine both functions. Since the page script loads after `_shared-navigation.js`, these local versions override the shared ones. The local `toggleTheme` also updates `#headerThemeIcon` (a second icon in the header) which the shared version doesn't handle. This is intentional and correct, but worth a comment explaining the override.

---

### 11. `obStep4` is hidden for `starter` persona but the "Step 4 of 4" text still increments logically

When a starter user navigates 1→2→3→5, the indicator correctly shows "Step 3 of 4" for step 3 and "Step 4 of 4" for step 5. Verified via `getStepSequence()` and `obUpdateHeader()` logic. Works correctly.

---

### 12. No scroll-to-top on tour step change in `21-product-tour.html`

`01-onboarding.html`'s `goToObStep` scrolls the content area to top (line 899–900). The tour's `showTourStep` doesn't need this since it's a fixed-position overlay, but the underlying page doesn't scroll during tour steps either. Not an issue.

---

## Positive Observations

- **PSYCH branching logic is clean and correct.** Sequence-array approach (`getStepSequence`) is elegant — adding/removing steps requires only changing one array.
- **CSS variable usage is consistent** throughout both files; nearly all colors reference `var(--brand-*)`, `var(--text-*)`, `var(--bg-*)` tokens.
- **`positionCard` viewport clamping** (12px margins, min/max bounds) is well-implemented.
- **Tour step skip-and-recover** (`if (!el) { nextTourStep(); return; }`) is correct.
- **`NAV_FILE_MAP` addition** of `'product-tour': '21-product-tour.html'` is consistent with convention.
- **COMMAND_ITEMS addition** for Product Tour follows existing pattern with proper icon and action.
- **Onboarding Step 2** properly isolates its `selectPlatformOb` to avoid interference with the shared `selectPlatform` in other pages — good scoping.
- **`obConnectAndContinue` pulse animation** on selected platforms is a nice touch with proper cleanup.
- **`clearTourUI`** is comprehensive — removes highlight, pulse, and card elements correctly.

---

## Recommended Actions

1. **[High] Fix `gap-12px` → `gap: 12px`** in `.tour-banner` CSS (21-product-tour.html:174)
2. **[High] Fix `filterCommands`** to also search `keywords` field (shared-navigation.js:571)
3. **[Med] Fix shared `goToObStep`** hardcoded "of 4" — use `obTotalSteps` variable
4. **[Med] Add click-to-skip to `#tourOverlay`** (`onclick="skipTour()"`)
5. **[Low] Fix platform pill dark mode tints** — use CSS vars or `_shared-tokens.css` patches

---

## Metrics

- Syntax errors: 1 (CSS invalid property `gap-12px`)
- Broken references: 0
- Missing IDs: 0 (all tour target IDs exist in DOM: `#sidebar`, `#shopSwitcherBtn`, `#tourListingsTable`, `#cmdPaletteTrigger`, `#navResearch`, `#tourAiBtn`, `#navSettings`)
- CSS variable usage: ~95% — only platform pill tints use hardcoded hex
- Dark mode gaps: 1 medium (platform pill tints), 0 critical
- JS logic issues: 1 (keywords not searched), 1 warning (shared `goToObStep` step count)

---

## Unresolved Questions

1. Is the auto-start tour (800ms after DOMContentLoaded) intentional for the wireframe demo? The `tourBanner` is always visible on load, so the banner check passes and the tour always auto-starts. If the intent is for users to read the banner first and click "Start Tour", the auto-start should be removed from the final build.
2. Should the `starter` path's 4th step (currently step 5 "You're All Set") offer the tour CTA? Starter users skip the Quick Win preview (step 4), potentially reducing their motivation to take the tour.
