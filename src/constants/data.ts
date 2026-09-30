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
  { id: 'da-1', slug: 'da-1x2', categorySlug: CategoryType.DA_XAY_DUNG, name: 'Đá 1x2', thumbnail: AssetManagers.products.da1x2, images: [AssetManagers.products.da1x2], details: 'Kích cỡ tiêu chuẩn 10x28mm hoặc 10x22mm. Đây là loại đá phổ biến nhất, chuyên dùng để trộn bê tông cốt thép trong thi công nhà ở, chung cư, cầu đường và các công trình dân dụng.', tags: ['đá 1x2', 'đá xây dựng', 'đá bê tông'], category: 'Đá xây dựng' },
  { id: 'da-2', slug: 'da-4x6', categorySlug: CategoryType.DA_XAY_DUNG, name: 'Đá 4x6', thumbnail: AssetManagers.products.da4x6, images: [AssetManagers.products.da4x6], details: 'Kích cỡ từ 40mm đến 60mm. Ứng dụng chủ yếu để làm lớp lót nền, kè móng, cốt nền móng cho các công trình nhà xưởng, đường giao thông có tải trọng lớn.', tags: ['đá 4x6', 'đá lót nền', 'đá xây dựng'], category: 'Đá xây dựng' },
  { id: 'da-3', slug: 'da-5x7', categorySlug: CategoryType.DA_XAY_DUNG, name: 'Đá 5x7', thumbnail: AssetManagers.products.da5x7, images: [AssetManagers.products.da5x7], details: 'Kích cỡ từ 50mm đến 70mm. Tương tự như đá 4x6 nhưng có kích thước và độ cứng lớn hơn, chuyên dùng để đúc bê tông ống nước, làm móng nền các công trình cầu đường hoặc những nơi yêu cầu khả năng chịu lực cao.', tags: ['đá 5x7', 'đá móng', 'đá xây dựng'], category: 'Đá xây dựng' },
  { id: 'da-4', slug: 'da-0x4', categorySlug: CategoryType.DA_XAY_DUNG, name: 'Đá 0x4 (Đá dăm cấp phối)', thumbnail: AssetManagers.products.da0x4, images: [AssetManagers.products.da0x4], details: 'Hỗn hợp đá có kích thước hạt từ 0mm đến 40mm. Thành phần bao gồm cả đá mi bụi để tăng độ liên kết. Chuyên dùng làm lớp nền đường (cấp phối đá dăm loại 1, loại 2), dặm vá hoặc san lấp nền móng.', tags: ['đá 0x4', 'đá dăm cấp phối', 'đá xây dựng'], category: 'Đá xây dựng' },
  { id: 'da-5', slug: 'da-mi-sang', categorySlug: CategoryType.DA_XAY_DUNG, name: 'Đá mi sàng', thumbnail: AssetManagers.products.daMiSang, images: [AssetManagers.products.daMiSang], details: 'Kích cỡ hạt từ 3mm đến 14mm, được tách ra trong quá trình sàng lọc đá 1x2, 4x6. Thường dùng làm thành phần bê tông nhựa nóng, đúc gạch block, gạch táp lô, hoặc làm lớp lót nền.', tags: ['đá mi sàng', 'đá xây dựng'], category: 'Đá xây dựng' },
  { id: 'da-6', slug: 'da-mi-bui', categorySlug: CategoryType.DA_XAY_DUNG, name: 'Đá mi bụi', thumbnail: AssetManagers.products.daMiBui, images: [AssetManagers.products.daMiBui], details: 'Các mạt đá có kích thước nhỏ hơn 5mm (dạng bột). Ứng dụng làm phụ gia cho công nghệ đúc gạch không nung, gạch lát vỉa hè, san lấp công trình hoặc rải nền đường.', tags: ['đá mi bụi', 'đá xây dựng'], category: 'Đá xây dựng' },
  { id: 'da-7', slug: 'da-hoc', categorySlug: CategoryType.DA_XAY_DUNG, name: 'Đá hộc', thumbnail: AssetManagers.products.daHoc, images: [AssetManagers.products.daHoc], details: 'Đá tự nhiên nguyên khối có kích thước lớn, không đồng đều (thường từ 10cm đến 40cm). Chuyên dùng để xây móng nhà, xây tường rào, kè bờ ao, bờ sông, đê đập chống sạt lở.', tags: ['đá hộc', 'đá móng', 'đá xây dựng'], category: 'Đá xây dựng' },
  { id: 'da-8', slug: 'da-che', categorySlug: CategoryType.DA_XAY_DUNG, name: 'Đá chẻ', thumbnail: AssetManagers.products.daChe, images: [AssetManagers.products.daChe], details: 'Đá được khai thác tự nhiên và chẻ tách thủ công hoặc bằng máy thành những viên có kích thước tương đối đồng đều. Thường dùng để xây móng chịu lực, xây tường bao, ốp lát trang trí nội ngoại thất và sân vườn.', tags: ['đá chẻ', 'đá trang trí', 'đá xây dựng'], category: 'Đá xây dựng' },
];

