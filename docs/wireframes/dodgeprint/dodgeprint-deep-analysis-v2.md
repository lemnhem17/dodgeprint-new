# DodgePrint Deep UI/UX Analysis v2.0
**Phân tích chi tiết từ 43 screenshots - Audit sâu về Architecture, Features & Metrics**

**Ngày phân tích:** 11/03/2026
**Version:** v1.6.0 (Feb 11, 2026)
**Platform:** app.dodgeprint.com
**Tất cả screenshots:** dp-v2-01 đến dp-v2-43

---

## 1. Tổng quan nền tảng

### 1.1 Platform Overview & Tech Stack

DodgePrint là **all-in-one product creation & fulfillment management platform** cho e-commerce sellers. Nền tảng tích hợp 5 marketplace lớn (Etsy, Shopify, TikTok, Amazon, WooCommerce) trong một dashboard thống nhất, cho phép sellers:

- **Tạo & quản lý sản phẩm** với AI-powered design generation (PSD files)
- **Quản lý multi-shop** (hiện tại: max 1-3 shops tùy plan)
- **Fulfillment & suppliers** (Gelato, custom suppliers via Google Sheets)
- **Cross-platform listing** (Deploy sang nhiều shop một lúc)
- **Analytics & reporting** (Etsy competitive intelligence, P&L tracking)
- **Developer API** (Webhooks, API tokens, request logging)

### 1.2 Design System & Visual Language

**Color Palette:**
- Primary Green: `#4CAF50` / `#00C9A7` (CTAs, active states, success)
- Brand Orange/Yellow: `#FFC107` (Logo, highlights, accent)
- Background: `#F8F9FA` (Main content), `#FFFFFF` (Cards, sidebar)
- Text Primary: `#333333`, Secondary: `#888888`
- Status colors: Green (✓ Success), Red (✗ Failed), Blue (ℹ Info), Yellow/Orange (⚠ Warning)
- Borders: Subtle gray `rgba(0,0,0,0.1)`

**Typography:**
- Font family: Sans-serif system stack (clean, modern)
- Hierarchy: H1 (24-28px), H2 (18-20px), Labels (12-14px)
- Weight variations: Regular (400), Medium (500), Bold (700)

**Layout & Spacing:**
- Fixed left sidebar: ~210px width with icons + labels
- Main content area: Responsive, card-based layout
- Padding: 16px-24px standard spacing
- Border radius: 8-12px for cards/buttons
- Shadows: Subtle box-shadows (0 2px 4px rgba(0,0,0,0.08))

**Version Info:**
- Current: v1.6.0
- Release date: Feb 11, 2026
- Display location: Footer of sidebar + What's New section

---

## 2. Kiến trúc Multi-workspace

### 2.1 Workspace Types & Structure

Nền tảng hỗ trợ 3 loại workspace:

| Loại | Mô tả | Ví dụ |
|------|-------|-------|
| **PERSONAL** | Workspace cá nhân, 1 member | "Alwys's Workspace" |
| **BUSINESS** | Team workspace, multiple members | "ALWYS" (3 members) |
| **ACTIVE** | Workspace currently active | "Lomo" (11 members) |

### 2.2 Workspace Switcher (dp-v2-03)

Location: Top-right account menu
Current workspace displayed: "Lomo"

**Features:**
- Quick switch giữa các workspace
- Hiển thị member count mỗi workspace
- "+ Create New Workspace" button
- Visual distinction: PERSONAL / BUSINESS / ACTIVE labels

**User in analysis:**
- Name: "Alwys Co"
- Email: connect@pinesync.com
- Active workspace: "Lomo" (11 members)
- Các workspace khác: "Alwys's Workspace" (1), "ALWYS" (3)

### 2.3 Account Management

**Account Popup Menu (dp-v2-02):**
- Account profile link
- Billing link
- Timezone setting
- Log out

**Profile Details (dp-v2-34):**
- Avatar: "AC" (initials)
- Full Name: "Alwys" + "Co"
- Email: connect@pinesync.com
- Status: "Active" (badge)
- Roles: User (dropdown)
- Sites section: 0/0 shops (Free plan limit)
- Change Password: Available

---

## 3. Kiến trúc Multi-shop & Multi-platform

### 3.1 Platform Integration Matrix

DodgePrint hỗ trợ **5 platforms chính** với các tính năng đặc thù:

| Platform | Status | Features | Quota (Free) | Quota (Starter) |
|----------|--------|----------|--------------|-----------------|
| **Etsy** | ✓ Full | Listings, Shipping Profiles, Personalizations, Analytics | 0/1 shop | 1/1 shop |
| **Shopify** | ✓ Full | Products, Collections | 0/1 shop | 1/1 shop |
| **TikTok** | ✓ Full | TikTok Shipping Labels, Shipping Packages | 0/1 shop | 1/1 shop |
| **Amazon** | ✓ Full | Bullet Points, Keywords, P&L Tracking | 0/1 shop | 1/1 shop |
| **WooCommerce** | ✓ New (v1.6.0) | Product sync | 0/0 | 1/0 |

### 3.2 Shop Management (dp-v2-21, dp-v2-22)

**Shops List View:**
- Tabs: All Platforms / Etsy / Shopify / TikTok / Amazon
- Shop cards showing:
  - Shop name
  - VIEWS count (e.g., "NastyJamz" shop visible)
  - Sync times (last synced timestamp)
  - Shared member avatars (team collaboration)
  - Connection status

**Add Shop Dropdown (dp-v2-22):**
```
Etsy        [CONNECT]
Shopify     [CONNECT]
TikTok      [CONNECT]
Amazon      [CONNECT]
WooCommerce [CONNECT]
```

**Example Shop in Analysis:**
- Shop: "NastyJamz" (Etsy)
- Status: Connected, active
- Visible in: Orders, Deployments, Analytics

### 3.3 Per-Shop Pricing Model

Pricing tier mỗi shop, tính cộng dồn:

**Free Plan:**
- Shops: 0/1 per platform (tối đa 3 shops total)
- Products: 0/300
- Orders: 0/50
- Listings: 0/100

