import { Product } from '@/interface/product/product';
import { ALL_PRODUCTS } from '@/constants/data';

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
