# Dodgeprint Design Guidelines

> All-in-one e-commerce seller platform. "Warm Organic" design — clean, professional, warm-toned SaaS dashboard.
> References: Markio (marketing-os), Emitly (Dribbble)

## Brand Identity

- **Personality:** Professional yet approachable, data-rich yet uncluttered, powerful yet simple
- **Tone:** Confident, helpful, clear
- **Direction:** "Warm Organic" — warm cream backgrounds, sage/gold/coral accents, light sidebar
- **Visual Weight:** Ultra-light. Prioritize whitespace over decoration. Cards differentiate via white-on-cream contrast, not heavy shadows or borders. Airy, breathable layouts.

---

## Color Palette

### Light Mode

| Token | Hex | Usage |
|-------|-----|-------|
| bg-page | #F6F4F0 | Page background (warm cream) |
| bg-card | #FFFFFF | Card surfaces |
| bg-sidebar | #FFFFFF | Sidebar (light, not dark) |
| bg-muted | #F0EDE8 | Muted backgrounds, inputs |
| brand-primary | #4A7C59 | Sage green — primary actions, active states |
| brand-primary-light | #6B9E7A | Hover states, secondary green |
| brand-primary-bg | #EFF6EE | Green tinted backgrounds |
| brand-secondary | #D4A843 | Warm gold — secondary accent, highlights |
| brand-secondary-bg | #FDF6E3 | Gold tinted backgrounds |
| brand-accent | #E8734A | Warm coral — CTAs, urgent actions |
| brand-accent-bg | #FDF0EB | Coral tinted backgrounds |
| info | #5B8DB8 | Info blue |
| info-bg | #EBF3FA | Info backgrounds |
| success | #4A7C59 | Synced, active (same as primary) |
| warning | #D4A843 | Pending, caution (same as secondary) |
| danger | #D4564A | Error, sync failure |
| danger-bg | #FDECEB | Error backgrounds |
| purple | #7C5CAF | Level/rank, special badges |
| purple-bg | #F3EAFA | Purple tinted backgrounds |
| text-primary | #1A1A1A | Main text |
| text-secondary | #6B6560 | Secondary text |
| text-tertiary | #9B9590 | Muted text, placeholders |
| border | #E8E4DE | Card/component borders |
| border-light | #F0EDE8 | Subtle borders, dividers |

### Dark Mode

| Token | Hex | Usage |
|-------|-----|-------|
| bg-page | #1A1D21 | Page background |
| bg-card | #24282E | Card surfaces |
| bg-muted | #2C3038 | Muted backgrounds |
| brand-primary | #6B9E7A | Sage green (lighter for dark) |
| brand-primary-bg | #1E2F24 | Green tinted bg |
| brand-secondary | #D4A843 | Gold (unchanged) |
| brand-secondary-bg | #2A2518 | Gold tinted bg |
| brand-accent | #E8734A | Coral (unchanged) |
| brand-accent-bg | #2A1E18 | Coral tinted bg |
| text-primary | #E8E4DE | Main text |
| text-secondary | #9B9590 | Secondary text |
| text-tertiary | #6B6560 | Muted text |
| border | #363B42 | Borders |
| border-light | #2C3038 | Subtle borders |

---

## Typography

| Element | Font | Weight | Size | Spacing |
|---------|------|--------|------|---------|
| Page title | Plus Jakarta Sans | 800 | 24px | -0.4px |
| Card title | Plus Jakarta Sans | 700 | 14px | -0.2px |
| Body | Plus Jakarta Sans | 400-500 | 13.5px | normal |
| Label | Plus Jakarta Sans | 600-700 | 12px | normal |
| Caption | Plus Jakarta Sans | 500 | 11px | normal |
| Data/Code | JetBrains Mono | 400-500 | 13px | normal |

**Google Fonts:** `Plus+Jakarta+Sans:wght@300;400;500;600;700;800` + `JetBrains+Mono:wght@400;500`

---

## Icons

- **Library:** Lucide Icons
- **Style:** Sharp outline, 2px stroke weight
- **Default size:** 18px (w-[18px] h-[18px])
- **Small size:** 15px (buttons), 14px (chips/badges)

### Icon Mapping (Dodgeprint)