**Starter ($8/mo per shop):**
- Shops: 1/1 per platform
- Products: 2000
- Listings: 1000
- Orders: 500 per shop/month
- Features: AI-Powered SEO

**Professional ($15/mo per shop):** [Most Popular]
- Shops: 1/1 per platform
- Products: 5000
- Listings: 3000
- Orders: 1500 per shop/month
- Features: Etsy Market Research, API access

**Enterprise (Custom):**
- Unlimited everything
- 24/7 phone support
- SLA guarantee
- Amazon campaigns included

**Multi-shop Pricing (dp-v2-43):**
- Ví dụ: 6 shops selected
- Starter: 6 × $8 = $48/mo hoặc $480/yr (save 17%)
- Professional: 6 × $15 = $90/mo hoặc $900/yr

---

## 4. Hệ thống Navigation & Layout

### 4.1 Sidebar Navigation Structure (dp-v2-01)

**Fixed left sidebar (210px)** với hierarchical sections:

```
┌─ MAIN
│  ├─ Home
│  └─ Dashboard
│
├─ CATALOGS
│  ├─ Products
│  ├─ Collections
│  ├─ Designs
│  └─ AI Generator [New]
│
├─ MARKETPLACES
│  └─ Shops
│
├─ FULFILLMENT
│  ├─ Orders
│  └─ Suppliers
│
├─ REPORTS
│  └─ Deployments
│
├─ GROWTH TOOLS
│  └─ Etsy Analytics [New]
│
├─ CONFIGURATION
│  └─ Templates
│
└─ HELPS
   ├─ Documentation
   ├─ Join Discord
   ├─ Tools (submenu)
   ├─ What's New!
   ├─ Version v1.6.0
   └─ Account
```

### 4.2 Top Navigation Bar

**Left side:** Platform logo + home link
**Center:** Page title breadcrumb
**Right side:**

```
[1,000 Credits] [Upgrade Plan] [🔔 Notifications] [Workspace: Lomo ▼]
```

Features:
- Credits display with quick access popup (dp-v2-04)
- Upgrade CTA button (prominent purple)
- Notifications bell with badge count
- Workspace switcher dropdown

### 4.3 Notifications System (dp-v2-05, dp-v2-06)

**Notifications Panel:**
- Tabs: View all / Shares / Invites / Others
- Filter: All / Unread
- Shows order-related notifications from multiple shops:
  - NastyJamz (multiple orders)
  - LittleThingsOutHere
  - Noctelledesign
  - PipayaStore
  - ShirtLolo
  - kindacoolright (some suspended)

**Notification Types:**
- Order received
- Shop status updates
- Team collaboration shares
- Workspace invitations

---

## 5. Dashboard & Analytics System

### 5.1 Dashboard Overview (dp-v2-07)

**KPI Cards (Main metrics):**

| Metric | Value | Description |
|--------|-------|-------------|
| Revenue | $139.15 | Total revenue across all shops |
| Orders | 4 | Total orders in period |
| Customers | 4 | Unique customers |
| Active Shops | 1/2 | Shop status ratio |

**Dashboard Controls:**
- Date range picker (custom date selection)
- Currency selector: USD (visible)
- Compare toggle (compare with previous period)

### 5.2 Shop Analytics Tab (dp-v2-08)

**Table view by shop:**

| Shop | Revenue | Orders |
|------|---------|--------|
| NastyJamz | $139.15 | 4 |

Features:
- Drill-down by individual shop
- Time period comparison
- Sortable columns

### 5.3 Product Analytics Tab (dp-v2-09)

**Selector:** Top 25 / 50 / 100 products
**Columns:** Product thumbnail, name, SKU, metrics

Features:
- Product-level performance tracking
- Top performers identification
- Customizable view depth

### 5.4 Metric Dropdown Options (dp-v2-10)

```
Available metrics to display:
- None
- No. Orders (number of orders)
- Revenue (total revenue)
- Customers (unique customers)
- Ads (advertising spend)
- % Ads/Revenue (ROI ratio)
```

**Dashboard Insights:**
- Simple but effective KPI display
- Missing: Historical trends/charts, forecasting
- No: Year-over-year comparisons, cohort analysis

---

## 6. Product Management at Scale

### 6.1 Products List (dp-v2-11)

**Total Products:** 95,892 (massive scale)

**Toolbar Features:**
```
[Search/Filter] [Template Library] [Edit product] [Deploy] [Auto Deploy] [More ▼]
```

**Table Columns:**
| Column | Visible | Type |
|--------|---------|------|
| Product | ✓ | Name + thumbnail |
| Shops | ✓ | Shop deployment status |
| Tags | ✓ | Product tags |
| Product Labels | ✓ | Custom labels |
| Sales | ✓ | Sales count |
| Custom Label | Hidden | For organizing |
| Keyword | Hidden | For SEO |
| Views | Hidden | Product views |
| Favorers | Hidden | Wishlist count |

**Additional columns available:** 5 hidden columns (shown in dp-v2-13)

### 6.2 Product Filtering System (dp-v2-12)

**Filter Fields Available:**
```
- Title (product name)
- SKU Origin (source tracking)
- Collection (product grouping)
- Shops (which shops)
- Status (active/inactive)
- Category (product category)
- Custom Label (custom organization)
- [More filters...]
```

**Use case:** Query specific subset of 95K+ products

### 6.3 Column Visibility Management (dp-v2-13)

**Visible Columns (5):**
- Product
- Shops
- Tags
- Product Labels
- Sales

**Hidden Columns (4):**
- Custom Label
- Keyword
- Views
- Favorers

**Feature:** Users can customize column visibility per preference

### 6.4 Product More Menu (dp-v2-14)

```
├─ Import Product
└─ Delete product
```

Bulk actions available, though limited in display

### 6.5 Product Analytics Charts (dp-v2-15)

**Inline charts for each product:**
- Conversion Rate (over time)
- Favorers (wishlist, trending up/down)
- Sales (volume chart)
- Views (traffic chart)

**Time period:** Appears to be last 7-30 days visualization

### 6.6 Product Edit Modal (dp-v2-16, dp-v2-17)

**Tab structure:**
```
[Photos] [Videos] [Digital] [Title] [Tags] [Product Labels] [Designs]
```

