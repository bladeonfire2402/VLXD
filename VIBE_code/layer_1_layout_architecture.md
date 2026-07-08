 

# Kiến trúc Layer 1: Global Layout & Screens

Tài liệu này ghi lại luồng hoạt động và cấu trúc của Layer 1 (Phần Layout cơ bản của ứng dụng) được implement trong dự án Next.js (App Router).

## 1. Tổng quan (Overview)

Layer 1 bao gồm cấu trúc khung hiển thị chính (Layout) xuất hiện trên mọi trang của website. Thiết kế đảm bảo nguyên tắc:

- **Tái sử dụng cao:** Header và Footer chỉ được load 1 lần, các trang bên trong thay đổi nội dung (Client-side navigation) mà không bị chớp hay tải lại giao diện tổng.
- **Phân tách trách nhiệm:** Các component Header, Footer được tách riêng biệt, dễ dàng maintain và mở rộng.

## 2. Các thành phần chính (Core Components)

### 2.1. Header (`src/components/layout/Header/index.tsx`)

Thanh điều hướng nằm ở trên cùng của trang web.

- **Thành phần:** Logo, Menu Nav, Thanh tìm kiếm, Nút Giỏ hàng, Nút Đăng nhập.
- **Chức năng:** Hỗ trợ điều hướng đến các trang chính, có hiệu ứng `sticky` (cuộn dính) để luôn khả dụng khi người dùng kéo xem nội dung phía dưới.

### 2.2. Footer (`src/components/layout/Footer/index.tsx`)

Chân trang nằm ở dưới cùng của trang web.

- **Thành phần:** Thông tin thương hiệu VLXD Pro, Liên kết nhanh, Thông tin liên hệ, Mạng xã hội.
- **Chức năng:** Cung cấp thông tin phụ và map trang cho người dùng.

### 2.3. Root Layout (`src/app/layout.tsx`)

Đóng vai trò là thẻ wrapper cao nhất của ứng dụng (nằm trong thẻ `<body>`).

- Layout này bọc toàn bộ ứng dụng bằng các Provider (Redux) và sắp xếp cấu trúc tuần tự:
  1. `<Header />`
  2. `<main>{children}</main>` (Nội dung động của các trang như Home, Info, Details)
  3. `<Footer />`
  4. `<GlobalModalManager />` (Layer 2 - nằm ngoài cấu trúc DOM của content chính để tránh xung đột z-index).

## 3. Styling (`styles.ts`)

- **App Wrapper:** Sử dụng Flexbox (`flex-direction: column`, `min-height: 100vh`) để đảm bảo Footer luôn bị đẩy xuống dưới cùng màn hình ngay cả khi trang có ít nội dung.
- **Responsive:** Tích hợp Media Query trực tiếp trong file `styles.ts` của Header/Footer để sắp xếp lại thanh Search, Menu Navigation cho tương thích với màn hình di động (dưới 768px).
- **CSS-in-JS:** Sử dụng `styled-components` cục bộ cho từng component thay vì CSS toàn cục.

## 4. Lợi ích

1. **Trải nghiệm người dùng:** Nhờ cơ chế App Router, chuyển trang diễn ra siêu mượt mà.
2. **Bảo trì dễ dàng:** Code gọn gàng, nếu cần thêm Banner toàn trang thì chỉ cần sửa ở `layout.tsx`.
