# Phase 4: Research & Tag Analysis

## Context
- Source: April 2025 (Tag Analysis with Etsy 30M listings, KPIs, time comparisons), v1.5.1 (conversion rate + sorting)
- Target: `docs/wireframes/06-research.html`
- Current state: Has Trending Categories tab (7D/30D/90D), Competitors tab with top listings. Missing dedicated tag analysis with KPIs.

## Overview
- Priority: HIGH
- Status: Complete
- Effort: 2h

## Requirements

### 1. Tag Analysis Tab
Add new tab "Tag Analysis" alongside existing tabs (Keywords/Trending/Competitors):

**Search bar:**
- Input: "Enter a tag or keyword" with search icon
- "Analyze" button
- Data source badge: "Based on 30M+ Etsy listings"

**Individual Tag KPI Cards (after search):**
- Tag name as heading
- 4 KPI cards in row:
  - Listings count (with trend arrow)
  - Total Sales (with trend arrow)
  - Views (with trend arrow)
  - Favorers (with trend arrow)

**Time Frame Selector:**
- Toggle buttons: Today vs Yesterday | 7d vs prev 7d | 14d vs prev 14d | 28d vs prev 28d
- Each KPI shows current vs previous with % change
- Green for positive, red for negative trends

### 2. Conversion Rate Column
Add to tag results table:
- Column: "Conv. Rate" showing views→sales conversion %
- Sortable (click header to sort)
- Color coding: green >5%, yellow 2-5%, red <2%

### 3. All Product Tags Analysis View
Section below individual tag search:

**Tags table:**
- Columns: Tag, Listings, Sales, Views, Favorers, Conv. Rate, Trend
- Sortable by any column
- Pagination or "Load more"
- Export to CSV button

**Bulk tag input:**
- Textarea to paste multiple tags (comma or newline separated)
- "Analyze All" button
- Results as comparison table

### 4. Tag Comparison Chart
Visual comparison:
- Bar chart or sparklines showing selected tags side-by-side
- Metric selector (Sales/Views/Favorers)
- Time frame aligned with selector above

## Implementation Steps

1. Open `06-research.html`, locate tabs section
2. Add "Tag Analysis" tab button after existing tabs
3. Create tag analysis panel with search bar + data source badge
4. Add 4 KPI cards row (Listings, Sales, Views, Favorers)
5. Add time frame toggle buttons (4 comparison periods)
6. Add results table with Conv. Rate column + sortable headers
7. Add All Product Tags section with bulk input
8. Use existing card/table patterns from the wireframe

## Todo
- [x] Add Tag Analysis tab
- [x] Tag search bar + "30M+ listings" badge
- [x] 4 KPI cards with trend arrows
- [x] Time frame comparison toggles
- [x] Conversion rate column (sortable, color-coded)
- [x] All Product Tags table view
- [x] Bulk tag analysis input

## Success Criteria
- Tag analysis fully searchable with real-time KPI display
- Time comparison visible for all 4 periods
- Conversion rate sortable and color-coded
- Consistent with existing research page styling