#### Photos Tab (dp-v2-16):
- 10 image slots (1-10) + Latest
- Gallery view enabled
- Bulk edit capabilities
- Upload/remove images

#### Title Tab (dp-v2-17):
- Text input for product title
- Modes: "Add before" / replace
- Character counter: 43/255 (platform limits)
- Real-time validation

**Other tabs:** Videos, Digital products, Tags, Labels, Design assignments

---

## 7. Catalog System

### 7.1 Collections (dp-v2-18)

**Table View:**
| Column | Value |
|--------|-------|
| Name | "Lomo's Site" |
| Shared Access | Configuration |
| Actions | Edit, Delete |

**Features:**
- Organization of products into collections
- Sharing permissions per collection
- Team collaboration support

### 7.2 Designs (dp-v2-19)

**Empty State Display:**

Table columns prepared for:
- Design (name)
- Images (count)
- Products (products using design)
- Tags (design tags)
- Description (design notes)
- Actions (edit/delete)

**CTA:** "+ Create Design" button
**Status:** Empty (0 designs in workspace)

### 7.3 AI Generator / Create Products Wizard (dp-v2-20)

**3-step wizard interface:**

```
┌─────────────────────────────────┐
│   Create Products                │
├─────────────────────────────────┤
│ ┌─────────────┬─────────────┬──────────────┐ │
│ │   Template  │ AI Product  │ Creative     │ │
│ │   Library   │ Generator   │ Design       │ │
│ │             │             │              │ │
│ │ Browse      │ Generate    │ Upload +     │ │
│ │ existing    │ via AI      │ Customize    │ │
│ └─────────────┴─────────────┴──────────────┘ │
└─────────────────────────────────┘

Source Options (below cards):
├─ Manual (type manually)
├─ Etsy (import from Etsy)
└─ Creative Fabrica (use designs)
```

**Features:**
- 3 product creation paths
- Multiple data sources
- AI-powered generation (new in v1.6.0)
- Visual preview cards

---

## 8. Marketplace Integrations

### 8.1 Shops Cards (dp-v2-21)

**Tabs:** All Platforms / Etsy / Shopify / TikTok / Amazon

**Shop Card Display:**
```
┌──────────────────────────────┐
│ 🛒 NastyJamz                 │
│ VIEWS: [count]               │
│ Last synced: [timestamp]      │
│ 👤 👤 👤 (shared members)     │
└──────────────────────────────┘
```

**Visible shops in analysis:**
1. NastyJamz (Etsy, active)
2. Other shops from previous sessions

**Integration Features:**
- Sync status tracking
- Team member visibility
- Platform-specific icons
- Quick action buttons

### 8.2 Add Shop Interface (dp-v2-22)

**Dropdown options:**
```
Etsy              [CONNECT]
Shopify           [CONNECT]
TikTok            [CONNECT]
Amazon            [CONNECT]
WooCommerce       [CONNECT]
```

**Flow:**
1. Select platform
2. Click CONNECT
3. OAuth/authentication
4. Shop added to workspace

---

## 9. Fulfillment System

### 9.1 Orders Management (dp-v2-23)

**Total Orders:** 166 orders in workspace

**Table Columns:**

| Column | Data Type | Example |
|--------|-----------|---------|
| Customer | Text | Customer name |
| Order Info | Date + ID | Date created, order ID |
| IDs | Multiple | Order number, SKU |
| Total | Price | Order total $$ |
| Items | Number | Item count |
| Status | Badge | Pending/Shipped/Delivered |
| Supplier | Text | Fulfillment supplier name |
| Shipments | Link | Tracking number links |

**Features:**
- 166 orders tracked
- Multi-supplier fulfillment
- Tracking integration
- Status filtering

### 9.2 Suppliers (dp-v2-24)

**Suppliers Table:**

| Supplier | Status | Type | Action |
|----------|--------|------|--------|
| FF Dress | Inactive | Google Sheet | Manage |

**Supplier Types:**
- Gelato (mentioned in changelog)
- Google Sheets (custom CSV integration)
- Possibly: Etsy warehouses, Printful, etc.

**Features:**
- Add Supplier button
- Status toggle (Active/Inactive)
- Custom configuration per supplier
- Batch fulfillment support

---

## 10. Deployment System

### 10.1 Deployments / Reports (dp-v2-25)

**Total Deployments:** 6 items visible

**Table Columns:**

| Column | Data | Description |
|--------|------|-------------|
| Created By | User avatar + timestamp | Who & when |
| Type | Insert / Update Partial | Deployment action type |
| Shop | Shop name + link | Target marketplace |
| Status | Badge | Finished / Failed |
| Product Breakdown | Count | Total / Completed / Failed |
| Actions | Button | View report, download logs |

**Example Deployment:**
- Type: Insert or Update Partial
- Shop: NastyJamz (Etsy)
- Status: Finished
- Product Breakdown: X completed, Y failed

**Deployment Types:**
1. **Insert:** New product listings created
2. **Update Partial:** Selective product updates (price, description, images)
3. **Update Video:** Video-specific updates (mentioned in v1.5 notes)
4. **Update Image:** Image bulk updates

**Status Tracking:**
- Color-coded: Green (Completed), Red (Failed)
- Detailed breakdown: Total / Completed / Failed count
- Downloadable logs per deployment

---

## 11. Etsy Analytics (Growth Tool)

### 11.1 Top Performing Listings (dp-v2-26)

**Tabs:** Sales / Views / Favorers / Revenue
**Time periods:** 7d / 14d / 30d

**Table Structure:**

| Column | Data | Ranking |
|--------|------|---------|
| Rank | # | 1st / 2nd / 3rd (medal icons) |
| Product | Thumbnail + Name + Shop | Visual + text |
| Category | Category name | Organization |
| Price | $ Price | Listing price |
| Metric (Sales/Views/Favorers) | Count | Sortable metric |

**Features:**
- Ranked list (competitive intelligence)
- Medal icons for top 3 (🥇 🥈 🥉)
- Multiple ranking dimensions
- Time period comparison
- Time-based trends (7/14/30 days)

### 11.2 Top Performing Shops (dp-v2-27)

**Tabs:** Sales / Favorers / Listings / Reviews
**Time periods:** 7d / 14d / 30d

