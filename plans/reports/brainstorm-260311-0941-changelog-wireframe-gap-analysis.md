# Brainstorm: DodgePrint Changelog → Wireframe Gap Analysis

**Date:** 2026-03-11 | **Source:** docs.dodgeprint.com changelog (Mar-Dec 2025, v1.5.0→v1.5.6)

---

## 1. Changelog Feature Inventory (15 versions)

| Version | Date | Key Features |
|---------|------|-------------|
| March 2025 | Mar | Upload tracking numbers; Auto-sync historical orders; Filter V2 |
| April 2025 | Apr | **Workspace Management** (business ws, roles, invite/remove, shared resources, user groups); **Tag Analysis** (Etsy 30M listings, KPIs, time comparisons); Microsoft login |
| v1.5.0 | May | Order + shop disconnection **notifications** |
| v1.5.1 | May | Tag Analysis: conversion rate + sorting options |
| v1.5.2 | Jun | **Digital downloads** from product list; Export Etsy transactions + Amazon orders; **Notification page**; Publish Etsy listings without variants; **Top Products on dashboard**; Quick tour for new users; PNG upload fix |
| v1.5.3 | Jul | **Connect supplier accounts** (Merchize, Printify); **Supplier mapping**; Upload designs to orders; Send orders to suppliers |
| v1.5.4 | Jul | Etsy personalization preserved after edits |
| v1.5.4.1 | Aug | Separate Ads Fee from Platform Fees (Etsy stats) |
| v1.5.4.2 | Aug | **Export Center**: export all orders from any shop/platform |
| v1.5.5 | Sep | Auto-sync tracking from suppliers to platforms |
| v1.5.5.1 | Sep | Amazon quantity display fix |
| v1.5.5.2 | Oct | New suppliers: Gearment, BurgerPrints |
| v1.5.5.3 | Oct | **Variation Template**: multi-select + exclude for batch edit |
| v1.5.5.4 | Nov | New suppliers: MangoTee Prints, Pentifine |
| v1.5.6 | Dec | New suppliers: Printful, Printik, CustomCat |

---

## 2. Feature → Wireframe Mapping & Gap Analysis

### Legend: OK = already in wireframe, MISSING = needs addition, PARTIAL = exists but incomplete

| # | Feature | Target Wireframe | Status | Impact |
|---|---------|-----------------|--------|--------|
| 1 | **Workspace Management** (roles, invite, groups, shared resources) | 09-settings | **MISSING** | HIGH - major feature, needs dedicated settings tab |
| 2 | **Tag Analysis** (Etsy 30M, KPIs, time frames, conversion rate) | 06-research | **PARTIAL** | HIGH - wireframe has research but may lack tag-specific KPI comparisons |
| 3 | **Microsoft Account Login** | 02-auth | **CHECK** | LOW - add MS login button alongside existing social logins |
| 4 | **Notifications page** | New / Nav | **MISSING** | MED - needs notification bell in nav + dedicated page |
| 5 | **Digital Downloads** from product list | 04-listings | **MISSING** | MED - download button/action in product rows |
| 6 | **Export Etsy Transactions + Amazon Orders** | 05-orders / 19-tools | **CHECK** | MED - export buttons per platform |
| 7 | **Top Products on Dashboard** | 03-dashboard | **CHECK** | MED - "top products" section with performance data |
| 8 | **Quick Tour for New Users** | 01-onboarding | **CHECK** | LOW - guided tour overlay |
| 9 | **Supplier Accounts** (9 suppliers total) | 16-suppliers | **PARTIAL** | HIGH - need Merchize, Printify, Printful, Printik, CustomCat, Gearment, BurgerPrints, MangoTee, Pentifine |
| 10 | **Supplier Mapping** (variant/size/color) | 16-suppliers / orders | **MISSING** | HIGH - mapping UI for product→supplier variants |
| 11 | **Upload Designs to Orders** | 05-orders | **MISSING** | MED - design upload in order detail |
| 12 | **Send Orders to Suppliers** | 05-orders | **MISSING** | HIGH - fulfillment flow: select orders → send to supplier |
| 13 | **Etsy Personalization** preserved | 10-listing-editor | **CHECK** | LOW - personalization fields in editor |
| 14 | **Ads Fee vs Platform Fee** separation | 08-analytics | **MISSING** | MED - split fee display in Etsy analytics |
| 15 | **Export Center** (all orders, any shop/platform) | 19-tools / new | **CHECK** | MED - export all orders UI |
| 16 | **Auto-sync Tracking** (supplier→platform) | 05-orders | **MISSING** | MED - tracking status column, auto-sync indicator |
| 17 | **Upload Tracking Numbers** | 05-orders | **MISSING** | MED - manual tracking upload flow |
| 18 | **Filter V2** | Global (all list views) | **CHECK** | MED - improved filter components across 04, 05, 14, 17 |
| 19 | **Variation Template** multi-select/exclude | 18-templates | **CHECK** | MED - batch edit with multi-select + exclude UI |
| 20 | **Publish without Variants** (Etsy) | 10-listing-editor | **CHECK** | LOW - toggle/option to skip variants |