| Element | Icon |
|---------|------|
| Dashboard | layout-dashboard |
| Listings | list |
| Research | search |
| POD Hub | printer |
| Settings | settings |
| Notifications | bell |
| Sync | refresh-cw |
| Add Listing | plus |
| Bulk Edit | edit-3 |
| Export | download |
| Filter | filter |
| Sort | arrow-up-down |
| Etsy | store |
| Shopify | shopping-bag |
| Amazon | package |
| Success/Synced | check-circle |
| Warning/Pending | alert-triangle |
| Error | x-circle |
| Trend Up | trending-up |
| Trend Down | trending-down |

---

## Spacing & Radius

| Token | Value |
|-------|-------|
| radius-sm | 8px |
| radius-md | 12px |
| radius-lg | 16px |
| radius-xl | 20px |
| radius-full | 9999px (pill) |
| card-padding | 18-20px |
| page-padding | 24-28px |
| grid-gap | 14-16px |
| spacing-base | 4px |

---

## Shadows

> **Philosophy:** Ultra-subtle. Cards rely on white-on-cream contrast for separation, not shadow. Shadows are whisper-light — barely perceptible. Only hover/focus states introduce visible elevation.

| Level | Value | Usage |
|-------|-------|-------|
| none | `none` | Default card state (white on cream = enough contrast) |
| xs | `0 1px 2px rgba(26,26,26,0.03)` | Subtle depth hint for floating elements |
| sm | `0 1px 3px rgba(26,26,26,0.04), 0 1px 2px rgba(26,26,26,0.02)` | Card hover state |
| md | `0 4px 8px -2px rgba(26,26,26,0.05), 0 2px 4px -2px rgba(26,26,26,0.03)` | Dropdowns, popovers |
| lg | `0 12px 24px -4px rgba(26,26,26,0.06)` | Modals, dialogs |

---

## Component Patterns

### Cards
- White bg on cream page — contrast alone provides visual separation
- Border: 1px solid #E8E4DE (barely visible, just enough definition)
- Radius: 16px, padding: 20px
- Default: no shadow (shadow-none). White-on-cream = sufficient contrast
- Hover (interactive cards only): shadow-sm + translateY(-1px), 150ms ease
- Non-interactive cards (KPI, stats): no hover effect, no shadow