**Table Structure:**

| Column | Data | Description |
|--------|------|-------------|
| Rank | # | 1st / 2nd / 3rd |
| Shop | Avatar + Name + Flag | Shop owner + country |
| Sales | # | Sales count |
| Avg Sales/Day | Decimal | Normalized metric |
| Listings | # | Active listings |
| Favorers | # | Wishlist adds |
| Reviews | Stars | ⭐ rating |

**Shop Data Examples:**
- Country flags (flags API integration)
- Star ratings (review scores)
- Comparative metrics (shop vs shop)
- Multi-metric benchmarking

**Use Cases:**
- Competitive analysis
- Market research
- Niche identification
- Pricing benchmarking

---

## 12. Template System

### 12.1 Templates Structure (dp-v2-28, dp-v2-29)

**Left Navigation:**
```
DETAILS (sub-items):
├─ Descriptions
├─ Variations
└─ Tags

SALES CHANNELS (platform-specific):
├─ Etsy ▼
│  ├─ Shipping Profiles
│  └─ Personalizations
├─ Shopify
├─ TikTok ▼
│  └─ Shipping Packages
└─ Amazon ▼
   ├─ Shipping Packages
   ├─ Bullet Points
   └─ Generic Keywords
```

### 12.2 Template Details (dp-v2-28)

**Table view:**

| Column | Data |
|--------|------|
| Name | Template name |
| Platforms | "All Platforms" (badge) |
| Shared Access | Access control |
| Created By | Creator avatar + name |
| Actions | Edit, Delete |

**Features:**
- Reusable templates per field
- Multi-platform coverage
- Team sharing capabilities
- Version tracking (created by)

### 12.3 Etsy-Specific Templates (dp-v2-29)

**Expanded Etsy section shows:**
- Shipping Profiles (Etsy-specific shipping)
- Personalizations (custom personalization options)

**Shopify templates:** (no expansion shown)

**TikTok templates:**
- Shipping Packages (TikTok logistics)

**Amazon templates:**
- Shipping Packages
- Bullet Points (Amazon product description format)
- Generic Keywords (ASN keywords)

**Key insight:** Template system is **platform-aware**, allowing marketplace-specific configurations

---

## 13. Tools Suite

### 13.1 Etsy Fee Calculator (dp-v2-30)

**Input Section:**
```
Product Details:
├─ Selling Price: [$]
├─ Product Cost: [$]
└─ Offsite Ads: [Toggle]
```

**Fee Breakdown:**
```
Listing Fee:        $0.20 (per listing)
Transaction Fee:    6.5% (of price)
Payment Processing: 3% + $0.25 (of price)
```

**Output Cards:**
| Metric | Value | Color |
|--------|-------|-------|
| Revenue | $XXX | Blue |
| Profit | $XXX | Green |
| Margin % | XX% | Orange |

**Calculation:** Profit = Revenue - (Cost + Fees)

**Use case:** Pricing strategy, cost analysis before listing

### 13.2 P&L Tracker (dp-v2-31)

**Tabs:**
- P&L Dashboard
- Tiles (summary cards)
- Products Inventory

**Selectors:**
- Amazon shop dropdown
- Timezone: Pacific Time
- Date range: Custom selection

**Features:**
- Profit & Loss tracking
- Multi-dimension reporting
- Time zone awareness (critical for Amazon timing)
- Inventory valuation

### 13.3 Import History (dp-v2-32)

**Total Records:** Multiple workspaces with imports

**Table Columns:**

| Column | Data | Example |
|--------|------|---------|
| ID | UUID/Reference | Unique import ID |
| Information | Name + details | "ALWYS's Site" / "Lomo's Site" |
| Executed Time | Timestamp | Date + time |
| Type | Import type | Product import, etc. |
| Shops | Shop count | 1, 2, 3... |
| File Size | Bytes | KB/MB display |
| Status | Badge | Success / Failed / Pending |
| Total Records | Count | Imported items count |
| Actions | Button | Manage, retry |

**File Size Examples:**
- Large imports tracked (visible file sizes)

**Team Collaboration:**
- Multiple workspaces visible: "ALWYS's Site", "Lomo's Site"
- Cross-workspace import tracking

### 13.4 Export History (dp-v2-33)

**Total Exports:** Visible in analysis

**Table Columns:**

| Column | Data | Example |
|--------|------|---------|
| ID | UUID | Unique export ID |
| Information | Name + details | Export description |
| Executed Time | Timestamp | Created date/time |
| Type | Export type | Products, Orders, etc. |
| Records & Columns | Count | "33,058 records" |
| File Size | Bytes | Download size |
| Status | Badge | Success / Failed |
| Logs | Link | Download logs |
| Conditions | Details | Filter criteria used |
| Actions | Button | Download, re-run |

**Export Examples:**
- Up to 33,058 records exported
- Multiple team members: Đức Vũ Anh, Hà Lê, Khang Tran
- Detailed filtering preserved

**Features:**
- Batch export capability
- Large dataset handling (33K+ records)
- Team member tracking
- Log preservation

---

## 14. Developer Platform

### 14.1 API Keys (dp-v2-36)

**Page Status:** "Upgrade Required"

**Requirements:**
- API keys only available on **paid plans**
- Free plan users see: Upgrade Plan button

**Feature Location:** Settings > Developer > API Key

### 14.2 API Access (dp-v2-37)

**Main Button:** "+ Create API Token"

**Table Structure:**

| Column | Type | Example |
|--------|------|---------|
| Name | Text | Token name/label |
| Expiration | Date | Token expiry date |
| Last Used | Date | Most recent usage |
| Created | Date | Creation timestamp |
| Actions | Button | Revoke, regenerate |

**Security Features:**
- ⚠️ Warning about token security
- Tokens should be kept secret
- Never commit to version control
- Revoke capability visible

**Token Management:**
- Create new tokens
- Track usage (Last Used column)
- Set expiration dates
- Revoke compromised tokens

### 14.3 Webhooks (dp-v2-38)

**Info Banner:**
```
HTTP POST requests sent to your URL
Expect 200 status code within 5 seconds
Include retry logic for reliability
```

**Table Columns:**

