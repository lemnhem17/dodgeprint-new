---
status: completed
created: 2026-03-10
slug: ocean-blue-wireframe-redesign
priority: high
blocks: []
blockedBy: []
---

# Ocean Blue Wireframe Redesign — Implementation Plan

**Goal:** Update 9 existing DodgePrint wireframes from "Warm Organic" (Sage/Gold/Coral) to "Ocean Blue" palette + competitive parity UX improvements based on Getvela analysis + PSYCH framework.

**Scope:** 11 files (9 HTML + 1 CSS + 1 JS), ~5,244 lines total. Update existing — not rebuild from scratch.

## Context References

| Document | Path |
|----------|------|
| Brainstorm (approved) | `plans/reports/brainstorm-260310-2246-psych-redesign-ocean-blue.md` |
| PSYCH Audit (approved) | `plans/reports/brainstorm-260309-0119-psych-framework-audit-design-language.md` |
| PSYCH Wireframe Updates | `plans/reports/ui-ux-designer-260309-0129-psych-wireframe-updates.md` |
| Feature Requirements | `plans/reports/brainstorm-260308-1019-wireframe-feature-requirements.md` |
| Getvela Analysis | `docs/wireframes/getvela/getvela-uiux-analysis.md` |
| DP vs Getvela | `docs/wireframes/dodgeprint/dodgeprint-vs-getvela-improvements.md` |

## Files to Modify

| File | Lines | Changes |
|------|-------|---------|
| `_shared-tokens.css` | 532 | Ocean Blue variables, new component classes |
| `_shared-navigation.js` | 425 | Sidebar collapse to 48px icon rail |
| `01-onboarding.html` | 396 | Color swap, Tailwind config |
| `02-auth.html` | 251 | Color swap, Tailwind config |
| `03-dashboard.html` | 463 | Color swap + Smart Dashboard merge + KPI trends |
| `04-listings.html` | 709 | Color swap + Quality Score + filter panel + bulk bar + hover actions |
| `05-orders.html` | 633 | Color swap + confidence bar alignment |
| `06-research.html` | 640 | Color swap + AI inline patterns |
| `07-pod-hub.html` | 445 | Color swap |
| `08-analytics.html` | 310 | Color swap + charts + Business Performance Score |
| `09-settings.html` | 440 | Color swap + simplified layout |

## Phases

| Phase | Description | Priority | Status |
|-------|-------------|----------|--------|
| 1 | Design system swap (tokens + Tailwind configs) | P0 | completed |
| 2 | Navigation & sidebar redesign | P0 | completed |
| 3 | Dashboard smart merge | P0 | completed |
| 4 | Listings/Products core UX | P0 | completed |
| 5 | Editor, AI & remaining screens | P1 | completed |
| 6 | Analytics & scoring | P2 | completed |
| 7 | Dark mode verification & polish | P2 | completed |

## Success Criteria

- [x] All 9 wireframes use Ocean Blue palette (light + dark)
- [x] Sidebar collapses to 48px icon rail with tooltips
- [x] Dashboard = KPIs + trends + quick actions (not onboarding)
- [x] Products table: Quality Score badges, hover actions, bulk action bar, filter panel
- [x] PSYCH patterns: Confidence Bar, Recovery Toast, Sync Pulse, Smart Empty
- [x] Visual parity with Getvela on core flows
- [x] Dark mode renders correctly on all 9 screens
