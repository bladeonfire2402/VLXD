"use client";

import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { CATEGORY_MAP, MOCK_FEATURED_PRODUCTS } from '@/lib/constants';
import {
  SidebarWrapper,
  SidebarSection,
  SidebarTitleWrapper,
  SidebarTitleText,
  SidebarTitleDivider,
  SidebarSquare,
  SidebarYellowLine,
  CategoryList,
  CategoryItem,
  TabContainer,
  Tab,
  ArticleList,
  ArticleItem,
  ArticleThumbnail,
  ArticleTitle,
  FeaturedProductItem,
  FeaturedProductImage,
  FeaturedProductInfo,
  FeaturedProductName,
  FeaturedProductPrice
} from './styles';

// Mock articles data
const MOCK_ARTICLES = [
  { id: 1, title: 'Nhà cung cấp cát xây tô HCM', image: '/images/news/news_1.jpg', url: '#' },
  { id: 2, title: 'Một số kích thước gạch lát nền lục giác phổ biến', image: '/images/news/news_2.jpg', url: '#' },
  { id: 3, title: 'Tổng hợp một số loại vật liệu mới trong xây dựng', image: '/images/news/news_1.jpg', url: '#' },
  { id: 4, title: 'Nhà cung cấp thép xây dựng các loại', image: '/images/news/news_2.jpg', url: '#' },
  { id: 5, title: 'Đại lý thép Việt Nhật Vina Kyoei', image: '/images/news/news_1.jpg', url: '#' },
  { id: 6, title: 'Đá xây dựng 4x6 là gì?', image: '/images/news/news_2.jpg', url: '#' },
];

// Helper component for section title
const SidebarSectionTitle = ({ title }: { title: string }) => (
  <SidebarTitleWrapper>
    <SidebarTitleText>{title}</SidebarTitleText>
    <SidebarTitleDivider>
      <SidebarSquare />
      <SidebarYellowLine />
    </SidebarTitleDivider>
  </SidebarTitleWrapper>
);

// Build categories from CATEGORY_MAP
const getCategoryItems = () => {
  return [
    { label: 'Vật liệu xây dựng', url: '/san-pham' },
    ...Object.entries(CATEGORY_MAP).map(([slug, name]) => ({
      label: name,
      url: `/san-pham/${slug}`,
    })),
  ];
};

const ProductSidebar = () => {
  const pathname = usePathname();
  const [activeTab, setActiveTab] = useState<'latest' | 'popular'>('latest');
  const categories = getCategoryItems();

  return (
    <SidebarWrapper>
      {/* Block 1: Category list */}
      <SidebarSection>
        <SidebarSectionTitle title="Danh mục sản phẩm" />
        <CategoryList>
          {categories.map((cat) => (
            <CategoryItem key={cat.url} $active={cat.url === '/san-pham' ? pathname === cat.url : pathname?.startsWith(cat.url) || false}>
              <Link href={cat.url}>{cat.label}</Link>
            </CategoryItem>
          ))}
        </CategoryList>
      </SidebarSection>

      {/* Block 2: Articles */}
      <SidebarSection>
        <SidebarSectionTitle title="Bài viết" />
        <TabContainer>
          <Tab $active={activeTab === 'latest'} onClick={() => setActiveTab('latest')}>
            Mới nhất
          </Tab>
          <Tab $active={activeTab === 'popular'} onClick={() => setActiveTab('popular')}>
            Xem nhiều
          </Tab>
        </TabContainer>
        <ArticleList>
          {MOCK_ARTICLES.map((article) => (
            <ArticleItem key={article.id} href={article.url}>
              <ArticleThumbnail src={article.image} alt={article.title} loading="lazy" />
              <ArticleTitle>{article.title}</ArticleTitle>
            </ArticleItem>
          ))}
        </ArticleList>
      </SidebarSection>

      {/* Block 3: Featured Products */}
      <SidebarSection>
        <SidebarSectionTitle title="Sản phẩm nổi bật" />
        {MOCK_FEATURED_PRODUCTS.slice(0, 4).map((product) => (
          <FeaturedProductItem key={product.id} href={`/san-pham/${product.categorySlug}/${product.slug}`}>
            <FeaturedProductImage src={product.thumbnail} alt={product.name} loading="lazy" />
            <FeaturedProductInfo>
              <FeaturedProductName>{product.name}</FeaturedProductName>
              <FeaturedProductPrice>{product.price || 'Liên hệ'}</FeaturedProductPrice>
            </FeaturedProductInfo>
          </FeaturedProductItem>
        ))}
      </SidebarSection>
    </SidebarWrapper>
  );
};

export default ProductSidebar;
