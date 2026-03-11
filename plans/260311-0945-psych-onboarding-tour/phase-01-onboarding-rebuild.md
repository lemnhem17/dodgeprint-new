# Phase 1: Onboarding Rebuild with PSYCH Framework

## Context

- Brainstorm: `plans/reports/brainstorm-260311-0945-psych-onboarding-tour.md`
- Current: `docs/wireframes/01-onboarding.html` (4-step generic wizard, 397 lines)
- Tokens: `docs/wireframes/_shared-tokens.css` (ob-step, platform-option, progress-bar-ob classes exist)

## Overview

- **Priority:** P1
- **Status:** Pending
- **Effort:** 5h

Replace generic 4-step onboarding with branching flow. 3 paths based on seller level, PSYCH elements throughout.

## Architecture: Branching Flow

```
Step 1: Seller Profile (ALL users)
  ├── "Starter" (1-3 shops)    → SIMPLE: Step 2s → Step 3s → Step 5
  ├── "Growing" (4-20 shops)   → STANDARD: Step 2 → Step 3 → Step 4 → Step 5
  └── "Enterprise" (20+ shops) → POWER: Step 2p → Step 3p → Step 4p → Step 5
```

### Branching via JS

All steps exist in DOM. JS variable `sellerLevel` controls which steps show.

```js
var sellerLevel = null; // 'starter' | 'growing' | 'enterprise'
var sellerGoals = [];   // ['listings', 'research', 'pod', 'analytics']

function setSellerLevel(level) {
  sellerLevel = level;
  // Update step count indicator
  var totalSteps = level === 'starter' ? 4 : 5;
  // Highlight selected persona card
}
```

## Step-by-Step Design

### Step 1: Seller Profile (NEW — replaces Welcome)

**PSYCH elements:**
- **S** Social proof banner top: "Join 12,000+ sellers managing $2.4M+ monthly revenue"
- **Y** You-focus: "Tell us about your business" not "Welcome to Dodgeprint"
- **P** Predictability: "Setup takes ~2 minutes"
- **C** Commitment: persona selection = micro-investment

**UI structure:**
```html
<!-- Social proof banner -->
<div class="social-proof-banner">
  <avatars-stack> "Join 12,000+ sellers..."
</div>

<!-- Persona cards (3 cols) -->
<div class="grid grid-cols-3">
  <!-- Starter card -->
  <div class="persona-card" data-level="starter">
    <icon: sprout>
    <h4>Just Starting</h4>
    <p>1-3 shops</p>
    <p>"I want to organize my listings"</p>
  </div>
  <!-- Growing card -->
  <div class="persona-card" data-level="growing">
    <icon: trending-up>
    <h4>Growing Fast</h4>
    <p>4-20 shops</p>
    <p>"I need to scale efficiently"</p>
  </div>
  <!-- Enterprise card -->
  <div class="persona-card" data-level="enterprise">
    <icon: building-2>
    <h4>At Scale</h4>
    <p>20+ shops</p>
    <p>"I manage a large operation"</p>
  </div>
</div>

<!-- Goal picker (multi-select, pick 1-2) -->
<h4>What's your main goal?</h4>
<div class="grid grid-cols-2">
  <label class="goal-card"><checkbox> Manage listings across platforms</label>
  <label class="goal-card"><checkbox> Research trending products</label>
  <label class="goal-card"><checkbox> Automate POD workflow</label>
  <label class="goal-card"><checkbox> Track revenue & analytics</label>
</div>
```

### Step 2: Connect Shops (IMPROVED)

**Common UI (all levels):** Keep existing platform grid (Etsy, Shopify, Amazon, TikTok, eBay, Walmart)

**PSYCH additions:**
- **S** Under each platform: `<span class="text-xs">8,200 sellers connected</span>`
- **H** Help tooltip next to OAuth: "We use read-only access. Your data stays safe."
- **C** Success animation: green checkmark pulse when connected

**Power-level additions (`data-level="enterprise"`):**
- Bulk connect section: "Connect multiple shops at once"
- Textarea for pasting API keys
- CSV upload for shop list

**Transparency panel:** Keep existing "What we access" panel (already good PSYCH-H)

### Step 3: Import Listings (IMPROVED)

**PSYCH improvements:**
- **Y** Dynamic copy: "Let's import your listings so you can [goal from Step 1]"
  - listings goal → "manage everything in one place"
  - research goal → "start discovering trends"
  - pod goal → "begin creating products"
  - analytics goal → "see your revenue dashboard"
- **P** ETA: "~45 seconds remaining" instead of static percentage
- **H** Error recovery: "3 listings skipped — we'll help you fix them in Settings"

**Power-level:** Show platform breakdown (e.g., "Etsy: 500, Shopify: 200, Amazon: 150")

