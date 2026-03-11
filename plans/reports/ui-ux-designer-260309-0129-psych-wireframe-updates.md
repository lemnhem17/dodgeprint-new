# PSYCH Framework Wireframe Updates
**Date:** 2026-03-09 | **Status:** Complete

---

## Summary

Applied PSYCH behavioral UX patterns to 4 wireframes per audit report. All changes use existing design tokens and work in dark mode.

## Changes by File

### 03-dashboard.html
- **Greeting line**: Replaced generic "Welcome back" with calm "Good morning. All 3 shops are synced." (text-secondary)
- **Sync Pulse**: Added green dot + "All synced" pill in header area (brand-primary-bg)
- **KPI trend context**: Each KPI card now shows "up/down X% vs last week" below the number (11px, text-secondary)
- **AI Insight Card**: Gold-tinted card (#FDF6E3) with left border, lightbulb icon, actionable text, [View Listings] + [Dismiss] buttons
- **Empty state**: Hidden card with "Connect your first shop to see metrics" + Connect Shop CTA (id: dashboardEmptyState)

### 04-listings.html (P0)
- **Confidence Bar**: Persistent toolbar below header — sync status pill, listing count, selection count, autosave indicator, separated by vertical lines
- **Recovery Toast**: Fixed bottom-right, white bg, shadow, countdown progress bar, [Undo] button. JS function `showRecoveryToast(message)`
- **Autosave indicator**: `showAutosaving()` toggles "Saving..." spinner to "Saved" checkmark in confidence bar
- **Bulk action confirmation**: Modal overlay asking "Apply to N listings?" before executing. JS: `showBulkConfirm(count)`
- **Quality grade tooltip**: Native `title` attribute on quality badges: "How to improve: add 3 more tags"
- **Selection tracking**: Event listeners update confidence bar selected count in real-time

### 05-orders.html
- **Confidence Bar**: Same pattern as Listings — sync status + order count + selection count
- **Status tab counts**: Already present in original (Pending 23, Shipped 412, etc.) — no changes needed
- **Recovery Toast**: Same undo pattern with 5s countdown
- **Order context**: Added "3rd order from this customer" line below customer email in detail panel

### 01-onboarding.html
- **Transparency panel**: "What we access" card below platform grid — checkmark for listings/orders, X for payment info, "You can disconnect anytime" reassurance
- **Import estimate**: Green info bar: "Found 247 listings ready to import" + "Estimated time: ~2 min for 500 listings"
- **Success action cards**: Replaced list-style next steps with 3 selection cards in a grid: "View Dashboard" / "Edit Listings" / "Explore Research" — each with 40x40 icon, title, description

## Design Decisions
- Confidence bar uses same separator pattern (#E8E4DE vertical lines) across listings/orders for consistency
- Recovery toast uses 5s auto-dismiss with CSS width transition for progress bar — no JS animation library needed
- Insight card uses bulb character entity (&#128161;) instead of emoji to ensure cross-platform rendering
- Empty state is hidden by default (class="hidden") — toggle via JS when no shops connected
- All new elements inherit dark mode via CSS custom properties

## Files Modified
- `/Users/leo/Projects/dodgeprint-new/docs/wireframes/03-dashboard.html`
- `/Users/leo/Projects/dodgeprint-new/docs/wireframes/04-listings.html`
- `/Users/leo/Projects/dodgeprint-new/docs/wireframes/05-orders.html`
- `/Users/leo/Projects/dodgeprint-new/docs/wireframes/01-onboarding.html`
