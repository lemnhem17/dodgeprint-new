# Phase 6: Minor Updates (Auth, Listings, Editor, Templates, Tools)

## Context
- Source: April 2025 (Microsoft login), v1.5.2 (digital downloads, publish without variants), v1.5.4 (personalization), v1.5.5.3 (variation multi-select/exclude), v1.5.4.2 (Export Center)
- Target: 5 wireframe files
- All LOW/MEDIUM priority, small additive changes

## Overview
- Priority: LOW-MEDIUM
- Status: Complete
- Effort: 2.5h

## Requirements

### A. Auth — Microsoft Login (02-auth.html)

**Add Microsoft SSO button** alongside existing Google SSO:
- Button: Microsoft icon + "Continue with Microsoft"
- Style: same as Google button (outlined, full-width)
- Place below Google button, above email/password form
- Both login and register pages

### B. Listings — Digital Downloads (04-listings.html)

**Download actions in product table:**
- Download icon button per row (for products with digital files)
- Bulk download: checkbox select → "Download Files" toolbar button
- Visual indicator: small file icon badge on products that have digital assets
- Download modal: file list with individual + "Download All" option

### C. Listing Editor — Personalization + No-Variant Publish (10-listing-editor.html)

**Etsy Personalization Section:**
- Add "Personalization" card/section in editor (Etsy-specific)
- Toggle: "Enable Personalization"
- Fields: Personalization instructions (textarea), Is Required (toggle), Max Characters
- Note: "Personalization will be preserved when editing"

**Publish Without Variants:**
- Add toggle/checkbox: "Publish without variants"
- When enabled: hide variant setup, show simple price + quantity fields
- Label: "For digital products or single-item listings"
- Etsy platform indicator

### D. Templates — Multi-Select & Exclude (18-templates.html)

**Batch Edit Enhancement:**
- Multi-select checkboxes on variation rows
- "Select All" / "Deselect All" buttons
- "Exclude Selected" button (mark variations to skip during batch operations)
- Excluded items shown with strikethrough + muted style
- "Include All" to reset exclusions
- Count display: "5 selected, 2 excluded"

### E. Tools — Export Center Enhancement (19-tools.html)

**Export Center Section:**
- Enhance existing export area with:
  - "Export All Orders" button (cross-platform)
  - Platform filter: All / Etsy / Shopify / Amazon / TikTok
  - Shop filter: dropdown to select specific shop(s)
  - Date range picker
  - Format: CSV / Excel
  - "Export Etsy Transactions" quick button (finance data)
  - "Export Amazon Orders" quick button
- Export history: recent exports list with download links

## Implementation Steps

1. **02-auth.html**: Add Microsoft button below Google SSO (both login + register sections)
2. **04-listings.html**: Add download icon to product table rows, bulk download button in toolbar
3. **10-listing-editor.html**: Add Personalization card (Etsy), add "Publish without variants" toggle
4. **18-templates.html**: Add multi-select checkboxes, select all/exclude buttons on variation rows
5. **19-tools.html**: Enhance Export section with cross-platform filters, quick export buttons, export history

## Todo
- [x] Microsoft login button (02-auth, login + register)
- [x] Digital download actions in listings table (04-listings)
- [x] Personalization section in listing editor (10-listing-editor)
- [x] Publish without variants toggle (10-listing-editor)
- [x] Multi-select + exclude for variation batch edit (18-templates)
- [x] Export Center: all orders, platform/shop filters, quick buttons (19-tools)
- [x] Export history list (19-tools)

## Success Criteria
- Microsoft login visible on auth pages
- Digital download accessible from product list
- Personalization editable without data loss
- Variation batch operations support exclude
- Export Center supports cross-platform order export
