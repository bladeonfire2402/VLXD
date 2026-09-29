import { RouteManager } from '@/constants/route';
import { AssetManagers } from '@/constants/assets';
import { Product } from '@/interface/product/product';

export enum CategoryType {
  CAT_XAY_DUNG = 'cat-xay-dung',
  DA_XAY_DUNG = 'da-xay-dung',
  BE_TONG_THUONG_PHAM = 'be-tong-thuong-pham',
}

export const MENU_ITEMS = [
  { label: 'TRANG CHỦ', url: RouteManager.HOME },
  {
    label: 'VẬT LIỆU XÂY DỰNG',
    url: RouteManager.PRODUCTS,
    children: [
      { label: 'Cát xây dựng', url: RouteManager.productCategory(CategoryType.CAT_XAY_DUNG) },
      { label: 'Đá xây dựng', url: RouteManager.productCategory(CategoryType.DA_XAY_DUNG) },
      { label: 'Bê tông thương phẩm', url: RouteManager.productCategory(CategoryType.BE_TONG_THUONG_PHAM) },
    ]
  },
  { label: 'TIN TỨC', url: RouteManager.NEWS },
  { label: 'LIÊN HỆ', url: RouteManager.CONTACT },
];

// Category slug -> name mapping
export const CATEGORY_MAP: Record<CategoryType, string> = {
  [CategoryType.CAT_XAY_DUNG]: 'Cát xây dựng',
  [CategoryType.DA_XAY_DUNG]: 'Đá xây dựng',
  [CategoryType.BE_TONG_THUONG_PHAM]: 'Bê tông thương phẩm',
};

export const CATEGORY_DESCRIPTIONS: Record<CategoryType, string> = {
  [CategoryType.CAT_XAY_DUNG]: 'Cung cấp mọi loại cát xây dựng, cát san lấp, cát bê tông, cát xây tô chất lượng cao.',
  [CategoryType.DA_XAY_DUNG]: 'Cung cấp mọi loại đá xây dựng, đủ kích cỡ, giao hàng tận công trình khi quý khách có nhu cầu.',
  [CategoryType.BE_TONG_THUONG_PHAM]: 'Cung cấp bê tông thương phẩm các mác, bơm bê tông tận công trình, giao hàng nhanh chóng.',
};

