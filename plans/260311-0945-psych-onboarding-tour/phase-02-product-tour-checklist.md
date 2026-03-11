# Phase 2: Product Tour + Persistent Checklist

## Context

- Brainstorm: `plans/reports/brainstorm-260311-0945-psych-onboarding-tour.md`
- Dashboard layout: `docs/wireframes/03-dashboard.html` (sidebar + main area pattern)
- Shared nav: `docs/wireframes/_shared-navigation.js`
- Tokens: `docs/wireframes/_shared-tokens.css`

## Overview

- **Priority:** P1
- **Status:** Pending
- **Effort:** 4h

Create `21-product-tour.html` — a dashboard mockup with spotlight+coachmark tour overlay system + persistent onboarding checklist card.

## Architecture

```
21-product-tour.html
├── Dashboard shell (sidebar + header + main area with mock data)
├── Tour overlay system (7 steps)
│   ├── Steps 1,2,4: Spotlight (dimmed overlay + highlighted element)
│   └── Steps 3,5,6,7: Coachmark (floating card, no overlay)
├── Tour controls (step dots, Next, Skip)
└── Post-tour: Onboarding checklist card (persistent widget)
```

### Dashboard Shell

Simplified dashboard layout matching `03-dashboard.html` patterns. Needs:
- Sidebar with nav items (for tour steps 1, 5, 7)
- Top header with shop switcher (for step 2)
- Listings table stub (for step 3)
- Command palette trigger (for step 4)
- AI sparkle button (for step 6)

**NOT a full dashboard clone** — just enough structure for tour targeting.

## Tour Steps (7 total)

| # | Target Element | Type | Tooltip Position | Copy |
|---|---------------|------|-----------------|------|
| 1 | `.sidebar` | Spotlight | Right of sidebar | "Your command center. All sections one click away." |
| 2 | `#shopSwitcherBtn` | Spotlight | Below switcher | "Switch between shops instantly, or view all at once." |
| 3 | `#tourListingsTable` | Coachmark | Above table | "Your listings, synced in real-time. Quality scores help you optimize." |
| 4 | `#cmdPaletteTrigger` | Spotlight | Below trigger | "Power move: Press ⌘K to search anything — listings, orders, shops." |
| 5 | `#navResearch` | Coachmark | Right of nav item | "Discover trending products and keywords your competitors use." |
| 6 | `#tourAiBtn` | Coachmark | Left of button | "AI writes titles, tags, descriptions. Just click the sparkle." |
| 7 | `#navSettings` | Coachmark | Right of nav item | "Settings & support are always here when you need them." |

## Tour System Implementation

### CSS Components

```css
/* Spotlight overlay — covers entire page */
.tour-overlay {
  position: fixed; inset: 0;
  background: rgba(0,0,0,0.6);
  z-index: 800;
  transition: opacity 0.3s;
  pointer-events: none;
}
.tour-overlay.active { pointer-events: auto; }

/* Spotlight cutout — CSS clip-path on overlay */
/* JS calculates element bounds and applies clip-path */

/* Tour tooltip */
.tour-tooltip {
  position: absolute;
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 20px;
  width: 320px;
  box-shadow: var(--shadow-lg);
  z-index: 900;
  animation: fadeIn 0.3s ease-out;
}
.tour-tooltip-arrow {
  /* CSS triangle pointing to target element */
}

/* Coachmark — no overlay, floating card */
.tour-coachmark {
  position: absolute;
  background: var(--bg-card);
  border: 2px solid var(--brand-primary);
  border-radius: 16px;
  padding: 16px 20px;
  width: 280px;
  box-shadow: var(--shadow-lg);
  z-index: 900;
  animation: fadeIn 0.3s ease-out;
}

/* Step progress dots */
.tour-dots {
  display: flex; gap: 6px; margin-top: 16px;
}
.tour-dot {
  width: 8px; height: 8px; border-radius: 50%;
  background: var(--border);
  transition: all 0.2s;
}
.tour-dot.active { background: var(--brand-primary); width: 20px; border-radius: 4px; }
.tour-dot.completed { background: var(--brand-primary); }
```

### JS Tour Engine

