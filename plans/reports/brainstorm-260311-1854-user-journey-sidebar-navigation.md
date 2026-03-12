# Brainstorm: User Journey & Sidebar Navigation

**Date:** 2026-03-11
**Status:** Concluded
**Participants:** Leo + Claude

---

## Problem Statement

Wireframes (01-21) numbered arbitrarily. Need correct sequencing for new user journey and sidebar navigation structure.

## Key Decisions

| Decision | Choice | Rationale |
|----------|--------|-----------|
| Homepage (12) role | Welcome page (logged-in) | Not a public landing page |
| Billing (20) timing | After onboarding | Product-led growth — show value before asking for payment |
| Product Tour (21) trigger | Dashboard first visit | Popup overlay on dashboard, skippable |
| Homepage vs Dashboard | Homepage above Dashboard | Homepage = overview/welcome, Dashboard = detailed KPIs |
| Sidebar order | Follows user journey | Logical flow from onboarding to daily use to advanced |
| Editors (10, 11) | Hidden inside Listings | Access via "Edit"/"Bulk Edit" from Listings page |
| Sidebar grouping | Collapsible groups (VS Code style) | Clean, organized, scalable |
| Group naming | Shops & Orders / Production / Analytics & Tools / Settings | "Production" covers AI Gen, POD, Templates, Suppliers |
| Deployments placement | Analytics & Tools | Deployment = reports/results, not creation |
| Role-based nav | Single sidebar for all | Same nav regardless of shop count |

## New User Journey

```
Step 1: 02-auth           → Register/Login
Step 2: 01-onboarding     → Connect first shop (no payment required)
Step 3: 03-dashboard      → KPIs overview + 21-product-tour (overlay popup)
```

Post-onboarding, user explores organically via sidebar:

| Phase | Pages | Description |
|-------|-------|-------------|
| Daily ops | 12-home, 03-dashboard, 13-shops, 04-listings, 05-orders | Core daily use |
| Create products | 15-ai-generator, 07-pod-hub, 14-collections, 18-templates, 16-suppliers | Production workflow |
| Deep editing | 10-listing-editor, 11-bulk-editor (from Listings) | Accessed contextually |
| Analyze | 08-analytics, 06-research, 17-deployments, 19-tools | Insights & utilities |
| Scale/config | 20-billing, 09-settings, 21-notifications | When ready to upgrade or customize |

## Sidebar Navigation Structure

```
Home                        ← 12-homepage
Dashboard                   ← 03-dashboard

▼ Shops & Orders
  Shops                     ← 13-shops
  Listings                  ← 04-listings (10-editor & 11-bulk hidden inside)
  Orders                    ← 05-orders

▼ Production
  AI Generator              ← 15-ai-generator
  POD Hub                   ← 07-pod-hub
  Collections               ← 14-collections
  Templates                 ← 18-templates
  Suppliers                 ← 16-suppliers

▼ Analytics & Tools
  Analytics                 ← 08-analytics
  Research                  ← 06-research
  Deployments               ← 17-deployments
  Tools                     ← 19-tools

▼ Settings
  Billing                   ← 20-billing
  Settings                  ← 09-settings
  Notifications             ← 21-notifications
```

## Wireframe-to-Journey Mapping

| Wireframe | Journey Step | Sidebar Group | Access Method |
|-----------|-------------|---------------|---------------|
| 01-onboarding | 2 (setup) | N/A — wizard only | Auto after register |
| 02-auth | 1 (entry) | N/A — pre-login | Direct URL |
| 03-dashboard | 3 (first landing) | Top level | Sidebar |
| 04-listings | 4+ (daily) | Shops & Orders | Sidebar |
| 05-orders | 4+ (daily) | Shops & Orders | Sidebar |
| 06-research | Later (analyze) | Analytics & Tools | Sidebar |
| 07-pod-hub | Later (create) | Production | Sidebar |
| 08-analytics | Later (analyze) | Analytics & Tools | Sidebar |
| 09-settings | Last (config) | Settings | Sidebar |
| 10-listing-editor | Contextual | Hidden | From Listings page |
| 11-bulk-editor | Contextual | Hidden | From Listings page |
| 12-homepage | 3+ (welcome) | Top level | Sidebar (first item) |
| 13-shops | 4+ (daily) | Shops & Orders | Sidebar |
| 14-collections | Later (create) | Production | Sidebar |
| 15-ai-generator | Later (create) | Production | Sidebar |
| 16-suppliers | Later (create) | Production | Sidebar |
| 17-deployments | Later (analyze) | Analytics & Tools | Sidebar |
| 18-templates | Later (create) | Production | Sidebar |
| 19-tools | Later (analyze) | Analytics & Tools | Sidebar |
| 20-billing | Scale trigger | Settings | Sidebar |
| 21-product-tour | 3 (overlay) | N/A — overlay | Auto on first dashboard visit |
| 21-notifications | Ongoing | Settings | Sidebar |

## Unresolved Questions

- Should Home (12) show different content for first-time vs returning users?
- Should collapsed sidebar groups remember state per user?
- Should onboarding wizard allow skipping shop connection (empty state)?