### Step 4: Quick Win (NEW — Standard + Power only)

Skipped for Starter level. Shows personalized "aha moment" based on goal.

**UI structure:**
```html
<div class="ob-step" id="obStep4">
  <h2>Here's what Dodgeprint found for you</h2>

  <!-- Goal: listings → Quality Score preview -->
  <div id="quickWinListings" class="hidden">
    <div class="card-static rounded-xl p-5">
      <h4>Your Listing Quality</h4>
      <div class="grid grid-cols-4">
        <div>A-rated: 124</div>
        <div>B-rated: 289</div>
        <div>C-rated: 156</div>
        <div>Needs work: 23</div>
      </div>
      <p>"23 listings need title optimization — Dodgeprint can help"</p>
    </div>
  </div>

  <!-- Goal: research → Trending keywords -->
  <div id="quickWinResearch" class="hidden">
    <div class="card-static rounded-xl p-5">
      <h4>Trending in Your Niche</h4>
      <div class="space-y-2">
        <div>"vintage floral" — 12.4K monthly searches, Low competition</div>
        <div>"boho wall art" — 8.7K monthly, Medium competition</div>
        <div>"personalized gifts" — 45K monthly, High competition</div>
      </div>
    </div>
  </div>

  <!-- Goal: pod → Template preview -->
  <div id="quickWinPod" class="hidden">...</div>

  <!-- Goal: analytics → Mini dashboard -->
  <div id="quickWinAnalytics" class="hidden">...</div>
</div>
```

### Step 5: Success + Tour Trigger

**Keep:** Summary card with stats (892 listings, 2.4k variants, etc.)
**Keep:** "What would you like to do first?" 3-card grid

**Add:**
- **S** Social proof: "Most sellers save 30 min in their first week with the guided tour"
- Tour CTA: prominent blue button "Take a 2-min Tour" + secondary "I'll explore myself"
- Tour button onclick → `navigate('product-tour')` (links to 21-product-tour.html)

## Implementation Steps

1. Read current `01-onboarding.html` fully
2. Replace Step 1 (Welcome) with Seller Profile (persona cards + goal picker + social proof)
3. Add branching JS: `sellerLevel`, `sellerGoals`, step navigation logic
4. Enhance Step 2 (Connect): add social proof counts, help tooltips, power-level bulk section
5. Enhance Step 3 (Import): dynamic copy based on goals, ETA display
6. Add Step 4 (Quick Win): goal-based preview cards, visible only for growing/enterprise
7. Rebuild Step 5 (Success): add tour CTA, social proof nudge
8. Update progress bar logic: dynamic total steps (4 for starter, 5 for growing/enterprise)
9. Add CSS for new components: `.persona-card`, `.goal-card`, `.social-proof-banner`
10. Test all 3 flows: starter (4 steps), growing (5 steps), enterprise (5 steps with bulk)

## CSS Additions (inline in file)

```css
.persona-card {
  transition: all 0.2s ease;
  cursor: pointer;
  border: 2px solid var(--border);
  border-radius: 16px;
  padding: 24px;
  text-align: center;
}
.persona-card:hover { border-color: var(--brand-primary); transform: translateY(-2px); }
.persona-card.selected { border-color: var(--brand-primary); background: var(--brand-primary-bg); }

.goal-card {
  display: flex; align-items: center; gap: 12px;
  padding: 14px 16px;
  border: 1px solid var(--border);
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.15s;
}
.goal-card:hover { border-color: var(--brand-primary); }
.goal-card.selected { border-color: var(--brand-primary); background: var(--brand-primary-bg); }

.social-proof-banner {
  display: flex; align-items: center; justify-content: center; gap: 8px;
  padding: 10px 16px;
  border-radius: 9999px;
  background: var(--brand-primary-bg);
  margin-bottom: 24px;
}
```

## Todo

- [ ] Replace Step 1 with Seller Profile
- [ ] Add branching JS logic
- [ ] Enhance Step 2 with social proof + tooltips + power bulk section
- [ ] Enhance Step 3 with dynamic copy + ETA
- [ ] Create Step 4 Quick Win (Standard + Power only)
- [ ] Update Step 5 with tour CTA + social proof
- [ ] Dynamic progress bar (4 or 5 steps)
- [ ] CSS for persona-card, goal-card, social-proof-banner
- [ ] Test all 3 branching flows

## Success Criteria

- All 3 flows work: Starter (4 steps), Growing (5), Enterprise (5+bulk)
- PSYCH elements visible: social proof on steps 1,2,5; personalization on steps 3,4; transparency on step 2
- Progress bar reflects actual step count per flow
- Tour CTA on final step links to product-tour page
- Dark mode works (uses CSS variables, no hardcoded colors)
