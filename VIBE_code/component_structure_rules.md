   

# Quy chuẩn Cấu trúc UI Components

Để đảm bảo dự án dễ quản lý, dễ mở rộng và tránh xung đột CSS, mọi UI component (Core UI, Shared, v.v.) trong dự án "Vật Liệu Xây Dựng" bắt buộc phải tuân theo chuẩn kiến trúc sau:

## 1. Cấu trúc Thư mục

Không tạo một component nằm lẻ loi trong một file `.tsx`. Bắt buộc phải tạo một **thư mục** mang tên Component, bên trong chứa ít nhất 2 file:

```text
ComponentName/
  ├── index.tsx        (Chứa logic React, cấu trúc HTML)
  └── styles.ts        (Chứa mã CSS được viết bằng styled-components)
```

**Ví dụ:**
Nếu cần tạo component `Button`, cấu trúc sẽ là:

```text
src/components/ui/Button/
  ├── index.tsx
  └── styles.ts
```

## 2. Quy tắc Viết Code

### Trong file `styles.ts`:

- Sử dụng `styled-components` (`import styled from "styled-components"`).
- Khai báo các style wrapper và các sub-element, xuất (export) chúng ra ngoài.
- Dùng PascalCase cho tên các styled component, ví dụ: `export const ButtonWrapper = styled.button...`

### Trong file `index.tsx`:

- Cần khai báo `"use client"` ở dòng đầu tiên của những component có State, Event (Click, Hover) hoặc dùng props động của styled-components.
- Import các styled components từ file `styles.ts` cùng cấp.
- Hạn chế tối đa việc viết inline style (`style={{ color: 'red' }}`), mọi style nên được cấu hình trong `styles.ts`.

## 3. Lý do áp dụng

- **Phân tách trách nhiệm (Separation of Concerns)**: Logic tách rời CSS, giúp file `index.tsx` gọn gàng.
- **Scope CSS**: `styled-components` tự động tạo hash className (vd: `sc-bdVaJa`), đảm bảo class không bị đè nhau gây lỗi UI ngoài ý muốn.
- **Tiện quản lý**: Khi làm việc theo nhóm hoặc bảo trì sau này, chỉ cần vào đúng thư mục là có thể sửa cả UI lẫn Logic mà không phải nhảy file phức tạp.
