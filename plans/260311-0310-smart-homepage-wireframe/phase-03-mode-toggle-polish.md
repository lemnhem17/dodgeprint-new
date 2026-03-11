# Phase 3: Mode Toggle & Polish

## Overview
- **Priority:** P1
- **Status:** Complete
- **Effort:** 1h
- Merge New User + Returning User into single `12-homepage.html` with JS toggle between modes

## Context Links
- Phase 1 output: `docs/wireframes/12-homepage-new-user.html`
- Phase 2 output: `docs/wireframes/13-homepage-returning-user.html`

## Requirements

### Functional
- Single HTML file with both views
- Toggle button to switch between New User / Returning User mode (for demo purposes)
- "Skip to Dashboard" in new-user mode → switches to returning-user mode
- localStorage persistence of mode choice
- Clean up duplicate files after merge

### Non-functional
- Smooth transition between modes (fade, 200ms)
- No layout shift during toggle

## Architecture

```
12-homepage.html (merged)
├── Demo Toggle Bar (top, fixed, small)
│   └── [New User] [Returning User] toggle pills
├── Sidebar (shared, always visible)
├── #view-new-user (shows/hides)
│   ├── Welcome + Skip button
│   ├── Getting Started checklist
│   ├── Quick Start Templates
│   └── Quick Links
└── #view-returning-user (shows/hides)
    ├── KPI Cards
    ├── Quick Actions
    ├── Suggested Next Step
    ├── Recent + Pending (2 cols)
    ├── Revenue Trend
    ├── What's New
    ├── Daily Tip
    └── Community Stats
```

## Related Code Files
- **Create:** `docs/wireframes/12-homepage.html` (merged from Phase 1 + 2)
- **Delete:** `docs/wireframes/12-homepage-new-user.html` (after merge)
- **Delete:** `docs/wireframes/13-homepage-returning-user.html` (after merge)

## Implementation Steps

1. Create `12-homepage.html` — copy boilerplate + sidebar from Phase 2 output
2. Wrap New User content in `<div id="view-new-user">` — paste from Phase 1
3. Wrap Returning User content in `<div id="view-returning-user" style="display:none">` — paste from Phase 2
4. Add **Demo Toggle Bar** at top of main content:
   - Small bar: "Demo Mode:" label + two pill buttons [New User] [Returning User]
   - Styled subtle: bg-muted, text-xs, fixed or sticky
   - Active pill: blue bg, white text
5. JS toggle logic:
   ```js
   function switchView(mode) {
     document.getElementById('view-new-user').style.display = mode === 'new' ? 'block' : 'none';
     document.getElementById('view-returning-user').style.display = mode === 'returning' ? 'block' : 'none';
     localStorage.setItem('homepageMode', mode);
     // Update toggle pills active state
   }
   ```
6. "Skip to Dashboard" button in new-user view calls `switchView('returning')`
7. On page load: read `localStorage.homepageMode`, default to 'new'
8. Add fade transition: `transition: opacity 0.2s ease` on both views
9. Delete Phase 1 + Phase 2 separate files
10. Test: both modes, dark mode toggle, dismiss persistence, mode persistence across refresh

## Todo List

- [ ] Merge both views into single HTML
- [ ] Add demo toggle bar
- [ ] JS mode switching logic with localStorage
- [ ] "Skip to Dashboard" wires to switchView
- [ ] Fade transition between modes
- [ ] Test dark mode in both views
- [ ] Delete separate Phase 1/2 files
- [ ] Final visual QA

## Success Criteria
- Single file renders both modes correctly
- Toggle switches instantly with smooth fade
- Mode persists on page refresh
- "Skip to Dashboard" works from new-user view
- Dismissible sections (What's New, Tip) retain state across mode switches
- Dark mode works in both views

## Risk Assessment
- **Low risk:** Pure HTML/CSS/JS merge, no external deps
- Potential: duplicate IDs if not careful during merge — use unique prefixes or separate containers

## Next Steps
- Wireframe complete → ready for React implementation planning
