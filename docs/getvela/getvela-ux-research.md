# Getvela (Vela) — UX/UI Research & Feature Analysis

> Mục đích: Nghiên cứu UI/UX của Getvela để inspire cho việc phát triển ứng dụng ecommerce listing management tương tự.

---

## 1. Tổng quan sản phẩm

Vela là nền tảng quản lý và tối ưu listings cho ecommerce sellers, hỗ trợ đa kênh (Etsy, Shopify, eBay, Faire). Điểm mạnh cốt lõi là kết hợp **AI tools** với **bulk editing** và **multi-channel management** trong một giao diện duy nhất.

**Target users:** Ecommerce sellers quản lý số lượng lớn listings trên nhiều marketplace.

---

## 2. Cấu trúc Navigation & Information Architecture

### Sidebar Navigation (chính)
| Menu Item | Chức năng | Mô tả |
|-----------|-----------|-------|
| **Dashboard/Welcome** | Tổng quan | Onboarding, quick stats, getting started |
| **Listings** | Quản lý sản phẩm | Danh sách tất cả listings, filter, search, bulk actions |
| **Bulk Editor** | Chỉnh sửa hàng loạt | Spreadsheet-like interface để edit nhiều listings cùng lúc |
| **Studio** | Quản lý ảnh | Upload, AI enhance, background removal, filters |
| **Profiles** | Templates | Reusable templates cho listings (tags, variations, policies) |
| **Schedule** | Lên lịch | Đặt lịch publish/update listings tự động |
| **Settings** | Cài đặt | Account, connected shops, billing |

### Top-level Actions
- Connect Shop (kết nối marketplace mới)
- Publish / Schedule / Sync (xuất bản thay đổi)
- AI Score indicator trên mỗi listing

---

## 3. Chi tiết từng Feature Module

### 3.1 Listings Management
**Mục đích:** Quản lý toàn bộ inventory từ một nơi.

**UI Components:**
- Bảng danh sách dạng grid/table với thumbnail ảnh, title, price, status
- Checkbox select (đơn lẻ / select all / select page)
- Filter bar: theo shop, status, category, tags, AI score
- Search bar: tìm theo title, SKU
- Sort: theo date, price, score
- Bulk actions bar: Edit, Export CSV, Publish, Delete, Copy, Merge

**UX Insights:**
- Spreadsheet-like feel giúp sellers quen thuộc
- Inline quick-edit cho fields đơn giản (price, quantity)
- AI Score badge (F- đến A+) hiển thị trực tiếp trên mỗi listing
- Multi-shop filter cho phép xem listings từ nhiều shop cùng lúc

---

### 3.2 Bulk Editor
**Mục đích:** Chỉnh sửa hàng loạt listings nhanh chóng.

**UI Components:**
- Tab navigation: Listings, Shipping, Variations
- Editable fields: Title, Description, Tags, Price, Quantity
- AI Optimize button cho từng field (title, description, tags)
- Apply to All / Apply to Selected
- Preview changes trước khi publish
- Undo/redo support

**UX Insights:**
- Giao diện giống spreadsheet, quen thuộc với sellers
- AI suggestions hiển thị inline, user có thể accept/reject
- Batch AI optimization — chạy AI cho hàng trăm listings cùng lúc
- Changes không tự động publish, phải explicit click Publish/Schedule

---

### 3.3 Studio (Photo Management)
**Mục đích:** Quản lý và enhance ảnh sản phẩm bằng AI.

**UI Components:**
- Image gallery grid
- Upload area (drag & drop)
- AI tools panel: Background removal/generation, filters, expand/resize
- Layers panel: text overlays, image overlays, banners
- Bulk replace: thay ảnh hàng loạt across listings
- Export options

**UX Insights:**
- Canva-like editing experience ngay trong app
- AI Background Generation — tạo background mới cho ảnh sản phẩm
- Image Expand — mở rộng ảnh để fit các preset sizes (marketplace, social media)
- Layers — thêm text/banners trực tiếp lên ảnh, không cần tool ngoài
- Khi save edit → tự động cập nhật ảnh trên tất cả listings liên kết