---

## 3. Priority Wireframe Updates

### Priority 1 (HIGH) - Major features missing from wireframes

#### A. Workspace Management → 09-settings.html
- Add "Workspace" tab in Settings
- **Create Business Workspace** modal/flow
- **Members management**: invite, remove, assign roles (Member/Manager)
- **User Groups**: create, edit, assign members
- **Shared Resources**: Sites, Variations, Descriptions, Tags, Templates with view/edit permissions
- **Workspace Switcher** in top nav (dropdown showing Personal/Business/Active workspaces)

#### B. Supplier Ecosystem → 16-suppliers.html
- Current wireframe likely shows basic supplier cards (Gelato, Google Sheets)
- Need to add **9 supplier integrations**: Merchize, Printify, Printful, Printik, CustomCat, Gearment, BurgerPrints, MangoTee Prints, Pentifine
- **Connect Account** flow per supplier
- **Supplier Mapping** UI: map product variants → supplier SKU/size/color

#### C. Order Fulfillment Flow → 05-orders.html
- **Upload designs** to orders
- **Send to supplier** action (select orders → choose supplier → send)
- **Tracking management**: upload tracking numbers, auto-sync indicator
- **Tracking status column**: pending/synced/delivered
- Filter orders by fulfillment status

### Priority 2 (MEDIUM) - Notable features to add

#### D. Notifications → Nav + New page (21-notifications.html?)
- **Notification bell** in top nav bar with unread count
- **Notification page**: list of notifications (order received, shop disconnected, sync errors)
- Filter by type, mark as read

#### E. Tag Analysis Enhancement → 06-research.html
- **Tag KPI comparison**: Listings count, Sales, Views, Favorers
- **Time frame selector**: Today vs Yesterday, 7d/14d/28d comparisons
- **Conversion rate** column + sorting
- Individual tag vs All product tags analysis views

#### F. Dashboard Top Products → 03-dashboard.html
- **Top Products section**: product name, sales count, revenue
- Per-shop or aggregate view

#### G. Digital Downloads → 04-listings.html
- Download button per product (single + bulk download)

#### H. Export Improvements → 05-orders + 19-tools
- Export Etsy finance transactions button
- Export Amazon orders button
- Export Center: export all orders from any shop/platform

#### I. Analytics Fee Breakdown → 08-analytics.html
- Etsy stats: separate Ads Fee vs Platform Fee columns
- Clear breakdown visualization

### Priority 3 (LOW) - Minor additions

#### J. Auth → 02-auth.html
- Add Microsoft login button

#### K. Onboarding → 01-onboarding.html
- Quick tour overlay/stepper for new accounts

#### L. Listing Editor → 10-listing-editor.html
- Personalization fields (Etsy-specific)
- "Publish without variants" toggle

#### M. Templates → 18-templates.html
- Multi-select + exclude options for batch variation editing

---

## 4. Recommended Implementation Order

1. **09-settings** — Add Workspace Management tab (biggest missing feature)
2. **16-suppliers** — Expand supplier integrations (9 suppliers) + mapping UI
3. **05-orders** — Add fulfillment flow (designs, send to supplier, tracking)
4. **06-research** — Enhance Tag Analysis with KPI comparisons + conversion rate
5. **03-dashboard** — Add Top Products section
6. **Nav + 21-notifications** — Add notification system
7. **04-listings** — Add digital downloads
8. **08-analytics** — Ads fee vs platform fee breakdown
9. **02-auth** — Microsoft login
10. **10-listing-editor** — Personalization + publish without variants
11. **18-templates** — Multi-select/exclude for batch edit
12. **19-tools** — Export Center enhancements

---

## 5. Unresolved Questions

1. Does current 16-suppliers.html already include connect-account flows? Need to verify exact gap.
2. Does 05-orders.html already have tracking upload UI? Need to check.
3. Should Notification be a new wireframe (21) or embedded in existing nav/settings?
4. Workspace switcher — should it be in the top nav or sidebar? Current wireframes use sidebar shop switcher.
5. Export Center — separate page vs section in 19-tools?
6. Tag Analysis time-frame comparison — is this already in 06-research?
7. Some changelog entries are very terse (1 line). Are there more features in v1.5.0, v1.5.1, v1.5.4, v1.5.4.1 not captured? The scraper may have missed longer content on those pages.
