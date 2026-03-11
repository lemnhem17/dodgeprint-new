# Brainstorm: Smart Homepage Redesign

**Date:** 2026-03-11
**Status:** Agreed
**Participants:** Leo + Claude

---

## Problem Statement

DodgePrint has 2 separate pages (Home = onboarding, Dashboard = 4 basic KPI cards) that are both underserving returning users. New sellers lack guided progression; returning sellers must navigate extra clicks to reach actionable content.

**Target users:** New e-commerce sellers needing guidance
**Core daily actions:** Products management > Analytics > Orders
**Positioning:** All-in-one platform (listing + fulfillment + analytics)

---

## Evaluated Approaches

### Option A: Merge Home + Dashboard -> Smart Homepage (CHOSEN)
- Conditional layout: new user mode vs returning user mode
- **Pro:** Single entry point, progressive disclosure, reduces navigation
- **Con:** More complex logic, needs state tracking

### Option B: Dashboard = Homepage, drop onboarding page
- Always show dashboard with KPIs/charts
- **Pro:** Simple, consistent
- **Con:** New users lose hand-holding, higher drop-off risk

### Option C: Getvela-style — land on Products page
- No dedicated homepage, go straight to core action
- **Pro:** Maximum efficiency for power users
- **Con:** Loses all-in-one overview, bad for new sellers needing guidance

**Decision:** Option A — best fit for new seller audience + all-in-one positioning.

---

## Final Solution: Smart Homepage

### New User Layout (no shops/products yet)

| # | Section | Purpose |
|---|---------|---------|
| 1 | Welcome header | Brand greeting |
| 2 | Getting Started checklist (5 steps) | Progressive onboarding with progress bar |
| 3 | Quick Start Templates | 1-click product templates (T-shirt, Mug, Poster) — reduces first-action friction |
| 4 | Quick Links | Docs, Discord, Tutorial video |

**Checklist steps:**
1. Create account (auto-complete)
2. Complete profile
3. Connect first shop
4. Create first product
5. Deploy to marketplace

**CTA always points to next uncompleted step.** When all done -> auto-switch to returning user layout.

### Returning User Layout

| # | Section | Purpose |
|---|---------|---------|
| 1 | KPI Cards (4 cols) | Products, Orders, Revenue, Shops — with trend indicators (↑↓%) |
| 2 | Quick Actions bar | [+ Create Product] [Import] [Deploy] |
| 3 | Suggested Next Step | Personalized, 1 action based on user behavior |
| 4 | Recent Products + Pending Actions | 2-column, actionable items |
| 5 | Revenue Trend | Mini chart, platform breakdown (Etsy/Shopify/TikTok) |
| 6 | What's New | Conditional — only when updates since last login. 2-3 items + "See all" link. Dismissible. |
| 7 | Daily Tip | 1 tip/day with actionable CTA to related feature. Dismissible. |
| 8 | Community Stats | Footer, compact: "12,450 sellers · 2.3M products deployed" |

### Engagement Features

#### Gamification — Seller Level (in sidebar, not homepage)
- Levels: Beginner -> Rising Star -> Pro Seller -> Power Seller
- Progress bar + badge unlocks on milestones
- Subtle, professional — fits "Warm Organic" design language

#### Personalized Next Step Logic
| User State | Suggestion |
|-----------|-----------|
| Has products, 0 deployed | "Deploy to Etsy to start selling" |
| Has shop, 0 products | "Create your first product" |
| Listings missing tags | "Optimize tags for better visibility" |
| Failed deployments | "3 deployments need attention" |
| Inactive 7+ days | "5 new orders waiting for review" |

#### Daily Tip Pool
- Rotate from curated pool of seller tips
- Always include actionable CTA linking to relevant feature
- Helps new sellers discover features organically

#### Social Proof
- Community stats (sellers count, products deployed)
- "Join 340 sellers who started this week"
- Compact footer placement, non-intrusive

---

## What NOT to Put on Homepage