---

### 3.4 Profiles (Templates)
**Mục đích:** Tạo templates tái sử dụng cho listings.

**UI Components:**
- Profile list view
- Profile editor: fields cho title template, tags, variations, shipping, policies
- Retain toggle: giữ nguyên data hiện có của listing khi apply profile
- Apply to listings selector

**UX Insights:**
- Giải quyết pain point lặp lại thông tin (return policies, standard variations)
- Retain feature thông minh: apply profile mà không overwrite data riêng của từng listing
- Useful cho sellers có product lines với cùng shipping/variation structure

---

### 3.5 Scheduling
**Mục đích:** Lên lịch publish thay đổi tự động.

**UI Components:**
- Calendar/date-time picker
- Scheduled items queue
- Status indicators: Scheduled, Published, Failed
- Edit/Cancel scheduled items

**UX Insights:**
- Sellers có thể plan product launches, seasonal updates
- Hoạt động cho cả bulk edits, individual edits, và new listings
- Giảm workload — set up và quên đi

---

### 3.6 AI Scoring & Optimization
**Mục đích:** Đánh giá và tối ưu chất lượng listings.

**UI Components:**
- Score badge (F- đến A+) trên mỗi listing
- Score breakdown: photos, title, description, tags, pricing
- AI suggestions panel
- One-click optimize buttons
- Before/after preview

**UX Insights:**
- Gamification element: score tạo động lực cải thiện
- Channel-specific scoring (Etsy vs Shopify có tiêu chí khác nhau)
- 100+ AI tools cho optimization
- Data-driven: based on millions of listings + SEO best practices

---

### 3.7 Multi-Channel Management
**Mục đích:** Quản lý listings trên nhiều marketplace.

**UI Components:**
- Shop selector/switcher
- Copy listing (giữa các shops)
- Merge listing (liên kết cùng sản phẩm trên nhiều kênh)
- Channel-specific AI adjustment

**UX Insights:**
- Copy: duplicate listing + AI auto-adjust content cho target marketplace
- Merge: link existing listings across channels để quản lý side-by-side
- Giảm duplicate work khi bán trên nhiều kênh

---

## 4. UI/UX Design Patterns đáng học hỏi

### 4.1 Design System
- **Color scheme:** Clean, professional, light theme chủ đạo
- **Typography:** Sans-serif, clear hierarchy
- **Layout:** Sidebar + main content area, responsive
- **Cards/Tables:** Kết hợp card view và table view cho listings

### 4.2 Interaction Patterns
| Pattern | Mô tả | Áp dụng |
|---------|--------|---------|
| **Bulk Select → Action** | Checkbox + action bar | Listings, Studio |
| **Inline Edit** | Click vào field để edit trực tiếp | Listings table |
| **AI Assist Inline** | AI suggestion ngay cạnh field | Bulk Editor |
| **Non-destructive Editing** | Changes buffered, explicit publish | Toàn app |
| **Score Gamification** | Letter grades tạo engagement | Listings |
| **Drag & Drop** | Upload ảnh, sắp xếp | Studio |
| **Template System** | Profiles reusable | Profiles |

### 4.3 Navigation Patterns
- Persistent sidebar cho navigation chính
- Breadcrumbs cho deep navigation
- Tab navigation trong editors
- Modal/drawer cho quick actions
- Toast notifications cho async operations (publish, schedule)

---

## 5. Gợi ý cho ứng dụng tương tự

### 5.1 Core Features nên có (MVP)
1. **Multi-channel listing management** — kết nối nhiều marketplace
2. **Bulk editing** — spreadsheet-like interface
3. **AI listing optimization** — scoring + suggestions
4. **Photo management** — upload, organize, basic editing
5. **Publishing workflow** — draft → review → publish/schedule

