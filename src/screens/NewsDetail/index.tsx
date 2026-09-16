'use client';
import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import NewsContentRenderer from '@/components/shared/NewsContentRenderer';
import NewsCard from '@/components/ui/NewsCard';
import { mockNews } from '@/data/mockNews';
import { NewsArticle } from '@/types/news';
import {
  DetailContainer,
  BreadcrumbNav,
  CategoryBadge,
  ArticleTitle,
  ArticleMeta,
  AuthorInfo,
  AuthorAvatar,
  AuthorDetails,
  AuthorName,
  PublishDate,
  HeroImage,
  ArticleTags,
  TagLabel,
  Tag,
  RelatedSection,
  RelatedTitle,
  RelatedGrid
} from './styles';

interface NewsDetailScreenProps {
  slug: string;
}

const formatDateFull = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('vi-VN', { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit' });
};

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

const NewsDetailScreen: React.FC<NewsDetailScreenProps> = ({ slug }) => {
  const router = useRouter();
  
  // Find article by slug (mock API call)
  const article = mockNews.find((n) => n.slug === slug);
  
  if (!article) {
    return (
      <DetailContainer style={{ textAlign: 'center', padding: '100px 20px' }}>
        <h2>Không tìm thấy bài viết</h2>
        <p>Bài viết này không tồn tại hoặc đã bị xóa.</p>
        <Link href="/tin-tuc" style={{ color: '#3B82F6', marginTop: '20px', display: 'inline-block' }}>
          Quay lại danh sách tin tức
        </Link>
      </DetailContainer>
    );
  }

  // Mock related articles (excluding current one)
  const relatedArticles = mockNews.filter(n => n.id !== article.id).slice(0, 2);

  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();
  };

  const handleRelatedClick = (relatedSlug: string) => {
    router.push(`/tin-tuc/${relatedSlug}`);
  };

  return (
    <DetailContainer>
      <BreadcrumbNav>
        <Link href="/">Trang chủ</Link>
        <span>/</span>
        <Link href="/tin-tuc">Tin tức</Link>
        <span>/</span>
        <span style={{ color: '#0F172A' }}>{article.category.name}</span>
      </BreadcrumbNav>

      <CategoryBadge>{article.category.name}</CategoryBadge>
      <ArticleTitle>{article.title}</ArticleTitle>

      <ArticleMeta>
        <AuthorInfo>
          {article.author.avatarUrl ? (
            <AuthorAvatar style={{ backgroundImage: `url(${article.author.avatarUrl})`, backgroundSize: 'cover' }} />
          ) : (
            <AuthorAvatar>{getInitials(article.author.name)}</AuthorAvatar>
          )}
          <AuthorDetails>
            <AuthorName>{article.author.name}</AuthorName>
            <PublishDate>{formatDateFull(article.publishedAt)}</PublishDate>
          </AuthorDetails>
        </AuthorInfo>
      </ArticleMeta>

      <HeroImage src={article.thumbnailUrl} alt={article.title} />

      <NewsContentRenderer blocks={article.content} />

      {article.tags && article.tags.length > 0 && (
        <ArticleTags>
          <TagLabel>Từ khóa:</TagLabel>
          {article.tags.map(tag => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </ArticleTags>
      )}

      {relatedArticles.length > 0 && (
        <RelatedSection>
          <RelatedTitle>Bài viết liên quan</RelatedTitle>
          <RelatedGrid>
            {relatedArticles.map(related => (
              <NewsCard
                key={related.id}
                image={related.thumbnailUrl}
                title={related.title}
                description={related.summary}
                date={formatDateToDayMonth(related.publishedAt)}
                year={formatDateToYear(related.publishedAt)}
                onClick={() => handleRelatedClick(related.slug)}
              />
            ))}
          </RelatedGrid>
        </RelatedSection>
      )}

    </DetailContainer>
  );
};

export default NewsDetailScreen;
