import { RouteManager } from '@/constants/route';
import { AssetManagers } from '@/constants/assets';

export const MENU_ITEMS = [
  { label: 'TRANG CHỦ', url: RouteManager.HOME },
  {
    label: 'VẬT LIỆU XÂY DỰNG',
    url: RouteManager.PRODUCTS,
    children: [
      { label: 'Sắt thép xây dựng', url: RouteManager.productCategory('sat-thep-xay-dung') },
      { label: 'Xi măng', url: RouteManager.productCategory('xi-mang') },
      { label: 'Gạch tuynel', url: RouteManager.productCategory('gach-tuynel') },
      { label: 'Cát xây dựng', url: RouteManager.productCategory('cat-xay-dung') },
      { label: 'Đá xây dựng', url: RouteManager.productCategory('da-xay-dung') },
      { label: 'Vật liệu xây dựng khác', url: RouteManager.productCategory('vat-lieu-xay-dung-khac') },
    ]
  },
  { label: 'TIN TỨC', url: RouteManager.NEWS },
  { label: 'LIÊN HỆ', url: RouteManager.CONTACT },
];

import { Product } from '@/interface/product/product';

// Category slug -> name mapping
export const CATEGORY_MAP: Record<string, string> = {
  'sat-thep-xay-dung': 'Sắt thép xây dựng',
  'xi-mang': 'Xi măng',
  'gach-tuynel': 'Gạch tuynel',
  'cat-xay-dung': 'Cát xây dựng',
  'da-xay-dung': 'Đá xây dựng',
  'vat-lieu-xay-dung-khac': 'Vật liệu xây dựng khác',
  'be-tong-thuong-pham': 'Bê tông thương phẩm',
};

export const CATEGORY_DESCRIPTIONS: Record<string, string> = {
  'sat-thep-xay-dung': 'Cung cấp sắt thép xây dựng chất lượng cao từ các thương hiệu uy tín.',
  'xi-mang': 'Cung cấp các loại xi măng chất lượng cho mọi công trình.',
  'gach-tuynel': 'Cung cấp gạch tuynel xây dựng các loại.',
  'cat-xay-dung': 'Cung cấp mọi loại cát xây dựng, cát san lấp, cát bê tông, cát xây tô chất lượng cao.',
  'da-xay-dung': 'Cung cấp mọi loại đá xây dựng, đủ kích cỡ, giao hàng tận công trình khi quý khách có nhu cầu.',
  'vat-lieu-xay-dung-khac': 'Cung cấp đa dạng các loại vật liệu xây dựng khác.',
  'be-tong-thuong-pham': 'Cung cấp bê tông thương phẩm các mác, bơm bê tông tận công trình, giao hàng nhanh chóng.',
};

