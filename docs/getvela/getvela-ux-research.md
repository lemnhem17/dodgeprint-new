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

## 7. Screenshots (cần bổ sung)

> Thư mục `screenshots/` dành cho ảnh chụp từng trang.
> Đặt tên file theo format: `01-dashboard.png`, `02-listings.png`, `03-bulk-editor.png`...

---

*Nguồn: Research từ getvela.com, welcome.getvela.com, Shopify App Store, Etsy Apps*
*Ngày tạo: 2026-03-10*
