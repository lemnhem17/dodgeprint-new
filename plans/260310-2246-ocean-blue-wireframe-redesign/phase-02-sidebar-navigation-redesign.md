# Phase 2: Sidebar Navigation Redesign

**Priority:** P0 | **Status:** completed | **Effort:** High | **Depends on:** Phase 1

## Overview

Transform sidebar from fixed 248px text-based nav to collapsible icon rail (48px) ↔ expanded (220px) with shop switcher at top and reduced section grouping (8→4 groups). Matches Getvela's space-efficient navigation pattern.

## Context Links
- Getvela sidebar pattern: `docs/wireframes/getvela/getvela-uiux-analysis.md` → Section 2.1
- Current sidebar: `docs/wireframes/_shared-tokens.css` lines 126-141, `_shared-navigation.js` lines 164-173
- Brainstorm: `plans/reports/brainstorm-260310-2246-psych-redesign-ocean-blue.md` → "Collapsible sidebar"

## Key Insights
- Getvela: 40px icon bar always visible + expandable sub-nav = minimal footprint
- DodgePrint current: 248px fixed, 8 ALL CAPS section headers, needs scroll
- Every HTML file duplicates the sidebar markup — ALL 9 files need updating
- `_shared-navigation.js` has `toggleSidebar()` that switches between 248px→60px — needs update to 220px→48px
- Shop switcher already exists in JS (`_shared-navigation.js`) but positioned in header, not sidebar top

## Related Code Files

### Modify
- `docs/wireframes/_shared-tokens.css` — Sidebar width tokens, collapsed state, tooltip styles
- `docs/wireframes/_shared-navigation.js` — `toggleSidebar()`, sidebar widths, tooltip init
- ALL 9 HTML files — Sidebar markup restructure

## Implementation Steps

### Step 1: Update CSS Sidebar Tokens
In `_shared-tokens.css`:

```css
.sidebar {
  width: 220px;              /* was 248px */
  transition: width 0.2s ease;
  flex-shrink: 0;
  border-right: 1px solid var(--border);  /* add subtle border */
}
.sidebar.collapsed { width: 48px; }       /* was 60px */
.sidebar.collapsed .nav-text,
.sidebar.collapsed .sidebar-brand-text,
.sidebar.collapsed .sidebar-section-label,
.sidebar.collapsed .collapse-text,
.sidebar.collapsed .shop-switcher-text,
.sidebar.collapsed .nav-badge { display: none; }
.sidebar.collapsed .sidebar-logo-area {
  justify-content: center;
  padding: 12px 0;
}
.sidebar.collapsed .nav-item {
  justify-content: center;
  padding: 8px;
}
/* Tooltip for collapsed state */
.sidebar.collapsed .nav-item[data-tooltip]:hover::after {
  content: attr(data-tooltip);
  position: absolute;
  left: 56px;
  background: var(--bg-card);
  border: 1px solid var(--border);
  padding: 4px 10px;
  border-radius: 6px;
  font-size: 12px;
  font-weight: 500;
  white-space: nowrap;
  box-shadow: var(--shadow-md);
  z-index: 50;
  color: var(--text-primary);
}
.sidebar.collapsed .nav-item { position: relative; }
```

### Step 2: Update JS `toggleSidebar()`
In `_shared-navigation.js`:

```js
function toggleSidebar() {
  var sidebar = document.getElementById('sidebar');
  var main = document.getElementById('mainArea');
  if (!sidebar) return;
  sidebar.classList.toggle('collapsed');
  var isCollapsed = sidebar.classList.contains('collapsed');
  if (main) {
    main.style.marginLeft = isCollapsed ? '48px' : '220px';
  }
  localStorage.setItem('dodgeprint_sidebar', isCollapsed ? 'collapsed' : 'expanded');
}

// Restore sidebar state on load
function loadSidebarState() {
  var saved = localStorage.getItem('dodgeprint_sidebar');
  if (saved === 'collapsed') {
    var sidebar = document.getElementById('sidebar');
    var main = document.getElementById('mainArea');
    if (sidebar) sidebar.classList.add('collapsed');
    if (main) main.style.marginLeft = '48px';
  }
}
```
Add `loadSidebarState()` to DOMContentLoaded handler.

### Step 3: Redesign Sidebar Markup (all 9 HTMLs)

New navigation grouping (4 groups instead of 8):

```
[Logo] Dodgeprint
[Shop Switcher dropdown]
─────────────────────
CORE
  Dashboard
  Listings
  Orders
─────────────────────
TOOLS
  Research
  POD Hub
  AI Generator
─────────────────────
INSIGHTS
  Analytics
─────────────────────
  Settings (bottom-pinned)
  [Collapse toggle]
  [Theme toggle]
  [User avatar + name]
```

Sidebar HTML pattern (apply to all 9 files):