| Column | Data |
|--------|------|
| Name | Webhook name |
| URL | Endpoint URL |
| Method | HTTP method (POST, PUT, etc.) |
| Subscribed Events | Event types triggered |
| Status | Active / Inactive |
| Actions | Edit, Delete, Test |

**Features:**
- Custom webhook endpoints
- Event subscription management
- Status monitoring
- Test webhook capability
- "+ Create Webhook" button

**Use Cases:**
- Real-time order notifications
- Product update triggers
- Shop status alerts
- Custom integrations

### 14.4 API Documentation (Implied)

Feature mentioned in sidebar:
- Developer > API Documentation
- Comprehensive API reference (not shown in screenshots)

### 14.5 API Request Logs (dp-v2-39)

**Page Status:** "Coming Soon" 🚀

**Planned Features (Roadmap):**
```
✓ Real-time tracking
✓ Method, endpoint, status, response time
✓ Filtering by date, HTTP method, status codes
✓ Search functionality
✓ 30-day retention
```

**Expected columns:**
- Timestamp
- HTTP Method (GET, POST, etc.)
- Endpoint path
- Status code (200, 400, 500, etc.)
- Response time (ms)
- Request body/response
- Filters: Date range, method, status

**Current status:** Under development (feature planned for future release)

---

## 15. Billing & Pricing Model

### 15.1 Billing Overview (dp-v2-35)

**Current Plan:** Free (Active)
**Account Status:** Active

**Resource Quota (Free Plan):**

| Resource | Used / Limit | Details |
|----------|-------------|---------|
| Shops | 0 / 1 | Platform distribution: |
| - Etsy | 0 / 1 | 1 shop max |
| - Shopify | 0 / 1 | 1 shop max |
| - TikTok | 0 / 1 | 1 shop max |
| Products | 0 / 300 | Product limit |
| Orders | 0 / 50 | Orders per month |
| Listings | 0 / 100 | Active listings |

**Account Features:**
- License Key button (for team licensing)
- Billing Portal with "Manage" button
- Billing Invoice tab
- Billing History tab

### 15.2 Pricing Tiers (dp-v2-41, dp-v2-42, dp-v2-43)

#### **Free Plan (Forever)**
```
Price: $0/month
Shops: 1 shop per platform (max 3 total)
Products: 300 per shop
Listings: 100 per shop
Orders: 50 per shop/month

Features:
- Basic product management
- Single shop integration
- Manual order fulfillment
```

#### **Starter ($8/month per shop)**
```
Shops: 1 per platform
Products: 2,000 per shop
Listings: 1,000 per shop
Orders: 500 per shop/month

Features:
- All Free features
- AI-Powered SEO
- Auto-deployment
- Template system
```

#### **Professional ($15/month per shop)** ⭐ MOST POPULAR
```
Shops: 1 per platform
Products: 5,000 per shop
Listings: 3,000 per shop
Orders: 1,500 per shop/month

Features:
- All Starter features
- Etsy Market Research
- API access
- Advanced analytics
- Webhook support
```

#### **Enterprise (Custom)**
```
Price: Contact sales
Shops: Unlimited
Products: Unlimited
Orders: Unlimited
Listings: Unlimited

Features:
- All Professional features
- Unlimited everything
- 24/7 phone support
- SLA guarantee
- Amazon campaigns
- Custom integrations
- Dedicated account manager
```

### 15.3 Multi-shop Pricing (dp-v2-43)

**Example: 6 shops selected**

**Starter calculation:**
```
6 shops × $8/month = $48/month
Annual: 6 × ($8 × 12) × 0.83 = $480/year
Discount: 17% (yearly savings)
```

**Professional calculation:**
```
6 shops × $15/month = $90/month
Annual: 6 × ($15 × 12) × 0.83 = $900/year
Discount: 17% (yearly savings)
```

**Pricing Model:**
- Per-shop pricing (scales with growth)
- Annual discount: 17% off yearly plans
- Yearly vs. Monthly toggle visible
- Transparent per-shop breakdown

### 15.4 Billing Invoice & History Tabs (dp-v2-35)

**Table columns:**

| Column | Data |
|--------|------|
| Paid At | Date invoice paid |
| Amount | $ amount |
| Description | Invoice description |
| Status | Paid / Pending |
| Invoice ID | Download link |

---

## 16. Credit System

### 16.1 Credits Overview (dp-v2-04)

**Current Balance:** 1,000 / 1,000 credits

**Monthly Cycle:**
- Reset date: April 1, 2026 (next reset)
- Current date in analysis: Feb 11, 2026 (v1.6.0 release)
- Cycle: Monthly reset (1st of month)

**Credit Usage Rules:**

| Action | Cost |
|--------|------|
| Mockup generation | 1 credit |
| AI product generation | 1 credit |
| [Other features] | [Unknown] |

**Features:**
- Monthly quota allocation
- Usage tracking per action
- Auto-refill on reset date
- Visible balance in top bar (1,000 Credits badge)

**Use case:** Rate limiting for AI features (Generator, mockups)

---

## 17. Notification System

### 17.1 Notifications Panel (dp-v2-05, dp-v2-06)

**Panel Location:** Top-right bell icon

**Tabs:**
- View all (all notifications)
- Shares (document/resource shares)
- Invites (team invitations)
- Others (miscellaneous)

**Filter:** All / Unread toggle

### 17.2 Notification Types

**Order Notifications:**
- New order from NastyJamz
- New order from LittleThingsOutHere
- New order from Noctelledesign
- New order from PipayaStore
- New order from ShirtLolo
- Shop status from kindacoolright (suspended shop)

**Notification Details:**
- Shop name (links to shop)
- Order summary (items, total)
- Time received
- Action buttons (View order, etc.)

**Multi-shop support:** Notifications aggregated from all connected shops

---

## 18. What's New & Changelog

### 18.1 Changelog Page (dp-v2-40)

**Latest Release:** v1.6.0
**Release Date:** Feb 11, 2026

**Version Details:**
```
Version: v1.6.0
Date: February 11, 2026
Subtitle: "AI-Powered Designs, 10x Faster Listings & Expanded Fulfillment"
```

### 18.2 Key Additions (v1.6.0)

