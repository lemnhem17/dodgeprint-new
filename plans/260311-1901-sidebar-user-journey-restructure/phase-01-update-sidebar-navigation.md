# Phase 01: Update Sidebar Navigation

**Priority:** Critical
**Effort:** Medium
**File:** `docs/wireframes/_shared-navigation.js`

## Context

- [Brainstorm Report](../reports/brainstorm-260311-1854-user-journey-sidebar-navigation.md)
- Current sidebar defined in `SIDEBAR_NAV_SECTIONS` array (line ~745)
- `initSidebar()` renders sections as flat labeled groups (line ~781)

## Requirements

1. Add Home + Dashboard as top-level items (no group label)
2. Replace 4 groups (Core/Create/Fulfill/Insights) with 4 new groups (Shops & Orders / Production / Analytics & Tools / Settings)
3. Make groups collapsible (click label to toggle) with localStorage persistence
4. Remove listing-editor and bulk-editor from sidebar nav entirely
5. Update command palette entries to match new structure

## Related Code Files

- **Modify:** `docs/wireframes/_shared-navigation.js` — lines 745-808 (`SIDEBAR_NAV_SECTIONS` + `initSidebar()`)

## Implementation Steps

### Step 1: Update `SIDEBAR_NAV_SECTIONS` (line 745-778)

Replace current array with:

```js
var SIDEBAR_NAV_SECTIONS = [
  {
    label: null, // top-level, no group header
    items: [
      { id: 'homepage', icon: 'home', label: 'Home' },
      { id: 'dashboard', icon: 'layout-dashboard', label: 'Dashboard' }
    ]
  },
  {
    label: 'Shops & Orders',
    collapsible: true,
    items: [
      { id: 'shops', icon: 'store', label: 'Shops', badge: '2', badgeType: 'danger' },
      { id: 'listings', icon: 'list', label: 'Listings' },
      { id: 'orders', icon: 'shopping-cart', label: 'Orders' }
    ]
  },
  {
    label: 'Production',
    collapsible: true,
    items: [
      { id: 'ai-generator', icon: 'sparkles', label: 'AI Generator' },
      { id: 'pod-hub', icon: 'printer', label: 'POD Hub' },
      { id: 'collections', icon: 'folder', label: 'Collections' },
      { id: 'templates', icon: 'file-text', label: 'Templates' },
      { id: 'suppliers', icon: 'truck', label: 'Suppliers' }
    ]
  },
  {
    label: 'Analytics & Tools',
    collapsible: true,
    items: [
      { id: 'analytics', icon: 'bar-chart-3', label: 'Analytics' },
      { id: 'research', icon: 'search', label: 'Research' },
      { id: 'deployments', icon: 'rocket', label: 'Deployments' },
      { id: 'tools', icon: 'wrench', label: 'Tools' }
    ]
  },
  {
    label: 'Settings',
    collapsible: true,
    items: [
      { id: 'billing', icon: 'credit-card', label: 'Billing' },
      { id: 'settings', icon: 'settings', label: 'Settings' },
      { id: 'notifications', icon: 'bell', label: 'Notifications' }
    ]
  }
];
```

### Step 2: Update `initSidebar()` for collapsible groups

Modify `initSidebar()` (line 781-808) to:
- Skip section label when `section.label === null`
- Add click handler + chevron icon on collapsible labels
- Read/write collapsed state to `localStorage` key `dodgeprint_nav_<label>`
- Add CSS for collapsed state (hide items via `max-height: 0; overflow: hidden`)

### Step 3: Update command palette entries (line ~639-653)

Remove `listing-editor` and `bulk-editor` from command palette quick nav. Add `homepage`, `billing`, `notifications` entries.

### Step 4: Update `navigate()` function

Ensure `navigate('homepage')` maps to `12-homepage.html`, `navigate('billing')` → `20-billing.html`, `navigate('notifications')` → `21-notifications.html`.

## Todo

- [x] Replace `SIDEBAR_NAV_SECTIONS` array
- [x] Add collapsible group logic to `initSidebar()`
- [x] Add CSS for collapsible animation
- [x] Update command palette entries
- [x] Update navigate() URL mappings
- [x] Test: all sidebar links navigate correctly
- [x] Test: collapse/expand persists on reload
