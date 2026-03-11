# Phase 1: Design System Token Swap

**Priority:** P0 | **Status:** completed | **Effort:** Medium

## Overview

Replace all Warm Organic color tokens (Sage/Gold/Coral) with Ocean Blue palette (Blue/Orange/Cyan) across `_shared-tokens.css` and all 9 HTML Tailwind configs. This is the foundation — all other phases depend on this.

## Context Links
- New palette spec: `plans/reports/brainstorm-260310-2246-psych-redesign-ocean-blue.md` → Section "Color Palette: Ocean Blue"
- Current tokens: `docs/wireframes/_shared-tokens.css`

## Key Insights
- Each HTML file has its own inline `tailwind.config` with hardcoded color names (cream, sage, gold, coral)
- CSS tokens in `_shared-tokens.css` use `--brand-primary`, `--brand-secondary`, `--brand-accent` variables
- Both light AND dark mode variables need updating
- Hardcoded hex values in CSS (e.g., `#3D6B4A` for `.btn-ai`, `rgba(74,124,89,0.15)` for hover shadows) must be found and replaced
- Tailwind config color names should change: `sage` → `blue`, `gold` → `orange`, `coral` → `cyan`

## Related Code Files

### Modify
- `docs/wireframes/_shared-tokens.css` — All CSS custom properties
- `docs/wireframes/01-onboarding.html` — Tailwind config block
- `docs/wireframes/02-auth.html` — Tailwind config block
- `docs/wireframes/03-dashboard.html` — Tailwind config block
- `docs/wireframes/04-listings.html` — Tailwind config block
- `docs/wireframes/05-orders.html` — Tailwind config block
- `docs/wireframes/06-research.html` — Tailwind config block
- `docs/wireframes/07-pod-hub.html` — Tailwind config block
- `docs/wireframes/08-analytics.html` — Tailwind config block
- `docs/wireframes/09-settings.html` — Tailwind config block

## Implementation Steps

### Step 1: Update `_shared-tokens.css` — Light Mode Variables
Replace `:root` block with Ocean Blue values:

```css
:root {
  --bg-page: #F9FAFB;
  --bg-card: #FFFFFF;
  --bg-sidebar: #FFFFFF;
  --bg-muted: #F3F4F6;
  --brand-primary: #3B82F6;
  --brand-primary-light: #60A5FA;
  --brand-primary-bg: #EFF6FF;
  --brand-primary-dark: #2563EB;
  --brand-secondary: #F97316;
  --brand-secondary-bg: #FFF7ED;
  --brand-accent: #06B6D4;
  --brand-accent-bg: #ECFEFF;
  --text-primary: #111827;
  --text-secondary: #6B7280;
  --text-tertiary: #9CA3AF;
  --border: #E5E7EB;
  --border-light: #F3F4F6;
  --danger: #EF4444;
  --danger-bg: #FEF2F2;
  --info: #3B82F6;
  --info-bg: #EFF6FF;
  --success: #22C55E;
  --success-bg: #F0FDF4;
  --purple: #8B5CF6;
  --purple-bg: #F5F3FF;
  --shadow-xs: none;
  --shadow-sm: 0 1px 2px rgba(0,0,0,0.05);
  --shadow-md: 0 4px 6px -1px rgba(0,0,0,0.07);
  --shadow-lg: 0 10px 15px -3px rgba(0,0,0,0.08);
}
```

### Step 2: Update `_shared-tokens.css` — Dark Mode Variables
Replace `[data-theme="dark"]` block:

```css
[data-theme="dark"] {
  --bg-page: #111827;
  --bg-card: #1F2937;
  --bg-sidebar: #1F2937;
  --bg-muted: #374151;
  --brand-primary: #60A5FA;
  --brand-primary-light: #3B82F6;
  --brand-primary-bg: #1E293B;
  --brand-primary-dark: #93C5FD;
  --brand-secondary: #FB923C;
  --brand-secondary-bg: #1C1917;
  --brand-accent: #22D3EE;
  --brand-accent-bg: #164E63;
  --text-primary: #F9FAFB;
  --text-secondary: #9CA3AF;
  --text-tertiary: #6B7280;
  --border: #374151;
  --border-light: #1F2937;
  --danger: #F87171;
  --danger-bg: #1F1215;
  --success: #4ADE80;
  --success-bg: #14261C;
  --purple: #A78BFA;
  --purple-bg: #1E1633;
  --shadow-sm: 0 1px 2px rgba(0,0,0,0.2);
  --shadow-md: 0 4px 6px -1px rgba(0,0,0,0.25);
  --shadow-lg: 0 10px 15px -3px rgba(0,0,0,0.3);
}
```

