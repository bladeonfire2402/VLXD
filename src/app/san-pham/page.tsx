import ProductCategoryPage from '@/views/ProductCategory';
import { ALL_PRODUCTS } from '@/lib/constants';

export default function SanPhamPage() {
  return (
    <ProductCategoryPage
      title="VẬT LIỆU XÂY DỰNG"
      description="Cung cấp mọi loại vật liệu xây dựng, đủ kích cỡ, giao hàng tận công trình khi quý khách có nhu cầu."
      products={ALL_PRODUCTS}
    />
  );
}
