# Getvela UI/UX Analysis & Feature Documentation

**Mục đích:** Phân tích UI/UX của Getvela (app.getvela.com) để lấy cảm hứng thiết kế cho ứng dụng E-commerce/Marketplace tương tự.

**Ngày phân tích:** 10/03/2026

---

## 1. Tổng quan kiến trúc ứng dụng

Getvela là nền tảng quản lý listing đa kênh (multi-channel listing management) cho các seller trên Etsy và các marketplace khác. Ứng dụng sử dụng **dark theme** làm mặc định, layout dạng **sidebar + main content** truyền thống cho SaaS dashboard.

### Design System

- **Color scheme:** Dark mode (background #2D2D2D, sidebar #1A1A1A), accent color xanh lá (teal/emerald green #00C9A7)
- **Typography:** Sans-serif, clean, dễ đọc trên nền tối
- **Layout:** Fixed sidebar trái (icon-based, collapsible) + expandable sub-menu + main content area
- **Component style:** Rounded corners, subtle borders, flat design

---

## 2. Các trang chính & Chức năng

### 2.1 Sidebar Navigation (Thanh điều hướng trái)

**Screenshot:** `01-listings-active.png`

Sidebar gồm 2 phần:
- **Icon bar** (cực trái, ~40px): Các icon cho Listings, Profiles, Schedule, Studio, Help, Chat, Account
- **Sub-navigation** (bên phải icon bar): Mở rộng khi click, hiển thị chi tiết menu con

**UI/UX highlights:**
- Icon bar luôn visible, tiết kiệm không gian
- Sub-nav mở rộng theo context (trang nào đang active)
- Shop switcher ở trên cùng sidebar (dropdown cho multi-shop)
- "Add shop" button ở cuối sidebar

---

### 2.2 Listings Management (Quản lý sản phẩm)

**Screenshots:** `01-listings-active.png`, `02-listings-draft.png`

Giao diện danh sách sản phẩm dạng table:

| Cột | Mô tả |
|-----|-------|
| Checkbox | Chọn nhiều để bulk edit |
| Thumbnail | Ảnh sản phẩm nhỏ |
| Title | Tên sản phẩm |
| Stock | Số lượng tồn kho |
| Price | Giá (hiện thêm +n variations) |
| Expires on / Last update | Ngày hết hạn hoặc cập nhật cuối |
| Section | Phân loại |
| Score | Điểm chất lượng listing (badge A-F) |

**Filter sidebar bên trái:**
- **Status tabs:** Active, Draft, Inactive (với count)
- **Vela status:** Copy, Imported, Staging
- **Listing Score:** Thanh bar chart visual (F → A)
- **Category filter:** Với count
- **Tags filter:** Input tag search

**Action buttons (góc phải trên):**
- Search (icon kính lúp)
- Import
- Create listing (primary CTA, màu xanh)

**UI/UX highlights:**
- Listing Score visualization rất trực quan - dùng bar chart nhỏ
- Badge score (A+, B, C+...) dạng circle, color-coded
- Price hiển thị "+n" cho sản phẩm có nhiều variations

---

### 2.3 Listing Editor (Chỉnh sửa sản phẩm)

**Screenshots:** `03-listing-edit-top.png` đến `07-listing-edit-shipping.png`

Đây là trang phức tạp nhất, chia thành nhiều section qua **horizontal tab navigation**:

#### Tab Navigation (sticky top):
`Photos | Video | Title | Description | Tags | Details | Price | Inventory | Variations | Personalization | Shipping`

#### Photos Section
- Grid ảnh sản phẩm (thumbnail kéo thả)
- Ảnh chính (lớn hơn) bên trái
- Hover actions: Edit, Delete, More options
- Upload button (dạng dashed border box, icon + text "Upload")
- Alt text editor cho từng ảnh

#### Video Section
- Upload area (dashed border, icon video)
- Max file size: 100 MB

#### Title Section
- Input text đơn
- Character counter: "64 characters remaining" (max 140)
- AI buttons bên phải (icon cho AI generate/enhance)

#### Description Section
- Textarea lớn
- Rich text format
- AI enhancement buttons

#### Tags Section
- Input field cho tags
- "0 remaining" counter
- Tags hiển thị dạng **chip/badge** với nút X để xóa
- Màu xanh teal cho tag chips
- Scrollable horizontal

#### Details Section
- **Type:** Radio buttons (Physical / Digital) với description text
- **Who made it:** Dropdown
- **What is it:** Dropdown
- **When did you make it:** Dropdown
- **Category:** 3-level cascading dropdowns (ví dụ: Accessories → Hair Accessories → Hair Ties & Elastics)
- **"Hide optional fields"** toggle link
- **Primary/Secondary color:** Dropdowns
- **Holiday, Occasion:** Dropdowns
- **Materials:** Checkbox list (scrollable)
- **Sustainability:** Checkbox list
- **Style:** Dropdown

#### Price Section
- Price input (hoặc "Defined by Variation")
- Clean, simple layout

#### Inventory Section
- Quantity input
- SKU input (optional)

#### Variations Section
- Category cascading dropdowns (3 cấp)
- **Sub-tabs:** Variations | Price | Quantity | SKU | Visibility | Photos | Processing
- Variation type dropdown (ví dụ: "color")
- Drag-and-drop reorder (icon 6 dots)
- Values list (Pink, Yellow, Blue...)
- "Add option" input + Add button
- Second variation support ("Choose Variation" / "No second variation")

#### Personalization Section
- Simple toggle On/Off

#### Shipping Section
- **Processing profile:** Dropdown (ví dụ: "Made to order: 2-3 weeks")
- **Shipping profile:** Dropdown với badge "Fixed"
- **Item weight:** Dual input (lb + oz)
- **Dimensions:** Length, Width, Height (in)
- **Return policy:** Dropdown

**Bottom Action Bar (sticky):**
- Cancel button (trái)
- Save as Profile | Copy | Publish (phải)
- Publish có dropdown arrow cho thêm options

**UI/UX highlights:**
- Horizontal tab nav giúp navigate nhanh giữa các section
- AI-assisted buttons cho Title và Description (rất innovative)
- Character counter real-time
- Cascading category dropdowns (3 cấp) rất UX-friendly
- Sticky bottom bar với CTA actions luôn visible
- Chip-style tags dễ quản lý
- Drag-and-drop variation reorder

---

### 2.4 Profiles Page

**Screenshot:** `08-profiles-page.png`

- Empty state design: Icon geometric shapes + "No profiles" text
- "Create profile" CTA button (góc phải trên)
- Sidebar: Attributes filter, Profiles badge
- Profiles cho phép save template sản phẩm để tái sử dụng

**UI/UX highlights:**
- Empty state design sạch, không gây confusion
- Clear CTA hướng dẫn user hành động tiếp

---

### 2.5 Schedule Page (Lên lịch)

**Screenshot:** `09-schedule-page.png`

- **Calendar view** dạng horizontal timeline (2 tuần)
- Navigation: < > arrows, "Mar 10 - Mar 23"
- "TODAY" badge highlight ngày hiện tại
- Filter sidebar: Listings / Updates (với count)
- Empty state: Clock icon + "No scheduled listings"
- "Create listing" CTA

**UI/UX highlights:**
- Timeline horizontal rất trực quan cho scheduling
- TODAY highlight giúp orientation
- Simple filter Listings vs Updates

---

### 2.6 Studio / Media Library

**Screenshot:** `10-studio-media-photos.png`

- **Photo gallery** dạng grid (responsive, nhiều cột)
- Tabs: Photos | Videos
- Folder system: "All photos" (27), "New folder" button
- Upload button (góc phải trên)
- Hover actions: Edit photo, Delete photo, More options, Edit alt text
- "1 Listing" badge trên ảnh (hiển thị ảnh đang dùng ở bao nhiêu listing)

**UI/UX highlights:**
- Grid gallery với uniform aspect ratio
- Folder organization cho media
- Linking info (ảnh dùng ở listing nào) rất hữu ích
- Hover reveal actions, không clutter giao diện

---

### 2.7 Account Settings

**Screenshot:** `11-account-settings.png`

- Sidebar: Account settings | Billing | Affiliate
- **Appearance:** Sync with OS settings checkbox, Dark mode dropdown
- **Contact information:** Avatar (initials-based), First/Last name
- **Email:** Current email display, New email input, Password verification
- **Password:** Current/New password fields
- Save/Cancel buttons

**UI/UX highlights:**
- Avatar tự generate từ initials (không cần upload)
- Dark/Light mode switch
- Clean form layout

---

### 2.8 Billing Page

**Screenshot:** `12-billing-page.png`

- **Summary cards** (4 cards horizontal):
  - Shops connected: 1
  - Vela Lite: 0
  - Vela Plus: 0
  - Monthly total: $0.00
- **Promotion banner:** "Multi-shop discount - Connect multiple shops to receive 20% off"
- **Shop table:** Shop name, Listings count, Price, Billing cycle, Plan (Trial badge)
- "Add shop" button

**UI/UX highlights:**
- Summary cards cho quick overview
- Promotion banner thiết kế subtle nhưng eye-catching
- Trial badge rõ ràng

---

### 2.9 Create New Listing

**Screenshot:** `13-create-new-listing.png`

- Cùng layout với Edit Listing nhưng trống
- Header: "Etsy · ShopName" + "New listing"
- Upload areas (Photos, Video) dạng dashed border
- Title: 140 character limit
- AI buttons cho Title/Description

---

### 2.10 Listings Inactive (Empty State)

**Screenshot:** `14-listings-inactive.png`

- Cùng layout với Active/Draft nhưng hiện empty state
- Icon dạng list lines + "No listings" text
- Table header vẫn hiển thị (Title, Stock, Price, Expired on, Section, Score)
- Sidebar vẫn hiển thị đầy đủ filter options

---

### 2.11 Bulk Select & Actions Toolbar

**Screenshot:** `15-bulk-select-actions.png`

- Khi tick checkbox "Select All", header thay đổi thành "Draft **5 selected**"
- **Bulk action buttons** xuất hiện: Delete, Export, Copy, Edit, Publish (dropdown)
- Tất cả listing rows hiện checkbox ticked (màu xanh)
- Đây là UX pattern rất quan trọng cho quản lý hàng loạt

**UI/UX highlights:**
- Toolbar thay thế header khi có selection
- Count hiển thị rõ "5 selected"
- Actions phù hợp context (Draft → Publish as primary CTA)

---

### 2.12 Bulk Edit - Photos View

**Screenshot:** `16-bulk-edit-photos.png`

- URL: `/listings/bulk-edit`
- Header: "Editing 5 listings"
- **Sidebar sections** (collapsible): Media, Listings, Optional, Inventory, Shipping
- **Top actions:** Cancel, Schedule, Sync updates, Apply
- "Add" dropdown cho bulk actions
- Search bar để filter listings
- Mỗi listing hiện: Title + Photo grid + Upload button
- Checkbox cho từng listing (chọn/bỏ chọn riêng)

---

### 2.13 Bulk Edit - Title with Vela AI

**Screenshot:** `17-bulk-edit-title-ai.png`

- **Vela AI** dropdown selector ở toolbar
- "Enter additional instruction" text input (prompt cho AI)
- **Title style toggle:** Classic | Concise (tab-style buttons)
- **Optimize** button (primary CTA, teal + sparkle icon)
- Mỗi listing: thumbnail + editable title input + character counter + AI score badge (A+, C+, B...)
- **Pro tip popup:** "Optimize tags" tooltip-style modal

**UI/UX highlights:**
- AI optimization hàng loạt cho titles - rất powerful
- Score badges realtime, color-coded (A+ = green, C+ = yellow...)
- Instruction input cho phép customize AI behavior
- Style switch (Classic/Concise) cho different title strategies

---

### 2.14 Bulk Edit - Tags

**Screenshot:** `18-bulk-edit-tags.png`

- Mỗi listing: Tags input field + chip-style tag list (removable)
- AI score badges cho tag quality
- "Replace all" dropdown ở toolbar (bulk replace strategy)
- "Vela AI" + "Optimize" cho bulk tag optimization
- Tags hiển thị dạng horizontal wrapping chips
- "0 remaining" counter cho mỗi listing

---

### 2.15 Bulk Edit - Optional Fields

**Screenshot:** `19-bulk-edit-optional-colors.png`

- Expanded sidebar: Primary color, Secondary color, Holiday, Occasion, Materials, Sustainability, Style
- **Global dropdown** ở top: "Choose Primary color" - áp dụng cho tất cả
- **Apply** button để apply giá trị global
- Mỗi listing có dropdown riêng để override

---

### 2.16 Import CSV Dialog

**Screenshot:** `20-import-csv-dialog.png`

- Modal overlay design (blurred background)
- **Drag & drop zone:** Cloud upload icon + "Click to browse or drag and drop a CSV file to upload"
- Dashed border upload area
- **"Download CSV template"** button (teal, primary) - giúp user có template đúng format
- Cancel button

**UI/UX highlights:**
- CSV template download giúp giảm import errors
- Drag & drop UX tiện lợi
- Clean modal, không phức tạp

---

### 2.17 Affiliate Program Page

**Screenshot:** `21-affiliate-page.png`

- Modal overlay với dark gradient background
- **3 feature icons** (teal circles): 100% Commission, Milestone Bonuses, Monthly Payouts
- Mỗi feature có icon + title + short description
- **"Apply now"** CTA button
- Close (X) button

---

### 2.18 Studio - Videos Tab

**Screenshot:** `22-studio-videos.png`

- Tương tự Photos tab nhưng cho videos
- Video thumbnails grid
- Sidebar: Photos/Videos tabs, Folder system, "All videos" count, "New folder" button
- Upload button (top right)

---

### 2.19 Schedule - Updates Tab

**Screenshot:** `23-schedule-updates.png`

- Calendar timeline view giống Listings tab
- Filter: Listings | Updates
- Empty state: Clock icon + "No scheduled updates"
- Cho phép lên lịch update hàng loạt (giá, mô tả, etc.) ngoài việc lên lịch publish

---

### 2.20 Merge Listings Dialog

**Screenshot:** `24-merge-listings-dialog.png`

- Modal cho phép merge/link listings giữa các channels
- Hiển thị listing hiện tại: thumbnail + "Etsy · ShopName · Active" badge + title
- **Search input:** "Title or SKU" - tìm listing để merge
- Dùng cho multi-channel sync (cùng sản phẩm trên nhiều platform)

**UI/UX highlights:**
- Feature quan trọng cho multi-channel sellers
- Search by Title or SKU rất flexible
- Clean modal design

---

### 2.21 Listing Row Hover Actions

**Screenshot:** `25-listing-hover-actions.png`

- Khi hover vào listing row, hiện 4 icon buttons:
  - **Delete** (trash icon)
  - **Copy** (duplicate icon)
  - **Merge/Link** (connect icon)
  - **Edit** (pencil icon)
- Actions hiện ở vị trí cuối row, thay thế data columns
- Đây là progressive disclosure pattern rất hay

---

## 3. Design Patterns đáng chú ý

### 3.1 Navigation Pattern
- **Dual sidebar:** Icon rail + expandable sub-nav
- **Horizontal tabs** cho complex forms (listing editor)
- **Breadcrumb-style:** Shop name ở header

### 3.2 Data Display
- **Table with inline actions** (listings) + hover reveal actions (delete, copy, merge, edit)
- **Gallery grid** (media library)
- **Card-based metrics** (billing)
- **Calendar timeline** (schedule)
- **Bulk edit multi-view** (photos, title, tags, optional fields, inventory, shipping)

### 3.3 Form Patterns
- **Cascading dropdowns** (category selection)
- **Chip/Tag inputs** (tags management)
- **Toggle switches** (personalization)
- **Dual-unit inputs** (weight: lb + oz)
- **Character counters** (title)
- **Drag-and-drop reorder** (photos, variations)

### 3.4 Empty States
- Geometric icon + descriptive text + CTA button
- Consistent across all empty pages

### 3.5 AI Integration (Vela AI)
- AI buttons bên cạnh text fields (Title, Description) - single edit
- **Bulk AI optimization:** Vela AI dropdown + instruction input + style selector + Optimize button
- AI Score badges (A+ to F) cho real-time quality feedback
- "Optimize Tags" pro tips & suggestions
- Replace strategy options (Replace all, Append, etc.)

### 3.6 Multi-shop Architecture
- Shop switcher dropdown ở sidebar top
- "Add shop" persistent button
- Per-shop billing và listings

---

## 4. Gợi ý UI/UX cho ứng dụng E-commerce tương tự

### 4.1 Những điểm nên học hỏi từ Getvela

1. **Dark mode mặc định** - Phù hợp cho ứng dụng mà seller dùng nhiều giờ, giảm mỏi mắt
2. **Listing Score system** - Gamification giúp seller cải thiện chất lượng listing
3. **AI-assisted content** - Tích hợp AI cho title/description generation
4. **Horizontal tab navigation** cho complex forms - Giúp navigate nhanh
5. **Sticky action bar** - CTA luôn visible khi edit
6. **Media Library riêng biệt** - Quản lý ảnh centralized, reuse across listings
7. **Profile/Template system** - Save & reuse product templates
8. **Scheduling feature** - Lên lịch đăng bài chiến lược
9. **Multi-shop support** - Quản lý nhiều shop từ 1 account

### 4.2 Những điểm có thể cải thiện

1. **Onboarding flow** - Getvela thiếu guided tour cho user mới
2. **Dashboard/Analytics** - Không thấy trang dashboard tổng quan với charts/metrics
3. **Bulk editing UI** - Đã có bulk edit mạnh mẽ, có thể thêm thêm spreadsheet-like view
4. **Search & Filter** - Có thể mạnh hơn với saved filters, advanced search
5. **Notification center** - Không thấy notification system
6. **Mobile responsiveness** - Cần kiểm tra trải nghiệm mobile
7. **Drag & drop** - Có thể mở rộng cho photo reordering trên listing list

### 4.3 Các ứng dụng tham khảo thêm

| App | Điểm mạnh UI/UX | Link |
|-----|-----------------|------|
| **Sellbrite** | Inventory sync dashboard, channel mapping UI | sellbrite.com |
| **Listing Mirror** | Bulk editing spreadsheet-style | listingmirror.com |
| **Shopify Admin** | Dashboard analytics, modern design system | shopify.com |
| **Mercari** | Mobile-first listing creation UX | mercari.com |
| **Depop** | Social commerce UI, visual-first approach | depop.com |
| **Printful** | Product mockup generator, design studio | printful.com |
| **EtsyRank/eRank** | SEO scoring, keyword analytics | erank.com |

### 4.4 Xu hướng UI/UX cho E-commerce Tools 2025-2026

1. **AI-first editing** - AI generate toàn bộ listing từ ảnh sản phẩm
2. **Voice-to-listing** - Mô tả bằng giọng nói, AI tạo listing
3. **Visual bulk editor** - Kanban/Spreadsheet view cho quản lý hàng loạt
4. **Real-time sync indicators** - Hiển thị trạng thái sync giữa các channels
5. **Smart pricing suggestions** - AI gợi ý giá dựa trên market data
6. **Photo editor tích hợp** - Chỉnh ảnh, remove background trong app
7. **Performance dashboards** - Analytics cho views, sales, conversion rate
8. **Collaboration features** - Multi-user roles cho teams

---

## 5. Danh sách Screenshots (25 files)

| # | File | Mô tả |
|---|------|--------|
| 1 | `01-listings-active.png` | Trang Listings Active - danh sách sản phẩm đang bán |
| 2 | `02-listings-draft.png` | Trang Listings Draft - sản phẩm nháp |
| 3 | `03-listing-edit-top.png` | Listing Editor - Photos, Video, Title |
| 4 | `04-listing-edit-description-tags-details.png` | Listing Editor - Description, Tags, Details |
| 5 | `05-listing-edit-details-category.png` | Listing Editor - Category, Colors, Materials |
| 6 | `06-listing-edit-price-inventory-variations.png` | Listing Editor - Price, Inventory, Variations |
| 7 | `07-listing-edit-shipping.png` | Listing Editor - Shipping, Return policy |
| 8 | `08-profiles-page.png` | Profiles - Template management |
| 9 | `09-schedule-page.png` | Schedule - Calendar timeline (Listings) |
| 10 | `10-studio-media-photos.png` | Studio - Media library gallery |
| 11 | `11-account-settings.png` | Account Settings |
| 12 | `12-billing-page.png` | Billing - Plans & pricing |
| 13 | `13-create-new-listing.png` | Create New Listing form |

| 14 | `14-listings-inactive.png` | Listings Inactive - Empty state |
| 15 | `15-bulk-select-actions.png` | Bulk Select All - action toolbar (Delete, Export, Copy, Edit, Publish) |
| 16 | `16-bulk-edit-photos.png` | Bulk Edit - Photos view (multi-listing photo management) |
| 17 | `17-bulk-edit-title-ai.png` | Bulk Edit - Title + Vela AI optimization (styles, instructions) |
| 18 | `18-bulk-edit-tags.png` | Bulk Edit - Tags (chip management, AI score badges) |
| 19 | `19-bulk-edit-optional-colors.png` | Bulk Edit - Optional fields (colors, holiday, materials) |
| 20 | `20-import-csv-dialog.png` | Import CSV dialog (drag & drop, template download) |
| 21 | `21-affiliate-page.png` | Affiliate Program modal (commission, bonuses, payouts) |
| 22 | `22-studio-videos.png` | Studio - Videos tab (video library) |
| 23 | `23-schedule-updates.png` | Schedule - Updates tab (scheduled bulk updates) |
| 24 | `24-merge-listings-dialog.png` | Merge Listings dialog (multi-channel linking) |
| 25 | `25-listing-hover-actions.png` | Listing row hover actions (delete, copy, merge, edit icons) |

> **Lưu ý:** Screenshots đã được tải xuống qua Chrome browser vào thư mục Downloads của máy. Hãy copy chúng vào thư mục `getvela/` cùng với file này.

---

## 6. Light Mode Analysis & So sánh

**Ngày phân tích Light Mode:** 11/03/2026

Getvela hỗ trợ **Light Mode** với khả năng chuyển đổi qua Account Settings > Appearance. Dưới đây là phân tích so sánh giữa Dark Mode và Light Mode.

### 6.1 Color Scheme - Light Mode

| Thuộc tính | Dark Mode | Light Mode |
|-----------|-----------|------------|
| Background chính | #2D2D2D (dark gray) | #F5F5F5 (light gray) |
| Sidebar background | #1A1A1A (near black) | #FFFFFF (white) |
| Card/Panel background | #3A3A3A | #FFFFFF (white) |
| Text primary | #FFFFFF (white) | #333333 (dark gray) |
| Text secondary | #AAAAAA (gray) | #888888 (medium gray) |
| Accent color | #00C9A7 (teal/emerald) | #00C9A7 (teal/emerald) - **Giữ nguyên** |
| Border/Divider | rgba(255,255,255,0.1) | rgba(0,0,0,0.1) |
| Hover row | Lighter shade | Light gray shade |
| Input fields | Dark background, light border | White background, gray border |
| Tags/Chips | Outlined with teal | Outlined with teal - **Giữ nguyên** |

### 6.2 Nhận xét thiết kế Light Mode

**Điểm mạnh:**
- Accent color (teal/emerald green) được giữ nguyên xuyên suốt cả 2 mode, tạo nhận diện thương hiệu nhất quán
- CTA buttons (Create listing, Publish, Optimize, Sync updates) vẫn nổi bật với background teal
- Tags/Chips style nhất quán: outlined chips với "x" delete icon
- Score badges (A, B, C, D, F) giữ nguyên color coding ở cả 2 mode
- Layout và spacing hoàn toàn identische - không thay đổi cấu trúc

**Điểm cần lưu ý cho ứng dụng tương tự:**
- Chỉ cần swap color variables qua CSS custom properties / design tokens
- Giữ accent color nhất quán giữa 2 mode
- Cards chuyển từ dark panels sang white cards với subtle shadows
- Input fields: border rõ ràng hơn trong light mode
- Empty states illustrations tự động điều chỉnh opacity

### 6.3 Đặc biệt trong Light Mode

- **Welcome banner** (trial notification): Nền xanh nhạt (mint green), nổi bật hơn trong light mode
- **Import CSV dialog**: Overlay sử dụng backdrop blur nhẹ, modal trắng trên nền mờ
- **Affiliate popup**: Giữ dark theme riêng cho popup (dark gradient background), tạo contrast mạnh với light mode background
- **Bulk Edit toolbar**: Buttons (Cancel, Schedule, Sync updates) có border rõ ràng hơn
- **Listing Score dropdown**: Background trắng với shadow, dễ đọc score breakdown

---

## 7. Light Mode Screenshots Inventory

| # | Filename | Mô tả |
|---|---------|-------|
| 1 | `light-01-listings-active.png` | Listings Active - Light Mode |
| 2 | `light-02-listings-draft.png` | Listings Draft - Light Mode |
| 3 | `light-03-listing-edit-top.png` | Listing Editor Top (Photos/Video/Title) - Light Mode |
| 4 | `light-04-listing-edit-description-tags.png` | Listing Editor (Description/Tags/Details) - Light Mode |
| 5 | `light-05-listing-edit-details-category.png` | Listing Editor (Details/Category/Optional) - Light Mode |
| 6 | `light-06-listing-edit-price-inventory-variations.png` | Listing Editor (Price/Inventory/Variations) - Light Mode |
| 7 | `light-07-listing-edit-shipping.png` | Listing Editor (Personalization/Shipping) - Light Mode |
| 8 | `light-08-profiles.png` | Profiles Page - Light Mode |
| 9 | `light-09-schedule-listings.png` | Schedule Listings Calendar - Light Mode |
| 10 | `light-10-studio-photos.png` | Studio Photos Gallery - Light Mode |
| 11 | `light-11-account-settings.png` | Account Settings (Appearance/Contact) - Light Mode |
| 12 | `light-12-billing.png` | Billing Page - Light Mode |
| 13 | `light-13-create-new-listing.png` | Create New Listing - Light Mode |
| 14 | `light-14-listings-inactive.png` | Listings Inactive (Empty State) - Light Mode |
| 15 | `light-15-bulk-select-actions.png` | Bulk Select Actions (Delete/Export/Copy/Edit) - Light Mode |
| 16 | `light-16-bulk-edit-photos.png` | Bulk Edit Photos - Light Mode |
| 17 | `light-17-bulk-edit-title-ai.png` | Bulk Edit Title + Vela AI - Light Mode |
| 18 | `light-18-bulk-edit-tags.png` | Bulk Edit Tags - Light Mode |
| 19 | `light-19-bulk-edit-optional.png` | Bulk Edit Optional Fields - Light Mode |
| 20 | `light-20-import-csv.png` | Import CSV Dialog - Light Mode |
| 21 | `light-21-affiliate.png` | Affiliate Page/Popup - Light Mode |
| 22 | `light-22-studio-videos.png` | Studio Videos - Light Mode |
| 23 | `light-23-schedule-updates.png` | Schedule Updates - Light Mode |
| 24 | `light-24-score-hover-actions.png` | Score Breakdown + Hover Actions - Light Mode |
| 25 | `light-25-listing-hover-actions.png` | Listing Hover Actions (delete/copy/move/edit) - Light Mode |

> **Tổng cộng:** 50 screenshots (25 Dark Mode + 25 Light Mode) đã được tải xuống qua Chrome Downloads.

---

## 8. Gợi ý triển khai Theme System cho ứng dụng tương tự

### 8.1 Kiến trúc CSS Variables / Design Tokens

```css
:root {
  /* Light Mode (default) */
  --bg-primary: #F5F5F5;
  --bg-secondary: #FFFFFF;
  --bg-card: #FFFFFF;
  --text-primary: #333333;
  --text-secondary: #888888;
  --border-color: rgba(0, 0, 0, 0.1);
  --accent: #00C9A7;
  --accent-hover: #00B396;
  --shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
}

[data-theme="dark"] {
  --bg-primary: #2D2D2D;
  --bg-secondary: #1A1A1A;
  --bg-card: #3A3A3A;
  --text-primary: #FFFFFF;
  --text-secondary: #AAAAAA;
  --border-color: rgba(255, 255, 255, 0.1);
  --accent: #00C9A7;
  --accent-hover: #00B396;
  --shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
}
```

### 8.2 Best Practices từ Getvela

1. **Accent color nhất quán** - Teal (#00C9A7) không thay đổi giữa themes
2. **Sync with OS settings** - Checkbox cho phép auto-detect system theme
3. **Chuyển đổi mượt mà** - Không cần reload page
4. **Component isolation** - Một số components giữ theme riêng (ví dụ: Affiliate popup luôn dark)
5. **Score/Status badges** - Color coding theo semantic (A=green, B=blue, C=yellow, D=orange, F=red) không phụ thuộc theme
6. **Empty states** - Illustration style phù hợp cả 2 themes (dùng neutral grays)
