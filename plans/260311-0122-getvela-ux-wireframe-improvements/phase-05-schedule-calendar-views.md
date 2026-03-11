# Phase 5: Schedule & Calendar Views

## Context Links
- Source: `docs/getvela/getvela-ux-research.md` Section 8.4 (E1-E3)
- Getvela schedule: `docs/getvela/getvela-ux-research.md` Section 3 (Schedule feature)
- Design system: `docs/design-guidelines.md` — Schedule/Calendar component pattern
- Depends on: Phase 1 (breadcrumb, empty state components)

## Overview
- **Priority:** P2
- **Status:** Complete
- **Effort:** 2h

DodgePrint currently has no dedicated schedule screen. Getvela's schedule is a core feature (auto-publish/update listings at specific times). Decision: add a Schedule section as a **new content area within `03-dashboard.html`** (expandable widget) AND create a full calendar view accessible via sidebar nav. Since the dashboard already exists and has calendar mentions in the design system, embedding the schedule widget there is the most natural fit. The full calendar view opens as a modal or dedicated section.

**Final decision:** Add schedule as a prominent widget on `03-dashboard.html` with an "Open Full Calendar" action that expands to a full-page calendar overlay/modal.

## Key Insights
- Getvela only has 2-week view — DodgePrint should offer day/week/month
- Drag-to-schedule (E2) is a medium priority nice-to-have
- Timezone indicator (E3) is important for international sellers
- Design guidelines already define calendar colors: sage (active), gold (pending), coral (urgent), purple (special)
- Skip E4 (recurring schedule) — Low priority

## UX Improvements Applied

| ID | Improvement | Implementation |
|----|-------------|----------------|
| E1 | Multiple calendar views | Day / Week / Month toggle buttons above calendar grid |
| E2 | Drag-to-schedule | Visual drag handle on unscheduled listings sidebar; drop targets on calendar cells |
| E3 | Timezone indicator | Small timezone badge in calendar header: "PST (UTC-8)" |

## Related Code Files

### Modified
- `docs/wireframes/03-dashboard.html` — add schedule widget + full calendar overlay

## Implementation Steps

### 1. Schedule Widget on Dashboard

Add as a card below existing KPI row on `03-dashboard.html`:

