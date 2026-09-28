"use client";

import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { AssetManagers } from '@/constants/assets';
import { CATEGORY_MAP, MOCK_FEATURED_PRODUCTS } from '@/constants/data';
import { RouteManager } from '@/constants/route';
import { mockNews } from '@/data/mockNews';
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

const ProductSidebarData = {
  TITLE_CATEGORY: 'Danh mục sản phẩm',
  TITLE_ARTICLES: 'Bài viết',
  TITLE_FEATURED: 'Sản phẩm nổi bật',
  TAB_LATEST: 'Mới nhất',
  TAB_POPULAR: 'Xem nhiều',
  ALL_PRODUCTS_LABEL: 'Vật liệu xây dựng',
  PRICE_CONTACT: 'Liên hệ',
};

const mappedArticles = mockNews.slice(0, 6).map((news) => ({
  id: news.id,
  title: news.title,
  image: news.thumbnailUrl,
  url: `/tin-tuc/${news.slug}`,
}));

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
    { label: ProductSidebarData.ALL_PRODUCTS_LABEL, url: RouteManager.PRODUCTS },
    ...Object.entries(CATEGORY_MAP).map(([slug, name]) => ({
      label: name,
      url: RouteManager.productCategory(slug),
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
        <SidebarSectionTitle title={ProductSidebarData.TITLE_CATEGORY} />
        <CategoryList>
          {categories.map((cat) => (
            <CategoryItem key={cat.url} $active={cat.url === RouteManager.PRODUCTS ? pathname === cat.url : pathname?.startsWith(cat.url) || false}>
              <Link href={cat.url}>{cat.label}</Link>
            </CategoryItem>
          ))}
        </CategoryList>
      </SidebarSection>

      {/* Block 2: Articles */}
      <SidebarSection>
        <SidebarSectionTitle title={ProductSidebarData.TITLE_ARTICLES} />
        <TabContainer>
          <Tab $active={activeTab === 'latest'} onClick={() => setActiveTab('latest')}>
            {ProductSidebarData.TAB_LATEST}
          </Tab>
          <Tab $active={activeTab === 'popular'} onClick={() => setActiveTab('popular')}>
            {ProductSidebarData.TAB_POPULAR}
          </Tab>
        </TabContainer>
        <ArticleList>
          {mappedArticles.map((article) => (
            <ArticleItem key={article.id} href={article.url}>
              <ArticleThumbnail src={article.image} alt={article.title} width={60} height={45} />
              <ArticleTitle>{article.title}</ArticleTitle>
            </ArticleItem>
          ))}
        </ArticleList>
      </SidebarSection>

      {/* Block 3: Featured Products */}
      <SidebarSection>
        <SidebarSectionTitle title={ProductSidebarData.TITLE_FEATURED} />
        {MOCK_FEATURED_PRODUCTS.slice(0, 4).map((product) => (
          <FeaturedProductItem key={product.id} href={RouteManager.productDetail(product.categorySlug, product.slug)}>
            <FeaturedProductImage src={product.thumbnail} alt={product.name} width={60} height={60} />
            <FeaturedProductInfo>
              <FeaturedProductName>{product.name}</FeaturedProductName>
              <FeaturedProductPrice>{product.price || ProductSidebarData.PRICE_CONTACT}</FeaturedProductPrice>
            </FeaturedProductInfo>
          </FeaturedProductItem>
        ))}
      </SidebarSection>
    </SidebarWrapper>
  );
};

export default ProductSidebar;
