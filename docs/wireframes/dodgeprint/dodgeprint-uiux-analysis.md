# DodgePrint UI/UX Analysis & Feature Documentation

**Mục đích:** Phân tích UI/UX của DodgePrint (app.dodgeprint.com) để đánh giá hiện trạng và đề xuất cải tiến dựa trên best practices từ Getvela.

**Ngày phân tích:** 11/03/2026
**Version:** v1.6.0

---

## 1. Tổng quan kiến trúc ứng dụng

DodgePrint là nền tảng **product creation, fulfillment & multi-channel listing management** cho sellers trên Etsy, Shopify, TikTok, Amazon và WooCommerce. Ứng dụng sử dụng **light theme** mặc định, layout **sidebar + main content** cho SaaS dashboard.

### Design System

- **Color scheme:** Light mode (background #F8F9FA, sidebar #FFFFFF), accent color xanh lá (green #4CAF50 / #00C9A7), secondary accent vàng cam (#FFC107 cho logo/brand)
- **Typography:** Sans-serif (system font stack), clean, moderate weight
- **Layout:** Fixed sidebar trái (~210px) với text labels + icons, main content area bên phải
- **Component style:** Rounded corners (8-12px), subtle shadows, card-based design
- **Version:** v1.6.0 (hiện ở footer sidebar)

### Sidebar Structure

Sidebar chia thành các section rõ ràng:

| Section | Items |
|---------|-------|
| **Main** | Home, Dashboard |
| **CATALOGS** | Products, Collections, Designs, AI Generator (New) |
| **MARKETPLACES** | Shops |
| **FULFILLMENT** | Orders, Suppliers |
| **REPORTS** | Deployments |
| **GROWTH TOOLS** | Etsy Analytics (New) |
| **CONFIGURATION** | Templates |
| **HELPS** | Documentation, Join Discord, Tools (submenu) |
| **Footer** | What's New!, Account info, Version |

---

## 2. Các trang chính & Chức năng

### 2.1 Home / Onboarding (`/home`)

**Screenshot:** `dp-01-home-onboarding.png`, `dp-10-home-full-sidebar.png`

Trang chào mừng với:
- **Welcome card:** "Welcome to Dodge Print - Your learning journey starts here"
- **Tour progress:** 0 of 9 tours completed, 0% progress
- **Start Tour Guide button** (primary CTA, blue gradient)
- **What's New card:** Hiển thị changelog mới nhất (v1.6.0)
- **Documentation card:** Link đến comprehensive guides
- **Join Discord card:** Community support
- **Raise Bug/Feedback card:** Roadmap & feedback

**UI/UX notes:**
- Trang home thiên về onboarding hơn là dashboard thực sự
- Chưa có quick actions hay overview metrics trên home
- Cards layout 2 cột, khá rộng rãi

---

### 2.2 Dashboard (`/dashboard`)

**Screenshot:** `dp-02-dashboard.png`

Dashboard hiển thị KPI cards:
- **Total Products:** Số lượng sản phẩm
- **Total Orders:** Tổng đơn hàng
- **Total Revenue:** Doanh thu
- **Pending Orders:** Đơn chờ xử lý

**UI/UX notes:**
- KPI cards dạng horizontal row, mỗi card có icon + số + label
- Chưa có charts/graphs cho trend data
- Layout đơn giản, nhiều whitespace
- Thiếu time range selector cho metrics

---

### 2.3 Products (`/products`)

**Screenshot:** `dp-03-products.png`

Giao diện quản lý sản phẩm dạng table:

| Cột | Mô tả |
|-----|-------|
| Checkbox | Chọn nhiều |
| Thumbnail | Ảnh sản phẩm |
| Product Name | Tên sản phẩm + SKU |
| Category | Phân loại |
| Price | Giá |
| Stock | Tồn kho |
| Status | Trạng thái |
| Actions | Edit, Delete |

**Toolbar features:**
- Search keywords
- Filter (badge count)
- Sort options
- View mode toggle
- Create Product button (primary green)

**UI/UX notes:**
- Empty state hiển thị khi chưa có products
- Toolbar design clean với search + filter + sort
- Missing: Bulk actions toolbar, column customization

---

### 2.4 Collections (`/collections`)

**Screenshot:** `dp-04-collections.png`

Quản lý nhóm sản phẩm:
- Table view: Name, Products count, Created At, Actions
- Create button (primary green)
- Search + Filter toolbar

**UI/UX notes:**
- Simple table design
- Missing: Drag & drop reorder, thumbnail preview

---

### 2.5 Designs (`/designs`)

**Screenshot:** `dp-05-designs.png`

Quản lý design templates:
- Grid/Table view with thumbnails
- Design preview
- Create Design button
- Search + Filter

**UI/UX notes:**
- Visual-heavy page với ảnh preview
- Hỗ trợ PSD file upload

---

### 2.6 AI Generator (`/ai-generator`) ⭐ New Feature

**Screenshot:** `dp-06-ai-generator.png`

Trang tạo sản phẩm với AI:
- Upload PSD designs
- Background removal
- AI-powered design generation
- Preview with lightbox

**UI/UX notes:**
- Feature mới (badge "New")
- Trang riêng cho AI workflow
- Clean upload interface

---

### 2.7 Shops (`/shops`)

**Screenshot:** `dp-07-shops.png`

Quản lý kết nối shop multi-channel:
- Etsy, Shopify, TikTok, Amazon, WooCommerce connections
- Shop status (connected/disconnected)
- Empty state khi chưa connect shop

**UI/UX notes:**
- Multi-platform support là điểm mạnh
- Platform icons với color coding
- Missing: Shop performance overview tại trang này

---

### 2.8 Orders (`/fulfillment/orders`)

**Screenshot:** `dp-08-orders.png`

Quản lý đơn hàng fulfillment:

| Cột | Mô tả |
|-----|-------|
| Order ID | Mã đơn |
| Product | Thumbnail + tên |
| Shop | Shop gốc |
| Supplier | Nhà cung cấp |
| Status | Trạng thái fulfillment |
| Created At | Ngày tạo |
| Actions | Chi tiết, tracking |

**UI/UX notes:**
- Data table with real order data
- Status badges color-coded
- Pagination at bottom
- Filter + Search toolbar

---

### 2.9 Suppliers (`/suppliers`)

**Screenshot:** `dp-09-suppliers.png`

Quản lý nhà cung cấp:
- Supplier list/cards
- Integration status
- Provider info (Gelato, custom suppliers)

---

### 2.10 Etsy Analytics (`/analytics/listings` & `/analytics/shops`) ⭐ New Feature

**Screenshots:** `dp-11-etsy-analytics-listings.png`, `dp-12-etsy-analytics-shops.png`

#### Top Performing Listings
- Ranked table: Rank, Product (thumbnail + name + shop), Category, Price, Sales, Views, Favorers
- Medal icons cho top 3 (1st, 2nd, 3rd)
- Tabs: Sales, Views, Favorers, Revenue (Coming Soon)
- Category filter dropdown
- Time range: 7d, 14d, 30d
- Search by shop name

#### Top Performing Shops
- Ranked table: Rank, Shop (avatar + name + country), Sales, Avg Sales/Day, Listings, Favorers, Reviews
- Tabs: Sales, Favorers, Listings, Reviews
- Time range: 7d, 14d, 30d
- Country flags for shop origin

**UI/UX notes:**
- Feature phân tích rất hữu ích cho sellers
- Medal ranking icons thêm gamification
- Sub-navigation (Listings / Shops) trong trang analytics
- Missing: Charts/graphs visualization, export data option

---

### 2.11 Templates (`/templates/catalog-content`)

**Screenshot:** `dp-13-templates.png`

Quản lý reusable templates cho listings:

**Sub-navigation:**
- Details: Descriptions, Variations, Tags
- Sales Channels: Etsy (Shipping Profiles, Personalizations), Shopify, TikTok (Shipping Packages), Amazon (Shipping Packages, Bullet Points, Generic Keywords)

**Table view:**
- Name, Platforms (badge "All Platforms"), Shared Access, Created By, Actions

**UI/UX notes:**
- Hierarchical sub-navigation rất tốt cho multi-platform config
- Platform-specific settings (Amazon bullet points, TikTok shipping)
- Template sharing across team (Shared Access column)

---

### 2.12 Deployments / Reports (`/reports`)

**Screenshot:** `dp-14-deployments.png`

Log deployment history:

| Cột | Mô tả |
|-----|-------|
| Created By | User avatar + timestamp + request ID |
| Type | Insert, Update Partial, Update Video, Update Image |
| Shop | Shop name + external link |
| Status | Finished (badge) |
| Product Breakdown | Total, Completed/Failed count |
| Actions | Download report |

**UI/UX notes:**
- 871 items - heavy data page
- Color-coded status: Completed (green), Failed (red)
- Download action for each deployment
- Search by Request ID
- Pagination (88 pages)

---

### 2.13 Tools

#### Calculator (`/calculate`)
**Screenshot:** `dp-15-calculator.png`

Etsy Fee Calculator:
- Product Details: Selling Price, Product Cost, Offsite Ads toggle
- Fee Breakdown: Listing Fee, Transaction Fee (6.5%), Payment Processing (3% + $0.25)
- Summary cards: Revenue, Profit, Margin (color-coded blue/white/green)
- FAQ section below

#### P&L Tracker (`/pnl`)
**Screenshot:** `dp-16-pnl-tracker.png`

Profit & Loss tracking:
- Tabs: P&L Dashboard, Tiles, Products Inventory
- Shop selector (Amazon shops)
- Timezone display (Pacific Time)

#### Imports (`/import`)
**Screenshot:** `dp-17-imports.png`

Import history table:
- ID, Information, Executed Time, Type, Shops, File Size, Status, Logs
- Total Records breakdown: Total, Completed, Failed, Pending, Processing
- Create Products + Import buttons

#### Exports (`/exports`)
**Screenshot:** `dp-18-exports.png`

Export data:
- Similar table structure to Imports
- Create Export button
- Empty state design

---

### 2.14 What's New / Changelog (`/feed`)

**Screenshot:** `dp-19-whats-new.png`

Changelog page:
- Version badges (v1.6.0)
- Date stamps
- Key Additions bullet list
- Tabs: New Features, Improvements, Bug Fixes
- Rich content with bold highlights

**UI/UX notes:**
- In-app changelog rất tốt cho user engagement
- Clear versioning system
- Categorized updates (features/improvements/bugs)

---

### 2.15 Account / Profile (`/profile/overview`)

**Screenshot:** `dp-20-account-profile.png`

Profile Overview:
- Avatar (initials), Name, Email, Status (Active badge)
- Change Password button
- Profile form: Email, Full Name (first/last), Roles dropdown
- Sites section: Shops count

**Sub-navigation:**
- Profile: Details
- Subscription: Billing
- Developer: API Key, API Access, API Documentation, Webhooks, API Request Logs

---

### 2.16 Billing & Subscription (`/profile/billing`)

**Screenshot:** `dp-21-billing.png`

Subscription management:
- Current plan card (Free, Active) with Upgrade Plan CTA
- Resource Quota: Shops (0/1 per platform), Products (0/300), Orders (0/50), Listings (0/100)
- Billing Portal: Manage button
- License Key button
- Billing Invoice / Billing History tabs

**UI/UX notes:**
- Clear quota visualization with progress bars
- Multi-platform shop quota breakdown (Etsy, Shopify, TikTok icons)
- Upgrade CTA prominent (gradient purple button)

---

## 3. Design Patterns & Components

### 3.1 Navigation Pattern
- **Primary:** Left sidebar (fixed, ~210px), text + icon labels
- **Secondary:** Sub-navigation within pages (tabs hoặc left column)
- **Breadcrumbs:** Back arrow + page title
- **Section grouping:** ALL CAPS section headers (CATALOGS, MARKETPLACES, etc.)

### 3.2 Data Table Pattern
- Consistent table design across pages
- Toolbar: Search + Filter (badge count) + Sort
- Pagination: "Showing from X to Y of Z items" + page numbers
- Empty state: Icon + "No data" text

### 3.3 Tour Guide System
- Multi-step onboarding tours on every major page
- Step counter (1/13, 1/6, etc.)
- "Next" button progression
- Close (X) button
- Bullet list of "What you can do here"

### 3.4 Color System
- **Primary green:** #4CAF50 (active states, CTAs)
- **Brand orange/yellow:** #FFC107 (logo, highlights)
- **Status colors:** Green (success/completed), Red (failed/error), Blue (info/links)
- **Background:** #F8F9FA (page bg), #FFFFFF (cards/sidebar)
- **Text:** #333333 (primary), #888888 (secondary)
- **Borders:** rgba(0,0,0,0.1) - subtle

### 3.5 Interactive Elements
- **Buttons:** Rounded (8px), filled primary (green/blue), outlined secondary
- **Badges:** Rounded pill, color-coded (New, Active, Free, etc.)
- **Cards:** White bg, subtle shadow, rounded corners
- **Tables:** Alternating row hover, sticky headers
- **Modals:** Tour guide overlay style

---

## 4. Screenshot Inventory

| # | Filename | Page | Mô tả |
|---|----------|------|--------|
| 1 | dp-01-home-onboarding.png | Home | Trang chủ/onboarding |
| 2 | dp-02-dashboard.png | Dashboard | KPI dashboard |
| 3 | dp-03-products.png | Products | Quản lý sản phẩm |
| 4 | dp-04-collections.png | Collections | Nhóm sản phẩm |
| 5 | dp-05-designs.png | Designs | Quản lý design |
| 6 | dp-06-ai-generator.png | AI Generator | AI tạo sản phẩm |
| 7 | dp-07-shops.png | Shops | Kết nối multi-channel |
| 8 | dp-08-orders.png | Orders | Quản lý đơn hàng |
| 9 | dp-09-suppliers.png | Suppliers | Nhà cung cấp |
| 10 | dp-10-home-full-sidebar.png | Home | Sidebar đầy đủ |
| 11 | dp-11-etsy-analytics-listings.png | Analytics | Top listings |
| 12 | dp-12-etsy-analytics-shops.png | Analytics | Top shops |
| 13 | dp-13-templates.png | Templates | Templates management |
| 14 | dp-14-deployments.png | Deployments | Deployment logs |
| 15 | dp-15-calculator.png | Calculator | Etsy fee calculator |
| 16 | dp-16-pnl-tracker.png | P&L Tracker | Profit & Loss |
| 17 | dp-17-imports.png | Imports | Import history |
| 18 | dp-18-exports.png | Exports | Export data |
| 19 | dp-19-whats-new.png | What's New | Changelog |
| 20 | dp-20-account-profile.png | Account | Profile overview |
| 21 | dp-21-billing.png | Billing | Subscription & billing |

---

## 5. Điểm mạnh hiện tại

1. **Multi-platform support rộng:** Etsy, Shopify, TikTok, Amazon, WooCommerce - vượt trội so với nhiều công cụ
2. **AI Generator:** Tính năng mới, tạo sản phẩm từ PSD files
3. **Etsy Analytics:** Competitive intelligence tool hữu ích
4. **Template system:** Hỗ trợ platform-specific settings
5. **Deployment tracking:** Chi tiết, có download logs
6. **Fee Calculator & P&L Tracker:** Tools thiết thực cho sellers
7. **In-app changelog:** Giữ users cập nhật
8. **Tour guide system:** Onboarding tốt cho new users
9. **Developer API:** API Key, Webhooks, Request Logs - developer-friendly
10. **Credit system:** Quản lý credits cho AI features

## 6. Điểm yếu cần cải thiện

1. **Dashboard thiếu depth:** Chỉ có 4 KPI cards, không có charts/trends
2. **Home page = onboarding:** Không useful cho returning users
3. **Thiếu Dark Mode:** Chỉ có Light theme
4. **Navigation overload:** Sidebar quá dài, nhiều section headers
5. **Empty states yếu:** Chỉ "No data" icon, thiếu guidance CTA
6. **Thiếu bulk actions:** Không rõ ràng bulk edit capabilities
7. **Table design đơn điệu:** Thiếu visual richness (thumbnails nhỏ, ít color coding)
8. **Tour guide intrusive:** Popup trên mọi trang, có thể gây phiền
9. **No keyboard shortcuts:** Thiếu power-user features
10. **Mobile responsiveness:** Sidebar cố định 210px, khó adapt cho mobile