// === CÁT XÂY DỰNG ===
export const MOCK_CAT_XAY_DUNG: Product[] = [
  { id: 'cat-1', slug: 'cat-be-tong-cat-vang', categorySlug: CategoryType.CAT_XAY_DUNG, name: 'Cát vàng', thumbnail: AssetManagers.products.catVang, images: [AssetManagers.products.catVang], details: 'Đặc điểm: Hạt to, sắc cạnh, sạch, ít tạp chất. Mô-đun độ lớn thường từ 2.0 đến 3.0. Ứng dụng: Chuyên dùng để đổ bê tông cho móng, dầm, cột, sàn và các kết cấu chịu lực lớn khác.', tags: ['cát bê tông', 'cát vàng', 'cát xây dựng'], category: 'Cát xây dựng' },
  { id: 'cat-2', slug: 'cat-xay-to-cat-xay-trat', categorySlug: CategoryType.CAT_XAY_DUNG, name: 'Cát xây tô (Cát xây trát)', thumbnail: AssetManagers.products.catXayTo, images: [AssetManagers.products.catXayTo], details: 'Đặc điểm: Hạt mịn và đều hơn cát bê tông, hàm lượng tạp chất rất ít, sạch. Mô-đun độ lớn thường từ 0.7 đến 1.4. Ứng dụng: Dùng để xây tường gạch và trát (tô) tường tạo bề mặt phẳng mịn trước khi sơn.', tags: ['cát xây tô', 'cát xây trát', 'cát xây dựng'], category: 'Cát xây dựng' },
  { id: 'cat-3', slug: 'cat-san-lap', categorySlug: CategoryType.CAT_XAY_DUNG, name: 'Cát san lấp', thumbnail: AssetManagers.products.catSanLap, images: [AssetManagers.products.catSanLap], details: 'Đặc điểm: Loại cát tự nhiên chưa qua sàng lọc kỹ, lẫn nhiều tạp chất (đất, sỏi nhỏ, bụi). Ứng dụng: Chủ yếu dùng để san lấp nền móng, tạo mặt bằng cho các công trình, nhà xưởng, đường sá nhằm gia cố tầng nền yếu.', tags: ['cát san lấp', 'cát xây dựng'], category: 'Cát xây dựng' },
];

// === BÊ TÔNG THƯƠNG PHẨM ===
export const MOCK_BE_TONG: Product[] = [
  { id: 'bt-1', slug: 'be-tong-mac-150', categorySlug: CategoryType.BE_TONG_THUONG_PHAM, name: 'Bê tông mác 150', thumbnail: AssetManagers.products.beTong, images: [AssetManagers.products.beTong], details: 'Bê tông mác 150 (B12.5) dùng cho lót nền, đổ bệ móng, công trình dân dụng.', tags: ['bê tông mác 150', 'bê tông thương phẩm'], category: 'Bê tông thương phẩm' },
  { id: 'bt-2', slug: 'be-tong-mac-200', categorySlug: CategoryType.BE_TONG_THUONG_PHAM, name: 'Bê tông mác 200', thumbnail: AssetManagers.products.beTong, images: [AssetManagers.products.beTong], details: 'Bê tông mác 200 (B15) dùng cho đổ sàn, dầm, cột nhà dân dụng.', tags: ['bê tông mác 200', 'bê tông thương phẩm'], category: 'Bê tông thương phẩm' },
  { id: 'bt-3', slug: 'be-tong-mac-250', categorySlug: CategoryType.BE_TONG_THUONG_PHAM, name: 'Bê tông mác 250', thumbnail: AssetManagers.products.beTong, images: [AssetManagers.products.beTong], details: 'Bê tông mác 250 (B20) dùng cho công trình chịu lực cao, sàn nhà cao tầng.', tags: ['bê tông mác 250', 'bê tông thương phẩm'], category: 'Bê tông thương phẩm' },
  { id: 'bt-4', slug: 'be-tong-mac-300', categorySlug: CategoryType.BE_TONG_THUONG_PHAM, name: 'Bê tông mác 300', thumbnail: AssetManagers.products.beTong, images: [AssetManagers.products.beTong], details: 'Bê tông mác 300 (B22.5) chất lượng cao cho công trình lớn.', tags: ['bê tông mác 300', 'bê tông thương phẩm'], category: 'Bê tông thương phẩm' },
  { id: 'bt-5', slug: 'be-tong-mac-350', categorySlug: CategoryType.BE_TONG_THUONG_PHAM, name: 'Bê tông mác 350', thumbnail: AssetManagers.products.beTong, images: [AssetManagers.products.beTong], details: 'Bê tông mác 350 (B25) dùng cho cầu đường, công trình hạ tầng.', tags: ['bê tông mác 350', 'bê tông thương phẩm'], category: 'Bê tông thương phẩm' },
  { id: 'bt-6', slug: 'be-tong-mac-400', categorySlug: CategoryType.BE_TONG_THUONG_PHAM, name: 'Bê tông mác 400', thumbnail: AssetManagers.products.beTong, images: [AssetManagers.products.beTong], details: 'Bê tông mác 400 (B30) cường độ cao cho công trình đặc biệt.', tags: ['bê tông mác 400', 'bê tông thương phẩm'], category: 'Bê tông thương phẩm' },
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

