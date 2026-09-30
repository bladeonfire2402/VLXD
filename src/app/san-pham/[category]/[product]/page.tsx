import { Metadata } from 'next';
import { CATEGORY_MAP } from '@/constants/data';
import { findProductBySlug, getRelatedProducts } from '@/utils/productUtils';
import ProductDetailPage from '@/screens/ProductDetail';
import { notFound } from 'next/navigation';

interface PageProps {
  params: Promise<{ category: string; product: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { category, product: productSlug } = await params;

  if (!CATEGORY_MAP[category as keyof typeof CATEGORY_MAP]) {
    return {
      title: 'Sản phẩm không tồn tại - Anh Tuấn',
    };
  }

  const product = findProductBySlug(productSlug);

  if (!product || product.categorySlug !== category) {
    return {
      title: 'Không tìm thấy sản phẩm - Anh Tuấn',
      description: 'Sản phẩm bạn đang tìm kiếm không tồn tại hoặc đã bị gỡ bỏ.',
    };
  }

  return {
    title: `${product.name} | Vật liệu xây dựng Anh Tuấn`,
    description: product.details,
    openGraph: {
      title: `${product.name} - Công ty TNHH Anh Tuấn`,
      description: product.details,
      images: [
        {
          url: product.thumbnail,
          alt: product.name,
        },
      ],
    },
  };
}

export default async function ProductPage({ params }: PageProps) {
  const { category, product: productSlug } = await params;

  // Validate category exists
  if (!CATEGORY_MAP[category as keyof typeof CATEGORY_MAP]) {
    notFound();
  }

  const product = findProductBySlug(productSlug);

  // Validate product exists and belongs to this category
  if (!product || product.categorySlug !== category) {
    notFound();
  }

  const relatedProducts = getRelatedProducts(product);

  return <ProductDetailPage product={product} relatedProducts={relatedProducts} />;
}
