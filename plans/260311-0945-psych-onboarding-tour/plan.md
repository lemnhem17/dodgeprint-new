---
title: "PSYCH Framework Onboarding + Product Tour"
description: "Rebuild onboarding with branching flow (Starter/Growing/Enterprise) + PSYCH elements + product tour overlay"
status: completed
priority: P1
effort: 10h
branch: feat/psych-onboarding-tour
tags: [wireframes, onboarding, psych, tour, ux]
blockedBy: []
blocks: []
created: 2026-03-11
---

# PSYCH Framework Onboarding + Product Tour

## Overview

Rebuild `01-onboarding.html` with branching flow based on seller level + add PSYCH elements (social proof, personalization, quick win). Create `21-product-tour.html` with spotlight+coachmark hybrid tour overlay on dashboard.

## Source

- Brainstorm: `plans/reports/brainstorm-260311-0945-psych-onboarding-tour.md`
- Current onboarding: `docs/wireframes/01-onboarding.html` (397 lines)
- Dashboard reference: `docs/wireframes/03-dashboard.html`
- Shared tokens: `docs/wireframes/_shared-tokens.css`
- Shared nav: `docs/wireframes/_shared-navigation.js`

## Cross-Plan Dependencies

No blocking deps. Getvela plan (pending) touches shared infra but not onboarding content. Changelog sync plan doesn't touch onboarding or tour.

## Phases

| # | Phase | File(s) | Effort | Status |
|---|-------|---------|--------|--------|
| 1 | Onboarding Rebuild | `01-onboarding.html` | 5h | Done |
| 2 | Product Tour + Checklist | `21-product-tour.html` | 4h | Done |
| 3 | Shared Nav Update | `_shared-navigation.js` | 1h | Done |

## Files

| Action | File | Notes |
|--------|------|-------|
| UPDATE | `docs/wireframes/01-onboarding.html` | Full rebuild with branching |
| CREATE | `docs/wireframes/21-product-tour.html` | Tour + checklist on dashboard |
| UPDATE | `docs/wireframes/_shared-navigation.js` | Add product-tour to NAV_FILE_MAP |
