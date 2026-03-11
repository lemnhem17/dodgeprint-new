# Phase 1: New User Homepage Layout

## Overview
- **Priority:** P1
- **Status:** Complete
- **Effort:** 2h
- Create HTML/CSS mockup for new user (first-time / no data) homepage view

## Context Links
- Brainstorm: `plans/reports/brainstorm-260311-0303-smart-homepage-redesign.md`
- Design tokens: `docs/wireframes/_shared-tokens.css`
- Existing onboarding ref: `docs/wireframes/01-onboarding.html`

## Key Insights
- Current onboarding is a separate fullscreen flow (4 steps) — too disconnected from dashboard
- New approach: embed onboarding checklist INTO the homepage layout (sidebar + main content)
- User can dismiss onboarding anytime via "Skip to Dashboard" button

## Requirements

### Functional
- Getting Started checklist (5 steps with progress bar)
- Quick Start Templates section (T-shirt, Mug, Poster bundles)
- Quick Links row (Docs, Discord, Tutorial)
- "Skip to Dashboard" button (switches to returning user view)

### Non-functional
- Reuse sidebar from `_shared-navigation.js`
- Use Ocean Blue design tokens from `_shared-tokens.css`
- Responsive: desktop-first, graceful on tablet
- Dark mode support via `data-theme`

## Architecture

```
12-homepage-new-user.html
├── Sidebar (reuse _shared-navigation.js)
├── Main Content
│   ├── Welcome Header ("Welcome to Dodgeprint")
│   │   └── [Skip to Dashboard →] button
│   ├── Getting Started Card
│   │   ├── Progress bar (2/5 = 40%)
│   │   ├── Checklist items (5 steps)
│   │   │   ├── ✅ Create account (auto-complete)
│   │   │   ├── ✅ Complete profile (auto-complete)
│   │   │   ├── ○ Connect your first shop [→ CTA]
│   │   │   ├── ○ Create your first product
│   │   │   └── ○ Deploy to marketplace
│   │   └── Primary CTA → next uncompleted step
│   ├── Quick Start Templates (3 cards)
│   │   ├── T-shirt Bundle (5 items)
│   │   ├── Mug Bundle (3 items)
│   │   └── Poster Bundle (4 items)
│   └── Quick Links Row
│       ├── 📖 Documentation
│       ├── 💬 Join Discord
│       └── 📺 Watch Tutorial
```

## Related Code Files
- **Create:** `docs/wireframes/12-homepage-new-user.html`
- **Reference:** `docs/wireframes/_shared-tokens.css` (no modify)
- **Reference:** `docs/wireframes/_shared-navigation.js` (no modify)
- **Reference:** `docs/wireframes/01-onboarding.html` (pattern reference)

## Implementation Steps

1. Create `12-homepage-new-user.html` with standard boilerplate (copy from `03-dashboard.html` head section)
2. Include shared tokens CSS + Tailwind CDN + Lucide icons + Jakarta Sans font
3. Build sidebar using `_shared-navigation.js` pattern — "Home" nav item active
4. Build main content area (padded, cream bg):
   a. **Welcome Header** — page title "Welcome to Dodgeprint" + subtitle + "Skip to Dashboard" ghost button (top-right)
   b. **Getting Started Card** — white card, 16px radius, 20px padding
      - Progress bar: blue fill at 40%, rounded, 6px height
      - 5 checklist items: completed items (green check + strikethrough text), pending items (circle outline + text)
      - CTA button: "Connect Your First Shop →" (blue primary, points to next uncompleted step)
   c. **Quick Start Templates** — 3-column grid
      - Each card: white bg, 16px radius, icon (colored circle + lucide icon), title, "N items" subtitle, "Use Template" ghost button
      - Hover: shadow-sm + translateY(-1px)
   d. **Quick Links Row** — 3 cards, horizontal, icon + label + short description, link-style
5. Add toggle script: "Skip to Dashboard" button sets `localStorage.skipOnboarding = true` and shows alert "In real app, this switches to Dashboard view"
6. Add dark mode toggle support (reuse pattern from existing wireframes)
7. Initialize Lucide icons at bottom

## Todo List

- [ ] Create HTML file with boilerplate
- [ ] Build sidebar (reuse shared nav)
- [ ] Welcome header with skip button
- [ ] Getting Started checklist card with progress bar
- [ ] Quick Start Templates grid (3 cards)
- [ ] Quick Links row
- [ ] Dark mode support
- [ ] Hover states and micro-interactions

## Success Criteria
- Opens in browser, visually matches design system (Ocean Blue palette)
- All sections render correctly on desktop (>1024px)
- Dark mode toggle works
- Sidebar navigation consistent with other wireframes
- Skip button has visible click handler

## Risk Assessment
- **Low risk:** Static HTML mockup, no backend dependency
- Sidebar pattern may have evolved in Getvela UX plan — check `_shared-navigation.js` is stable

## Next Steps
- Phase 2: Returning User Homepage (depends on shared layout established here)
