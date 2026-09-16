import { Metadata } from 'next';
import NewsListScreen from '@/screens/NewsList';

export const metadata: Metadata = {
  title: 'Tin tức | Cập nhật thị trường Vật liệu xây dựng',
  description: 'Theo dõi tin tức thị trường, bảng giá vật liệu xây dựng và các kinh nghiệm xây nhà mới nhất.',
};

export default function NewsPage() {
  return <NewsListScreen />;
}
