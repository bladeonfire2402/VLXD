# Kiến trúc Component Header

## Tổng quan
Component Header đóng vai trò điều hướng chính của website "Vật Liệu Xây Dựng", được thiết kế đáp ứng (responsive) trên cả hai nền tảng Desktop và Mobile, và được viết bằng **Styled Components**.

## Cấu trúc thư mục
Header tuân theo chuẩn cấu trúc component mới (Folder -> index + styles):

```text
src/components/layout/Header/
├── index.tsx                (Component chính, chuyển đổi hiển thị Desktop/Mobile)
├── styles.ts                (Styled component cho wrapper global)
├── DesktopHeader/
│   ├── index.tsx            (Component hiển thị trên màn hình lớn > 991px)
│   └── styles.ts            (CSS tương ứng cho Desktop)
└── MobileHeader/
    ├── index.tsx            (Component hiển thị trên thiết bị nhỏ < 991px, có Hamburger Menu)
    └── styles.ts            (CSS tương ứng cho Mobile)
```

## Chức năng
- **DesktopHeader**: Hiển thị logo, thông tin liên hệ (Địa chỉ, Hotline) ở phần Top (nền trắng full width). Phần Bottom (nền đen) chứa menu đa cấp xổ xuống (Dropdown) khi hover.
- **MobileHeader**: Hiển thị logo và nút Hamburger. Khi click nút sẽ mở ra menu đa cấp dạng Accordion (có các icon + / - để thu gọn, mở rộng menu con).
- **Trạng thái Active**: Menu sẽ nhận diện URL hiện tại (`usePathname` của Next.js) để đổi màu vàng `#ffbc13` nhằm báo hiệu cho người dùng.

## Dữ liệu
- Toàn bộ dữ liệu của Menu (Danh sách danh mục, báo giá) được lấy tập trung từ `src/lib/constants.ts` -> biến `MENU_ITEMS`.
- Logo được lấy từ `src/lib/AssetManager.ts` giúp quản lý đường dẫn tập trung.
