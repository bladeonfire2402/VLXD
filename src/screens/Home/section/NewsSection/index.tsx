import React from 'react';
import SectionTitle from '@/components/ui/SectionTitle';
import NewsCard from '@/components/ui/NewsCard';
import { SectionWrapper, Container, SectionHeader, Grid } from './styles';
import { mockNews } from '@/data/mockNews';

const NewsSectionData = {
  TITLE: "TIN TỨC MỚI",
  SUBTITLE: "Cập nhật báo giá vật liệu xây dựng mới nhất và các tin nóng trong ngành xây dựng.",
};

const mappedNewsList = mockNews.slice(0, 6).map((news) => {
  const dateObj = new Date(news.publishedAt);
  const day = String(dateObj.getDate()).padStart(2, '0');
  const month = String(dateObj.getMonth() + 1).padStart(2, '0');
  const year = String(dateObj.getFullYear());

  return {
    image: news.thumbnailUrl,
    date: `${day}-${month}`,
    year: year,
    title: news.title.toUpperCase(),
    description: news.summary,
  };
});

const NewsSection = () => {
  return (
    <SectionWrapper>
      <Container>
        <SectionHeader>
          <SectionTitle
            title={NewsSectionData.TITLE}
            subtitle={NewsSectionData.SUBTITLE}
          />
        </SectionHeader>
        <Grid>
          {mappedNewsList.map((news, index) => (
            <NewsCard
              key={index}
              image={news.image}
              date={news.date}
              year={news.year}
              title={news.title}
              description={news.description}
            />
          ))}
        </Grid>
      </Container>
    </SectionWrapper>
  );
};

export default NewsSection;