| Feature | Category | Impact |
|---------|----------|--------|
| WooCommerce integration | Platform | +1 marketplace |
| Gelato supplier | Fulfillment | 3D print fulfillment |
| AI Design Generator (PSD files) | Catalog | Create designs from PSD |
| Bulk Design Creation | Catalog | 1x improvement |
| TikTok Shipping Labels | Fulfillment | TikTok-specific feature |
| Duplicate Listings | Deployment | Faster listing creation |
| 1000 products/day virtual table | Performance | 10x performance (headline) |
| Credits Management | Billing | AI feature access control |

### 18.3 Tabs Structure

Three tabs visible:
- New Features (features section)
- Improvements (enhancements)
- Bug Fixes (bug resolution)

**Design:** Rich text content, bold highlights, structured list format

---

## 19. Tổng hợp tất cả Metrics & Chỉ số

### 19.1 Product Metrics

| Metric | Value | Source |
|--------|-------|--------|
| Total Products | 95,892 | Products page (dp-v2-11) |
| Products per shop | ~95K / ~1 shop | Scale indication |
| Product columns visible | 5 | Standard view |
| Hidden columns | 4 | Available for viewing |

### 19.2 Order Metrics

| Metric | Value | Source |
|--------|-------|--------|
| Total Orders | 166 | Orders page (dp-v2-23) |
| Orders in dashboard | 4 | Current period |
| Free plan limit | 50 orders/month | Billing page |
| Starter limit | 500 orders/month | Pricing |
| Professional limit | 1500 orders/month | Pricing |

### 19.3 Shop Metrics

| Metric | Value | Source |
|--------|-------|--------|
| Active shops | 1/2 | Dashboard (dp-v2-07) |
| Shops in current period | 1 | Analytics |
| NastyJamz views | [visible] | Shops card |
| Free plan shop limit | 1 per platform | Billing |
| Platforms available | 5 | Etsy, Shopify, TikTok, Amazon, WooCommerce |

### 19.4 Revenue Metrics

| Metric | Value | Source |
|--------|-------|--------|
| Dashboard Revenue | $139.15 | Dashboard (dp-v2-07) |
| NastyJamz Revenue | $139.15 | Shop Analytics |
| Currency | USD | All pages |
| Free plan revenue limit | None | Unlimited |

### 19.5 Customer Metrics

| Metric | Value | Source |
|--------|-------|--------|
| Total Customers | 4 | Dashboard |
| Active Customers | 4 | Current period |

### 19.6 Team & Workspace Metrics

| Metric | Value | Source |
|--------|-------|--------|
| Workspaces (user) | 3 total | Workspace switcher |
| Personal workspace members | 1 | "Alwys's Workspace" |
| Business workspace members | 3 | "ALWYS" |
| Active workspace members | 11 | "Lomo" |
| Import team members | 3+ | Export table (Đức Vũ Anh, Hà Lê, Khang Tran) |

### 19.7 Deployment Metrics

| Metric | Value | Source |
|--------|-------|--------|
| Total Deployments | 6 | Deployments page |
| Deployment types | 4 (Insert, Update Partial, Update Video, Update Image) | Type column |

### 19.8 Billing Metrics

| Metric | Value | Source |
|--------|-------|--------|
| Current Plan | Free | Billing page |
| Credits allocated | 1,000 | Top bar |
| Monthly credit limit | 1,000 | Credits popup |
| Pricing tiers | 4 (Free, Starter, Pro, Enterprise) | Pricing page |
| Annual discount | 17% | Yearly pricing |
| Free plan shops | 0 / 1 per platform | Billing quota |
| Free plan products | 0 / 300 | Billing quota |
| Free plan orders | 0 / 50 per month | Billing quota |
| Free plan listings | 0 / 100 | Billing quota |

### 19.9 API Metrics

| Metric | Value | Source |
|--------|-------|--------|
| API Key availability | Paid plans only | API Key page |
| API Token management | Available | API Access page |
| Webhook support | Available | Webhooks page |
| API Request Logs | Coming Soon | Request Logs page |

### 19.10 Feature Availability Matrix

| Feature | Free | Starter | Professional | Enterprise |
|---------|------|---------|--------------|------------|
| Products management | ✓ | ✓ | ✓ | ✓ |
| Multi-shop | ✓ (1/platform) | ✓ | ✓ | ✓ Unlimited |
| AI Generator | ✓ | ✓ | ✓ | ✓ |
| Etsy Analytics | ✓ | ✓ | ✓ | ✓ |
| API Keys | ✗ | ✓ | ✓ | ✓ |
| Webhooks | ✗ | ✓ | ✓ | ✓ |
| Etsy Market Research | ✗ | ✗ | ✓ | ✓ |
| 24/7 Support | ✗ | ✗ | ✗ | ✓ |
| SLA | ✗ | ✗ | ✗ | ✓ |

---

## 20. Đánh giá UI/UX Tổng quan

### 20.1 Điểm Mạnh (Strengths)

#### 1. **Multi-platform Integration Excellence**
- 5 platforms trong một dashboard (Etsy, Shopify, TikTok, Amazon, WooCommerce)
- Platform-specific settings (Etsy shipping profiles, Amazon bullet points)
- Per-shop pricing model (scales with user growth)
- Không competitor nào cover 5 platforms cùng lúc

#### 2. **Scalability & Performance**
- 95,892 products managed in single workspace
- 166 orders tracked without lag
- Virtual table rendering (1000 products/day - v1.6.0)
- Supports 11-member teams in "Lomo" workspace

#### 3. **AI-Powered Features**
- AI Design Generator (new, v1.6.0)
- PSD file support
- Bulk design creation
- Credit system for AI usage (fair pricing)
- AI-Powered SEO (Starter+ feature)

#### 4. **Analytics & Competitive Intelligence**
- Etsy Analytics (Top Listings, Top Shops)
- Medal rankings (🥇 🥈 🥉) for gamification
- Time period comparison (7d, 14d, 30d)
- Country-based shop analysis
- Revenue tracking dashboard

#### 5. **Developer-Friendly API**
- API Keys, Tokens management
- Webhooks support (HTTP POST)
- Request logging (coming soon)
- API documentation
- Webhook testing capability

