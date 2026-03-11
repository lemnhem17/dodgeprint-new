---
title: "Getvela Light Mode UX Improvements for DodgePrint Wireframes"
description: "Apply 46 UX proposals from Getvela analysis across all wireframes + 2 new screens"
status: pending
priority: P1
effort: 18h
branch: feat/getvela-ux-improvements
tags: [wireframes, ux, getvela, high-fidelity]
created: 2026-03-11
---

# Getvela UX Wireframe Improvements

## Overview

Apply UX improvements from `docs/getvela/getvela-ux-research.md` Section 8.4 (46 proposals, 8 categories) to all DodgePrint wireframes. Includes creating 2 new screens (Listing Editor, Bulk Editor) and upgrading existing screens with high-fidelity interactive states.

## Source

- Research: `docs/getvela/getvela-ux-research.md` Section 8.4
- Design system: `docs/design-guidelines.md` (Ocean Blue palette already applied)
- Existing wireframes: `docs/wireframes/01-09*.html` + shared CSS/JS

## Phases

| # | Phase | File(s) | Key IDs | Effort | Status |
|---|-------|---------|---------|--------|--------|
| 1 | Shared Infrastructure | `_shared-tokens.css`, `_shared-navigation.js` | A1, A3, G1-G6, B1 | 3h | Pending |
| 2 | Listings Page Upgrade | `04-listings.html` | B1-B5, B7, F1-F2 | 3h | Pending |
| 3 | Listing Editor (NEW) | `10-listing-editor.html` | C1-C7 | 4h | Pending |
| 4 | Bulk Editor (NEW) | `11-bulk-editor.html` | D1-D5 | 3h | Pending |
| 5 | Schedule & Calendar | `03-dashboard.html` or new section | E1-E3 | 2h | Pending |
| 6 | Global UX Polish | All 11 HTML files | A2, G3, H1-H3 | 3h | Pending |

## Dependencies

- Phase 1 MUST complete first (shared components used by all subsequent phases)
- Phases 2-5 can run in parallel after Phase 1
- Phase 6 runs last (touches all files)

## Key Decisions

- Listing Editor = `10-listing-editor.html` (vertical tab layout, single-page scroll)
- Bulk Editor = `11-bulk-editor.html` (spreadsheet-like, diff preview panel)
- Schedule lives as enhanced section in dashboard OR standalone — Phase 5 determines
- Skip Low priority items unless trivial (A4, B6, E4, F4, G5, H4)
- All new components must support dark mode via existing CSS variable system

## Files Affected

### Modified
- `docs/wireframes/_shared-tokens.css` — new component classes
- `docs/wireframes/_shared-navigation.js` — breadcrumb, Cmd+K, nav file map
- `docs/wireframes/04-listings.html` — card view, skeleton, sticky header, saved filters
- `docs/wireframes/01-onboarding.html` — interactive tour (H1)
- `docs/wireframes/03-dashboard.html` — schedule widget, empty states
- `docs/wireframes/05-orders.html` — empty states, breadcrumb
- `docs/wireframes/06-research.html` — empty states
- `docs/wireframes/07-pod-hub.html` — image hover preview, bulk select, empty states
- `docs/wireframes/08-analytics.html` — empty states
- `docs/wireframes/09-settings.html` — empty states

### Created
- `docs/wireframes/10-listing-editor.html`
- `docs/wireframes/11-bulk-editor.html`
