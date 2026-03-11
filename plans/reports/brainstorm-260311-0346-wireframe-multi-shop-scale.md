# Brainstorm: Wireframe Update — Multi-Shop Scale

**Date:** 2026-03-11 | **Status:** Approved

## Problem
Existing wireframes (12 files) cover basic features but miss ~15 DodgePrint v1.6.0 screens. Also don't handle multi-shop scale (100+ Etsy, 10+ per other platform = 130+ shops total).

## Decisions
- **Format:** HTML interactive + markdown reference
- **Color scheme:** Keep Ocean Blue (existing `_shared-tokens.css`)
- **Sidebar/Naming:** Keep current structure and terminology
- **Features:** Only current v1.6.0 features, no new additions
- **Scale:** Design for 130+ shops across 4-5 platforms

## Deliverables

### New Files (8)
| File | Feature | Key Scale Pattern |
|------|---------|-------------------|
| 13-shops.html | Shop management | Platform tabs + search/filter + pagination + bulk actions |
| 14-collections.html | Collections | Table with sharing |
| 15-ai-generator.html | Create Products wizard | 3 paths + 3 sources |
| 16-suppliers.html | Suppliers | Table + Google Sheet integration |
| 17-deployments.html | Deployment reports | Multi-shop filter + batch deploy |
| 18-templates.html | Templates | Platform-specific nested nav |
| 19-tools.html | Calculator + P&L + Import/Export | Tabbed tools view |
| 20-billing.html | Billing + Pricing | Platform-grouped pricing at scale |

### Updated Files (4)
| File | Changes |
|------|---------|
| 03-dashboard.html | 3-level KPIs (aggregate → platform → shop table) |
| 04-listings.html | Column visibility, inline charts, template library button |
| 05-orders.html | Searchable shop filter dropdown (130 shops) |
| 09-settings.html | Webhooks tab, API Request Logs, Credits |
| _shared-navigation.js | Add nav items for new pages |

## Multi-Shop Scale Patterns
- **Shops page:** Search + platform tabs with counts + pagination + bulk select/actions
- **Dashboard:** 3-level drill-down (total → platform → individual shop)
- **Billing:** Per-platform breakdown × shop count, grand total, annual discount
- **Filters:** All shop-related dropdowns need search (130 options too many for plain dropdown)
- **Orders/Deployments:** Shop filter is critical, must be searchable