// === ĐÁ XÂY DỰNG ===
export const MOCK_DA_XAY_DUNG: Product[] = [
  { id: 'da-1', slug: 'da-mi-sang', categorySlug: CategoryType.DA_XAY_DUNG, name: 'Đá mi sàng', thumbnail: AssetManagers.products.gachCui, images: [AssetManagers.products.gachCui, AssetManagers.products.gachNgoi], details: 'Đá mi sàng có kích cỡ từ 5mm đến 10mm, được sàng tách ra từ sản phẩm đá khác. Loại đá này dùng làm chân đế gạch bông, gạch lót sàn, phụ gia cho công nghệ bê tông đúc ống cống và thi công các công trình giao thông và phụ gia cho các loại VLXD khác.', tags: ['đá mi sàng', 'đá mi sàng giá rẻ', 'cửa hàng cung cấp đá mi sàng', 'đá mi sàng chất lượng', 'đá mi sàng mua ở đâu', 'đá mi sàng chất lượng tphcm'], category: 'Đá xây dựng' },
  { id: 'da-2', slug: 'da-mi-bui', categorySlug: CategoryType.DA_XAY_DUNG, name: 'Đá mi bụi', thumbnail: AssetManagers.products.gachNgoi, images: [AssetManagers.products.gachNgoi, AssetManagers.products.gachCui], details: 'Đá mi bụi dùng cho san lấp, trộn bê tông nhựa.', tags: ['đá mi bụi', 'đá xây dựng'], category: 'Đá xây dựng' },
  { id: 'da-3', slug: 'da-hoc-20x30', categorySlug: CategoryType.DA_XAY_DUNG, name: 'Đá hộc 20x30', thumbnail: AssetManagers.products.gachCui, images: [AssetManagers.products.gachCui, AssetManagers.products.gachNgoi], details: 'Đá hộc kích thước 20x30 dùng cho kè bờ, xây móng.', tags: ['đá hộc', 'đá xây dựng'], category: 'Đá xây dựng' },
  { id: 'da-4', slug: 'da-4x6-xanh', categorySlug: CategoryType.DA_XAY_DUNG, name: 'Đá 4x6 xanh', thumbnail: AssetManagers.products.gachNgoi, images: [AssetManagers.products.gachNgoi, AssetManagers.products.gachCui], details: 'Đá 4x6 xanh chất lượng cao.', tags: ['đá 4x6', 'đá xanh'], category: 'Đá xây dựng' },
  { id: 'da-5', slug: 'da-4x6-den', categorySlug: CategoryType.DA_XAY_DUNG, name: 'Đá 4x6 đen', thumbnail: AssetManagers.products.gachCui, images: [AssetManagers.products.gachCui, AssetManagers.products.gachNgoi], details: 'Đá 4x6 đen dùng cho đổ bê tông.', tags: ['đá 4x6', 'đá đen'], category: 'Đá xây dựng', price: '220.000đ / Khối' },
  { id: 'da-6', slug: 'da-1x2-xanh', categorySlug: CategoryType.DA_XAY_DUNG, name: 'Đá 1x2 xanh', thumbnail: AssetManagers.products.gachNgoi, images: [AssetManagers.products.gachNgoi, AssetManagers.products.gachCui], details: 'Đá 1x2 xanh chất lượng cao.', tags: ['đá 1x2', 'đá xanh'], category: 'Đá xây dựng', price: '330.000đ / Khối' },
];

// === CÁT XÂY DỰNG ===
export const MOCK_CAT_XAY_DUNG: Product[] = [
  { id: 'cat-1', slug: 'cat-be-tong-cat-vang', categorySlug: CategoryType.CAT_XAY_DUNG, name: 'Cát vàng', thumbnail: AssetManagers.products.gachNgoi, images: [AssetManagers.products.gachNgoi, AssetManagers.products.gachCui], details: 'Đặc điểm: Hạt to, sắc cạnh, sạch, ít tạp chất. Mô-đun độ lớn thường từ 2.0 đến 3.0. Ứng dụng: Chuyên dùng để đổ bê tông cho móng, dầm, cột, sàn và các kết cấu chịu lực lớn khác.', tags: ['cát bê tông', 'cát vàng', 'cát xây dựng'], category: 'Cát xây dựng' },
  { id: 'cat-2', slug: 'cat-xay-to-cat-xay-trat', categorySlug: CategoryType.CAT_XAY_DUNG, name: 'Cát xây tô (Cát xây trát)', thumbnail: AssetManagers.products.gachCui, images: [AssetManagers.products.gachCui, AssetManagers.products.gachNgoi], details: 'Đặc điểm: Hạt mịn và đều hơn cát bê tông, hàm lượng tạp chất rất ít, sạch. Mô-đun độ lớn thường từ 0.7 đến 1.4. Ứng dụng: Dùng để xây tường gạch và trát (tô) tường tạo bề mặt phẳng mịn trước khi sơn.', tags: ['cát xây tô', 'cát xây trát', 'cát xây dựng'], category: 'Cát xây dựng' },
  { id: 'cat-3', slug: 'cat-san-lap', categorySlug: CategoryType.CAT_XAY_DUNG, name: 'Cát san lấp', thumbnail: AssetManagers.products.gachCui, images: [AssetManagers.products.gachCui, AssetManagers.products.gachNgoi], details: 'Đặc điểm: Loại cát tự nhiên chưa qua sàng lọc kỹ, lẫn nhiều tạp chất (đất, sỏi nhỏ, bụi). Ứng dụng: Chủ yếu dùng để san lấp nền móng, tạo mặt bằng cho các công trình, nhà xưởng, đường sá nhằm gia cố tầng nền yếu.', tags: ['cát san lấp', 'cát xây dựng'], category: 'Cát xây dựng' },
];

