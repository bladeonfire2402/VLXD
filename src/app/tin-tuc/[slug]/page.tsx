import { Metadata } from 'next';
import NewsDetailScreen from '@/screens/NewsDetail';
import { mockNews } from '@/data/mockNews';

interface NewsDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: NewsDetailPageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const article = mockNews.find(n => n.slug === resolvedParams.slug);
  
  if (!article) {
    return {
      title: 'Không tìm thấy bài viết',
    };
  }

  return {
    title: `${article.title} | Tin tức VLXD`,
    description: article.summary,
  };
}

export default async function NewsDetailPage({ params }: NewsDetailPageProps) {
  const resolvedParams = await params;
  return <NewsDetailScreen slug={resolvedParams.slug} />;
}
