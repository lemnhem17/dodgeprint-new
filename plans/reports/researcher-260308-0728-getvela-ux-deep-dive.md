# Getvela UX/UI Deep-Dive Analysis

## Executive Summary
Getvela is a multi-channel listing management platform with AI optimization built in. Strengths: bulk editing, cross-platform copying, quality scoring. Weaknesses: performance issues at scale, primitive search/filtering, aggressive pricing enforcement.

---

## 1. Signup & Onboarding Flow

**Process:**
1. Visit getvela.ai → "Get Started" button
2. Enter name, email, create password
3. Platform walks through connecting first shop (OAuth integration with Etsy/Shopify/eBay/Faire)
4. Free 7-day trial of Vela Plus (all features, no CC required)
5. Immediate dashboard access post-connection

**Time to First Value:** ~3-5 minutes. Users see populated listings + quality scores immediately after shop connection.

**Observation:** Minimal friction. No data entry required—pulls shop data automatically.

---

## 2. Dashboard Layout

**Main View: Listings Dashboard**
- **Central Hub** with colored dots showing marketplace origin (Etsy=blue, Shopify=green, etc.)
- **Quality Score Column** (A+ to F-) prominently displayed right-side
- **Hover Actions:** Delete, Copy, Merge quick-access buttons
- **Left Sidebar:** Listings → Profiles → Schedule → Studio (vertical stack)
- **Top Bar:** Filter/search, Add Shop, Create Listing buttons

**Key Feature:** Letter grades update in real-time as users edit. Hover to see breakdown (e.g., "Title missing keywords: -15 points").

**Navigation Structure:**
- Hierarchical but flat (no nested menus)
- Single-level quick-access to major features
- Account Settings buried bottom-left (billing/cancellation here)

---

## 3. Listing Management UX

**Grid vs. Cards:** Spreadsheet-like grid layout (rows=listings, columns=metadata). Density optimized for bulk workflows, not visual aesthetics.

**Bulk Editing Workflow:**
1. Filter/search listings using dropdowns (status, score, category, tags)
2. Check boxes to select listings
3. Click "Edit" → opens Bulk Editor
4. Left sidebar: Listings → Shipping → Tags → etc. (sections with green update indicators)
5. Edit fields in top bar (dropdown menus, profile selection)
6. Click "Apply" to commit changes
7. Choose "Sync Now" or "Schedule" for deployment

**Limitations Noted:**
- Photo/alt-text bulk editing unavailable (relegated to Studio)
- Variation pricing limited to uniform increases
- Profile application overwrites ALL fields (even blank ones—UX friction point)

**Search & Filter:** User complaint: "absolutely primitive." No advanced operators, basic keyword matching only.

---

## 4. AI Features UX

**Quality Scoring Interface:**
- Scores by platform (Etsy: Title/Tags/Description; Shopify: Title/Description/SEO metadata)
- Letter grade + hover tooltip showing deduction reasons
- Field-level scoring (individual section scores visible in editor)
- Scores generated from "millions of listings + platform guidelines + SEO best practices"

**Copy Optimization:**
- "Copy" action duplicates listing + optionally applies AI to platform-specific content
- Uses platform-specific SEO rules (character counts, keyword density, punctuation)
- Etsy→Shopify copies detected automatically; AI rewrites titles/descriptions on platform switch

**Photo Editing (Studio):**
- Upload files via drag-drop or file browser
- Folder organization (seasonal, brand, backgrounds)
- AI tools: background removal, enhancement (clarity/lighting/detail), resize for social
- Upcoming: mockup generation, photo-to-video
- Edit single photo: select → click edit icon → opens Studio editor (Expand/Crop tool, Enhance button)

**Bulk Optimize:**
- Select listings → click "Optimize" in Bulk Editor
- AI rewrites titles/descriptions for selected listings
- Real-time grade updates post-optimization

---

## 5. Cross-Listing Flow

**Copy Mechanism:**
1. Hover over listing → "Copy" action
2. Select destination shop
3. Choose: "Copy as-is" OR "AI Copy" (platform-optimized)
4. New listing created with AI-adjusted content if selected

**Merge Feature:**
- Link duplicate listings across platforms
- Manage side-by-side with platform-specific tabs
- Enables single edit affecting all merged versions

**Supported Platforms:** Etsy, Shopify, eBay (US/UK/Canada), Faire. More incoming.

**Multi-Shop Pricing:** 20% discount when multiple shops subscribed to same account.

---

## 6. Settings & Integration

**Connection Process:**
- OAuth-based (standard for Etsy/Shopify/eBay)
- No manual API key entry required
- Each shop connects to single account; one account can connect unlimited shops

**Account Settings:**
- Located bottom-left (Billing section)
- Month-to-month subscriptions (per shop, cancelable anytime)
- Separate integrations for eBay regions (eBay US ≠ eBay UK; additional overhead for multi-region sellers)

**Billing Model:** Tiered by listing count (Lite vs. Plus plans). **Complaint:** Pricing enforcement "aggressive"—exceeding limits triggers immediate disconnection + payment prompt.

---

## 7. Mobile Experience

**No native mobile app found.** Platform is web-based, responsive design assumed but not optimized.

**User Review:** App rated 2.6/5 on Trustpilot. Complaints center on:
- Extreme loading times on profiles screen with 2k+ products
- "Sluggish in every aspect"
- Search/filtering "absolutely primitive"

**Mobile UX:** Likely poor. Spreadsheet layout doesn't adapt well to mobile (columns overflow, touch interactions difficult on small screens).

---

## Key UX Observations (Dodgeprint Opportunity)

| Strength | Weakness | Dodgeprint Angle |
|----------|----------|-----------------|
| Instant multi-shop visibility | Performance craters at scale (2k+ products) | Cache + pagination strategy |
| Real-time quality scoring | No visual hierarchy (grid fatigue) | Card-based listing view option |
| 1-click AI optimization | Search primitive, no advanced filters | Full-text + faceted search |
| Cross-platform copying | Mobile unusable | Mobile-first responsive design |
| Profiles (templates) | Profiles overwrite blanks (UX trap) | Smart merge logic for templates |
| Zero setup friction | Pricing enforcement aggressive/jarring | Transparent, gradual upsells |

---

## Unresolved Questions

- Does Getvela have roadmap for mobile app or just responsive web?
- Exact dataset size tested for performance benchmarks?
- Studio feature adoption rates vs. bulk editor usage?
- eBay Australia/Hong Kong launch timeline (mentioned as "later this year"—which year)?
- Do users prefer grid or would card view reduce cognitive load?
