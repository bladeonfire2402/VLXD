import { findProductBySlug, getRelatedProducts, CATEGORY_MAP } from '@/lib/constants';
import ProductDetailPage from '@/views/ProductDetail';
import { notFound } from 'next/navigation';

interface PageProps {
  params: Promise<{ category: string; product: string }>;
}

export default async function ProductPage({ params }: PageProps) {
  const { category, product: productSlug } = await params;

  // Validate category exists
  if (!CATEGORY_MAP[category]) {
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