// === BÊ TÔNG THƯƠNG PHẨM ===
export const MOCK_BE_TONG: Product[] = [
  { id: 'bt-1', slug: 'be-tong-mac-150', categorySlug: CategoryType.BE_TONG_THUONG_PHAM, name: 'Bê tông mác 150', thumbnail: AssetManagers.products.gachCui, images: [AssetManagers.products.gachCui, AssetManagers.products.gachNgoi], details: 'Bê tông mác 150 (B12.5) dùng cho lót nền, đổ bệ móng, công trình dân dụng.', tags: ['bê tông mác 150', 'bê tông thương phẩm'], category: 'Bê tông thương phẩm' },
  { id: 'bt-2', slug: 'be-tong-mac-200', categorySlug: CategoryType.BE_TONG_THUONG_PHAM, name: 'Bê tông mác 200', thumbnail: AssetManagers.products.gachNgoi, images: [AssetManagers.products.gachNgoi, AssetManagers.products.gachCui], details: 'Bê tông mác 200 (B15) dùng cho đổ sàn, dầm, cột nhà dân dụng.', tags: ['bê tông mác 200', 'bê tông thương phẩm'], category: 'Bê tông thương phẩm' },
  { id: 'bt-3', slug: 'be-tong-mac-250', categorySlug: CategoryType.BE_TONG_THUONG_PHAM, name: 'Bê tông mác 250', thumbnail: AssetManagers.products.gachCui, images: [AssetManagers.products.gachCui, AssetManagers.products.gachNgoi], details: 'Bê tông mác 250 (B20) dùng cho công trình chịu lực cao, sàn nhà cao tầng.', tags: ['bê tông mác 250', 'bê tông thương phẩm'], category: 'Bê tông thương phẩm' },
  { id: 'bt-4', slug: 'be-tong-mac-300', categorySlug: CategoryType.BE_TONG_THUONG_PHAM, name: 'Bê tông mác 300', thumbnail: AssetManagers.products.gachNgoi, images: [AssetManagers.products.gachNgoi, AssetManagers.products.gachCui], details: 'Bê tông mác 300 (B22.5) chất lượng cao cho công trình lớn.', tags: ['bê tông mác 300', 'bê tông thương phẩm'], category: 'Bê tông thương phẩm' },
  { id: 'bt-5', slug: 'be-tong-mac-350', categorySlug: CategoryType.BE_TONG_THUONG_PHAM, name: 'Bê tông mác 350', thumbnail: AssetManagers.products.gachCui, images: [AssetManagers.products.gachCui, AssetManagers.products.gachNgoi], details: 'Bê tông mác 350 (B25) dùng cho cầu đường, công trình hạ tầng.', tags: ['bê tông mác 350', 'bê tông thương phẩm'], category: 'Bê tông thương phẩm' },
  { id: 'bt-6', slug: 'be-tong-mac-400', categorySlug: CategoryType.BE_TONG_THUONG_PHAM, name: 'Bê tông mác 400', thumbnail: AssetManagers.products.gachNgoi, images: [AssetManagers.products.gachNgoi, AssetManagers.products.gachCui], details: 'Bê tông mác 400 (B30) cường độ cao cho công trình đặc biệt.', tags: ['bê tông mác 400', 'bê tông thương phẩm'], category: 'Bê tông thương phẩm' },
];

// Featured products (used on homepage)
export const MOCK_FEATURED_PRODUCTS: Product[] = [
  ...MOCK_DA_XAY_DUNG.slice(0, 3),
  ...MOCK_CAT_XAY_DUNG.slice(0, 3),
  ...MOCK_BE_TONG.slice(0, 2),
];

// Helper: get all products
export const ALL_PRODUCTS: Product[] = [
  ...MOCK_DA_XAY_DUNG,
  ...MOCK_CAT_XAY_DUNG,
  ...MOCK_BE_TONG,
];

