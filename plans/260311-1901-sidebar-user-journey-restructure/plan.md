---
title: "Sidebar Navigation & User Journey Restructure"
status: completed
priority: high
progress: 100%
blockedBy: []
blocks: []
brainstorm: plans/reports/brainstorm-260311-1854-user-journey-sidebar-navigation.md
---

# Sidebar Navigation & User Journey Restructure

## Overview

Restructure wireframe sidebar navigation from current 4-group layout (Core/Create/Fulfill/Insights) to new collapsible 4-group layout matching user journey decisions from brainstorm session.

**Source:** [Brainstorm Report](../reports/brainstorm-260311-1854-user-journey-sidebar-navigation.md)

## Current State → Target State

```
CURRENT                          TARGET
─────────────                    ─────────────
Core:                            (Top level):
  Dashboard                        Home          ← 12-homepage (NEW)
  Listings                         Dashboard     ← 03-dashboard
  Orders
  Shops (badge)                  Shops & Orders:
                                   Shops         ← 13-shops
Create:                            Listings      ← 04-listings
  AI Generator                     Orders        ← 05-orders
  Collections
  Templates                      Production:
                                   AI Generator  ← 15-ai-generator
Fulfill:                           POD Hub       ← 07-pod-hub
  POD Hub                          Collections   ← 14-collections
  Suppliers                        Templates     ← 18-templates
  Deployments                      Suppliers     ← 16-suppliers

Insights:                        Analytics & Tools:
  Research                         Analytics     ← 08-analytics
  Analytics                        Research      ← 06-research
  Tools                            Deployments   ← 17-deployments
                                   Tools         ← 19-tools
(Missing from sidebar):
  Home                           Settings:
  Billing                         Billing       ← 20-billing
  Settings                        Settings      ← 09-settings
  Notifications                   Notifications ← 21-notifications
```

## Key Changes

1. **Add Home** as first top-level item (before Dashboard)
2. **Add Settings group** with Billing, Settings, Notifications (currently missing)
3. **Rename groups**: Core→(top-level), Create+Fulfill→Production, Insights→Analytics & Tools
4. **Reorder items** within groups per brainstorm decisions
5. **Make groups collapsible** (VS Code style) with localStorage persistence
6. **Hide editors** (10, 11) from sidebar — access from Listings page only

## Phases

| # | Phase | File | Effort | Priority |
|---|-------|------|--------|----------|
| 1 | Update sidebar data + collapsible groups | [phase-01](phase-01-update-sidebar-navigation.md) | Medium | Critical |
| 2 | Update wireframe index page order | [phase-02](phase-02-update-index-page.md) | Low | High |
| 3 | Verify all wireframes render correctly | [phase-03](phase-03-verify-wireframes.md) | Low | High |

## Success Criteria

- [x] Sidebar matches target structure in all wireframe pages
- [x] Groups collapse/expand with localStorage persistence
- [x] Home and Settings items visible in sidebar
- [x] Editors (10, 11) NOT in sidebar
- [x] Index page reflects user journey order
- [x] No broken navigation links
