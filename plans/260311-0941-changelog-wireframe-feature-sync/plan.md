---
title: "Changelog Feature Sync — Update Wireframes to Match DodgePrint v1.5.0–1.5.6"
description: "Add 20 missing/incomplete features from 2025 changelog across 10+ wireframe files"
status: completed
priority: P1
effort: 14h
branch: feat/changelog-wireframe-sync
tags: [wireframes, features, changelog, sync]
created: 2026-03-11
blocks: []
blockedBy: []
---

# Changelog Feature Sync — Wireframe Updates

## Overview

Sync DodgePrint wireframes with all features released in v1.5.0–v1.5.6 (Mar–Dec 2025). 20 features identified in gap analysis; 7 HIGH/MEDIUM gaps require significant wireframe changes, 5 need minor additions.

## Source

- Brainstorm: `plans/reports/brainstorm-260311-0941-changelog-wireframe-gap-analysis.md`
- Changelog data: `docs/dodgeprint/changelog-full.md`
- App analysis: `docs/wireframes/dodgeprint/dodgeprint-deep-analysis-v2.md`
- Design system: `docs/wireframes/_shared-tokens.css` (Ocean Blue)

## Relationship with Getvela Plan

`260311-0122-getvela-ux-wireframe-improvements` is PENDING and touches overlapping files (04-listings, 05-orders, 06-research, 08-analytics, shared CSS/JS). **No blocking dependency** — this plan adds feature content, Getvela plan adds UX patterns. Can execute independently. Shared files: use additive changes only, avoid restructuring existing sections.

## Phases

| # | Phase | File(s) | Effort | Status |
|---|-------|---------|--------|--------|
| 1 | Workspace Management | `09-settings.html`, `_shared-navigation.js` | 3h | Complete |
| 2 | Supplier Ecosystem | `16-suppliers.html` | 2.5h | Complete |
| 3 | Order Fulfillment Flow | `05-orders.html` | 2h | Complete |
| 4 | Research & Tag Analysis | `06-research.html` | 2h | Complete |
| 5 | Dashboard, Analytics & Notifications | `03-dashboard.html`, `08-analytics.html`, `_shared-navigation.js` | 2h | Complete |
| 6 | Minor Updates (Auth, Listings, Editor, Templates, Tools) | `02-auth.html`, `04-listings.html`, `10-listing-editor.html`, `18-templates.html`, `19-tools.html` | 2.5h | Complete |

## Dependencies

- All phases independent — can run in any order
- Phase 1 adds workspace switcher to shared nav; Phase 5 adds notification bell to shared nav → coordinate if parallel
- No cross-phase file conflicts except `_shared-navigation.js` (Phase 1 + Phase 5)

## Files Affected

### Modified
- `docs/wireframes/09-settings.html` — workspace tab, roles, groups, shared resources
- `docs/wireframes/16-suppliers.html` — 9 new suppliers, mapping UI, connect flows
- `docs/wireframes/05-orders.html` — fulfillment actions, design upload, tracking sync
- `docs/wireframes/06-research.html` — tag analysis KPIs, time comparisons
- `docs/wireframes/03-dashboard.html` — enhance top products section
- `docs/wireframes/08-analytics.html` — ads fee vs platform fee breakdown
- `docs/wireframes/02-auth.html` — Microsoft login button
- `docs/wireframes/04-listings.html` — digital download buttons
- `docs/wireframes/10-listing-editor.html` — personalization, publish without variants
- `docs/wireframes/18-templates.html` — multi-select/exclude batch edit
- `docs/wireframes/19-tools.html` — export center enhancements
- `docs/wireframes/_shared-navigation.js` — workspace switcher, notification bell

### Created
- `docs/wireframes/21-notifications.html` — dedicated notification page (optional, can be modal)
