# PSYCH Framework Audit & Design Language — Dodgeprint
**Date:** 2026-03-09 | **Status:** Approved

---

## 1. Problem Statement

Dodgeprint targets pro sellers (100-1000+ listings) migrating from Vela/eRank/Marmalead. These users arrive with:
- **Low trust** (burned by Vela's 2.4/5 rating, crashes, sync failures)
- **High expectations** (want speed, reliability, all-in-one)
- **Fragmentation fatigue** (tired of switching 3-5 tools)

Current wireframes focus on features but lack systematic emotional design. Need PSYCH-informed Design Language to maximize +Psych (motivation) and eliminate -Psych (friction/anxiety) across all 9 screens.

---

## 2. PSYCH Framework Overview

**Core concept:** Every UI element either adds (+Psych) or drains (-Psych) user motivation.

| Category | +Psych (Boost) | -Psych (Drain) |
|----------|---------------|----------------|
| **Trust** | Sync status visible, data consistency indicators | Unexplained errors, silent failures |
| **Clarity** | Clear next action, progressive disclosure | Information overload, ambiguous labels |
| **Speed** | Instant feedback, optimistic UI, virtual scrolling | Loading spinners, lag, no progress indicator |
| **Reward** | Milestone celebrations, progress tracking | No acknowledgment of work done |
| **Control** | Undo/redo, bulk operations, keyboard shortcuts | Irreversible actions, no confirmation |
| **Anxiety** | Autosave indicators, backup status | "Are my changes saved?" uncertainty |

---

## 3. PSYCH Audit by Screen

### 3.1 Onboarding (01-onboarding.html)
**Starting Psych:** Low-medium (curious but skeptical, burned by previous tools)

| Step | +Psych Elements | -Psych Risks | Score |
|------|----------------|--------------|-------|
| Welcome | Brand promise, "replaces 5 tools" | Too much text, vague claims | +2 |
| Connect Shop | OAuth quick connect, platform logos | Fear of giving access, "what data?" | -1 |
| Import | Progress bar, listing count preview | Slow import, no cancel option | +1 |
| Success | Confetti, "You're ready!" | No guidance on what to do next | +2 |

**Recommendations:**
- Add "What we access" transparency panel at Connect step (+3 trust)
- Show "X listings found" before import starts (+2 confidence)
- Add "Estimated time: ~2 min" during import (-1 anxiety)
- Success screen: show 3 specific "Next actions" cards instead of generic celebration (+2 clarity)
- Add "You can disconnect anytime" reassurance at Connect step (+2 trust)

### 3.2 Auth (02-auth.html)
**Starting Psych:** Neutral

| Element | +Psych | -Psych | Score |
|---------|--------|--------|-------|
| Google SSO | Fast, familiar | None | +3 |
| Email form | Standard | Too many fields = drain | -1 |
| Brand on page | Trust signal | None | +1 |

**Recommendations:**
- Default to Google SSO (big button) with email as secondary (+1 speed)
- Add social proof: "Join 2,400+ sellers" below logo (+2 trust)
- Password: show strength meter as progressive reward (+1)
- Remove name field from register (ask during onboarding instead, -1 friction)

### 3.3 Dashboard (03-dashboard.html)
**Starting Psych:** High (just logged in, want to see status)

| Element | +Psych | -Psych | Score |
|---------|--------|--------|-------|
| KPI cards | Instant revenue/orders view | Numbers without context ("is this good?") | +2 |
| Sync Status | Peace of mind, "everything ok" | Sync errors without fix actions | +3/-2 |
| Top Products | Reward — "these are winners" | Empty state if new user | +2 |
| Activity Feed | Awareness of changes | Too verbose, noise | +1 |
| Shop Switcher | Control, multi-shop power | Too many clicks to switch | +2 |

**Recommendations:**
- KPIs: Add trend context "↑12% vs last week" (+2 reward)
- KPIs: Add personal best indicators "🏆 Best month!" sparingly (+3 reward)
- Sync Status: Each error has 1-click "Fix" or "Retry" action (+3 control)
- Empty states: "Connect your first shop to see data" with CTA, not blank (+2 clarity)
- Add "Good morning, Leo. All 3 shops are synced." greeting (+2 calm confidence)
- Quick actions: Max 3-4, not overwhelming (+1 clarity)

### 3.4 Listings (04-listings.html)
**Starting Psych:** Medium-high (this is the CORE feature, users spend 70% of time here)

| Element | +Psych | -Psych | Score |
|---------|--------|--------|-------|
| Spreadsheet grid | Familiar, powerful | Overwhelming with 500+ rows | +2/-1 |
| Inline editing | Fast, no modal needed | "Did it save?" anxiety | +3/-2 |
| Bulk actions | Power user dream | Wrong bulk action = disaster | +3/-3 |
| Quality grades | Gamification, improvement path | Feeling judged, "C grade = bad" | +2/-1 |
| Side panel | Context without losing grid | Can't compare side by side | +2 |
| Platform tabs | Quick filtering | Lose scroll position on switch | +2/-1 |

**CRITICAL Recommendations (highest impact):**
- **Autosave indicator**: Always visible "Saved ✓" or "Saving..." in header (+5 trust)
- **Undo bar**: After any edit, show "Undo" toast for 10s (+4 control, eliminates #1 anxiety)
- **Virtual scrolling**: 500+ rows must not lag. Smooth = +5 Psych, Lag = -10 Psych
- **Bulk action confirmation**: "Apply price change to 47 listings?" with preview of changes (+3 control)
- **Row count + selection count**: "247 listings · 12 selected" always visible (+1 awareness)
- **Keyboard shortcuts**: Ctrl+S (save), Ctrl+Z (undo), Tab (next cell), arrows (navigate) (+3 power users)
- **Progress for bulk ops**: "Updating 47 listings... 23/47" with cancel option (+2 control)
- **Quality grade tooltip**: "How to improve: add 3 more tags" not just letter grade (+2 actionable)

### 3.5 Orders (05-orders.html)
**Starting Psych:** Medium (checking orders = routine but important)

| Element | +Psych | -Psych | Score |
|---------|--------|--------|-------|
| Order table | Overview of all platforms | Mixed statuses = visual noise | +2 |
| Status tabs | Quick filter | Lose context when switching | +2 |
| Fulfillment | Ship from here = saves time | Fear of wrong tracking number | +2/-1 |
| Analytics | Revenue visibility | Too much data on same page | +2/-1 |

**Recommendations:**
- Status badges: Color-coded pills with clear meaning (+1 clarity)
- "Needs attention" counter on tab: "Pending (7)" (+2 urgency/actionable)
- 1-click "Mark shipped + add tracking" flow (+2 speed)
- Confirmation before fulfillment actions (+1 control)
- Order detail panel: show customer history "3rd order from this customer" (+2 context)

### 3.6 Research (06-research.html)
**Starting Psych:** High (exciting — discovery mode, looking for opportunities)

| Element | +Psych | -Psych | Score |
|---------|--------|--------|-------|
| Keyword search | Discovery, data | Empty results, no suggestions | +3 |
| Trends | Opportunity visualization | Overwhelming data tables | +2 |
| Niche Finder | AI magic, surprise discoveries | Slow AI response, vague results | +3/-2 |
| Listing Optimizer | Actionable scores | Low scores = discouraging | +3/-2 |

**Recommendations:**
- Search: Show "Popular searches" / "Trending now" before user types (+2 inspiration)
- Results: Highlight "Low competition, High demand" opportunities in gold (+3 reward)
- Niche Finder: Show confidence level + reasoning, not just suggestions (+2 trust)
- Listing Optimizer: Frame low scores positively: "Easy wins available! +15 points possible" (+3 reframe)
- Add "Save to watchlist" for keywords/niches (+1 control)
- Loading: Show skeleton + fun facts about sellers while AI processes (+1 delight)

### 3.7 POD Hub (07-pod-hub.html)
**Starting Psych:** Medium (creative + business mix)

| Element | +Psych | -Psych | Score |
|---------|--------|--------|-------|
| Providers | Control over connections | Setup complexity | +2/-1 |
| Design Library | Visual, organized | Empty = discouraging | +2 |
| Mockup Generator | Magic — design to product | Slow generation, poor quality | +3/-2 |
| Push to Market | Revenue moment — listing goes live | Fear of wrong settings, lost data | +3/-2 |

**Recommendations:**
- Mockup: Show "Generating..." with preview skeleton (+1 anticipation)
- Push: Preview exactly what listing will look like on each platform (+3 confidence)
- Push: "Draft first, publish when ready" option (+2 control)
- Design Library: Drag-and-drop upload zone with instant thumbnail (+2 speed)
- Empty state: "Upload your first design to get started" with templates (+2 guidance)

### 3.8 Analytics (08-analytics.html)
**Starting Psych:** Medium-high (want insights, not just data)

| Element | +Psych | -Psych | Score |
|---------|--------|--------|-------|
| Revenue chart | Growth visualization | Declining = anxiety | +2/-1 |
| Product performance | Winner identification | Information overload | +2/-1 |
| SEO trends | Improvement tracking | Declining keywords = stress | +2/-1 |
| Export | Professional reports | Complex export options | +1 |

**Recommendations:**
- Lead with positive: "Your revenue grew 12% this month" hero stat (+3 reward)
- Declining metrics: Add "Suggested actions" link next to negative trends (+2 actionable)
- Comparison: "vs. last period" toggle always available (+1 context)
- "Insights" AI summary: "Your best performing product is X, consider creating more in this niche" (+3 guidance)
- Keep analytics page scannable — max 3 chart sections visible without scroll (+1 clarity)

### 3.9 Settings (09-settings.html)
**Starting Psych:** Low (settings = chore, want to get out fast)

| Element | +Psych | -Psych | Score |
|---------|--------|--------|-------|
| Integrations | Control over connections | Disconnecting = scary | +1/-1 |
| Sync Settings | Fine-grained control | Too many options = overwhelming | +2/-2 |
| API Keys | Power user feature | Security anxiety | +1/-1 |
| Billing | Transparency | Unexpected charges | +1/-2 |

**Recommendations:**
- Sync Settings: Show recommended defaults with "Advanced" toggle (+2 simplicity)
- Disconnect: "Your data stays safe. You can reconnect anytime." (+2 reassurance)
- Billing: Show "Next billing: $99 on March 15" upfront (+2 transparency)
- API Keys: Show masked keys with copy button, never full key visible (+1 security)
- Each settings change: Immediate "Saved ✓" feedback, no save button needed (+2 speed)

---

## 4. PSYCH Score Summary Map

| Screen | Starting Psych | Net Score | Risk Level | Priority |
|--------|---------------|-----------|------------|----------|
| Onboarding | Low-Med | +4 | MEDIUM | P1 (first impression) |
| Auth | Neutral | +3 | LOW | P3 |
| Dashboard | High | +8 | LOW | P2 |
| **Listings** | **Med-High** | **+5 (volatile)** | **HIGH** | **P0 — #1 priority** |
| Orders | Medium | +5 | MEDIUM | P2 |
| Research | High | +6 | MEDIUM | P2 |
| POD Hub | Medium | +4 | MEDIUM | P2 |
| Analytics | Med-High | +5 | LOW | P3 |
| Settings | Low | -1 | MEDIUM | P3 |

**#1 Critical path:** Listings screen has highest Psych VOLATILITY — the swing between +Psych (power, speed) and -Psych (data loss anxiety, lag, sync errors) is massive. This screen makes or breaks retention.

---

## 5. Design Language: "Calm Confidence"

### 5.1 Core Principle
> **"I am in control. My data is safe. My business is growing."**

Every design decision must reinforce this feeling. Pro sellers need mastery, not hand-holding.

### 5.2 Emotional States & UI Responses

| User State | Trigger | UI Response | Example |
|-----------|---------|-------------|---------|
| **Confident** | Data loaded, synced, numbers visible | Calm layout, muted colors, no urgency | Dashboard with green sync indicators |
| **Focused** | Editing listings, bulk operations | Minimal chrome, maximum content, no distractions | Listings grid: toolbar collapses, full-width table |
| **Anxious** | After bulk edit, sync in progress | Reassurance indicators, undo available | "Saved ✓" pill, "Undo" toast, sync progress bar |
| **Frustrated** | Error, slow load, sync failure | Immediate explanation + 1-click fix | "Sync failed for Etsy Shop A. [Retry] [View Details]" |
| **Delighted** | Milestone hit, growth discovered | Subtle celebration, no interruption | Gold shimmer on KPI card when hitting new high |
| **Exploring** | Research, niche finding, analytics | Visual rewards, discoveries highlighted | Gold badge on "Low competition" keywords |
| **Impatient** | Waiting for AI, bulk operation, import | Progress + time estimate + cancel option | "Optimizing 47 listings... ~30s remaining [Cancel]" |

### 5.3 Micro-interaction Language

#### Feedback Hierarchy (most → least urgent)

| Level | Pattern | Duration | Example |
|-------|---------|----------|---------|
| **Persistent** | Status indicator in header/toolbar | Always visible | "All synced ✓" / "Saving..." |
| **Toast** | Slide-in notification, bottom-right | 4s auto-dismiss | "Price updated for 12 listings" |
| **Inline** | Contextual message near action | Until resolved | Red border + message on failed field |
| **Modal** | Blocking confirmation | Until user acts | "Delete 5 listings? This cannot be undone." |
| **Celebration** | Subtle animation on element | 1.5s | Gold shimmer on KPI when new record |

#### Transition Language

| Action | Animation | Duration | Feel |
|--------|-----------|----------|------|
| Page switch | Content fade + slide up | 200ms | Swift, confident |
| Side panel open | Slide from right | 250ms | Smooth reveal |
| Dropdown open | Scale from origin + fade | 150ms | Snappy |
| Save confirmation | Checkmark morph | 300ms | Satisfying completion |
| Error appearance | Gentle shake + red highlight | 200ms | Attention without alarm |
| Loading | Skeleton shimmer | Continuous | Content is coming |
| Undo toast | Slide up from bottom | 350ms | Recoverable |

### 5.4 Trust Signals System

| Signal | Where | Pattern |
|--------|-------|---------|
| **Sync status** | Header (always visible) | Green dot "Synced" / Yellow pulse "Syncing" / Red "Error [Fix]" |
| **Autosave** | Listings toolbar | "All changes saved ✓" persistent pill |
| **Undo** | After any destructive action | "Undo" toast, 10s window |
| **Data count** | Listings, Orders tables | "247 listings · showing 1-50" |
| **Last updated** | Dashboard KPIs | "Updated 2 min ago" muted text |
| **Conflict resolution** | Sync conflicts | "Etsy price differs. [Keep Dodgeprint] [Keep Etsy] [Compare]" |

### 5.5 Progressive Disclosure Levels

| Level | Who | What's Visible | Hidden Behind |
|-------|-----|----------------|---------------|
| **L1: Essential** | Everyone | Core data, primary actions | Always shown |
| **L2: Contextual** | On interaction | Filters, secondary actions, details | Click/hover to reveal |
| **L3: Power** | On demand | Keyboard shortcuts, API, advanced filters | "Advanced" toggle, settings |
| **L4: Expert** | Opt-in | Custom columns, bulk regex, API keys | Settings enable |

### 5.6 Empty States Language

| Screen | Empty State Message | CTA | Tone |
|--------|-------------------|-----|------|
| Dashboard | "Connect your first shop to see your metrics" | "Connect Shop" | Inviting |
| Listings | "No listings yet. Import from your shop or create your first listing." | "Import" / "Create" | Encouraging |
| Orders | "Orders will appear here once your shops are connected and synced." | "Check Sync Status" | Informative |
| Research | "Enter a keyword to discover opportunities" | Search input focused | Ready to go |
| POD Library | "Your design library is empty. Upload your first design." | "Upload Design" | Creative |
| Analytics | "We need at least 7 days of data to show trends." | "View Dashboard" | Patient |

### 5.7 Error Language

| Severity | Pattern | Tone | Example |
|----------|---------|------|---------|
| **Info** | Blue inline, auto-dismiss | Neutral | "2 listings skipped (already up to date)" |
| **Warning** | Gold toast, needs acknowledgment | Advisory | "Etsy rate limit reached. Sync will resume in 5 min." |
| **Error** | Red inline + action | Helpful | "Failed to sync Shop A. [Retry] [View Error Log]" |
| **Critical** | Red banner, top of page | Urgent but calm | "Your Etsy token expired. [Reconnect Etsy] to resume sync." |

**Rules:**
- Never use "Oops!" or "Something went wrong" — be specific
- Always include a recovery action (retry, fix, contact support)
- Show what happened, why, and what to do next
- Never blame the user

### 5.8 Loading States Strategy

| Context | Pattern | Rule |
|---------|---------|------|
| Page load | Skeleton screens (not spinner) | Match content layout shapes |
| Table data | Skeleton rows (5 rows) | Same column widths as real data |
| AI operations | Progress bar + estimate | "Analyzing... ~15s remaining" |
| Sync | Header pulse + status text | Non-blocking, background |
| Bulk operations | Progress count + cancel | "23/47 updated [Cancel]" |
| Image upload | Thumbnail placeholder + progress | Optimistic preview |

### 5.9 Color Emotional Mapping

| Emotion | Color | Usage |
|---------|-------|-------|
| Success / Synced / Growth | Sage #4A7C59 | Sync indicators, positive trends, completed actions |
| Reward / Achievement / Opportunity | Gold #D4A843 | Milestones, high-value discoveries, personal bests |
| Urgency / CTA / Attention | Coral #E8734A | Primary CTAs, alerts needing action, declining metrics |
| Error / Danger / Critical | Danger #D4564A | Sync failures, destructive action confirmations |
| Info / Neutral | Info #5B8DB8 | Help tooltips, non-urgent info, links |
| Calm / Default | Cream #F6F4F0 | Background, resting state |
| Focus / Active | White #FFFFFF | Cards, active areas, content surface |

### 5.10 Voice & Copy Principles

| Principle | Do | Don't |
|-----------|----|----- |
| **Be specific** | "Updated price for 12 listings on Etsy" | "Changes saved" |
| **Be actionable** | "Sync failed. [Retry now]" | "Sync error occurred" |
| **Be calm** | "Your Etsy token needs renewal" | "ERROR: Authentication failed!!" |
| **Be brief** | "47 selected" | "You have selected 47 items" |
| **Be honest** | "Import may take 2-3 minutes for 500+ listings" | "Lightning fast import!" |
| **Celebrate quietly** | Gold shimmer on KPI, no popup | "CONGRATULATIONS! 🎉🎉🎉" |

---

## 6. PSYCH-Informed Component Patterns

### 6.1 The "Confidence Bar" (NEW component)
Persistent toolbar in Listings/Orders showing:
```
[All synced ✓] [247 listings] [12 selected] [Last saved: just now] [Undo available]
```
Always visible, always calm. This is the #1 Psych booster for pro sellers.

### 6.2 The "Recovery Toast" (NEW pattern)
After any destructive/bulk action:
```
┌─────────────────────────────────────┐
│ ✓ Price updated for 12 listings     │
│                           [Undo]    │
│ ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░░░ 8s remaining │
└─────────────────────────────────────┘
```
Disappears after 10s. Undo reverses action. Eliminates #1 anxiety source.

### 6.3 The "Insight Card" (NEW pattern)
In Dashboard/Analytics, AI-generated actionable insight:
```
┌─────────────────────────────────────┐
│ 💡 Insight                          │
│ "Vintage jewelry" keywords are      │
│ trending +34% this week. You have   │
│ 12 listings in this niche.          │
│           [View Listings] [Dismiss] │
└─────────────────────────────────────┘
```
Max 1 per page load. Dismissible. Not annoying.

### 6.4 The "Sync Pulse" (NEW pattern)
Header sync indicator with states:
- 🟢 `All synced` — calm, no animation
- 🟡 `Syncing 3 shops...` — gentle pulse animation
- 🔴 `1 sync error` — static red, click to expand details + fix

### 6.5 The "Smart Empty" (NEW pattern)
Empty states that help, not just inform:
- Show what WOULD be here with skeleton + overlay message
- Include the exact next step as a button
- For returning users: "You had 47 listings last time. [Re-import]"

---

## 7. Implementation Priority

| Priority | What | Impact | Effort |
|----------|------|--------|--------|
| P0 | Confidence Bar (autosave + sync + undo) in Listings | +5 Psych | Medium |
| P0 | Recovery Toast (undo pattern) across all screens | +4 Psych | Low |
| P0 | Virtual scrolling for 500+ row tables | +5 Psych (prevents -10 from lag) | High |
| P1 | Skeleton loading states (all screens) | +2 Psych | Medium |
| P1 | Sync Pulse in header | +3 Psych | Low |
| P1 | Smart Empty states (all screens) | +2 Psych | Low |
| P1 | Onboarding transparency ("What we access") | +3 Psych | Low |
| P2 | Keyboard shortcuts (Listings) | +3 Psych for power users | Medium |
| P2 | Bulk action confirmation + progress | +3 Psych | Medium |
| P2 | Insight Cards (Dashboard, Analytics) | +3 Psych | Medium |
| P2 | Listing Optimizer positive framing | +2 Psych | Low |
| P3 | Milestone celebrations (subtle) | +2 Psych | Low |
| P3 | Error language system | +2 Psych | Low |

---

## 8. Next Steps

1. Update `docs/design-guidelines.md` with PSYCH Design Language section
2. Update all 9 wireframe HTML files with PSYCH-informed patterns
3. Integrate into implementation plan

---

## Sources
- [Psych'd Framework — Andrew Chen](https://andrewchen.com/psychd-funnel-conversion/)
- [Darius Contractor — Increase funnel conversion](https://darius.com/increase-funnel-conversion-with-psych-7378d51c4caf)
- [PSYCH Framework — UX Collective](https://bootcamp.uxdesign.cc/psych-framework-d426891d3960)
- [LogRocket — What is the Psych framework?](https://blog.logrocket.com/product-management/psych-framework-definition/)
- [Growth.design — 106 Cognitive Biases](https://growth.design/psychology)
- [Psychology in UX Design 2026 — Medium](https://medium.com/design-bootcamp/psychology-in-ux-design-2026-25-examples-to-improve-ui-and-the-experience-2bea4a9ad84f)
