# Brainstorm: PSYCH Framework Onboarding + Product Tour

**Date:** 2026-03-11
**Status:** Agreed — ready for implementation plan

---

## Problem Statement

Current onboarding (01-onboarding.html) is a generic 4-step wizard lacking:
- Personalization (same flow for 1-shop beginner and 130-shop power seller)
- Social proof (no trust signals for sellers granting shop access)
- "Aha moment" before dumping user into dashboard
- Post-onboarding guidance (no tour, no checklist)

## PSYCH Framework Audit — Current State

| Factor | Score | Gap |
|--------|-------|-----|
| **P** Predictability | 6/10 | Progress bar exists but no ETA, no "what's next" preview |
| **S** Social proof | 1/10 | Zero trust signals, testimonials, or user counts |
| **Y** You-focus | 3/10 | Generic copy, no personalization based on seller context |
| **C** Commitment | 5/10 | Step progression works but Step 1→2 jump is too large |
| **H** Helpfulness | 5/10 | Transparency panel good, but no contextual help or FAQ |

## Agreed Solution

### A. Onboarding Wizard — Branching Flow (5-6 steps)

**Entry point:** New Step 1 asks seller level → branches into 3 flows:

```
Step 1: Seller Profile (branching point)
  ├── 1-3 shops  → SIMPLE (3 steps: Connect → Import → Done)
  ├── 4-20 shops → STANDARD (5 steps: Connect → Import → Goal Quick Win → Done)
  └── 20+ shops  → POWER (5 steps: Bulk Connect → Bulk Import → Team → Quick Win → Done)
```

**Step 1: Seller Profile (NEW)**
- 3 persona cards: Starter / Growing / Enterprise
- Goal picker (1-2): Manage listings, Research, POD, Analytics
- Social proof banner: "Join 12,000+ sellers managing $2.4M+ monthly"
- ETA: "~2 min setup"

**Step 2: Connect Shops (IMPROVED)**
- Social proof per platform: "8,200 Etsy sellers connected"
- Tooltip help on OAuth permissions
- Success animation on connect
- Power flow: bulk API key paste or shop list CSV upload

**Step 3: Import Listings (IMPROVED)**
- Personalized copy based on goal selection
- Real-time ETA: "~45 seconds remaining"
- Error recovery messaging

**Step 4: Goal-Based Quick Win (NEW — Standard + Power only)**
- Manage listings → preview listing table with Quality Score
- Research → 3 trending keywords in user's niche
- POD → mock template ready to push
- Analytics → mini dashboard with projected revenue

**Step 5: Success + Tour Trigger**
- Summary stats (keep existing)
- Tour CTA: "Want a quick 2-min tour?" [Start Tour] / [Explore myself]
- Social proof: "Most sellers save 30min in first week with the tour"

### B. Product Tour — Spotlight + Coachmark Hybrid

**File:** New `21-product-tour.html`

**7 tour steps:**

| # | Target | Type | Copy |
|---|--------|------|------|
| 1 | Sidebar nav | Spotlight | "Your command center. Everything one click away." |
| 2 | Shop switcher | Spotlight | "Switch shops instantly or view all at once." |
| 3 | Listings table | Coachmark | "Listings synced real-time. Quality scores help optimize." |
| 4 | Command palette ⌘K | Spotlight | "Press ⌘K to search anything — listings, orders, shops." |
| 5 | Research tab | Coachmark | "Discover trending products and competitor keywords." |
| 6 | AI features | Coachmark | "AI writes titles, tags, descriptions. Click the sparkle." |
| 7 | Settings/Help | Coachmark | "Settings & support always here." |

**Behavior:**
- Spotlight: dimmed overlay (0.6 opacity), element highlighted
- Coachmark: no overlay, card floats near element
- Step progress dots, [Next] [Skip Tour] buttons
- Auto-pause on user interaction → resume button
- Completion: confetti + checklist reveal

### C. Persistent Checklist (on Dashboard)

7-item checklist card:
1. ✅ Connect first shop
2. ✅ Import listings
3. ✅ Complete tour
4. ○ Optimize 5 listing titles
5. ○ Set up sync schedule
6. ○ Explore Research tools
7. ○ Invite team member

Progress bar, dismissible, items link to relevant screens.

## Files to Modify/Create

| Action | File |
|--------|------|
| UPDATE | `docs/wireframes/01-onboarding.html` — branching flow, PSYCH elements |
| CREATE | `docs/wireframes/21-product-tour.html` — tour overlay on dashboard |

## Implementation Considerations

- Branching logic: all 3 flows in single HTML file, JS toggles visibility
- Tour: built as overlay system in 21-product-tour.html, re-uses dashboard layout from 03-dashboard.html patterns
- Checklist: embedded in tour file as post-tour state
- Shared nav: tour needs to integrate with `_shared-navigation.js` for spotlight targets

## Risk Assessment

- **Branching complexity:** 3 flows in 1 file could get large (~500+ lines). Mitigation: clean section comments, CSS class toggles
- **Tour targeting:** Spotlight needs dashboard elements to exist. Mitigation: tour file embeds simplified dashboard mockup
- **Scope creep:** Keep tour to 7 steps max. Don't over-engineer interactivity

## Success Metrics

- Onboarding completion rate (target: >80%)
- Tour start rate (target: >60% of users who complete onboarding)
- Tour completion rate (target: >70% of starters)
- First "aha moment" within 3 minutes of signup
