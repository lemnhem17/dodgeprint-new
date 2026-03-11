# PSYCH Framework Wireframe Updates - Batch 2

Updated 5 wireframe files with PSYCH Design Language patterns.

## Changes by File

### 06-research.html
- **Popular searches**: Added pill-shaped tags below search input ("vintage jewelry", "custom pet portrait", "boho home decor", "personalized gifts") + trending tags in brand-primary-bg
- **Bookmark/Save**: Added bookmark icon next to every "Track" button in keyword results for watchlist saves
- **Gold badges**: Added gold `#FDF6E3`/`#D4A843` "Low Competition" badge with award icon on qualifying Niche Finder results (Mushroom Home Decor, Bookish Stationery, Plant Mom Merch)
- **Positive reframe**: Tags (60/100) shows "Easy wins available -- +25 points possible" in sage green; Description (72/100) shows "+15 points possible"
- **AI loading states**: Hidden skeleton loaders with "Analyzing... ~15s remaining" for both Niche Finder and Listing Optimizer tabs

### 07-pod-hub.html
- **Design Library empty state**: Hidden empty state with upload icon, "Your design library is empty" heading, and Upload CTA
- **Mockup loading**: Hidden skeleton with "Generating mockups... ~10s remaining" and 4 pulsing placeholders
- **Push preview text**: Added eye icon + "Preview exactly how your listing will appear before publishing"
- **Save as Draft**: Added ghost button next to "Push to Marketplace" accent button

### 08-analytics.html
- **Hero stat**: Sage-tinted card at top: "Your revenue grew 12% this month" with context text
- **AI Insight card**: Gold-tinted card with actionable insight about trending Botanical Print Set
- **Empty state**: Hidden state for <7 days of data with link to Dashboard
- **Declining metrics**: Added "Suggested actions" link next to Profit Margin KPI (-2%) and declining keywords section

### 09-settings.html
- **Recommended badge**: Green pill "Recommended" next to "Every 5 min" sync frequency option
- **Disconnect reassurance**: Muted text "Your data stays safe. Reconnect anytime." below each Disconnect button
- **Billing transparency**: Calendar icon + "Next billing: $99 on March 15, 2026" in muted card below plan header
- **Instant save feedback**: CSS + JS for inline "Saved" text that appears/fades on toggle changes (2s timeout)

### 02-auth.html
- **Social proof**: "Join 2,400+ sellers managing 50,000+ listings" in text-secondary below logo (both login and register)
- **Google SSO priority**: Google button moved above email form, made taller (h-12), bolder (font-semibold), border-2 styling; divider changed to "or sign in/up with email"
- **Register simplified**: Removed Full Name field (collected during onboarding per PSYCH progressive disclosure)
- **Password strength**: Already existed in register form -- kept as-is

## Design Compliance
- All changes use CSS variables (dark mode safe)
- Pill badge shapes, minimal shadows (Emitly style)
- Calm confidence tone -- specific, actionable, no exclamation marks
- All existing JS navigation preserved
- Hidden states use `hidden` class, toggle via JS when needed
