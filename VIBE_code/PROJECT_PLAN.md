# Kế hoạch & Kiến trúc Dự án Website Vật Liệu Xây Dựng

## Thông tin chung

- **Chủ đề**: Website bán/giới thiệu Vật Liệu Xây Dựng.
- **Framework**: Next.js (App Router).
- **Ngôn ngữ**: TypeScript.
- **Styling**: Styled Components (CSS-in-JS).
- **State Management**: Redux Toolkit (`@reduxjs/toolkit`, `react-redux`).
- **Data Fetching**: React Query (`@tanstack/react-query`).
- **Trình quản lý gói**: `npm`

## Cấu trúc Source Code

```text
/
├── public/                 # Chứa tài nguyên tĩnh (hình ảnh, fonts, icons)
├── src/
│   ├── app/                # Next.js App Router (Routing & SEO)
│   │   ├── (routes)/       # Các Route groups để chia nhóm logic
│   │   ├── api/            # API Routes
│   │   ├── layout.tsx      # Root layout
│   │   └── page.tsx        # Ví dụ: trang chủ định tuyến
│   ├── pages/              # Chứa UI/Logic của các trang (thay thế cho screens)
│   │   ├── Home/           # Ví dụ: Giao diện trang chủ
│   │   │   ├── index.tsx
│   │   │   └── styles.ts
│   │   └── Contact/        # Ví dụ: Giao diện trang liên hệ
│   ├── styles/             # Thư mục quản lý toàn bộ CSS dùng chung
│   │   ├── variables.css   # Định nghĩa toàn bộ biến (Colors, Typography, Shadows...)
│   │   ├── media.css       # Chứa các mixins / Breakpoints Media Queries dùng cho Responsive
│   │   ├── utilities.css   # Các utility classes xài chung (flex-center, text-truncate, container...)
│   │   └── global.css      # File chính import các file trên và chứa reset CSS cơ bản
│   ├── components/         # Các Reusable UI components (sẽ viết tay sau)
│   │   ├── ui/             # Core UI components (Button, Input, Card...)
│   │   └── shared/         # Các component chung của Layout (Header, Footer, Sidebar)
│   ├── lib/                # Tiện ích hỗ trợ (utils, constants, formatters)
│   ├── hooks/              # Custom React hooks (chứa các hooks query/mutation của React Query)
│   ├── store/              # Global state management (Redux)
│   │   ├── store.ts        # Cấu hình Redux store chính
│   │   ├── provider.tsx    # Client Component bao bọc Redux Provider và QueryClientProvider
│   │   └── slices/         # Các Redux slices (cartSlice, authSlice...)
│   ├── types/              # Khai báo TypeScript types / interfaces
│   └── services/           # Logic gọi API (Axios instance, fetch wrappers)
├── .env.local              # File chứa các biến môi trường
├── package.json            # Thông tin dependencies và scripts
└── next.config.mjs         # Cấu hình Next.js
```

## Các bước triển khai (Dự kiến)

1. Chạy lệnh khởi tạo project: `npx create-next-app@latest . --typescript --eslint --no-tailwind --src-dir --app --import-alias "@/*"`
2. Cài đặt các thư viện Redux và React Query: `npm install @reduxjs/toolkit react-redux @tanstack/react-query`
3. Tạo đầy đủ các thư mục theo kiến trúc đã định (đặc biệt là thêm thư mục `src/styles`).
4. Thiết lập kiến trúc CSS (`variables.css`, `media.css`, `utilities.css`, `global.css`).
5. Thiết lập file `store/provider.tsx` để wrap Layout gốc với các Provider của Redux và React Query.
6. Tiến hành code các component UI bằng styled-components.
