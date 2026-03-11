# Phase 2: Supplier Ecosystem Expansion

## Context
- Source: v1.5.3 (Jul), v1.5.5.2 (Oct), v1.5.5.4 (Nov), v1.5.6 (Dec) — 9 new supplier integrations + mapping UI
- Target: `docs/wireframes/16-suppliers.html`
- Current state: Gelato (connected), Google Sheets (custom), API Integration, Manual, + "Add Custom" dashed card

## Overview
- Priority: HIGH
- Status: Pending
- Effort: 2.5h

## Requirements

### 1. Add 9 POD Supplier Cards
Add supplier cards for each integration. Group into categories:

**Major POD Platforms (v1.5.3):**
- Merchize — logo "MZ", color #FF6B35
- Printify — logo "Pf", color #2EC4B6

**Additional Suppliers (v1.5.5.2–v1.5.6):**
- Printful — logo "PF", color #2B2B2B
- Printik — logo "Pk", color #6366F1
- CustomCat — logo "CC", color #FF4444
- Gearment — logo "GM", color #00B4D8
- BurgerPrints — logo "BP", color #E63946
- MangoTee Prints — logo "MT", color #F9A825
- Pentifine — logo "Pn", color #7B68EE

Each card shows:
- Supplier logo + name
- Category label (e.g., "Print-on-Demand", "Custom Fulfillment")
- Connection status: Connected/Not Connected
- Stats: products linked, orders sent (for connected ones)
- "Connect" button (or "Manage" if connected)

### 2. Connect Account Flow
Modal for connecting supplier account:

- Supplier logo + name header
- API Key / Account credentials input fields
- "Test Connection" button
- Success/error state
- "Save & Connect" CTA

### 3. Supplier Mapping UI
New section/modal for mapping product variants to supplier SKUs:

**Mapping Table:**
- Left column: DodgePrint product variant (name, size, color)
- Right column: Supplier SKU dropdown/input
- Auto-match suggestions
- "Map All" bulk action
- Status: Mapped/Unmapped per row

**Access point:** Button on each connected supplier card → "Manage Mapping" or within order fulfillment flow

### 4. Supplier Grid Layout
Organize suppliers in grid:
- Row 1: Connected suppliers (with stats)
- Row 2: Available suppliers (Connect buttons)
- Row 3: Custom options (Google Sheets, API, Manual, Add Custom)
- Filter/search bar at top

## Implementation Steps

1. Open `16-suppliers.html`
2. Add 9 new supplier card blocks after Gelato, using same card pattern
3. Show 2-3 as "Connected" with stats, rest as "Available" with Connect buttons
4. Add Connect Account modal (reuse modal pattern from `_shared-navigation.js`)
5. Add Supplier Mapping section/modal with table layout
6. Reorganize grid into Connected / Available / Custom sections
7. Add search/filter bar at top

## Todo
- [ ] Add 9 new supplier cards (Merchize, Printify, Printful, Printik, CustomCat, Gearment, BurgerPrints, MangoTee, Pentifine)
- [ ] Connect Account modal
- [ ] Supplier Mapping table UI
- [ ] Reorganize grid layout (Connected → Available → Custom)
- [ ] Add supplier search/filter

## Success Criteria
- All 11 suppliers visible (Gelato + 9 new + Google Sheets)
- Connect flow modal functional
- Mapping UI shows variant-to-SKU matching
