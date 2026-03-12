# Phase 03: Verify All Wireframes

**Priority:** High
**Effort:** Low

## Context

After updating `_shared-navigation.js`, verify all 21 wireframe HTML files render the new sidebar correctly.

## Verification Checklist

- [x] All 21 wireframes load without JS errors
- [x] Sidebar shows: Home, Dashboard (top) → 4 collapsible groups
- [x] Active page highlighted correctly via `data-page` attribute
- [x] Collapsible groups expand/collapse on click
- [x] Collapse state persists across page reload
- [x] Editors (10, 11) NOT visible in sidebar
- [x] Editors still accessible from Listings page buttons
- [x] Settings group shows Billing, Settings, Notifications
- [x] Command palette (Cmd+K) shows updated nav entries
- [x] Navigate function routes to correct HTML files

## Pages to Verify

| File | data-page value | Expected sidebar highlight |
|------|----------------|---------------------------|
| 01-onboarding.html | onboarding | None (wizard, no sidebar) |
| 02-auth.html | auth | None (pre-login) |
| 03-dashboard.html | dashboard | Dashboard (top) |
| 04-listings.html | listings | Shops & Orders > Listings |
| 05-orders.html | orders | Shops & Orders > Orders |
| 06-research.html | research | Analytics & Tools > Research |
| 07-pod-hub.html | pod-hub | Production > POD Hub |
| 08-analytics.html | analytics | Analytics & Tools > Analytics |
| 09-settings.html | settings | Settings > Settings |
| 10-listing-editor.html | listing-editor | None (hidden) |
| 11-bulk-editor.html | bulk-editor | None (hidden) |
| 12-homepage.html | homepage | Home (top) |
| 13-shops.html | shops | Shops & Orders > Shops |
| 14-collections.html | collections | Production > Collections |
| 15-ai-generator.html | ai-generator | Production > AI Generator |
| 16-suppliers.html | suppliers | Production > Suppliers |
| 17-deployments.html | deployments | Analytics & Tools > Deployments |
| 18-templates.html | templates | Production > Templates |
| 19-tools.html | tools | Analytics & Tools > Tools |
| 20-billing.html | billing | Settings > Billing |
| 21-notifications.html | notifications | Settings > Notifications |
| 21-product-tour.html | product-tour | None (overlay) |
