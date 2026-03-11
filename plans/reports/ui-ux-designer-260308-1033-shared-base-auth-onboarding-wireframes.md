# Shared Base Files + Auth & Onboarding Wireframes

**Date:** 2026-03-08
**Status:** Complete

## Deliverables

### Task 1: Shared CSS — `_shared-tokens.css`
- Extracted ALL CSS variables (light + dark mode) from full wireframe
- All component styles: card, card-static, kpi-card, btn-primary, btn-accent, btn-ghost, btn-ai, nav-item, editable-cell, toggle, platform-tab, settings-tab, trend-card, upload-zone, variant-chip, provider-card, sparkline, modal-overlay, ob-step, platform-option
- All animations: screenFadeIn, slideInToast, slideOutToast, fadeIn, slideUp, confettiDrop
- Added NEW: auth-card, auth-input, auth-divider, password-strength-bar/fill styles
- Responsive media query (mobile sidebar hide, bottom nav show)
- `prefers-reduced-motion` support
- Dark mode overrides for bg-white, bg-cream, inputs, borders, tables, modals, btn-ai, btn-ghost

### Task 2: Shared JS — `_shared-navigation.js`
- Screen switching: navigate() with progress bar + single-page/multi-page hybrid support
- showScreen() alias for backward compatibility
- Sidebar collapse toggle with margin adjustment
- Dark mode toggle with localStorage persistence (dodgeprint_theme key)
- Shop switcher: SHOPS array, getSelectedShop/setSelectedShop with localStorage (dodgeprint_selected_shop key), dropdown render, outside-click close
- Toast notification system (auto-create container if missing)
- Modal system: openModal/closeModal, overlay click close, Escape key close
- Onboarding step logic: goToObStep, selectPlatform (toggle for multi-select)
- Listings helpers: row selection, floating bar, makeEditable, switchTab
- Settings tab switcher, toggle switch, upload zone drag/drop
- NEW auth helpers: switchAuthView, togglePasswordVisibility, updatePasswordStrength (5-level scoring)

### Task 3: Auth Wireframe — `02-auth.html`
3 switchable views via switchAuthView():
- **Login**: centered card, email/password inputs, show/hide password toggle, remember me checkbox, forgot password link, btn-primary pill full-width, Google SSO with real SVG logo, sign up link
- **Register**: name/email/password, password strength bar (5 levels: very weak to very strong), terms checkbox with links, Google SSO, sign in link
- **Forgot Password**: key icon, email input, send reset link button, back to sign in link
- Floating dark mode toggle (top-right)
- Clean Emitly-inspired design: no card shadow, just border

### Task 4: Onboarding Wireframe — `01-onboarding.html`
4-step wizard with progress bar:
- **Step 1 Welcome**: logo, title, 3 feature cards (sage/gold/coral icons), Get Started CTA
- **Step 2 Connect Shop**: 6 platforms (Etsy, Shopify, Amazon, TikTok, eBay, Walmart), toggle multi-select, Skip for now option
- **Step 3 Import Listings**: 3 radio options (Auto-import recommended, Upload CSV, Start fresh), each with preview panel, progress circle for auto-import
- **Step 4 Success**: confetti animation, summary card with stats (892 listings, 2.4k variants, 156 tags, 0 errors), recommended next steps links, Go to Dashboard CTA
- Header with step indicator + dark mode toggle + skip link

## Files Created/Modified

| File | Action |
|------|--------|
| `docs/wireframes/_shared-tokens.css` | Created (new) |
| `docs/wireframes/_shared-navigation.js` | Rewritten (was 113 lines, now comprehensive) |
| `docs/wireframes/02-auth.html` | Created (new) |
| `docs/wireframes/01-onboarding.html` | Created (new) |

## Design Compliance
- All colors from design-guidelines.md tokens
- Plus Jakarta Sans + JetBrains Mono fonts
- Lucide icons throughout
- Pill-shaped CTA buttons (radius-full)
- Emitly ultra-light visual weight: no shadows on cards, white-on-cream contrast
- Dark mode via data-theme attribute
- Mobile responsive (auth card adjusts padding)
- WCAG focus states on all inputs
