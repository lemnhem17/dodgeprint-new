# Dodgeprint UI/UX Design System & Wireframes Report

**Date:** 2026-03-08
**Agent:** ui-ux-designer
**Status:** Complete

---

## Summary

Delivered comprehensive design system + 6 interactive HTML wireframes for Dodgeprint, an all-in-one e-commerce seller platform targeting Etsy/Shopify/Amazon sellers. Designed to beat competitor getvela.com with modern, colorful, performant UI.

## Deliverables

### 1. Design Guidelines
- **File:** `/Users/leo/Projects/dodgeprint-new/docs/design-guidelines.md`
- Color system: primary purple (#6C5CE7), teal accent (#00CEC9), semantic colors, platform brand colors, quality score colors
- Typography: Plus Jakarta Sans (heading+body) + JetBrains Mono (data/prices) -- modern alternative to Inter, supports Vietnamese
- 4px spacing system, border radius scale, 6-level shadow/elevation system
- Dark mode strategy (deep navy, not pure black)
- Component patterns: buttons, inputs, cards, tables (TanStack-ready), badges, modals, toasts, navigation
- Lucide icon system mapping
- Responsive breakpoints with mobile-first adaptations
- Animation/motion specs with reduced-motion support
- WCAG 2.1 AA accessibility standards

### 2. Wireframes (all interactive HTML with TailwindCSS CDN)

| Screen | File | Key Features |
|---|---|---|
| Dashboard | `docs/wireframes/dashboard.html` | KPI cards (revenue/listings/sync/inventory), sales chart, activity feed, quick actions, top listings table |
| Listings Manager | `docs/wireframes/listings.html` | Spreadsheet grid, platform tabs, inline cell editing, multi-select + floating action bar, quality grades, status badges, pagination |
| Product Research | `docs/wireframes/research.html` | Keyword table with search volume/competition/trend, trending niches with saturation bars, competitor cards, "Create from Research" CTA |
| POD Hub | `docs/wireframes/pod-hub.html` | Provider cards (Printify/Printful), drag-drop design upload, product template builder with size/color variants, push-to-marketplace modal |
| Settings | `docs/wireframes/settings.html` | 5-tab layout (Integrations/Billing/Team/Notifications/Account), connected shops management, usage meters, notification toggles, danger zone |
| Onboarding | `docs/wireframes/onboarding.html` | 4-step wizard (Welcome/Connect Shop/Import Progress/Success), platform selector, progress animation, guided next steps |

### All wireframes include:
- Consistent sidebar navigation (240px, collapsible to 64px)
- Top bar with search, notifications, avatar
- Platform context selector
- Dark mode toggle (functional)
- Mobile bottom tab bar (responsive at 768px)
- Realistic placeholder data (listing names, prices, SKUs)
- Hover/active states on interactive elements
- Cross-linking between all pages

## Design Decisions

1. **Plus Jakarta Sans over Inter/Poppins** -- geometric sans with better personality for SaaS, modern, supports Vietnamese, excellent at small sizes for data-heavy tables
2. **Purple primary (#6C5CE7)** -- differentiates from competitor blue, conveys creativity (matches seller audience), accessible contrast ratios
3. **Teal accent (#00CEC9)** -- complementary to purple, used for secondary CTAs and success-adjacent states
4. **JetBrains Mono for data** -- monospace for prices/SKUs/metrics ensures column alignment in spreadsheet view
5. **Deep navy dark mode (#1A1A2E)** -- less harsh than pure black, reduces eye strain during long editing sessions
6. **Floating action bar pattern** -- appears on multi-select, enables bulk operations without leaving context (key competitive advantage over Vela)
7. **Quality score grades (A+ to F)** -- color-coded letter grades instantly communicable, gamifies listing optimization

## Key UX Patterns Implemented

- **Progressive disclosure**: filters hidden behind "More Filters", tags show "+N" overflow
- **Inline editing**: click any price/stock cell to edit in-place (spreadsheet feel)
- **Contextual actions**: floating bar only appears when rows selected
- **Platform-aware**: color-coded platform badges (Etsy orange, Shopify green, Amazon gold)
- **Status communication**: dot + text + background color (never color alone for accessibility)
- **Mobile-first responsive**: sidebar collapses, tables become scrollable, bottom nav appears

## Unresolved Questions

1. Should the listing quality score algorithm be visible/explainable to users? (tooltip? detail panel?)
2. Is eBay a Day 1 platform or future roadmap?
3. Real-time sync vs polling interval -- affects status badge UX (spinner vs timestamp)
4. POD Hub: should users be able to create designs in-app or upload-only?
5. Pricing page / plan comparison UI not included -- needed for onboarding upgrade path?
