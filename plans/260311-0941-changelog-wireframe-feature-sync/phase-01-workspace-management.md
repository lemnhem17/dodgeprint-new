# Phase 1: Workspace Management

## Context
- Source: April 2025 changelog — Workspace Management (create business ws, roles, invite/remove, shared resources, user groups)
- Target: `docs/wireframes/09-settings.html`, `docs/wireframes/_shared-navigation.js`
- Current state: Basic "Team Members" tab exists (Owner/Admin roles, invite button, 2 member cards)

## Overview
- Priority: HIGH
- Status: Pending
- Effort: 3h

## What Exists
- Settings tab "Team" with invite button, 2 member cards (Owner, Admin)
- No workspace concept, no groups, no shared resources, no role granularity

## Requirements

### 1. Add "Workspace" settings tab (09-settings.html)
Add new tab between existing tabs. Content:

**Workspace Info Card:**
- Workspace name (editable), type badge (Personal/Business), member count
- "Create New Workspace" button
- Workspace avatar/initials

**Create Business Workspace Modal:**
- Name input, description, type selector (Personal/Business)
- Confirm button

### 2. Enhance Team Members tab (09-settings.html)
Upgrade existing Team Members section:

**Role granularity:**
- Roles: Owner, Manager, Member (not just Owner/Admin)
- Role dropdown per member card
- Permissions summary per role

**Invite flow:**
- Email input + role selector in invite modal
- Pending invitations list with resend/revoke

**Remove member:**
- Remove button with confirmation on each member card

### 3. Add User Groups section (09-settings.html)
New section within Team tab or as sub-tab:

- Groups list (cards with name, member count, description)
- "Create Group" button → modal with name, select members
- Edit/delete group actions

### 4. Add Shared Resources section (09-settings.html)
New section or tab:

- Resource types: Sites, Variations, Descriptions, Tags, Templates
- Table per type: resource name, shared with (users/groups), permission (View/Edit)
- Share modal: select resource → select users/groups → set permission
- Quick toggle View ↔ Edit

### 5. Workspace Switcher in Nav (_shared-navigation.js)
Add workspace switcher dropdown to top nav area (near account menu):

- Current workspace name displayed
- Dropdown list: all workspaces with type badge (PERSONAL/BUSINESS/ACTIVE) + member count
- "+ Create New Workspace" at bottom
- Highlight active workspace

## Implementation Steps

1. Open `09-settings.html`, locate settings tabs list (~line 170)
2. Add "Workspace" tab button after existing tabs
3. Create `#stab-workspace` panel with workspace info card + create modal
4. Enhance `#stab-team` panel: add role dropdown (Owner/Manager/Member), invite modal with role, pending invitations, remove buttons
5. Add User Groups sub-section in team panel
6. Add Shared Resources section (new panel or sub-section)
7. Open `_shared-navigation.js`, add workspace switcher component near account menu
8. Use existing design tokens: `card-static`, `btn-primary`, `btn-ghost`, modal patterns from `_shared-navigation.js`

## Todo
- [ ] Add Workspace tab to settings tabs
- [ ] Workspace info card + Create Workspace modal
- [ ] Enhance Team Members with 3-tier roles + invite modal + remove
- [ ] Add User Groups section
- [ ] Add Shared Resources table
- [ ] Workspace Switcher in shared nav

## Success Criteria
- All 4 workspace features visible in settings wireframe
- Workspace switcher functional in nav dropdown
- Consistent with Ocean Blue design tokens