### 5.2 Differentiators có thể phát triển
1. **Analytics Dashboard** — Vela hiện chưa mạnh về analytics, đây là cơ hội
2. **Competitor Price Monitoring** — theo dõi giá đối thủ
3. **Inventory Sync** — đồng bộ tồn kho real-time across channels
4. **Order Management** — tích hợp quản lý đơn hàng
5. **Team Collaboration** — multi-user với role-based access
6. **A/B Testing cho Listings** — test title/photo/price variants
7. **Social Media Integration** — publish listings lên social channels
8. **Mobile App** — Vela chủ yếu web-based
9. **Marketplace Insights** — trending products, demand analysis
10. **Custom Reporting** — báo cáo tùy chỉnh

### 5.3 UI/UX Improvements gợi ý
1. **Dark mode** — Vela chỉ có light theme
2. **Customizable dashboard** — widget-based, kéo thả
3. **Keyboard shortcuts** — power users cần tốc độ
4. **Better onboarding** — interactive tutorial, not just text
5. **Undo/History timeline** — xem lịch sử thay đổi
6. **Notification center** — tập trung alerts, updates
7. **Quick action spotlight** — Cmd+K style command palette

### 5.4 Tech Stack gợi ý
- **Frontend:** React/Next.js + Tailwind CSS (modern, fast)
- **State Management:** Zustand hoặc Jotai (lightweight)
- **Table/Grid:** TanStack Table hoặc AG Grid (bulk editing)
- **Image Editor:** Fabric.js hoặc Konva.js (canvas-based)
- **AI Integration:** OpenAI API / Claude API cho listing optimization
- **Backend:** Node.js/Python + PostgreSQL
- **Real-time:** WebSocket cho sync notifications

---

## 6. Pricing Model Reference

Vela pricing theo 3 yếu tố:
1. Số lượng listings per shop
2. Plan tier: Lite vs Plus
3. Số shops kết nối (giảm 20% khi nhiều shops)

Free trial 1 tuần cho mỗi shop mới kết nối.

---

## 7. Screenshots

> Thư mục `screenshots/` chứa ảnh chụp từng trang (Dark + Light mode).
> Format: `01-listings-active.png` (dark), `light-01-listings-active.png` (light)

---

## 8. Phân tích Light Mode — Bổ sung UX Deep-Dive

> Phân tích từ 25 screenshots Light Mode (`light-01` → `light-25`)
> Ngày bổ sung: 2026-03-11

### 8.1 Tổng quan Light Mode Design

**Color Palette:**
- Background chính: `#FFF5F0` (warm off-white/peach tint) — không phải pure white
- Sidebar: white `#FFFFFF` trên nền peach
- Cards/sections: white với subtle border `#E5E7EB`
- Primary accent: teal/emerald `#0D9488` (buttons, active states, icons)
- Text: `#1F2937` (dark gray), secondary `#6B7280`
- Trial banner: light teal background

**Typography:** Sans-serif, clean hierarchy. Section headings bold, body regular weight.

**Layout:** Sidebar (icon-only khi collapsed, text khi expanded) + main content. Consistent 16-24px padding.

### 8.2 Phân tích theo từng màn hình

#### Listings (light-01, 02, 14, 25)
- **Active/Draft/Inactive tabs** rõ ràng với count badges
- Sidebar trái: Status filters (Active/Draft/Inactive) + Vela filters (Copy/Imported/Staging) + Listing Score chart + Categories + Tags
- Bảng: checkbox | thumbnail (ẩn) | Title | Stock | Price | Expires on | Section | Score
- Score hiển thị letter grade (A, B, B+, C+...) — clickable
- Hover actions (light-25): thumbnail preview + quick action buttons xuất hiện khi hover row
- **Vấn đề:** Thumbnails không hiển thị trong light mode screenshots → có thể do images chưa load hoặc bị stripped

#### Score Hover (light-24)
- Hover vào Score column → dropdown popup hiển thị breakdown: Title, Description, Tags
- Mỗi sub-score có icon + letter indicator
- **UX tốt:** Contextual tooltip giải thích score mà không cần navigate away

