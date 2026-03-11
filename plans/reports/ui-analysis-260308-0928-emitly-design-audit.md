# Emitly UI/UX Design Audit Report
**Date:** 2026-03-08 | **Source:** 4 Dribbble screenshots (Emitly marketing dashboard)

---

## Screenshots Analyzed

1. **Dashboard (full)** — KPI cards, performance chart, campaign schedule, sidebar
2. **Dashboard (compact)** — Same view, smaller resolution
3. **Campaign Type Selection** — Card-based selection modal with colored icons
4. **Template Generator** — AI text generation with workflow cards, text area, chips

---

## Key Design Tokens Extracted

### Colors
| Element | Observed Hex | Notes |
|---------|-------------|-------|
| Page bg | ~#F6F4F0 | Warm cream, matches our token |
| Card bg | #FFFFFF | Pure white |
| Sidebar bg | #FFFFFF | White, no visible right border |
| Primary green | ~#4A7C59 | Sage green for active states, buttons |
| Active nav bg | ~#EFF6EE | Light green tint pill |
| Text primary | ~#1A1A1A | Near-black |
| Text secondary | ~#6B6560 | Warm gray |
| Text tertiary | ~#9B9590 | Light warm gray for descriptions |
| Border | ~#E8E4DE | Barely visible card borders |
| Chart bar | ~#6B9E7A/60% | Muted sage for chart bars |
| Chart accent | ~#E8734A | Coral for highlighted bar |
| Event green | ~#4A7C59 | Calendar events |
| Event pink | ~#E8734A/bg | Calendar events |
| Event gold | ~#D4A843/bg | Calendar events |

### Typography
| Element | Observed | Notes |
|---------|----------|-------|
| Page title | ~24px, 800 weight | "Dashboard" — bold, tight tracking |
| Subtitle | ~13px, 400 weight, text-tertiary | "Welcome, Let's dive into..." |
| KPI number | ~26px, 800 weight | "42,642.1", "$24,747.01" |
| KPI label | ~12px, 500 weight, text-secondary | "Delivered", "Opened" — above the number |
| Card title | ~14px, 700 weight | "Performance Over Time", "Campaign Performance" |
| Chart labels | ~11px, text-tertiary | Axis labels |
| Nav items | ~13.5px, 500-600 weight | Sidebar navigation |
| Font family | Plus Jakarta Sans (likely) | Clean geometric sans-serif |

### Shadows
| Element | Observed |
|---------|----------|
| Cards (default) | **No shadow** — white on cream provides contrast |
| Cards (hover) | Very subtle, ~1-2px blur |
| Modals | Light shadow, ~8-12px blur |
| Sidebar | No shadow, no border (or hairline) |
| Buttons | No shadow |

### Border Radius
| Element | Observed |
|---------|----------|
| Cards | ~16px |
| Buttons (standard) | ~12px |
| Buttons (CTA) | Pill (9999px) |
| Active nav item | Pill |
| Status badges | Pill |
| Inputs | ~12px |
| Search bar | Pill |
| Chart bars | ~4-6px top corners |

### Spacing
| Element | Observed |
|---------|----------|
| Sidebar width | ~240-248px |
| Page padding | ~24-28px |
| Card padding | ~20px |
| Grid gap | ~16px |
| Section spacing | ~24px |
| Nav item spacing | ~4-6px vertical |

---

## Design Patterns

### 1. Ultra-Light Visual Weight
- Cards have NO default shadow — white-on-cream contrast alone
- Borders are barely visible (~0.5-1px, very light color)
- No heavy dividers, uses spacing instead
- Result: airy, breathable, premium feel

### 2. Pill-Shaped Actionable Elements
- CTA buttons: pill radius ("Create campaign")
- Active nav: pill background
- Status badges: pill shape
- Tags/chips: pill shape
- Pattern: pill = actionable/interactive, radius-md = structural

### 3. KPI Layout (Label Above Number)
- Small label text ABOVE the large number (not below)
- Trend indicator to the right (green/red badge)
- Separated by thin vertical lines or generous spacing
- No card border — KPIs sit inside a section, not individual cards

### 4. Colored Icon Cards
- 40x40 circle with tinted background + icon center
- Each card type has distinct color: blue, yellow, green, pink
- Used for selection/choice UIs (campaign types, listing types)

### 5. AI Integration Pattern
- "Generate with AI" button: dark green bg + sparkle icon
- Positioned at bottom-right of text area
- Text area with minimal border, generous height
- Workflow tag chips above or below

---

## Changes Applied to Design Guidelines

1. **Shadows reduced** — default cards now shadow-none, hover = shadow-sm only
2. **Cards** — emphasis on white-on-cream contrast, minimal border
3. **Buttons** — added pill variants for CTAs, icon-only sizing, AI action pattern
4. **KPI Cards** — label above number (Emitly pattern), no shadow/border
5. **Sidebar** — pill active state, lighter weight inactive items
6. **New sections** — Inputs/Forms, Selection Cards, Charts, Schedule/Calendar
7. **Visual Weight Principles** — 10 rules for maintaining Emitly's airy feel
8. **Brand Identity** — added visual weight directive

---

## Unresolved
- Exact font weight for Emitly nav items (500 vs 600?)
- Whether Emitly uses Inter or Plus Jakarta Sans (very similar)
- Chart library used (likely Recharts or custom SVG)