#### 6. **Fulfillment Management**
- Supplier integration (Gelato, Google Sheets)
- Order tracking with shipments
- Multi-supplier support
- Status monitoring
- Tracking number integration

#### 7. **Team Collaboration**
- Multi-workspace support
- Shared resources across teams
- Template sharing
- Member activity tracking
- Notification system

#### 8. **Template System**
- Reusable templates (Descriptions, Variations, Tags)
- Platform-specific templates (Etsy Shipping Profiles, Amazon Bullet Points)
- Per-channel configuration
- Team sharing capabilities

#### 9. **Clear Information Hierarchy**
- Sidebar well-organized with section grouping
- Breadcrumb navigation
- Consistent table layouts
- Color-coded status badges
- Clear data presentation

#### 10. **Practical Tools Suite**
- Etsy Fee Calculator
- P&L Tracker
- Import/Export with batch processing
- Deployment history with logs
- Deployment types tracking

### 20.2 Điểm Yếu & Cơ hội cải thiện

#### 1. **Dashboard Lacks Depth** 📊
- Only 4 KPI cards (Revenue, Orders, Customers, Active Shops)
- Missing: Charts, trends, forecasting
- Missing: Historical comparison (YoY, MoM)
- Missing: Drill-down capabilities from KPI
- **Recommendation:** Add time-series charts, sparklines, trend indicators

#### 2. **Product Management UI Could Be Richer** 🖼️
- 5 visible columns but 95K products is hard to comprehend at scale
- Thumbnails are small, hard to preview
- Inline charts (dp-v2-15) are excellent but not visible in main table
- Missing: Batch action toolbar confirmation
- **Recommendation:** Product cards view option, better bulk action UX

#### 3. **Empty States Are Generic** 🏜️
- Designs page (dp-v2-19) shows empty table
- No CTA guidance ("Create your first design!" + help)
- Missing: Contextual tips for new users
- **Recommendation:** Rich empty states with CTAs and learning resources

#### 4. **Navigation Sidebar Too Long** 📜
- 8+ section headers + subsections
- Tool submenu not fully visible
- Potential scrolling on smaller screens
- Section grouping good, but density could improve
- **Recommendation:** Collapsible sections, favorites pinning

#### 5. **Dark Mode Missing** 🌙
- Light theme only
- No dark mode toggle visible
- Important for extended usage
- **Recommendation:** Implement dark mode toggle (Settings)

#### 6. **Column Customization UI** 🔧
- Columns can be hidden, but UI for managing columns not clear in main view
- Need to access "Columns visibility" menu (dp-v2-13)
- **Recommendation:** Column picker directly in table header

#### 7. **Mobile Responsiveness** 📱
- Fixed 210px sidebar won't adapt well to mobile
- Top navigation has too many elements (credits, upgrade, bell, workspace)
- **Recommendation:** Responsive sidebar (hamburger menu), mobile-optimized layout

#### 8. **Notification Organization** 🔔
- Notifications appear in panel but no grouping
- No notification preferences (email/in-app/push)
- No notification priority levels
- **Recommendation:** Smart grouping, priority filtering, notification settings

#### 9. **API Request Logs Missing** 🔍
- Marked as "Coming Soon" (dp-v2-39)
- No ETA visible
- Developers need this for debugging
- **Recommendation:** Prioritize this feature, add to roadmap with timeline

#### 10. **Tour Guide System May Be Intrusive** 🎯
- Appears on multiple pages
- No "Don't show again" option visible
- Might hinder power users
- **Recommendation:** Add dismissal options, remember user preferences, skip-all button

### 20.3 UX Patterns Observations

#### Positive Patterns:
```
✓ Consistent table layouts across all data pages
✓ Clear primary/secondary action buttons
✓ Status badges with semantic colors
✓ Breadcrumb navigation present
✓ Modular card-based design
✓ Transparent pricing with feature breakdown
✓ Clear resource quota visualization (progress bars)
✓ Team member avatars for collaboration signals
✓ Contextual filters and search
✓ Consistent 8-12px border radius throughout
```

#### Missing Patterns:
```
✗ Keyboard shortcuts for power users
✗ Command palette / quick search
✗ Bulk action confirmation modals
✗ Undo/Redo functionality
✗ Advanced filtering UI (especially for 95K products)
✗ Data export to multiple formats (CSV, JSON, Excel)
✗ Inline editing capabilities
✗ Drag & drop reordering (collections, templates)
✗ Customizable dashboard widgets
✗ Mobile-friendly menu (hamburger nav)
```

### 20.4 Design System Quality

#### Color System: **8/10**
- Well-defined primary (green), secondary (orange)
- Semantic status colors used consistently
- Good contrast ratios for accessibility
- Missing: Official color documentation

#### Typography: **7/10**
- Clean sans-serif (system font stack)
- Clear hierarchy (H1, H2, body)
- Good readability
- Missing: Font size/weight scale documentation

#### Components: **8/10**
- Buttons, badges, tables well-designed
- Consistent border radius
- Good spacing consistency
- Missing: Component library documentation

#### Layout: **7.5/10**
- Sidebar + main content layout works
- Card-based design is clean
- Whitespace is generous (good for readability)
- Issues: Sidebar not responsive, table density

#### Iconography: **7/10**
- Icons used for platform identification
- Status icons clear (medal rankings)
- Missing: Consistent icon set documentation

---

## 21. Technical & Architectural Insights

### 21.1 Data Scale Indicators

```
Products:           95,892 (1000s/day virtual rendering)
Orders:             166 (growing)
Deployments:        6+ (actively used)
Exports:            33,058+ records capability
Team members:       11 in largest workspace
Shops:              5 platforms supported
```

### 21.2 Performance Optimizations (Visible)

1. **Virtual table rendering** - 1000 products/day (v1.6.0 feature)
2. **Pagination** - 88 pages of deployments (efficient data chunking)
3. **Column visibility** - Reduces table width, improves load
4. **Tab-based navigation** - Lazy load sections
5. **Lazy image loading** - Product thumbnails
6. **Credits system** - Rate limiting for AI features

### 21.3 Integrations & APIs