#### Listing Editor (light-03 → 07)
- **Tab navigation ngang:** Photos | Video | Title | Description | Tags | Details | Price | Inventory | Variations | Personalization | Shipping
- Photos: grid thumbnails + Upload button (dashed teal border)
- Video: single upload area, max 100MB
- Tags: chip/badge style, removable (X icon), teal colored, "0 remaining" counter
- Details: Category dropdowns (3-level: Accessories → Hair Accessories → Hair Ties & Elastics), optional fields expand/collapse
- Price: simple input, "Flattened for Variation" placeholder
- Variations: nested sub-tabs (Variations | Price | Quantity | SKU | Visibility | Photos | Processing), color dropdown + list
- Shipping: Processing profile, Shipping profile ("Fixed" badge), dimensions inputs, Return policy dropdown
- **Bottom bar:** Cancel | Save as Profile | Preview | Publish (teal, split button with dropdown arrow)

#### Profiles (light-08)
- Empty state với geometric shapes icon + "No profiles" text
- Left sidebar: Attributes → All (0 count)
- CTA: "Create profile" button top-right (teal)
- **Vấn đề:** Empty state quá đơn giản, thiếu guidance/tutorial về profiles là gì

#### Schedule (light-09, 23)
- Calendar view 2 tuần (Mar 10 - Mar 23)
- Navigation arrows prev/next
- Sidebar: Listings (0) | Updates (0) tabs
- Empty state: clock icon + "No scheduled listings/updates"
- **Vấn đề:** Calendar chỉ show 2 tuần, không có month view hoặc list view option

#### Studio - Photos (light-10)
- Grid gallery, 7 columns, responsive
- Sidebar: Photos/Videos toggle + Folder section (All photos: 27) + "New folder" button
- Sort icon cạnh title
- **Vấn đề:** Photos appear as blank placeholders — không rõ loading state hay thiếu thumbnails

#### Studio - Videos (light-22)
- Giống Photos layout nhưng video thumbnails lớn hơn
- 1 video hiển thị actual thumbnail (scrunchie product)

#### Account Settings (light-11)
- Sections: Appearance (theme selector: Light mode dropdown, sync with OS toggle) | Contact info (avatar, name fields) | Email | Password
- Bottom bar: Cancel | Save (teal)
- Sidebar: Account settings | Billing | Affiliate

#### Billing (light-12)
- Green gradient banner: "Multi-shop discount — Connect multiple shops to receive 20% off all shops" + Add shop CTA
- Stats cards: Shops connected (1) | Vela Lite (0) | Vela Plus (0) | Monthly total ($0.00)
- Shop table: Shop name | Listings | Price | Billing cycle | Plan (Trial badge with clock icon) | settings icon
- **UX tốt:** Rõ ràng, transparent pricing display

#### Create New Listing (light-13)
- Full-page editor, same tab structure as edit
- Header: "Etsy · LittleThingsOutHere → New listing"
- Photos section first (largest upload area)
- Video section below
- Bottom bar persistent: Cancel | Save as Profile | Publish

#### Bulk Select & Actions (light-15)
- Select all checkbox → header changes: "Active 2 selected"
- Action bar: Search | Delete | Export | Copy | Edit (teal, primary)
- Selected rows highlighted with teal checkbox

#### Bulk Edit - Photos (light-16)
- Header: "Editing 2 listings"
- Top bar: Cancel | Schedule | Sync updates (teal)
- Left sidebar: Media (Photos/Videos) | Listings | Optional | Inventory | Shipping — collapsible sections
- Action dropdown: "Add" mode
- Per-listing: title + photo grid + Upload button
- Search bar with select-all checkbox
- **UX tốt:** Clear editing scope, per-listing photo management

#### Bulk Edit - Title/AI (light-17)
- AI model selector: "Vela AI" dropdown + "Enter additional instructions" input
- Title style toggle: Classic | Concise (Concise selected/active - green)
- Optimize button (green, prominent)
- Per listing: editable title input + "XX characters remaining" counter + AI magic wand icon
- Pro tip popup (bottom-right): "Optimize tags — To receive maximum score... optimize tags first"
- **UX tốt:** AI inline, không phải switch context. Character counter helpful.

