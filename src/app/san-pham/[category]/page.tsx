import { Metadata } from 'next';
import { CATEGORY_MAP, CATEGORY_DESCRIPTIONS } from '@/constants/data';
import { getProductsByCategorySlug } from '@/utils/productUtils';
import ProductCategoryPage from '@/screens/ProductCategory';
import { notFound } from 'next/navigation';

interface PageProps {
  params: Promise<{ category: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { category } = await params;
  const categoryName = CATEGORY_MAP[category as keyof typeof CATEGORY_MAP];

  if (!categoryName) {
    return {
      title: 'Danh mục không tồn tại - Anh Tuấn',
      description: 'Không tìm thấy danh mục sản phẩm.',
    };
  }

  const description = CATEGORY_DESCRIPTIONS[category as keyof typeof CATEGORY_DESCRIPTIONS] || `Danh sách các sản phẩm thuộc danh mục ${categoryName} tại Vật liệu xây dựng Anh Tuấn.`;

  return {
    title: `${categoryName} | Vật liệu xây dựng Anh Tuấn`,
    description,
    openGraph: {
      title: `${categoryName} - Công ty TNHH Anh Tuấn`,
      description,
    },
  };
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
