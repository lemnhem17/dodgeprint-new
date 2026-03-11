# Phase 7: Dark Mode Verification & Polish

**Priority:** P1 | **Status:** completed | **Effort:** Low | **Depends on:** Phase 1-6

## Overview

Final pass across all 9 wireframes to verify dark mode rendering, add micro-animations, ensure PSYCH pattern consistency, and polish edge cases. This phase runs AFTER all structural changes are complete.

## Context Links
- Dark mode tokens: `phase-01-design-system-token-swap.md` → Step 2
- PSYCH micro-interactions: `plans/reports/brainstorm-260309-0119-psych-framework-audit-design-language.md` → "Micro-Interaction Specs"
- All wireframes: `docs/wireframes/01-09*.html`

## Implementation Steps

### Step 1: Dark Mode Audit (All 9 Screens)

Open each HTML with `data-theme="dark"` and check:

| Check | What to Verify |
|-------|---------------|
| Text contrast | `--text-primary` (#F9FAFB) readable on `--bg-card` (#1F2937) |
| Card borders | `--border` (#374151) visible but subtle |
| Brand colors | `--brand-primary` (#60A5FA) not too bright on dark bg |
| Score badges | `.score-a` through `.score-f` readable in dark |
| Charts/bars | Revenue bars, sparklines visible against dark backgrounds |
| Shadows | `--shadow-md/lg` use higher opacity (0.25/0.3) |
| Inputs | Form fields have visible borders in dark mode |
| Hover states | Row hovers, button hovers contrast correctly |

Fix list per screen — document any dark mode overrides needed.

### Step 2: Add Micro-Animations

Add to `_shared-tokens.css`:

```css
/* Smooth transitions for interactive elements */
.card-static { transition: border-color 0.15s, box-shadow 0.15s; }
.nav-item { transition: background 0.12s, color 0.12s; }
.btn-primary, .btn-ghost { transition: background 0.12s, box-shadow 0.15s, transform 0.1s; }
.btn-primary:active, .btn-ghost:active { transform: scale(0.98); }

/* Score badge pulse on hover */
.score-badge { transition: transform 0.15s; }
.score-badge:hover { transform: scale(1.1); }

/* Sidebar collapse animation */
.sidebar { transition: width 0.2s ease; }
.sidebar .nav-text,
.sidebar .sidebar-brand-text,
.sidebar .sidebar-section-label { transition: opacity 0.15s; }
.sidebar.collapsed .nav-text,
.sidebar.collapsed .sidebar-brand-text,
.sidebar.collapsed .sidebar-section-label { opacity: 0; }

/* Toast slide-in */
@keyframes slideInRight {
  from { transform: translateX(100%); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
}
.toast-enter { animation: slideInRight 0.3s ease-out; }

/* Skeleton shimmer for loading states */
@keyframes shimmer {
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
}
.skeleton {
  background: linear-gradient(90deg, var(--bg-muted) 25%, var(--border-light) 50%, var(--bg-muted) 75%);
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;
  border-radius: 6px;
}
```

### Step 3: PSYCH Pattern Consistency Check

Verify across ALL screens:

| Pattern | Where | Check |
|---------|-------|-------|
| Confidence Bar | Dashboard, Listings | Green pulse dot + "All synced" text |
| Recovery Toast | All screens | Bottom-right toast with undo button |
| Sync Pulse | Header area | Animated dot next to sync status |
| Smart Empty | Listings, Orders, Research | Icon + message + CTA button |
| AI Insight Card | Dashboard | Gold-tinted card with sparkle icon |
| Greeting Line | Dashboard | "Good morning, {name}" with context |

### Step 4: Accessibility Quick Wins

- Ensure all interactive elements have `cursor: pointer`
- Add `title` attributes to icon-only buttons
- Verify focus states: `outline: 2px solid var(--brand-primary)` on tab navigation
- Score badges: ensure color is not the ONLY indicator (letter grade + color)

### Step 5: Cross-Screen Consistency

- Verify all 9 screens use identical sidebar markup
- Verify all 9 screens have matching Tailwind config blocks
- Verify header layout consistent (greeting/search + sync status + avatar)
- Verify card border-radius consistent (`rounded-xl` = 12px everywhere)
- Verify font sizes: page titles `text-lg font-bold`, section headers `text-sm font-semibold`, body `text-xs`

## Todo List

- [x] Dark mode audit: 01-onboarding
- [x] Dark mode audit: 02-auth
- [x] Dark mode audit: 03-dashboard
- [x] Dark mode audit: 04-listings
- [x] Dark mode audit: 05-orders
- [x] Dark mode audit: 06-research
- [x] Dark mode audit: 07-pod-hub
- [x] Dark mode audit: 08-analytics
- [x] Dark mode audit: 09-settings
- [x] Add micro-animations to `_shared-tokens.css`
- [x] PSYCH pattern consistency check
- [x] Accessibility quick wins (focus states, titles, cursors)
- [x] Cross-screen consistency verification
- [x] Final visual review in browser (both themes)

## Success Criteria
- All 9 screens render correctly in dark mode with no contrast issues
- Micro-animations feel smooth, not janky (< 0.3s transitions)
- PSYCH patterns present and working on every applicable screen
- No residual Warm Organic colors anywhere
- Sidebar markup identical across all 9 files
