export interface Author {
  id: string;
  name: string;
  avatarUrl?: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
}

export type ContentBlockType =
  | 'paragraph'
  | 'heading'
  | 'image'
  | 'quote'
  | 'list'
  | 'product_embedded';

export interface ParagraphBlock {
  type: 'paragraph';
  content: string;
}

export interface HeadingBlock {
  type: 'heading';
  level: 2 | 3 | 4 | 5 | 6;
  content: string;
}

export interface ImageBlock {
  type: 'image';
  url: string;
  alt?: string;
  caption?: string;
}

export interface QuoteBlock {
  type: 'quote';
  content: string;
  author?: string;
}

export interface ListBlock {
  type: 'list';
  style: 'unordered' | 'ordered';
  items: string[];
}

export interface ProductEmbeddedBlock {
  type: 'product_embedded';
  productIds: string[];
}

export type ContentBlock =
  | ParagraphBlock
  | HeadingBlock
  | ImageBlock
  | QuoteBlock
  | ListBlock
  | ProductEmbeddedBlock;

export interface NewsArticle {
  id: string;
  title: string;
  slug: string;
  thumbnailUrl: string;
  summary: string;
  content: ContentBlock[];
  author: Author;
  category: Category;
  tags?: string[];
  publishedAt: string;
  updatedAt?: string;
  viewsCount?: number;
  isFeatured?: boolean;
  isActive?: boolean;
}
