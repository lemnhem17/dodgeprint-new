# Phase 3: Order Fulfillment Flow

## Context
- Source: March 2025 (tracking upload), v1.5.3 (send to supplier, upload designs), v1.5.5 (auto-sync tracking)
- Target: `docs/wireframes/05-orders.html`
- Current state: Order detail sidebar has basic Fulfillment section (tracking number input, carrier select, "Mark as Shipped" button). No supplier integration, no design upload, no sync status.

## Overview
- Priority: HIGH
- Status: Pending
- Effort: 2h

## What Exists (05-orders.html, ~line 559-585)
- Fulfillment section header
- Tracking number input (pre-filled "1Z999AA...")
- Carrier dropdown (UPS/USPS/FedEx/DHL)
- "Mark as Shipped" + "Print Label" buttons
- Order timeline section below

## Requirements

### 1. Send to Supplier Action
Add "Send to Supplier" section above existing fulfillment:

- **Supplier selector dropdown**: list connected suppliers (Merchize, Printify, Gelato, etc.)
- **"Send Order" button** (btn-primary)
- **Status badges**: Not Sent / Sent / Processing / Completed / Failed
- Show supplier response status after sending

### 2. Upload Designs to Orders
Add design upload area within order detail:

- **Design files section** between items list and fulfillment
- Drag-and-drop zone or "Upload Design" button
- Thumbnails of uploaded design files (PSD/PNG/SVG)
- Per-item design assignment (which design goes to which product)
- Status: No Design / Uploaded / Sent to Supplier

### 3. Tracking Sync Status
Enhance existing tracking section:

- **Sync status indicator** next to tracking number:
  - Auto-synced (green dot + "Synced to Etsy")
  - Pending sync (yellow dot + "Syncing...")
  - Manual (gray dot + "Manual entry")
  - Failed (red dot + "Sync failed — Retry")
- **"Upload Tracking" bulk action** in main orders table toolbar (CSV upload)
- **Tracking source label**: "From Supplier" vs "Manual"

### 4. Fulfillment Status Column in Orders Table
Add column to main orders table:

- Column: "Fulfillment" between Status and Total columns
- Values: Unfulfilled / Sent to Supplier / In Production / Shipped / Delivered
- Color-coded badges matching existing status pattern
- Filter dropdown for fulfillment status

### 5. Bulk Fulfillment Actions
In orders table toolbar (multi-select):

- "Send to Supplier" bulk action (select orders → choose supplier → send)
- "Upload Tracking" bulk action (CSV with order_id + tracking_number)
- "Mark as Shipped" bulk action

## Implementation Steps

1. Open `05-orders.html`, locate order detail sidebar (~line 500+)
2. Add "Supplier Fulfillment" section before existing Fulfillment:
   - Supplier dropdown + Send Order button + status badge
3. Add "Design Files" section between items and fulfillment:
   - Upload zone + thumbnail grid + per-item assignment
4. Enhance existing tracking section with sync status indicators
5. Add "Fulfillment" column to main orders table header + rows
6. Add bulk action buttons to table toolbar (alongside existing select-all)
7. Add "Upload Tracking" modal (CSV upload pattern)

## Todo
- [x] Supplier fulfillment section (dropdown, send, status)
- [x] Design upload area with thumbnails
- [x] Tracking sync status indicators
- [x] Fulfillment column in orders table
- [x] Bulk actions (send to supplier, upload tracking, mark shipped)
- [x] Upload Tracking CSV modal

## Success Criteria
- Full fulfillment lifecycle visible: upload design → send to supplier → track → sync
- Bulk operations available for multi-order management
- Sync status clearly indicates tracking source and sync state