### Sidebar (Emitly pattern)
- 248px fixed left, white bg, scrollable, no visible border (or 1px border-light)
- Active item: sage green pill bg (#EFF6EE) + sage text (#4A7C59), radius-full
- Inactive items: text-secondary, hover → bg-muted + text-primary
- Section labels: 10px uppercase, text-tertiary, 600 weight
- Nav items: 13.5px, 500 weight (active: 600), Lucide icon + text
- User avatar + workspace name at top
- Bottom area: user profile with avatar

### KPI Cards (Emitly pattern)
- Large bold number (26px, 800 weight, text-primary)
- Small label above the number (12px, 500 weight, text-secondary) — label ABOVE, not below
- Sparkline or mini trend indicator on right (optional)
- Percentage badge: pill shape, green bg + text for up, danger bg + text for down
- Separator: thin vertical line (#E8E4DE) or generous horizontal spacing between KPIs
- No shadow, no border — relies on spacing and typography hierarchy

### Tables (Listings Grid)
- Header: bg-muted (#F0EDE8), sticky
- Row hover: bg border-light (#F0EDE8)
- Inline editing: click cell → input appears
- Status badges: pill shape, colored bg + text

### Status Badges
| State | Colors |
|-------|--------|
| Synced/Active | sage bg + sage text |
| Pending/Queued | gold bg + gold text |
| Error/Failed | danger bg + danger text |
| Draft | muted bg + text-secondary |

### Buttons
| Type | Style | Radius |
|------|-------|--------|
| Primary | bg-sage (#4A7C59), white text, hover bg-sage-dark | radius-md (12px) |
| Primary Pill | bg-sage, white text — used for main CTAs (e.g. "Create campaign") | radius-full (pill) |
| Ghost | border #E8E4DE, text-primary, hover bg-muted | radius-md |
| Accent/CTA | bg-coral (#E8734A), white text | radius-md or pill |
| Danger | bg-danger, white text | radius-md |
| Icon-only | 36x36px, ghost style, radius-md | radius-md |

**Button sizing:** height 36px (sm), 40px (md), 44px (lg). Padding: 12px 16px (sm), 12px 20px (md), 14px 24px (lg).
**AI actions:** Use dark sage bg + sparkle icon (e.g. "Generate with AI")

### Inputs & Forms (Emitly pattern)
- Height: 40px, radius-md (12px), border #E8E4DE
- Focus: border-sage (#4A7C59), no shadow ring (clean focus)
- Placeholder: text-tertiary (#9B9590)
- Search input: left icon (search), radius-full (pill), bg-muted
- Tags/chips: pill-shaped, bg-muted, text-secondary, 12px, removable with X

### Selection Cards (Emitly pattern)
- Used for type selection (e.g. campaign type, listing type)
- White bg, 1px border, 16px radius, 20px padding
- Colored icon (40x40, tinted bg circle + icon) at top
- Title: 14px 700 weight, description: 13px 400 text-secondary
- Hover: border-sage, shadow-sm
- Selected: border-sage (2px), sage bg tint

### Charts (Emitly pattern)
- Bar charts: muted sage bars (#6B9E7A at 60% opacity), one coral accent bar for highlight
- Clean axis labels: 11px text-tertiary
- No gridlines or very subtle dashed gridlines (#F0EDE8)
- Chart title: 14px 700 weight, with date subtitle in text-tertiary

### Schedule/Calendar (Emitly pattern)
- Compact month grid with colored event blocks
- Event colors: sage (active), gold (pending), coral (urgent), purple (special)
- Small text inside blocks: 11px white text

---

## Layout Structure

| Element | Spec |
|---------|------|
| Sidebar | 248px fixed left, collapsible to icon-only (~60px) |
| Header | 60px sticky top, search + actions |
| Content | Fluid, 28px padding |
| KPI row | 4-column grid |
| Mobile | Bottom nav bar, sidebar as slide-out overlay |

### Breakpoints
| Name | Width |
|------|-------|
| Mobile | < 768px |
| Tablet | 768-1024px |
| Desktop | > 1024px |
| Wide | > 1440px |

---

## Animations

| Type | Duration | Easing |
|------|----------|--------|
| Micro-interactions | 150ms | ease |
| Page transitions | 250ms | ease-out |
| Sidebar collapse | 200ms | ease |
| Toast slide-in | 350ms | ease |
| Hover states | 150ms | ease |

**Rules:**
- Respect `prefers-reduced-motion`
- Use `transform` and `opacity` only (GPU accelerated)
- Never animate `width`, `height`, or `top`/`left`

---

## Accessibility

- Color contrast: 4.5:1 minimum for text
- Touch targets: 44x44px minimum
- Focus rings: visible on all interactive elements (2px sage outline, 2px offset)
- Alt text on all meaningful images
- Keyboard navigation: tab order matches visual order
- Form inputs: always have associated labels
- `prefers-reduced-motion`: disable all transforms, use opacity-only transitions

---

## Visual Weight Principles (from Emitly analysis)

> The #1 takeaway from Emitly: **less is more**. Reduce visual noise to let content breathe.

1. **No unnecessary borders** — white cards on cream bg provide natural separation
2. **No default shadows** — only on hover/focus/elevated elements (dropdowns, modals)
3. **Generous whitespace** — 20-28px between sections, 16px between cards in grids
4. **Flat hierarchy** — avoid nested cards or card-in-card patterns
5. **Color as accent, not fill** — use color sparingly (active states, badges, CTAs)
6. **Typography does the heavy lifting** — size + weight differences create hierarchy, not colors/borders
7. **One accent color per view** — don't mix coral + gold + sage in same component
8. **Pill shapes for actionable items** — status badges, CTA buttons, active nav items
9. **Muted chart colors** — sage at 60% opacity for bars, coral for single highlight
10. **Clean separators** — prefer spacing over divider lines; when needed, use border-light (#F0EDE8)

---

## PSYCH Design Language (Behavioral UX)

> **Core feeling:** "I am in control. My data is safe. My business is growing."
> Based on Darius Contractor's PSYCH Framework — every UI element adds (+Psych) or drains (-Psych) motivation.

### Emotional States & UI Responses

| User State | Trigger | UI Response |
|-----------|---------|-------------|
| Confident | Data loaded, synced | Calm layout, muted colors, no urgency |
| Focused | Editing listings, bulk ops | Minimal chrome, max content, no distractions |
| Anxious | After bulk edit, sync in progress | "Saved ✓" pill, "Undo" toast, progress bar |
| Frustrated | Error, slow load, sync failure | Specific explanation + 1-click fix action |
| Delighted | Milestone hit, growth discovered | Subtle gold shimmer on element (no popup) |
| Exploring | Research, niche finding | Visual rewards, gold badges on opportunities |
| Impatient | Waiting for AI, bulk op | Progress + time estimate + cancel option |

### Trust Signals (Always Visible)

| Signal | Location | Pattern |
|--------|----------|---------|
| Sync status | Header | Green "Synced" / Yellow pulse "Syncing" / Red "Error [Fix]" |
| Autosave | Listings toolbar | "All changes saved ✓" persistent pill |
| Undo | After destructive action | Toast with 10s countdown + undo button |
| Data count | Tables | "247 listings · showing 1-50" |
| Last updated | KPI cards | "Updated 2 min ago" muted text |

### Confidence Bar (Listings/Orders toolbar)
```
[All synced ✓] [247 listings] [12 selected] [Saved just now] [Undo available]
```

### Recovery Toast (after bulk/destructive actions)
```
┌──────────────────────────────────┐
│ ✓ Price updated for 12 listings  │
│                         [Undo]   │
│ ▓▓▓▓▓▓▓▓▓▓▓▓░░░░░ 8s remaining  │
└──────────────────────────────────┘
```

### Feedback Hierarchy

| Level | Pattern | Duration | When |
|-------|---------|----------|------|
| Persistent | Status in header/toolbar | Always | Sync, save state |
| Toast | Slide-in, bottom-right | 4s auto | Action confirmation |
| Inline | Near the action | Until resolved | Field errors |
| Modal | Blocking dialog | Until user acts | Destructive confirmation |
| Celebration | Subtle animation | 1.5s | Milestones (rare) |

### Loading States

| Context | Pattern |
|---------|---------|
| Page load | Skeleton screens matching content layout |
| Table data | 5 skeleton rows, same column widths |
| AI operations | Progress bar + "~15s remaining" |
| Sync | Header pulse, non-blocking |
| Bulk operations | "23/47 updated [Cancel]" |
| Image upload | Optimistic thumbnail + progress ring |

### Empty States

| Screen | Message | CTA |
|--------|---------|-----|
| Dashboard | "Connect your first shop to see metrics" | Connect Shop |
| Listings | "No listings yet. Import or create your first." | Import / Create |
| Orders | "Orders appear once shops are synced." | Check Sync |
| Research | "Enter a keyword to discover opportunities" | Search focused |
| POD Library | "Upload your first design" | Upload Design |
| Analytics | "Need 7 days of data for trends" | View Dashboard |

### Error Language

| Severity | Color | Pattern | Example |
|----------|-------|---------|---------|
| Info | Blue | Auto-dismiss inline | "2 listings skipped (already updated)" |
| Warning | Gold | Toast, needs ack | "Etsy rate limit. Sync resumes in 5 min." |
| Error | Red | Inline + action | "Sync failed. [Retry] [View Log]" |
| Critical | Red | Top banner | "Etsy token expired. [Reconnect]" |

**Rules:** Never "Oops!" — be specific. Always include recovery action. Never blame user.

### Voice & Copy

| Do | Don't |
|----|----- |
| "Updated price for 12 listings on Etsy" | "Changes saved" |
| "Sync failed. [Retry now]" | "Sync error occurred" |
| "47 selected" | "You have selected 47 items" |
| Gold shimmer on KPI for new record | "CONGRATULATIONS! 🎉🎉🎉" |

### Color Emotional Mapping

| Emotion | Color | Token |
|---------|-------|-------|
| Success / Synced / Growth | Sage | brand-primary |
| Reward / Achievement | Gold | brand-secondary |
| Urgency / CTA | Coral | brand-accent |
| Error / Danger | Red | danger |
| Info / Neutral | Blue | info |
| Calm / Default | Cream | bg-page |