#### Bulk Edit - Tags (light-18)
- Same AI header: model + "Bamboo all" dropdown + instructions input + Optimize button
- Per listing: Tags input + chip list (removable)
- "0 remaining" counter per listing
- AI magic wand icon per listing for individual optimization
- **UX tốt:** Visual tag management, clear remaining count

#### Bulk Edit - Optional (light-19)
- Left sidebar expanded: Primary color | Secondary color | Holiday | Occasion | Materials | Sustainability | Style
- Top action: "Choose Primary color" dropdown + Apply button
- Per listing: thumbnail + title + individual color dropdown
- **Vấn đề:** Nhiều optional fields nhưng bulk apply UX chưa rõ — dropdown ở top áp cho tất cả hay per-listing?

#### Import CSV (light-20)
- Modal dialog over listings page
- "Import CSV" title + description: "You can upload any CSV file, but we recommend using our CSV template"
- Drag & drop zone: cloud upload icon + "Click to browse or drag and drop a CSV file to upload"
- "Download CSV template" button (teal, outlined)
- Cancel button
- **UX tốt:** Simple, có template download. **Thiếu:** progress indicator, column mapping preview

#### Affiliate (light-21)
- Referral link section + Copy link button
- PayPal payout account connection
- Stats: Total sign ups (0), Referrals count, All time payouts ($0.00)
- Milestone tiers: 5 Referrals ($300 bonus) | 10 ($400) | 20 ($500)
- Modal overlay: "Vela Affiliates" — 100% Commission, Milestone Bonuses, Monthly Payouts
- Apply now CTA
- **Note:** Affiliate page background khác biệt — dùng dark teal modal trên light background

### 8.3 Light Mode — Specific UX Issues

| # | Vấn đề | Mức độ | Màn hình | Chi tiết |
|---|--------|--------|----------|----------|
| 1 | **Contrast yếu** | Medium | Toàn app | Peach background `#FFF5F0` + white cards → ranh giới section mờ, thiếu depth |
| 2 | **Empty states thiếu guidance** | High | Profiles, Schedule | Chỉ có icon + text, không có tutorial hoặc quick-start CTA |
| 3 | **Thumbnails không load** | High | Listings, Studio Photos | Placeholder trắng, không có loading skeleton hoặc fallback image |
| 4 | **Tab overflow** | Medium | Listing Editor | 10 tabs ngang, trên viewport nhỏ sẽ bị cắt — không có scroll indicator |
| 5 | **Bottom bar overlap** | Low | Listing Editor | Cancel/Save/Publish bar có thể che nội dung cuối page |
| 6 | **Calendar limited** | Medium | Schedule | Chỉ 2-week view, thiếu month/list view cho planning dài hạn |
| 7 | **Sidebar inconsistency** | Low | Across pages | Sidebar items thay đổi giữa pages (listings filters vs. settings menu vs. studio folders) — user phải re-learn |
| 8 | **Score popup dark theme** | Low | light-24 | Score breakdown popup dùng dark background trên light mode — jarring contrast |
| 9 | **Bulk edit scope unclear** | Medium | light-19 | Top-level dropdown vs per-listing dropdown — relationship chưa rõ |
| 10 | **No breadcrumb** | Medium | Bulk Editor | Từ listings → bulk edit, không có breadcrumb quay lại — chỉ có Cancel button |

### 8.4 Đề xuất cải tiến UX cho Dodgeprint

#### A. Navigation & Information Architecture

| # | Đề xuất | Lý do | Priority |
|---|---------|-------|----------|
| A1 | **Persistent breadcrumb** | Bulk edit → back to listings cần rõ ràng, reduce disorientation | High |
| A2 | **Sidebar context consistency** | Giữ navigation structure nhất quán, dùng secondary panel cho contextual filters | High |
| A3 | **Cmd+K command palette** | Power users (sellers quản lý 1000+ listings) cần navigate nhanh | Medium |
| A4 | **Collapsible sections memory** | Nhớ trạng thái collapse/expand của sidebar sections across sessions | Low |

