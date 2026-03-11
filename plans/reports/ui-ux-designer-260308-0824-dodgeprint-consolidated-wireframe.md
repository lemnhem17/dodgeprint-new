# Dodgeprint Consolidated Wireframe Report

**Date:** 2026-03-08
**Type:** UI/UX Design - Wireframe Rebuild
**Output:** `/Users/leo/Projects/dodgeprint-new/docs/wireframes/dodgeprint-wireframe-full.html`

## Summary

Rebuilt the Dodgeprint consolidated wireframe as a single 1302-line HTML file using the "Warm Organic" design system from `docs/design-guidelines.md`, matching the Markio wireframe architecture from `marketing-os`.

## Design System Applied

- **Colors:** bg-page `#F6F4F0`, brand-primary `#4A7C59` (sage), brand-secondary `#D4A843` (gold), brand-accent `#E8734A` (coral)
- **Typography:** Plus Jakarta Sans (display/body) + JetBrains Mono (data/code)
- **Icons:** Lucide CDN with correct icon mappings (layout-dashboard, list, search, printer, settings)
- **Sidebar:** 248px, white bg, sage green active state with `#EFF6EE` background tint
- **Border/Radius:** `#E8E4DE` borders, 8/12/16/20px radius tokens
- **Dark mode:** Full CSS variable swap via `[data-theme="dark"]`

## Screens (6 total)

1. **Onboarding** (auth-screen, shown first) - 4-step wizard: Welcome, Connect Shop, Importing progress, Success
2. **Dashboard** - KPI cards (revenue/listings/sync/inventory), sales chart, activity feed, quick actions, top listings table
3. **Listings** - Platform tabs, search/filter bar, spreadsheet table with inline editing, row selection, floating bulk action bar, pagination
4. **Research** - Keyword search with results table, trending products with saturation bars, competitor analysis cards
5. **POD Hub** - Connected providers grid, design upload zone with drag-drop, product template builder with mockup preview, variant config, recent POD products sidebar
6. **Settings** - 5 sub-tabs (Integrations, Billing, Team, Notifications, Account) with settings sidebar navigation

## JavaScript Functions (13)

- `navigate()` - Screen switching with progress bar animation, sidebar/mobile nav active state sync
- `toggleTheme()` - Light/dark mode toggle with icon swap
- `toggleSidebar()` - Collapse/expand sidebar (248px to 60px)
- `showToast()` - Toast notification system (success/error/info/warning)
- `goToObStep()` - Onboarding step navigation with progress bar
- `selectPlatform()` - Platform card selection in onboarding
- `switchTab()` - Platform filter tabs in listings
- `toggleRow()`, `toggleSelectAll()`, `clearSelection()`, `updateFloatingBar()` - Row selection system with floating bulk action bar
- `makeEditable()` - Inline cell editing (click to edit, Enter to save, Escape to cancel)
- `switchSettingsTab()` - Settings sub-tab navigation

## Architecture (matches Markio pattern)

- Auth screens (onboarding) render outside app-shell, hide sidebar/header
- App screens render inside app-shell with shared sidebar + header
- CSS variables for all design tokens, swapped in `[data-theme="dark"]`
- Tailwind CDN with custom config matching exact color tokens
- `lucide.createIcons()` called after each navigation to render new icons

## Key Differences from Old Wireframes

- **Old:** Used purple (#6C5CE7) brand color, separate HTML files per screen
- **New:** Uses sage green (#4A7C59), warm cream (#F6F4F0) backgrounds, single consolidated file
- **Old:** Custom SVG icons inline
- **New:** Lucide icon library via CDN
- **Old:** No page transitions or toast system
- **New:** Progress bar animation on navigate, toast notification system
