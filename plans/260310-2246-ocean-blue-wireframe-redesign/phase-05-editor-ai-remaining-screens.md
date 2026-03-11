# Phase 5: Editor, AI Integration & Remaining Screens

**Priority:** P1 | **Status:** completed | **Effort:** High | **Depends on:** Phase 1, 2

## Overview

Upgrade the listing editor within `04-listings.html` side panel to Getvela-style horizontal tabs with AI inline buttons. Apply color swap + minor UX improvements to remaining screens: `05-orders`, `06-research`, `07-pod-hub`, `09-settings`. These screens need less structural change but benefit from consistency.

## Context Links
- Getvela editor: `docs/wireframes/getvela/getvela-uiux-analysis.md` → Section 2.3
- Getvela AI inline: screenshots `03-listing-edit-top.png`, `17-bulk-edit-title-ai.png`
- PSYCH patterns for each screen: `plans/reports/brainstorm-260309-0119-psych-framework-audit-design-language.md`

## Implementation Steps

### A. Listing Editor (within 04-listings.html side panel)

#### Step 1: Horizontal Tab Navigation
Convert side panel detail view from current tabs to Getvela-style horizontal scrollable tabs:

```
Photos | Title | Description | Tags | Details | Price | Inventory | Variations | Shipping
```

Sticky at top of panel. Each tab activates its content section below.

#### Step 2: AI Inline Buttons
Add AI sparkle buttons next to Title and Description fields:

```html
<div class="flex items-center gap-2 mb-1">
  <label class="text-xs font-medium" style="color:var(--text-secondary)">Title</label>
  <span class="text-[10px] font-mono" style="color:var(--text-tertiary)">64 characters remaining</span>
  <button class="ml-auto flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-medium"
          style="background:var(--purple-bg);color:var(--purple)">
    <i data-lucide="sparkles" class="w-3 h-3"></i> AI Enhance
  </button>
</div>
<input class="w-full px-3 py-2 rounded-lg text-sm" style="border:1px solid var(--border)"
       value="Set 5 Cotton Hair Scrunchies...">
```

#### Step 3: Tags Chip Editor
Getvela-style tag management:

```html
<div class="flex flex-wrap gap-1.5 mt-2">
  <span class="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium"
        style="border:1px solid var(--brand-primary);color:var(--brand-primary)">
    scrunchie set
    <button class="ml-0.5 hover:opacity-70"><i data-lucide="x" class="w-3 h-3"></i></button>
  </span>
  <!-- more tag chips -->
</div>
<div class="text-[10px] mt-1 font-mono" style="color:var(--text-tertiary)">3 remaining</div>
```

#### Step 4: Sticky Bottom Action Bar
Pin actions at bottom of side panel:

```html
<div class="sticky bottom-0 flex items-center justify-between p-3 border-t"
     style="background:var(--bg-card);border-color:var(--border)">
  <button class="btn-ghost px-4 py-2 text-xs font-medium">Cancel</button>
  <div class="flex items-center gap-2">
    <button class="btn-ghost px-4 py-2 text-xs font-medium">Save Draft</button>
    <button class="btn-primary px-5 py-2 text-xs font-semibold">Publish</button>
  </div>
</div>
```

### B. Orders (05-orders.html)

Minimal changes — apply Phase 1 colors + ensure PSYCH elements work:

- [x] Verify Confidence Bar alignment with new Ocean Blue tokens
- [x] Ensure Recovery Toast works
- [x] Add "Needs attention" counter on pending tab: `Pending (7)` with orange dot
- [x] Add `"3rd order from this customer"` context line in detail panel (if not already there)
- [x] Verify hover states on table rows

### C. Research (06-research.html)

- [x] Apply color tokens
- [x] Add AI inline suggestion pattern to keyword search results: "Low competition" gold badge
- [x] Add "Popular searches" placeholder text in empty search state
- [x] Ensure niche finder and listing optimizer use `--purple` for AI features
- [x] Loading state: skeleton shimmer for search results

### D. POD Hub (07-pod-hub.html)

- [x] Apply color tokens
- [x] Upload zone: ensure hover uses `var(--brand-primary)` border
- [x] Provider cards: hover border uses `var(--brand-primary)`
- [x] Variant chips: selected state uses `var(--brand-primary)`
- [x] No structural changes needed

### E. Settings (09-settings.html)

- [x] Apply color tokens
- [x] Settings tabs: active state uses `var(--brand-primary-bg)` + `var(--brand-primary)`
- [x] Simplify: add "Saved ✓" auto-feedback after any change (PSYCH pattern)
- [x] Ensure API Keys tab has masked keys with copy button
- [x] Sync Settings: show recommended defaults with "Advanced" toggle

## Todo List

- [x] Add horizontal tab navigation to listing editor in side panel
- [x] Add AI inline buttons for Title and Description
- [x] Add tag chip editor with counter
- [x] Add sticky bottom action bar in side panel
- [x] Update Orders: attention counters, customer context
- [x] Update Research: AI badges, empty state, skeleton loading
- [x] Update POD Hub: color token alignment
- [x] Update Settings: auto-save feedback, simplified layout
- [x] Verify all PSYCH patterns work across updated screens

## Success Criteria
- Listing editor has horizontal tabs matching Getvela pattern
- AI buttons visible on Title/Description/Tags fields
- Tag chips are interactive with remove (X) buttons
- All 5 remaining screens use Ocean Blue tokens consistently
- PSYCH patterns preserved on all screens
