'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import NewsCard from '@/components/ui/NewsCard';
import Pagination from '@/components/ui/Pagination';
import { mockNews } from '@/data/mockNews';
import {
  NewsListContainer,
  HeroSection,
  MainHeroArticle,
  MetaData,
  CategoryTag,
  HeroTitle,
  HeroSummary,
  SidebarTrending,
  SidebarTitle,
  TrendingList,
  TrendingItem,
  TrendingRank,
  GridSection,
  SectionHeader,
  SectionTitle,
  NewsGrid
} from './styles';

const ITEMS_PER_PAGE = 3; // Reduced for demo purposes since we only have 5 items

const formatDateToDayMonth = (dateString: string) => {
  const date = new Date(dateString);
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  return `${day}/${month}`;
};

const formatDateToYear = (dateString: string) => {
  const date = new Date(dateString);
  return date.getFullYear().toString();
};

const formatDateFull = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('vi-VN', { day: '2-digit', month: '2-digit', year: 'numeric' });
};

const NewsListScreen: React.FC = () => {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(1);

  // 1. Featured Article
  const featuredArticle = mockNews.find(n => n.isFeatured) || mockNews[0];

  // 2. Trending Articles (Mock top 3 based on views if available, or just first 3)
  const trendingArticles = mockNews.slice(1, 4);

  // 3. Grid Articles (Pagination applied to the rest)
  const regularArticles = mockNews.filter(n => n.id !== featuredArticle.id);
  const totalPages = Math.ceil(regularArticles.length / ITEMS_PER_PAGE);
  const currentGridArticles = regularArticles.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handleArticleClick = (slug: string) => {
    router.push(`/tin-tuc/${slug}`);
  };

  return (
    <NewsListContainer>
      {/* Newspaper Hero Section */}
      <HeroSection>
        <MainHeroArticle onClick={() => handleArticleClick(featuredArticle.slug)}>
          <Image
            src={featuredArticle.thumbnailUrl}
            alt={featuredArticle.title}
            width={800}
            height={400}
            priority
            style={{ width: '100%', height: '400px', objectFit: 'cover', borderRadius: '12px', marginBottom: '16px' }}
          />
          <MetaData>
            <CategoryTag>{featuredArticle.category.name}</CategoryTag>
            <span>{formatDateFull(featuredArticle.publishedAt)}</span>
            <span>•</span>
            <span>{featuredArticle.author.name}</span>
          </MetaData>
          <HeroTitle>{featuredArticle.title}</HeroTitle>
          <HeroSummary>{featuredArticle.summary}</HeroSummary>
        </MainHeroArticle>

        <SidebarTrending>
          <SidebarTitle>Xem nhiều nhất</SidebarTitle>
          <TrendingList>
            {trendingArticles.map((article, index) => (
              <TrendingItem key={article.id} onClick={() => handleArticleClick(article.slug)}>
                <TrendingRank>{index + 1}</TrendingRank>
                <div>
                  <h4>{article.title}</h4>
                </div>
              </TrendingItem>
            ))}
          </TrendingList>
        </SidebarTrending>
      </HeroSection>

      {/* Latest News Grid */}
      <GridSection>
        <SectionHeader>
          <SectionTitle>Tin Mới Nhất</SectionTitle>
        </SectionHeader>

        <NewsGrid>
          {currentGridArticles.map(article => (
            <NewsCard
              key={article.id}
              image={article.thumbnailUrl}
              title={article.title}
              description={article.summary}
              date={formatDateToDayMonth(article.publishedAt)}
              year={formatDateToYear(article.publishedAt)}
              onClick={() => handleArticleClick(article.slug)}
            />
          ))}
        </NewsGrid>

        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </GridSection>

    </NewsListContainer>
  );
};

export default NewsListScreen;