```js
var TOUR_STEPS = [
  { target: '.sidebar', type: 'spotlight', position: 'right', title: 'Navigation', text: '...' },
  { target: '#shopSwitcherBtn', type: 'spotlight', position: 'bottom', title: 'Shop Switcher', text: '...' },
  { target: '#tourListingsTable', type: 'coachmark', position: 'top', title: 'Your Listings', text: '...' },
  // ... all 7 steps
];

var currentTourStep = 0;

function startTour() { currentTourStep = 0; showTourStep(0); }
function nextTourStep() { if (currentTourStep < 6) showTourStep(++currentTourStep); else endTour(); }
function skipTour() { endTour(); }

function showTourStep(index) {
  var step = TOUR_STEPS[index];
  var el = document.querySelector(step.target);
  if (!el) { nextTourStep(); return; } // skip if element missing

  // Clear previous
  clearTourUI();

  if (step.type === 'spotlight') {
    showSpotlight(el, step);
  } else {
    showCoachmark(el, step);
  }
  updateTourDots(index);
}

function showSpotlight(el, step) {
  // Show overlay
  // Calculate el bounding rect
  // Apply clip-path to overlay (rectangular cutout around element)
  // Position tooltip relative to element based on step.position
}

function showCoachmark(el, step) {
  // No overlay
  // Position coachmark card near element
  // Subtle pulse animation on target element border
}

function endTour() {
  clearTourUI();
  showChecklist(); // Reveal persistent checklist
  showToast('Tour complete! Check your Getting Started list.', 'success');
}
```

## Persistent Onboarding Checklist

Appears after tour ends (or if user skips tour). Fixed position card on dashboard.

```html
<div id="onboardingChecklist" class="checklist-card">
  <div class="flex items-center justify-between mb-3">
    <h4 class="text-sm font-bold">Getting Started</h4>
    <span class="text-xs font-mono" style="color:var(--brand-primary)">3/7</span>
  </div>

  <!-- Progress bar -->
  <div class="h-1.5 rounded-full mb-4" style="background:var(--bg-muted)">
    <div class="h-1.5 rounded-full" style="width:43%;background:var(--brand-primary)"></div>
  </div>

  <!-- Items -->
  <div class="space-y-2">
    <div class="checklist-item done"><check-icon> Connect your first shop</div>
    <div class="checklist-item done"><check-icon> Import listings</div>
    <div class="checklist-item done"><check-icon> Complete product tour</div>
    <div class="checklist-item"><circle-icon> Optimize 5 listing titles</div>
    <div class="checklist-item"><circle-icon> Set up sync schedule</div>
    <div class="checklist-item"><circle-icon> Explore Research tools</div>
    <div class="checklist-item"><circle-icon> Invite a team member</div>
  </div>

  <button class="text-xs mt-3" style="color:var(--text-tertiary)">Dismiss</button>
</div>
```

```css
.checklist-card {
  position: fixed;
  bottom: 24px; right: 24px;
  width: 300px;
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 20px;
  box-shadow: var(--shadow-lg);
  z-index: 200;
  animation: slideUp 0.3s ease-out;
}
.checklist-item {
  display: flex; align-items: center; gap: 10px;
  font-size: 13px; padding: 6px 0;
  color: var(--text-secondary);
}
.checklist-item.done {
  color: var(--text-tertiary);
  text-decoration: line-through;
}
```

## Two-State Page Design

The page has two states, toggled by JS:

1. **Tour active:** Dashboard with tour overlay/coachmarks stepping through
2. **Tour complete:** Dashboard with checklist card visible

User lands on page → tour auto-starts. "Skip Tour" available at any step.

## Implementation Steps

1. Create `21-product-tour.html` with boilerplate (head, tailwind config, shared CSS/JS links)
2. Build simplified dashboard shell (sidebar, header, main area with mock content)
3. Add tour target elements with IDs: sidebar, shopSwitcherBtn, tourListingsTable, cmdPaletteTrigger, navResearch, tourAiBtn, navSettings
4. Implement tour CSS: `.tour-overlay`, `.tour-tooltip`, `.tour-coachmark`, `.tour-dots`
5. Implement tour JS engine: TOUR_STEPS array, showTourStep, showSpotlight, showCoachmark
6. Build 7 tour step tooltips with copy from brainstorm
7. Implement spotlight clip-path calculation (JS getBoundingClientRect → CSS clip-path)
8. Add tour controls: [Next] [Skip Tour] buttons, step dots
9. Build checklist card HTML + CSS
10. Wire up endTour → showChecklist transition
11. Test dark mode compatibility

## Todo

- [ ] Create file with boilerplate + tailwind config
- [ ] Build simplified dashboard shell
- [ ] Add tour target element IDs
- [ ] Implement tour overlay + tooltip CSS
- [ ] Implement coachmark CSS
- [ ] Build tour JS engine (TOUR_STEPS, step navigation)
- [ ] Spotlight clip-path calculation
- [ ] 7 tour step content
- [ ] Tour controls (Next, Skip, dots)
- [ ] Checklist card (HTML + CSS)
- [ ] Tour → checklist transition
- [ ] Dark mode test

## Success Criteria

- Tour starts automatically on page load
- 7 steps: 3 spotlight (overlay) + 4 coachmark (no overlay)
- Each step highlights correct element with tooltip
- Step dots show progress
- Skip Tour works at any point → shows checklist
- Checklist shows 3/7 completed (connect, import, tour)
- Checklist dismissible
- Dark mode works
- Links back to other wireframe pages via shared nav