**Outbound Integrations:**
- Etsy API (shop sync, analytics)
- Shopify API (product sync)
- TikTok API (listings, shipping)
- Amazon API (product sync)
- WooCommerce API (product import)
- Gelato API (fulfillment)
- Google Sheets (supplier data)
- Google Analytics (implied by analytics pages)

**Inbound Integrations:**
- Webhooks (user can create)
- API (user can call)
- OAuth (shop connection)

### 21.4 Multi-tenancy Architecture

- **Workspaces:** Isolated data per workspace
- **Shops:** Per-shop data organization
- **Teams:** Member-based access control
- **Permissions:** Shared resources (templates, designs)
- **Billing:** Per-workspace + per-shop tracking

---

## 22. Recommendations Prioritized

### 🔴 Critical (Implement Soon)

1. **Improve Dashboard with Charts**
   - Add line charts for revenue/orders trends
   - Time period selector (1M, 3M, 6M, YTD)
   - Quick insight cards ("↑ 15% vs last month")
   - Effort: High | Impact: High

2. **Mobile Responsive Design**
   - Hamburger menu for sidebar (< 768px)
   - Responsive top bar
   - Stack filters vertically
   - Effort: High | Impact: High

3. **Dark Mode Toggle**
   - Add theme selector in Settings
   - Persist user preference
   - Update color scheme
   - Effort: Medium | Impact: Medium

### 🟡 High Priority (Next Quarter)

4. **Advanced Product Search**
   - Full-text search across all columns
   - Saved filters
   - Search history
   - Effort: Medium | Impact: High

5. **Batch Actions UX**
   - Selection checkboxes (visible)
   - Bulk action toolbar
   - Confirmation modals
   - Effort: Medium | Impact: Medium

6. **Empty State Improvements**
   - Contextual CTAs per page
   - Learning resources links
   - Progress indicators for setup
   - Effort: Low | Impact: Medium

7. **Keyboard Shortcuts**
   - Quick actions: Ctrl+K search
   - Navigation shortcuts
   - Help overlay (?)
   - Effort: Medium | Impact: Low (power users)

### 🟢 Medium Priority (Backlog)

8. **Complete API Request Logs**
   - Implement dashboard
   - Add filtering, search
   - Set 30-day retention
   - Effort: Medium | Impact: Medium

9. **Column Management UI**
   - Inline column picker in header
   - Drag-drop reordering
   - Save column preferences
   - Effort: Medium | Impact: Low

10. **Notification Preferences**
    - Email/in-app/push toggles
    - Notification grouping
    - Quiet hours setting
    - Effort: Medium | Impact: Medium

---

## 23. Feature Roadmap Indicators (v1.6.0 Context)

### Recently Released (v1.6.0)
- ✅ WooCommerce integration
- ✅ Gelato supplier
- ✅ AI Design Generator
- ✅ Bulk Design Creation
- ✅ TikTok Shipping Labels
- ✅ Duplicate Listings
- ✅ Virtual table (1000 products/day)
- ✅ Credits Management

### Coming Soon
- 🚀 API Request Logs (in development)
- 🚀 More supplier integrations (implied)
- 🚀 Enhanced Etsy Market Research (implied)

### Potential Future Features (Inferred)
- Amazon campaigns (Enterprise-exclusive)
- Advanced forecasting
- Inventory management
- POS integration
- Mobile app
- Shopify Theme integration
- Custom domain support

---

## 24. Comparison to Competitors

### vs. Etsy-only tools:
- **DodgePrint advantage:** 5 platforms vs 1
- **Limitation:** Per-shop pricing (some competitors offer all-in-one flat pricing)

### vs. Shopify-centric tools:
- **DodgePrint advantage:** Strong Etsy analytics + Etsy-specific templates
- **Limitation:** Fewer Shopify-specific features (apps, theme integration)

### vs. Print-on-demand tools (Printful, Gelato, Teespring):
- **DodgePrint advantage:** Multi-marketplace aggregation
- **Limitation:** Print-on-demand is secondary focus

### vs. General e-commerce platforms (Notion, Airtable):
- **DodgePrint advantage:** Purpose-built, pre-integrated with 5 platforms
- **Limitation:** Less flexible for non-commerce workflows

---

## 25. Accessibility & Compliance Notes

### Observed Accessibility Features:
- ✓ Status badges with color + text (not color-only)
- ✓ Icon + label combinations
- ✓ Semantic table headers
- ✓ Clear focus states (implied)
- ✓ Readable font sizes

### Potential Gaps:
- ✗ Keyboard navigation not explicitly tested
- ✗ Screen reader compatibility unknown
- ✗ WCAG AA compliance status unknown
- ✗ Alt text for icons (need verification)
- ✗ Color contrast ratios (need verification)

### Recommendations:
- Conduct accessibility audit (WCAG 2.1 AA)
- Implement keyboard shortcuts
- Test with screen readers (NVDA, JAWS)
- Add focus indicators
- Document accessibility features

---

## 26. Final Summary

### Platform Strengths
DodgePrint is a **mature, well-architected SaaS platform** with:
- Strong multi-platform support (5 platforms)
- Scalable infrastructure (95K+ products)
- Useful analytics features (Etsy competitive intelligence)
- Developer-friendly APIs
- Transparent pricing model
- Good information architecture

### Current Focus Areas
- AI-powered features (Generator, SEO)
- Fulfillment capabilities (Gelato, multi-supplier)
- Team collaboration (multi-workspace, shared resources)
- Market expansion (WooCommerce in v1.6.0)

### Key Opportunities
- Dashboard enhancement (charts, trends)
- Mobile responsiveness
- Dark mode
- Advanced search capabilities
- Enhanced empty states
- API Request Logs completion

### Estimated User Base Health
Based on visible data:
- Active workspace: 11 members (mature team)
- 95K+ products: Established seller
- 166 orders: Consistent revenue
- Multi-workspace usage: Growing business
- Team collaboration: Professional setup

---

**Analysis by:** Deep UI/UX Audit (43 Screenshots)
**Date:** March 11, 2026
**Coverage:** Complete feature set, all major pages, pricing model, team setup, analytics, fulfillment
**Next Review:** After v1.7.0 release (estimated Q2 2026)