#### B. Listings & Table UX

| # | Đề xuất | Lý do | Priority |
|---|---------|-------|----------|
| B1 | **Skeleton loading** cho thumbnails/data | Thay vì blank placeholders, show animated skeleton → perceived performance tốt hơn | High |
| B2 | **Card view toggle** (grid ↔ card) | Sellers visual-focused (handmade, art) thích xem ảnh lớn, không chỉ table rows | High |
| B3 | **Column customization** | Cho phép ẩn/hiện columns, reorder — mỗi seller cần data khác nhau | Medium |
| B4 | **Inline quick-edit** | Click vào price/stock cell → edit trực tiếp không cần mở editor | High |
| B5 | **Sticky table header** | Scroll xuống vẫn thấy column headers | Medium |
| B6 | **Row grouping** by category/section | Giúp navigate listing lớn, collapse/expand groups | Low |
| B7 | **Saved filters/views** | Sellers hay dùng cùng filter set → save & quick-access | Medium |

#### C. Listing Editor UX

| # | Đề xuất | Lý do | Priority |
|---|---------|-------|----------|
| C1 | **Vertical tab layout** hoặc **scrollable sections** | 10 horizontal tabs overflow trên small screens. Vertical tabs hoặc single-page scroll với section nav tốt hơn | High |
| C2 | **Auto-save draft** | Prevent data loss khi user navigate away accidentally | High |
| C3 | **Change indicator** per tab | Dot/badge trên tab cho biết section nào đã được edit nhưng chưa save | Medium |
| C4 | **Side-by-side preview** | Xem listing như trên marketplace (Etsy/Shopify) real-time khi edit | Medium |
| C5 | **Field validation inline** | Real-time validation (title length, required fields) thay vì chờ submit | High |
| C6 | **Photo drag-to-reorder** | Kéo thả sắp xếp thứ tự ảnh (ảnh đầu = ảnh chính) | High |
| C7 | **Rich text description editor** | Toolbar formatting thay vì plain textarea | Medium |

#### D. Bulk Editing UX

| # | Đề xuất | Lý do | Priority |
|---|---------|-------|----------|
| D1 | **Diff preview** trước khi sync | Hiển thị "before → after" cho mỗi thay đổi trước khi commit | High |
| D2 | **Undo stack** per-session | Ctrl+Z undo individual changes trong bulk edit session | High |
| D3 | **Progress indicator** cho AI optimization | Khi optimize 50+ listings, cần progress bar + ETA | Medium |
| D4 | **Smart apply logic** | "Apply to all" vs "Apply to selected" cần visual distinction rõ ràng hơn — Vela chỉ có dropdown nhỏ | Medium |
| D5 | **Keyboard navigation** | Tab/Enter để move giữa cells trong bulk edit (spreadsheet-like) | Medium |

#### E. Schedule & Calendar UX

| # | Đề xuất | Lý do | Priority |
|---|---------|-------|----------|
| E1 | **Multiple calendar views** | Day / Week / 2-Week / Month — Vela chỉ có 2-week | High |
| E2 | **Drag-to-schedule** | Kéo listing từ sidebar vào calendar slot | Medium |
| E3 | **Timezone indicator** | Sellers bán international cần biết timezone đang hiển thị | Medium |
| E4 | **Recurring schedule** | "Publish every Monday at 9am" — automation cho seasonal sellers | Low |

#### F. Studio/Media UX

| # | Đề xuất | Lý do | Priority |
|---|---------|-------|----------|
| F1 | **Image preview on hover** | Gallery hover → enlarge preview mà không cần click vào | High |
| F2 | **Bulk select + batch actions** | Select multiple photos → batch delete, move to folder, apply filter | High |
| F3 | **Usage indicator** | Hiển thị photo đang được dùng bởi bao nhiêu listings | Medium |
| F4 | **Drag-drop upload anywhere** | Không chỉ upload area, drop ảnh bất kỳ đâu trên Studio page | Low |