// === ĐÁ XÂY DỰNG ===
export const MOCK_DA_XAY_DUNG: Product[] = [
  { id: 'da-1', slug: 'da-mi-sang', categorySlug: 'da-xay-dung', name: 'Đá mi sàng', thumbnail: AssetManagers.products.gachCui, images: [AssetManagers.products.gachCui, AssetManagers.products.gachNgoi], details: 'Đá mi sàng có kích cỡ từ 5mm đến 10mm, được sàng tách ra từ sản phẩm đá khác. Loại đá này dùng làm chân đế gạch bông, gạch lót sàn, phụ gia cho công nghệ bê tông đúc ống cống và thi công các công trình giao thông và phụ gia cho các loại VLXD khác.', tags: ['đá mi sàng', 'đá mi sàng giá rẻ', 'cửa hàng cung cấp đá mi sàng', 'đá mi sàng chất lượng', 'đá mi sàng mua ở đâu', 'đá mi sàng chất lượng tphcm'], category: 'Đá xây dựng' },
  { id: 'da-2', slug: 'da-mi-bui', categorySlug: 'da-xay-dung', name: 'Đá mi bụi', thumbnail: AssetManagers.products.gachNgoi, images: [AssetManagers.products.gachNgoi, AssetManagers.products.gachCui], details: 'Đá mi bụi dùng cho san lấp, trộn bê tông nhựa.', tags: ['đá mi bụi', 'đá xây dựng'], category: 'Đá xây dựng' },
  { id: 'da-3', slug: 'da-hoc-20x30', categorySlug: 'da-xay-dung', name: 'Đá hộc 20x30', thumbnail: AssetManagers.products.gachCui, images: [AssetManagers.products.gachCui, AssetManagers.products.gachNgoi], details: 'Đá hộc kích thước 20x30 dùng cho kè bờ, xây móng.', tags: ['đá hộc', 'đá xây dựng'], category: 'Đá xây dựng' },
  { id: 'da-4', slug: 'da-4x6-xanh', categorySlug: 'da-xay-dung', name: 'Đá 4x6 xanh', thumbnail: AssetManagers.products.gachNgoi, images: [AssetManagers.products.gachNgoi, AssetManagers.products.gachCui], details: 'Đá 4x6 xanh chất lượng cao.', tags: ['đá 4x6', 'đá xanh'], category: 'Đá xây dựng' },
  { id: 'da-5', slug: 'da-4x6-den', categorySlug: 'da-xay-dung', name: 'Đá 4x6 đen', thumbnail: AssetManagers.products.gachCui, images: [AssetManagers.products.gachCui, AssetManagers.products.gachNgoi], details: 'Đá 4x6 đen dùng cho đổ bê tông.', tags: ['đá 4x6', 'đá đen'], category: 'Đá xây dựng', price: '220.000đ / Khối' },
  { id: 'da-6', slug: 'da-1x2-xanh', categorySlug: 'da-xay-dung', name: 'Đá 1x2 xanh', thumbnail: AssetManagers.products.gachNgoi, images: [AssetManagers.products.gachNgoi, AssetManagers.products.gachCui], details: 'Đá 1x2 xanh chất lượng cao.', tags: ['đá 1x2', 'đá xanh'], category: 'Đá xây dựng', price: '330.000đ / Khối' },
];

// === CÁT XÂY DỰNG ===
export const MOCK_CAT_XAY_DUNG: Product[] = [
  { id: 'cat-1', slug: 'cat-san-lap', categorySlug: 'cat-xay-dung', name: 'Cát san lấp', thumbnail: AssetManagers.products.gachCui, images: [AssetManagers.products.gachCui, AssetManagers.products.gachNgoi], details: 'Cát san lấp dùng cho các công trình san lấp mặt bằng, nền móng.', tags: ['cát san lấp', 'cát xây dựng'], category: 'Cát xây dựng' },
  { id: 'cat-2', slug: 'cat-be-tong', categorySlug: 'cat-xay-dung', name: 'Cát bê tông', thumbnail: AssetManagers.products.gachNgoi, images: [AssetManagers.products.gachNgoi, AssetManagers.products.gachCui], details: 'Cát bê tông chất lượng cao dùng cho trộn bê tông.', tags: ['cát bê tông', 'cát xây dựng'], category: 'Cát xây dựng' },
  { id: 'cat-3', slug: 'cat-xay-to', categorySlug: 'cat-xay-dung', name: 'Cát xây tô', thumbnail: AssetManagers.products.gachCui, images: [AssetManagers.products.gachCui, AssetManagers.products.gachNgoi], details: 'Cát xây tô mịn, sạch, dùng cho xây tô tường.', tags: ['cát xây tô', 'cát mịn'], category: 'Cát xây dựng' },
  { id: 'cat-4', slug: 'cat-min', categorySlug: 'cat-xay-dung', name: 'Cát mịn', thumbnail: AssetManagers.products.gachNgoi, images: [AssetManagers.products.gachNgoi, AssetManagers.products.gachCui], details: 'Cát mịn dùng cho tô trát, hoàn thiện bề mặt.', tags: ['cát mịn'], category: 'Cát xây dựng' },
  { id: 'cat-5', slug: 'cat-den', categorySlug: 'cat-xay-dung', name: 'Cát đen', thumbnail: AssetManagers.products.gachCui, images: [AssetManagers.products.gachCui, AssetManagers.products.gachNgoi], details: 'Cát đen san lấp, giá tốt.', tags: ['cát đen', 'cát san lấp'], category: 'Cát xây dựng' },
  { id: 'cat-6', slug: 'cat-vang', categorySlug: 'cat-xay-dung', name: 'Cát vàng', thumbnail: AssetManagers.products.gachNgoi, images: [AssetManagers.products.gachNgoi, AssetManagers.products.gachCui], details: 'Cát vàng chất lượng cao cho xây dựng.', tags: ['cát vàng'], category: 'Cát xây dựng' },
];