- Full analytics charts (-> Analytics page)
- Product table/editor (-> Products page)
- Settings/configuration
- Full changelog (-> /feed page, homepage shows condensed What's New)

---

## Implementation Considerations

### State Management
- Track `user.onboarding_completed` (boolean or checklist progress)
- Track `user.last_login_at` for What's New conditional display
- Track `user.dismissed_tips[]` for Daily Tip rotation

### Design Tokens
- Follow existing "Warm Organic" design system (cream bg, sage/gold/coral accents)
- KPI cards: large number + small label above + sparkline right (Emitly pattern)
- Trend badges: pill shape, green/red bg
- What's New: sage accent, "New" badge auto-dismiss

### Performance
- KPI data: cache with 5min TTL, show skeleton on load
- Revenue chart: lazy load, show after KPIs render
- What's New: fetch from changelog API, cache per session

### Risk
- Over-cluttered homepage — mitigate by making sections conditional/dismissible
- Data loading slow with multiple API calls — mitigate with skeleton screens + parallel fetching
- Gamification feeling "gimmicky" — mitigate with subtle design, no popups/confetti

---

## Success Metrics

| Metric | Target |
|--------|--------|
| Onboarding completion rate | >60% (currently unknown) |
| Time to first deploy | Reduce by 30% |
| Daily active return rate | Increase by 20% |
| Homepage bounce rate | <15% |
| Feature discovery (from tips/what's new clicks) | >10% CTR |

---

## Validation Log

### Session 1 — 2026-03-11
**Trigger:** Pre-implementation validation of brainstorm decisions
**Questions asked:** 7

#### Questions & Answers

1. **[Scope]** Homepage layout switching logic: khi nào chuyển từ New User → Returning User mode?
   - Options: Checklist 100% done | Có ít nhất 1 product + 1 shop | User tự dismiss onboarding
   - **Answer:** User tự dismiss onboarding
   - **Rationale:** User chủ động control UX. Thêm nút "Skip onboarding" / "Go to Dashboard". Một số user có kinh nghiệm không cần onboarding.

2. **[Architecture]** KPI cards nên lấy data từ đâu?
   - Options: API đã có sẵn | Cần tạo API mới | Chưa rõ
   - **Answer:** API có sẵn, nhưng sử dụng mock data cho wireframe
   - **Rationale:** Wireframe/mockup dùng mock data trước. Implementation thực tế sẽ gọi API có sẵn.

3. **[Architecture]** Revenue Trend chart: dùng library nào?
   - Options: Chưa có chart library | Đã có sẵn | SVG tự vẽ
   - **Answer:** Chưa có chart library
   - **Rationale:** Cần thêm chart library mới vào project.

4. **[Scope]** Scope MVP: sections nào Phase 1 vs defer?
   - Options: Full layout ngay | Core first, engagement later | Minimal MVP
   - **Answer:** Full layout ngay
   - **Rationale:** Ship tất cả 8 sections 1 lần. Không cần chia phase cho homepage.

5. **[Library]** Chart library choice?
   - Options: Recharts | ApexCharts | SVG tự vẽ
   - **Answer:** Recharts
   - **Rationale:** React-native, declarative, phổ biến nhất cho React dashboards. Reusable cho Analytics page sau này.

6. **[Tech Stack]** Frontend tech stack?
   - Options: React + TypeScript | Next.js | Vue.js | Angular
   - **Answer:** React + TypeScript
   - **Rationale:** Xác nhận stack hiện tại để plan đúng component structure.

7. **[Output]** Wireframe output format?
   - Options: HTML/CSS mockup | Figma description | ASCII wireframe
   - **Answer:** HTML/CSS mockup
   - **Rationale:** File HTML tĩnh với real design tokens, mở browser review trực quan trước khi implement React components.

#### Confirmed Decisions
- Mode switching: User-controlled dismiss (nút "Skip onboarding")
- Data: Mock data cho wireframe, real API cho implementation
- Chart: Recharts library
- Stack: React + TypeScript
- Scope: Full 8 sections, ship 1 lần
- Output: HTML/CSS static mockup trước, React implementation sau

#### Action Items
- [ ] Thêm "Skip to Dashboard" button vào New User layout
- [ ] Cài Recharts vào project dependencies
- [ ] Tạo HTML/CSS mockup với design tokens từ design-guidelines.md
- [ ] Chuẩn bị mock data cho tất cả sections

---

## Next Steps

1. Create HTML/CSS mockup for both layouts (new user + returning user) with real design tokens
2. Use mock data for all sections
3. Add Recharts for Revenue Trend chart
4. Implement React components following mockup
5. Connect to real APIs
6. A/B test new vs old homepage