```html
<!-- Schedule Widget -->
<div class="card-static rounded-xl p-5 mb-5">
  <div class="flex items-center justify-between mb-4">
    <div>
      <h3 class="text-sm font-bold">Upcoming Schedule</h3>
      <p class="text-xs mt-0.5" style="color:var(--text-tertiary)">Next 7 days</p>
    </div>
    <div class="flex items-center gap-2">
      <!-- Timezone indicator (E3) -->
      <span class="text-xs px-2 py-1 rounded-md" style="background:var(--bg-muted);color:var(--text-tertiary)">
        <i data-lucide="globe" class="w-3 h-3 inline mr-0.5"></i> PST (UTC-8)
      </span>
      <button class="btn-ghost px-3 py-1.5 text-xs font-medium" onclick="openModal('calendarModal')">
        <i data-lucide="calendar" class="w-3.5 h-3.5 mr-1"></i> Full Calendar
      </button>
    </div>
  </div>

  <!-- Mini schedule list -->
  <div class="space-y-2">
    <div class="flex items-center gap-3 p-2.5 rounded-lg" style="background:var(--bg-muted)">
      <div class="text-center flex-shrink-0" style="width:40px">
        <div class="text-xs font-bold" style="color:var(--brand-primary)">Mar</div>
        <div class="text-lg font-extrabold">12</div>
      </div>
      <div class="flex-1">
        <div class="text-xs font-semibold">Publish 5 Spring Collection listings</div>
        <div class="text-xs" style="color:var(--text-tertiary)">9:00 AM · Etsy — CozyPrints</div>
      </div>
      <span class="status-pending">Scheduled</span>
    </div>
    <div class="flex items-center gap-3 p-2.5 rounded-lg" style="background:var(--bg-muted)">
      <div class="text-center flex-shrink-0" style="width:40px">
        <div class="text-xs font-bold" style="color:var(--brand-primary)">Mar</div>
        <div class="text-lg font-extrabold">14</div>
      </div>
      <div class="flex-1">
        <div class="text-xs font-semibold">Price update: Holiday Mugs -15%</div>
        <div class="text-xs" style="color:var(--text-tertiary)">12:00 PM · All Shops</div>
      </div>
      <span class="status-pending">Scheduled</span>
    </div>
    <div class="flex items-center gap-3 p-2.5 rounded-lg" style="background:var(--bg-muted)">
      <div class="text-center flex-shrink-0" style="width:40px">
        <div class="text-xs font-bold" style="color:var(--brand-primary)">Mar</div>
        <div class="text-lg font-extrabold">17</div>
      </div>
      <div class="flex-1">
        <div class="text-xs font-semibold">AI optimization: 23 listings</div>
        <div class="text-xs" style="color:var(--text-tertiary)">6:00 AM · Shopify</div>
      </div>
      <span class="status-synced">Confirmed</span>
    </div>
  </div>

  <!-- Empty state alternative -->
  <!--
  <div class="empty-state">
    <div class="empty-state-icon" style="background:var(--brand-primary-bg)">
      <i data-lucide="calendar-plus" class="w-7 h-7" style="color:var(--brand-primary)"></i>
    </div>
    <div class="empty-state-title">No scheduled actions</div>
    <div class="empty-state-desc">Schedule listing publishes, price updates, or AI optimizations to run automatically.</div>
    <button class="btn-primary px-4 py-2 text-xs font-semibold">
      <i data-lucide="plus" class="w-3.5 h-3.5 mr-1"></i> Schedule Action
    </button>
  </div>
  -->
</div>
```

### 2. Full Calendar Modal (E1)

Add a modal overlay with month/week/day views:

```html
<div class="modal-overlay" id="calendarModal">
  <div class="rounded-xl" style="background:var(--bg-card);width:900px;max-height:85vh;overflow:hidden;border:1px solid var(--border)">

    <!-- Calendar header -->
    <div class="flex items-center justify-between p-4 border-b" style="border-color:var(--border)">
      <div class="flex items-center gap-3">
        <button onclick="closeModal('calendarModal')" style="color:var(--text-secondary)">
          <i data-lucide="x" class="w-5 h-5"></i>
        </button>
        <h2 class="text-base font-bold">Schedule Calendar</h2>
        <!-- Timezone (E3) -->
        <span class="text-xs px-2 py-0.5 rounded-md" style="background:var(--bg-muted);color:var(--text-tertiary)">
          PST (UTC-8)
        </span>
      </div>
      <div class="flex items-center gap-2">
        <!-- View toggle (E1) -->
        <div class="flex items-center gap-0.5 p-0.5 rounded-lg" style="background:var(--bg-muted)">
          <button class="cal-view-btn active" onclick="switchCalView(this,'day')">Day</button>
          <button class="cal-view-btn" onclick="switchCalView(this,'week')">Week</button>
          <button class="cal-view-btn" onclick="switchCalView(this,'month')">Month</button>
        </div>
        <!-- Month navigation -->
        <div class="flex items-center gap-1 ml-3">
          <button class="btn-ghost px-2 py-1"><i data-lucide="chevron-left" class="w-4 h-4"></i></button>
          <span class="text-sm font-semibold px-2">March 2026</span>
          <button class="btn-ghost px-2 py-1"><i data-lucide="chevron-right" class="w-4 h-4"></i></button>
        </div>
        <button class="btn-ghost px-3 py-1.5 text-xs font-medium ml-2">Today</button>
      </div>
    </div>

    <!-- Calendar body — Month view (default) -->
    <div class="p-4 overflow-y-auto" style="max-height:calc(85vh - 70px)" id="calendarBody">
      <!-- Month grid -->
      <div class="grid grid-cols-7 gap-0 border rounded-lg overflow-hidden" style="border-color:var(--border)">
        <!-- Day headers -->
        <div class="cal-header">Sun</div>
        <div class="cal-header">Mon</div>
        <div class="cal-header">Tue</div>
        <div class="cal-header">Wed</div>
        <div class="cal-header">Thu</div>
        <div class="cal-header">Fri</div>
        <div class="cal-header">Sat</div>

        <!-- Week 1 — previous month days grayed -->
        <div class="cal-day dim">23</div>
        <div class="cal-day dim">24</div>
        <div class="cal-day dim">25</div>
        <div class="cal-day dim">26</div>
        <div class="cal-day dim">27</div>
        <div class="cal-day dim">28</div>
        <div class="cal-day">1</div>

        <!-- Week 2 -->
        <div class="cal-day">2</div>
        <div class="cal-day">3</div>
        <div class="cal-day">4</div>
        <div class="cal-day">5</div>
        <div class="cal-day">6</div>
        <div class="cal-day">7</div>
        <div class="cal-day">8</div>

        <!-- Week 3 — with events -->
        <div class="cal-day">9</div>
        <div class="cal-day">10</div>
        <div class="cal-day today">
          11
          <div class="cal-event sage">2 publishes</div>
        </div>
        <div class="cal-day">
          12
          <div class="cal-event sage">5 listings</div>
        </div>
        <div class="cal-day">13</div>
        <div class="cal-day">
          14
          <div class="cal-event gold">Price update</div>
        </div>
        <div class="cal-day">15</div>

        <!-- Week 4 -->
        <div class="cal-day">16</div>
        <div class="cal-day">
          17
          <div class="cal-event coral">AI optimize</div>
        </div>
        <div class="cal-day">18</div>
        <div class="cal-day">19</div>
        <div class="cal-day">20</div>
        <div class="cal-day">
          21
          <div class="cal-event sage">3 publishes</div>
        </div>
        <div class="cal-day">22</div>

        <!-- Week 5 -->
        <div class="cal-day">23</div>
        <div class="cal-day">24</div>
        <div class="cal-day">
          25
          <div class="cal-event purple">Seasonal sale</div>
        </div>
        <div class="cal-day">26</div>
        <div class="cal-day">27</div>
        <div class="cal-day">28</div>
        <div class="cal-day">29</div>

        <!-- Remaining -->
        <div class="cal-day">30</div>
        <div class="cal-day">31</div>
        <div class="cal-day dim">1</div>
        <div class="cal-day dim">2</div>
        <div class="cal-day dim">3</div>
        <div class="cal-day dim">4</div>
        <div class="cal-day dim">5</div>
      </div>

      <!-- Legend -->
      <div class="flex items-center gap-4 mt-3 text-xs" style="color:var(--text-tertiary)">
        <span><span class="inline-block w-2 h-2 rounded-full mr-1" style="background:var(--brand-primary)"></span>Publish</span>
        <span><span class="inline-block w-2 h-2 rounded-full mr-1" style="background:var(--brand-secondary)"></span>Price Update</span>
        <span><span class="inline-block w-2 h-2 rounded-full mr-1" style="background:var(--brand-accent)"></span>AI Optimize</span>
        <span><span class="inline-block w-2 h-2 rounded-full mr-1" style="background:var(--purple)"></span>Special</span>
      </div>
    </div>
  </div>
</div>
```

### 3. Calendar CSS (page-scoped `<style>`)