// === BÊ TÔNG THƯƠNG PHẨM ===
export const MOCK_BE_TONG: Product[] = [
  { id: 'bt-1', slug: 'be-tong-mac-150', categorySlug: 'be-tong-thuong-pham', name: 'Bê tông mác 150', thumbnail: AssetManagers.products.gachCui, images: [AssetManagers.products.gachCui, AssetManagers.products.gachNgoi], details: 'Bê tông mác 150 (B12.5) dùng cho lót nền, đổ bệ móng, công trình dân dụng.', tags: ['bê tông mác 150', 'bê tông thương phẩm'], category: 'Bê tông thương phẩm' },
  { id: 'bt-2', slug: 'be-tong-mac-200', categorySlug: 'be-tong-thuong-pham', name: 'Bê tông mác 200', thumbnail: AssetManagers.products.gachNgoi, images: [AssetManagers.products.gachNgoi, AssetManagers.products.gachCui], details: 'Bê tông mác 200 (B15) dùng cho đổ sàn, dầm, cột nhà dân dụng.', tags: ['bê tông mác 200', 'bê tông thương phẩm'], category: 'Bê tông thương phẩm' },
  { id: 'bt-3', slug: 'be-tong-mac-250', categorySlug: 'be-tong-thuong-pham', name: 'Bê tông mác 250', thumbnail: AssetManagers.products.gachCui, images: [AssetManagers.products.gachCui, AssetManagers.products.gachNgoi], details: 'Bê tông mác 250 (B20) dùng cho công trình chịu lực cao, sàn nhà cao tầng.', tags: ['bê tông mác 250', 'bê tông thương phẩm'], category: 'Bê tông thương phẩm' },
  { id: 'bt-4', slug: 'be-tong-mac-300', categorySlug: 'be-tong-thuong-pham', name: 'Bê tông mác 300', thumbnail: AssetManagers.products.gachNgoi, images: [AssetManagers.products.gachNgoi, AssetManagers.products.gachCui], details: 'Bê tông mác 300 (B22.5) chất lượng cao cho công trình lớn.', tags: ['bê tông mác 300', 'bê tông thương phẩm'], category: 'Bê tông thương phẩm' },
  { id: 'bt-5', slug: 'be-tong-mac-350', categorySlug: 'be-tong-thuong-pham', name: 'Bê tông mác 350', thumbnail: AssetManagers.products.gachCui, images: [AssetManagers.products.gachCui, AssetManagers.products.gachNgoi], details: 'Bê tông mác 350 (B25) dùng cho cầu đường, công trình hạ tầng.', tags: ['bê tông mác 350', 'bê tông thương phẩm'], category: 'Bê tông thương phẩm' },
  { id: 'bt-6', slug: 'be-tong-mac-400', categorySlug: 'be-tong-thuong-pham', name: 'Bê tông mác 400', thumbnail: AssetManagers.products.gachNgoi, images: [AssetManagers.products.gachNgoi, AssetManagers.products.gachCui], details: 'Bê tông mác 400 (B30) cường độ cao cho công trình đặc biệt.', tags: ['bê tông mác 400', 'bê tông thương phẩm'], category: 'Bê tông thương phẩm' },
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

// Helper: find product by slug
export const findProductBySlug = (slug: string): Product | undefined => {
  return ALL_PRODUCTS.find(p => p.slug === slug);
};

// Helper: get products by category slug
export const getProductsByCategorySlug = (categorySlug: string): Product[] => {
  return ALL_PRODUCTS.filter(p => p.categorySlug === categorySlug);
};

// Helper: get related products (same category, exclude self)
export const getRelatedProducts = (product: Product, limit = 6): Product[] => {
  return ALL_PRODUCTS
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, limit);
};

// Helper: search products by keyword
export const searchProducts = (keyword: string): Product[] => {
  if (!keyword || keyword.trim() === '') return [];
  const lowerKeyword = keyword.toLowerCase().trim();

  return ALL_PRODUCTS.filter(product => {
    return (
      product.name.toLowerCase().includes(lowerKeyword) ||
      product.category.toLowerCase().includes(lowerKeyword) ||
      (product.details && product.details.toLowerCase().includes(lowerKeyword)) ||
      (product.tags && product.tags.some(tag => tag.toLowerCase().includes(lowerKeyword)))
    );
  });
};
