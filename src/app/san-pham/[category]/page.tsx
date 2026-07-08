import { CATEGORY_MAP, CATEGORY_DESCRIPTIONS, getProductsByCategorySlug } from '@/lib/constants';
import ProductCategoryPage from '@/views/ProductCategory';
import { notFound } from 'next/navigation';

interface PageProps {
  params: Promise<{ category: string }>;
}

export default async function CategoryPage({ params }: PageProps) {
  const { category } = await params;
  const categoryName = CATEGORY_MAP[category];

  if (!categoryName) {
    notFound();
  }

  const products = getProductsByCategorySlug(category);
  const description = CATEGORY_DESCRIPTIONS[category] || '';

  return (
    <ProductCategoryPage
      title={categoryName.toUpperCase()}
      description={description}
      products={products}
    />
  );
}
