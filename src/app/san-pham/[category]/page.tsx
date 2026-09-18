import { CATEGORY_MAP, CATEGORY_DESCRIPTIONS } from '@/constants/data';
import { getProductsByCategorySlug } from '@/utils/productUtils';
import ProductCategoryPage from '@/screens/ProductCategory';
import { notFound } from 'next/navigation';

interface PageProps {
  params: Promise<{ category: string }>;
}

export default async function CategoryPage({ params }: PageProps) {
  const { category } = await params;
  const categoryName = CATEGORY_MAP[category as keyof typeof CATEGORY_MAP];

  if (!categoryName) {
    notFound();
  }

  const products = getProductsByCategorySlug(category);
  const description = CATEGORY_DESCRIPTIONS[category as keyof typeof CATEGORY_DESCRIPTIONS] || '';

  return (
    <ProductCategoryPage
      title={categoryName.toUpperCase()}
      description={description}
      products={products}
    />
  );
}