```css
.cal-view-btn {
  padding: 4px 12px; border-radius: 6px; border: none;
  font-size: 12px; font-weight: 500; cursor: pointer;
  background: transparent; color: var(--text-secondary);
  transition: all 0.12s;
}
.cal-view-btn.active {
  background: var(--bg-card); color: var(--text-primary);
  box-shadow: var(--shadow-sm);
}
.cal-header {
  padding: 8px; text-align: center;
  font-size: 11px; font-weight: 600;
  color: var(--text-tertiary);
  background: var(--bg-muted);
  border-bottom: 1px solid var(--border);
}
.cal-day {
  min-height: 80px; padding: 6px 8px;
  font-size: 12px; font-weight: 600;
  border: 0.5px solid var(--border-light);
  color: var(--text-primary);
  cursor: pointer; transition: background 0.1s;
}
.cal-day:hover { background: var(--bg-muted); }
.cal-day.dim { color: var(--text-tertiary); }
.cal-day.today {
  background: var(--brand-primary-bg);
  font-weight: 700;
}
.cal-event {
  font-size: 10px; font-weight: 500;
  padding: 2px 6px; border-radius: 4px;
  margin-top: 4px; cursor: pointer;
  white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
}
.cal-event.sage { background: var(--success-bg); color: var(--success); }
.cal-event.gold { background: var(--brand-secondary-bg); color: var(--brand-secondary); }
.cal-event.coral { background: var(--danger-bg); color: var(--danger); }
.cal-event.purple { background: var(--purple-bg); color: var(--purple); }
```

### 4. Drag-to-Schedule Visual (E2)

Add a small sidebar inside the calendar modal for unscheduled items:

```html
<!-- Inside calendar modal, left of the grid -->
<div class="flex gap-4">
  <!-- Unscheduled listings sidebar -->
  <div class="flex-shrink-0" style="width:180px">
    <div class="text-xs font-semibold mb-2" style="color:var(--text-secondary)">Unscheduled</div>
    <div class="space-y-1.5">
      <div class="drag-listing p-2 rounded-lg border text-xs cursor-grab"
        style="border-color:var(--border)" draggable="true">
        <div class="font-medium truncate">New Mug Design</div>
        <div style="color:var(--text-tertiary)">Ready to publish</div>
      </div>
      <div class="drag-listing p-2 rounded-lg border text-xs cursor-grab"
        style="border-color:var(--border)" draggable="true">
        <div class="font-medium truncate">Spring T-Shirts (4)</div>
        <div style="color:var(--text-tertiary)">Draft</div>
      </div>
    </div>
  </div>
  <!-- Calendar grid goes here -->
</div>
```

### 5. View Switching JS

```js
function switchCalView(btn, view) {
  document.querySelectorAll('.cal-view-btn').forEach(function(b) { b.classList.remove('active'); });
  btn.classList.add('active');
  // In wireframe: show/hide different pre-built views or just visual toggle
  showToast('Switched to ' + view + ' view', 'info');
}
```

## Todo List

- [x] Add schedule widget card to `03-dashboard.html` below KPI row
- [x] Add schedule widget empty state (commented alternative)
- [x] Add timezone indicator badge
- [x] Build full calendar modal with month grid
- [x] Add day/week/month view toggle buttons
- [x] Add calendar event blocks with color coding (sage/gold/coral/purple)
- [x] Add month navigation (prev/next/today)
- [x] Add unscheduled listings sidebar with draggable items
- [x] Add calendar CSS (cal-day, cal-event, cal-view-btn, etc.)
- [x] Add legend below calendar
- [x] Add dark mode verification for calendar grid
- [x] Wire "Full Calendar" button to open modal

## Success Criteria

- Dashboard shows schedule widget with 3 upcoming scheduled actions
- "Full Calendar" button opens modal with month grid view
- Day/Week/Month toggle buttons switch (visual only in wireframe)
- Calendar cells show colored event blocks matching design system colors
- Timezone badge shows "PST (UTC-8)"
- Today cell has highlighted background
- Previous/next month days are dimmed
- Unscheduled listings sidebar shows draggable items
- Dark mode fully supported

## Risk Assessment

- **Low:** Week and day views not fully built — month view is the primary wireframe, day/week can be simplified placeholders
- **Low:** Drag-to-schedule is visual-only; no actual drop handler needed for wireframe
