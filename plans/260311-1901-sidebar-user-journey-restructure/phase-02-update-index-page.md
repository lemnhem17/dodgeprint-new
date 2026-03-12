# Phase 02: Update Index Page Order

**Priority:** High
**Effort:** Low
**File:** `docs/wireframes/index.html`

## Context

Index page currently lists wireframes in file number order (01-21). Reorder to match user journey.

## Related Code Files

- **Modify:** `docs/wireframes/index.html`

## Implementation Steps

1. Reorder wireframe links in `index.html` to follow user journey:

```
── Entry & Setup ──
02-auth (Register/Login)
01-onboarding (Setup wizard)
21-product-tour (Tour overlay)

── Daily Operations ──
12-homepage (Home/Welcome)
03-dashboard (KPIs)
13-shops (Shop management)
04-listings (Products)
05-orders (Orders)

── Production ──
10-listing-editor (Single editor)
11-bulk-editor (Bulk editor)
15-ai-generator (AI create)
07-pod-hub (POD/Designs)
14-collections (Collections)
18-templates (Templates)
16-suppliers (Suppliers)

── Analytics & Tools ──
08-analytics (Charts)
06-research (Etsy research)
17-deployments (Deploy reports)
19-tools (Calculator, P&L)

── Settings ──
20-billing (Pricing tiers)
09-settings (Configuration)
21-notifications (Notification center)
```

2. Add section headers/dividers between journey phases
3. Keep original file numbers as reference (e.g., "02 — Auth")

## Todo

- [x] Reorder links in index.html
- [x] Add journey phase section headers
- [x] Verify all links still work
