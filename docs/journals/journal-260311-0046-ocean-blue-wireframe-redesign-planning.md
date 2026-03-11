# Ocean Blue Wireframe Redesign Planning Session Complete

**Date**: 2026-03-11 00:46
**Severity**: Medium
**Component**: Design System / Wireframe Architecture
**Status**: Planning Complete → Ready for Implementation

## What Happened

Completed comprehensive planning session for Ocean Blue Wireframe Redesign. Transformed 9 existing DodgePrint wireframes from Warm Organic palette (Sage/Gold/Coral) to Ocean Blue (#3B82F6/#F97316/#06B6D4) with significant UX improvements aligned to Getvela competitive parity.

## The Brutal Truth

This isn't just a color swap. We're doing a soft redesign hidden inside a rebrand — merging Home + Dashboard, adding dual-scoring, implementing collapsible sidebar patterns, and keeping PSYCH framework patterns. It's ambitious for a "palette update" but absolutely necessary. If we just changed colors and left the UX intact, we'd be shipping outdated interaction patterns while our competition moves ahead.

The decision to prioritize Getvela parity first is pragmatic. We can't differentiate on features we don't have yet.

## Technical Details

**Palette Migration:**
- Primary: #3B82F6 (Ocean Blue) replacing Sage
- Secondary: #F97316 (Vibrant Orange) replacing Gold
- Accent: #06B6D4 (Cyan) replacing Coral
- Token-driven via CSS variables + Tailwind config overrides

**7-Phase Plan Structure:**
1. Design System (P0, Medium) — Token swap, all CSS variables updated
2. Sidebar Navigation (P0, High) — 48px icon rail ↔ 220px expanded, 4 groups, shop switcher
3. Smart Dashboard (P0, Medium) — Home + Dashboard merge, KPIs, quick actions, top products
4. Listings/Products (P0, High) — Quality Score (A-F), filter panel, toolbar, hover states
5. Editor/AI/Remaining (P1, High) — Horizontal tabs, inline AI, 4 screen updates
6. Analytics/Scoring (P1, Medium) — Business Performance Score gauge, charts
7. Dark Mode Polish (P1, Low) — Final accessibility, micro-animations

**Key Architectural Decisions:**
- Update existing wireframes, not rebuild
- Dual scoring: Listing Quality (SEO) + Business Performance (sales metrics)
- Collapsible sidebar pattern matches Getvela competitor standard
- PSYCH framework elements preserved: Confidence Bar, Recovery Toast, Sync Pulse, Smart Empty States

## Lessons Learned

1. **Constraint-driven design works**: Competition benchmark (Getvela) forced concrete UX decisions. Vague "improve UX" never works; "match X feature from competitor Y" produces decisions.

2. **Color swap + UX improvements together feel less risky**: If we ship just the palette change, users notice outdated patterns. But if we simultaneously add meaningful UX improvements (Smart Dashboard, dual scoring), the redesign feels intentional, not just cosmetic.

3. **7 phases is manageable but tight**: Each phase has clear ownership and dependencies. P0 phases (1-4) are blocking; P1 phases (5-7) are parallel-friendly.

4. **Token-first approach necessary for consistency**: CSS variables + Tailwind overrides prevent color mutation bugs. One source of truth beats 100 hardcoded hex values.

## Next Steps

1. **Immediate**: Spawn implementation subagents for P0 Phase 1 (Design System token swap)
2. **Dependencies**: Design tokens must be in place before phases 2-4 begin
3. **Parallel path**: Research accessibility standards for new palette contrast ratios (P1 but blocking dark mode work)
4. **Validation**: QA must verify palette consistency across all 9 wireframes before handoff to dev

**Unresolved Questions:**
- Dark mode palette swaps: Are inverted values acceptable or do we need custom dark mode tokens?
- WCAG 2.1 AA compliance: Do new Ocean Blue colors meet contrast requirements for all text sizes?
- Animation timing: Should PSYCH framework animations be updated (faster/slower) to match new "modern" aesthetic?