```html
<aside class="sidebar fixed left-0 top-0 h-full z-30 flex flex-col"
       style="background:var(--bg-sidebar);border-right:1px solid var(--border)" id="sidebar">

  <!-- Logo -->
  <div class="sidebar-logo-area flex items-center gap-2.5 px-3 py-3">
    <div class="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
         style="background:var(--brand-primary)">
      <i data-lucide="zap" class="w-4.5 h-4.5 text-white"></i>
    </div>
    <span class="sidebar-brand-text font-bold text-base tracking-tight">Dodgeprint</span>
  </div>

  <!-- Shop Switcher -->
  <div class="px-3 pb-2">
    <button id="shopSwitcherBtn" onclick="toggleShopDropdown()"
            class="shop-switcher w-full flex items-center gap-2 px-2.5 py-2 rounded-lg text-xs font-medium cursor-pointer"
            style="background:var(--bg-muted);color:var(--text-secondary)">
      <i data-lucide="store" class="w-3.5 h-3.5 flex-shrink-0"></i>
      <span class="shop-switcher-text truncate" id="shopSwitcherLabel">All Shops</span>
      <i data-lucide="chevron-down" class="w-3 h-3 ml-auto flex-shrink-0"></i>
    </button>
    <div id="shopDropdown" class="hidden absolute left-3 right-3 mt-1 rounded-lg p-1 z-50"
         style="background:var(--bg-card);border:1px solid var(--border);box-shadow:var(--shadow-lg)"></div>
  </div>

  <!-- Nav Groups -->
  <nav class="flex-1 py-2 px-2 space-y-4 overflow-y-auto">
    <!-- CORE -->
    <div>
      <div class="sidebar-section-label text-[10px] font-semibold uppercase tracking-wider px-2 pb-1"
           style="color:var(--text-tertiary)">Core</div>
      <div class="space-y-0.5">
        <a data-nav="dashboard" data-tooltip="Dashboard" onclick="navigate('dashboard')"
           class="nav-item flex items-center gap-2.5 px-2.5 py-2 rounded-lg text-[13px] font-medium cursor-pointer"
           style="color:var(--text-secondary)">
          <i data-lucide="layout-dashboard" class="w-[18px] h-[18px] flex-shrink-0"></i>
          <span class="nav-text">Dashboard</span>
        </a>
        <!-- Listings, Orders similarly -->
      </div>
    </div>

    <!-- TOOLS -->
    <div>
      <div class="sidebar-section-label text-[10px] font-semibold uppercase tracking-wider px-2 pb-1"
           style="color:var(--text-tertiary)">Tools</div>
      <!-- Research, POD Hub, AI Generator -->
    </div>

    <!-- INSIGHTS -->
    <div>
      <div class="sidebar-section-label text-[10px] font-semibold uppercase tracking-wider px-2 pb-1"
           style="color:var(--text-tertiary)">Insights</div>
      <!-- Analytics -->
    </div>
  </nav>

  <!-- Bottom pinned -->
  <div class="px-2 py-3 space-y-1" style="border-top:1px solid var(--border)">
    <a data-nav="settings" data-tooltip="Settings" onclick="navigate('settings')"
       class="nav-item flex items-center gap-2.5 px-2.5 py-2 rounded-lg text-[13px] font-medium cursor-pointer"
       style="color:var(--text-secondary)">
      <i data-lucide="settings" class="w-[18px] h-[18px] flex-shrink-0"></i>
      <span class="nav-text">Settings</span>
    </a>
    <div class="flex items-center gap-2 px-2.5 py-1.5">
      <button onclick="toggleSidebar()" class="p-1 rounded-md" style="color:var(--text-tertiary)">
        <i data-lucide="panel-left-close" class="w-4 h-4"></i>
      </button>
      <button onclick="toggleTheme()" class="p-1 rounded-md collapse-text" style="color:var(--text-tertiary)">
        <i data-lucide="moon" id="themeIcon" class="w-4 h-4"></i>
      </button>
    </div>
  </div>
</aside>
```

### Step 4: Update Main Area Margin
In each HTML, update the main area container:
- `style="margin-left:248px"` → `style="margin-left:220px"`
- Ensure `id="mainArea"` is set for JS toggle

### Step 5: Update `border-radius` for Nav Items
Change from `rounded-full` (pill) to `rounded-lg` (8px) for nav items — more compact in collapsed mode.

## Todo List

- [x] Update `_shared-tokens.css` sidebar widths + tooltip styles
- [x] Update `_shared-navigation.js` toggle widths + persist state
- [x] Create sidebar HTML template with 4 groups
- [x] Apply new sidebar to `01-onboarding.html`
- [x] Apply new sidebar to `02-auth.html`
- [x] Apply new sidebar to `03-dashboard.html`
- [x] Apply new sidebar to `04-listings.html`
- [x] Apply new sidebar to `05-orders.html`
- [x] Apply new sidebar to `06-research.html`
- [x] Apply new sidebar to `07-pod-hub.html`
- [x] Apply new sidebar to `08-analytics.html`
- [x] Apply new sidebar to `09-settings.html`
- [x] Update all main area margins
- [x] Test collapse/expand in browser
- [x] Test tooltip visibility in collapsed state

## Success Criteria
- Sidebar collapses to 48px with icon-only view
- Tooltips show on hover when collapsed
- Shop switcher at top of sidebar
- 4 section groups: Core, Tools, Insights, Settings (pinned bottom)
- State persists across page refresh (localStorage)

## Risk Assessment
- **Medium risk:** 9 files have duplicated sidebar markup — tedious but mechanical
- **Watch for:** Sidebar HTML variations between files (some may have extra items)
- **Mitigation:** Diff each file's sidebar against template before replacing