#### G. Visual & Micro-interaction

| # | Đề xuất | Lý do | Priority |
|---|---------|-------|----------|
| G1 | **Consistent theme** cho overlays | Score popup không nên dùng dark theme trên light mode | Medium |
| G2 | **Toast notifications** thay vì alerts | Non-blocking feedback cho save/publish/sync actions | High |
| G3 | **Empty state với illustration + CTA** | "No profiles yet — Create your first profile to save time" + Create button | High |
| G4 | **Subtle shadows** thay vì flat borders | Tăng depth perception, card separation rõ hơn trên warm background | Medium |
| G5 | **Transition animations** | Page transitions, sidebar collapse, modal open — smooth 200-300ms easing | Low |
| G6 | **Success/error color coding** | Green for synced, amber for pending, red for failed — consistent across app | Medium |

#### H. Onboarding & Help

| # | Đề xuất | Lý do | Priority |
|---|---------|-------|----------|
| H1 | **Interactive onboarding tour** | Step-by-step highlight key features khi user mới | High |
| H2 | **Contextual help tooltips** | "?" icon cạnh complex fields (e.g., "What are Profiles?") | Medium |
| H3 | **Progress checklist** | "Setup: ✅ Connect shop, ⬜ Create first listing, ⬜ Optimize scores" | Medium |
| H4 | **Video tutorials** embedded | Short 30s clips cho features like bulk edit, AI optimization | Low |

### 8.5 So sánh Dark vs Light Mode

| Yếu tố | Dark Mode | Light Mode | Nhận xét |
|---------|-----------|------------|----------|
| Contrast | Tốt — dark bg + white text | Yếu — warm bg + white cards blend | Light cần stronger borders/shadows |
| Readability | Tốt cho long sessions | Tốt cho quick scans | Tùy preference |
| CTA visibility | Teal buttons nổi bật trên dark | Teal buttons vẫn nổi nhưng less dramatic | Dark wins cho CTA emphasis |
| Score popup | Consistent (dark on dark) | Jarring (dark popup on light bg) | Light mode cần light-themed popup |
| Sidebar | Rõ ràng, high contrast | Mờ hơn, text hơi nhạt | Light cần bolder sidebar text |
| Overall feel | Professional, modern | Warm, friendly nhưng less polished | Light cần refinement |

---

## 9. Tổng kết ưu tiên cải tiến (Top 10)

| # | Cải tiến | Impact | Effort | Score |
|---|----------|--------|--------|-------|
| 1 | Skeleton loading + proper image fallbacks | High | Low | ⭐⭐⭐⭐⭐ |
| 2 | Card view toggle cho listings | High | Medium | ⭐⭐⭐⭐⭐ |
| 3 | Auto-save draft + change indicators | High | Medium | ⭐⭐⭐⭐ |
| 4 | Vertical/scrollable editor layout (thay 10 tabs ngang) | High | Medium | ⭐⭐⭐⭐ |
| 5 | Empty states với guidance + CTA | High | Low | ⭐⭐⭐⭐ |
| 6 | Diff preview trước sync | High | High | ⭐⭐⭐⭐ |
| 7 | Inline quick-edit (price, stock) | High | Medium | ⭐⭐⭐⭐ |
| 8 | Persistent breadcrumb navigation | Medium | Low | ⭐⭐⭐⭐ |
| 9 | Multiple calendar views | Medium | Medium | ⭐⭐⭐ |
| 10 | Cmd+K command palette | Medium | Medium | ⭐⭐⭐ |

---

*Nguồn: Research từ getvela.com, welcome.getvela.com, Shopify App Store, Etsy Apps*
*Ngày tạo: 2026-03-10*
*Cập nhật Light Mode analysis: 2026-03-11*
