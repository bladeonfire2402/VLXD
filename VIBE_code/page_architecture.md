# Kiến trúc Tách biệt Routing và Page UI

Tài liệu này quy định cách tổ chức thư mục và file cho các trang trong dự án Next.js (App Router), nhằm đảm bảo sự phân tách trách nhiệm (Separation of Concerns) giữa phần định tuyến/SEO và phần giao diện UI.

## 1. Cấu trúc Thư mục

Mọi trang trong dự án bắt buộc phải chia thành 2 phần: **Route** (trong `src/app`) và **Page UI** (trong `src/pages`).

```text
src/
├── app/                        # Thư mục Định tuyến (Chịu trách nhiệm Routing & SEO)
│   ├── page.tsx                # Ví dụ: File định tuyến Trang chủ, import <HomePage />
│   └── [route-name]/
│       └── page.tsx            # Ví dụ: File định tuyến trang con, import <RoutePage />
│
├── pages/                      # Thư mục Page UI (Chịu trách nhiệm UI & Logic Client)
│   ├── Home/                   
│   │   ├── index.tsx           # Component giao diện chính của trang chủ (HomePage)
│   │   └── styles.ts           # CSS của trang chủ (Styled Components)
│   └── [PageName]/
│       ├── index.tsx           # Component giao diện chính (PageName)
│       └── styles.ts           # CSS của page đó
```

## 2. Quy tắc Viết Code & Phân chia Trách nhiệm

### 2.1. File Route (`src/app/.../page.tsx`)
- **Vai trò:** Server Component (mặc định của Next.js App Router).
- **Trách nhiệm:**
  - Định tuyến (Routing).
  - Lấy các tham số URL (`params`, `searchParams`).
  - Thiết lập thẻ Meta/SEO (`generateMetadata`).
  - (Tùy chọn) Gọi API phía Server (SSR/SSG) để lấy dữ liệu tĩnh hoặc dữ liệu quan trọng cho SEO, sau đó truyền xuống cho Page UI dưới dạng Props.
- **Quy tắc:** Tuyệt đối **không** viết giao diện (UI) phức tạp hay khai báo `"use client"` ở file này. File này chỉ đóng vai trò Wrapper và render Page UI Component.

**Ví dụ `src/app/page.tsx`:**
```tsx
import HomePage from "@/pages/Home";

export const metadata = {
  title: "Trang chủ - Vật Liệu Xây Dựng",
  description: "Cung cấp vật liệu xây dựng uy tín chất lượng",
};

export default function HomeRoute() {
  // Có thể fetch data SSR ở đây nếu cần (chuẩn bị cho tương lai)
  // const data = await fetchSomeData();

  return <HomePage /* data={data} */ />;
}
```

### 2.2. File Page UI (`src/pages/PageName/index.tsx` & `styles.ts`)
- **Vai trò:** Client Component hoặc Server Component (thường là Client Component chứa UI).
- **Trách nhiệm:**
  - Chứa toàn bộ cấu trúc Layout, UI của trang đó (kết hợp từ các Components nhỏ hơn).
  - Quản lý State cục bộ (useState, useReducer).
  - Xử lý các sự kiện tương tác của người dùng (onClick, onChange...).
  - Gọi API phía Client bằng React Query (nếu đó là data động, không bắt buộc SEO).
- **Quy tắc:** Tuân thủ quy chuẩn cấu trúc Component (`index.tsx` cho logic React, `styles.ts` chứa Styled Components). Phải khai báo `"use client"` nếu có dùng state hoặc event handler.

**Ví dụ `src/pages/Home/index.tsx`:**
```tsx
"use client";

import React from "react";
import { HomeWrapper, Title } from "./styles";

const HomePage = () => {
  return (
    <HomeWrapper>
      <Title>Chào mừng đến với hệ thống Vật Liệu Xây Dựng</Title>
      {/* Import và sử dụng các component khác ở đây */}
    </HomeWrapper>
  );
};

export default HomePage;
```