### Step 3: Fix Hardcoded Hex Values in CSS
Search and replace in `_shared-tokens.css`:
- `#F0EDE8` → `#F3F4F6` (border-light in table rows)
- `#3D6B4A` → `#2563EB` (`.btn-ai` background)
- `#346040` → `#1D4ED8` (`.btn-ai:hover`)
- `rgba(61,107,74,0.2)` → `rgba(37,99,235,0.2)` (btn-ai hover shadow)
- `rgba(74,124,89,0.15)` → `rgba(59,130,246,0.15)` (btn-primary hover shadow)
- `rgba(26,26,26,0.04)` → `rgba(0,0,0,0.04)` (card hover shadows)
- `rgba(26,26,26,0.45)` → `rgba(0,0,0,0.45)` (modal overlay)
- Dark mode `.btn-ai`: `#4A8A5C` → `#3B82F6`, `#5A9A6C` → `#60A5FA`

### Step 4: Add New Semantic Token — `--success`
Add `--success` and `--success-bg` (not present in current CSS):
```css
--success: #22C55E;
--success-bg: #F0FDF4;
```
Dark mode:
```css
--success: #4ADE80;
--success-bg: #14261C;
```

### Step 5: Update All 9 HTML Tailwind Configs
Each HTML file has an inline `<script>tailwind.config = {...}</script>` block. Replace the color mapping in ALL 9 files:

**Old:**
```js
cream: '#F6F4F0',
sage: { DEFAULT: '#4A7C59', light: '#6B9E7A', bg: '#EFF6EE', dark: '#3A6248' },
gold: { DEFAULT: '#D4A843', bg: '#FDF6E3' },
coral: { DEFAULT: '#E8734A', bg: '#FDF0EB' },
muted: '#F0EDE8',
'border-c': '#E8E4DE',
'border-light': '#F0EDE8',
'txt': '#1A1A1A',
'txt-s': '#6B6560',
'txt-t': '#9B9590',
danger: { DEFAULT: '#D4564A', bg: '#FDECEB' },
info: { DEFAULT: '#5B8DB8', bg: '#EBF3FA' },
purple: { DEFAULT: '#7C5CAF', bg: '#F3EAFA' },
```

**New:**
```js
page: '#F9FAFB',
blue: { DEFAULT: '#3B82F6', light: '#60A5FA', bg: '#EFF6FF', dark: '#2563EB' },
orange: { DEFAULT: '#F97316', bg: '#FFF7ED' },
cyan: { DEFAULT: '#06B6D4', bg: '#ECFEFF' },
muted: '#F3F4F6',
'border-c': '#E5E7EB',
'border-light': '#F3F4F6',
'txt': '#111827',
'txt-s': '#6B7280',
'txt-t': '#9CA3AF',
danger: { DEFAULT: '#EF4444', bg: '#FEF2F2' },
success: { DEFAULT: '#22C55E', bg: '#F0FDF4' },
info: { DEFAULT: '#3B82F6', bg: '#EFF6FF' },
purple: { DEFAULT: '#8B5CF6', bg: '#F5F3FF' },
```

### Step 6: Search & Replace Tailwind Class References in HTML
In all 9 HTML files, replace color class references:
- `bg-cream` → `bg-page`
- `bg-sage` → `bg-blue`
- `text-sage` → `text-blue`
- `border-sage` → `border-blue`
- `bg-sage-bg` → `bg-blue-bg`
- `bg-sage-light` → `bg-blue-light`
- `bg-gold` → `bg-orange`
- `text-gold` → `text-orange`
- `bg-gold-bg` → `bg-orange-bg`
- `bg-coral` → `bg-cyan`
- `text-coral` → `text-cyan`
- `bg-coral-bg` → `bg-cyan-bg`

### Step 7: Verify Rendering
Open each HTML file in browser. Check:
- [ ] Light mode: Blue primary, orange highlights, cyan accents
- [ ] Dark mode: Correct contrast, readable text
- [ ] All buttons, badges, active states use new colors
- [ ] No residual green/sage references

## Todo List

- [x] Update `_shared-tokens.css` light mode variables
- [x] Update `_shared-tokens.css` dark mode variables
- [x] Fix hardcoded hex values in CSS
- [x] Add `--success` / `--success-bg` tokens
- [x] Update Tailwind config in all 9 HTML files
- [x] Search & replace Tailwind class names in all HTML bodies
- [x] Visual verification in browser (light + dark mode)

## Success Criteria
- Zero references to `#4A7C59`, `#D4A843`, `#E8734A`, `sage`, `gold`, `coral` anywhere
- All 9 screens render with Ocean Blue palette
- Dark mode works correctly

## Risk Assessment
- **Low risk:** Pure color swap, no structural changes
- **Watch for:** Hardcoded inline styles in HTML (not just Tailwind classes)
- **Mitigation:** Grep for old hex values after replacement to catch stragglers
