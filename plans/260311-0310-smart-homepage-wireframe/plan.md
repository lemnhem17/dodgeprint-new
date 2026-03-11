---
title: "Smart Homepage Wireframe"
description: "HTML/CSS mockup merging Home + Dashboard into Smart Homepage with new/returning user modes"
status: complete
priority: P1
effort: 6h
branch: main
tags: [wireframe, ux, homepage, frontend]
blockedBy: []
blocks: []
created: 2026-03-11
---

# Smart Homepage Wireframe

## Overview

Replace separate Home (onboarding) + Dashboard (4 KPI cards) with a single Smart Homepage. Two modes: New User (checklist onboarding + quick start templates) and Returning User (KPIs + quick actions + engagement sections). Output: HTML/CSS static mockup with mock data, using existing design tokens (Ocean Blue palette).

## Source

- Brainstorm: `plans/reports/brainstorm-260311-0303-smart-homepage-redesign.md`
- Design system: `docs/design-guidelines.md`
- Shared tokens: `docs/wireframes/_shared-tokens.css`
- Shared nav: `docs/wireframes/_shared-navigation.js`
- Existing dashboard: `docs/wireframes/03-dashboard.html`
- Existing onboarding: `docs/wireframes/01-onboarding.html`

## Key Decisions (from Validation)

| Decision | Choice |
|----------|--------|
| Mode switching | User-controlled "Skip to Dashboard" button |
| Data | Mock data for wireframe |
| Chart library | Recharts (for React impl later); SVG mock for wireframe |
| Scope | Full 8 sections, ship once |
| Output | HTML/CSS static mockup |
| Tech stack | React + TypeScript (for real impl) |

## Phases

| # | Phase | File(s) | Effort | Status |
|---|-------|---------|--------|--------|
| 1 | [New User Homepage Layout](./phase-01-new-user-homepage.md) | `docs/wireframes/12-homepage.html` (merged) | 2h | Complete |
| 2 | [Returning User Homepage Layout](./phase-02-returning-user-homepage.md) | `docs/wireframes/12-homepage.html` (merged) | 3h | Complete |
| 3 | [Mode Toggle & Polish](./phase-03-mode-toggle-polish.md) | `docs/wireframes/12-homepage.html` | 1h | Complete |

## Dependencies

- Reuse `_shared-tokens.css` (Ocean Blue palette) — no changes needed
- Reuse `_shared-navigation.js` (sidebar) — no changes needed
- No blocking on Getvela UX plan (separate scope)
