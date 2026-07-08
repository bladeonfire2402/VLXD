export interface Product {
  id: string | number;
  name: string;
  slug: string;
  categorySlug: string;
  thumbnail: string;
  images: string[];
  details: string;
  tags: string[];
  category: string;
  price?: string;
}
