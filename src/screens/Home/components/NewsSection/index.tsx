import React from 'react';
import SectionTitle from '@/components/ui/SectionTitle';
import NewsCard from '@/components/ui/NewsCard';
import { SectionWrapper, Container, SectionHeader, Grid } from './styles';

const NEWS_DATA = [
  {
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=500&q=80',
    date: '11-01',
    year: '2022',
    title: 'NHÀ CUNG CẤP CÁT XÂY TÔ HCM',
    description: 'Nếu muốn công trình đạt được chất lượng tốt nhất sau khi hoàn thiện, quý khách cần chọn mua cát xây tô tại những đơn vị cung cấp đả...'
  },
  {
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=500&q=80',
    date: '11-01',
    year: '2022',
    title: 'MỘT SỐ KÍCH THƯỚC GẠCH LÁT NỀN LỤC GIÁC PHỔ BIẾN',
    description: 'Ở trên thị trường hiện nay, gạch lát nền lục giác đang được rất nhiều gia chủ yêu thích và ưa chuộng lựa chọn vì vẻ ngoài vô cùng độc...'
  },
  {
    image: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=500&q=80',
    date: '10-01',
    year: '2022',
    title: 'TỔNG HỢP MỘT SỐ LOẠI VẬT LIỆU MỚI TRONG XÂY DỰNG',
    description: 'Vật liệu mới đang được nghiên cứu và ứng dụng sẽ mở ra tương lai lớn cho ngành xây dựng trên toàn cầu.'
  },
  {
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=500&q=80',
    date: '10-01',
    year: '2022',
    title: 'NHÀ CUNG CẤP THÉP XÂY DỰNG CÁC LOẠI',
    description: 'Cập nhật bảng giá thép xây dựng mới nhất hôm nay từ nhà cung cấp uy tín.'
  },
  {
    image: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=500&q=80',
    date: '07-01',
    year: '2022',
    title: 'ĐẠI LÝ THÉP VIỆT NHẬT VINA KYOEI',
    description: 'Tìm hiểu về nhà máy thép Vina Kyoei và các sản phẩm chủ lực của họ trên thị trường hiện nay.'
  },
  {
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=500&q=80',
    date: '07-01',
    year: '2022',
    title: 'ĐÁ XÂY DỰNG 4X6 LÀ GÌ?',
    description: 'Đá 4x6 là loại đá có kích thước từ 40mm đến 60mm, được sàng tách từ sản phẩm đá khác, dùng trong các công trình giao thông...'
  }
];

const NewsSection = () => {
  return (
    <SectionWrapper>
      <Container>
        <SectionHeader>
          <SectionTitle
            title="CÓ GÌ MỚI?"
            subtitle="Cập nhật báo giá vật liệu xây dựng mới nhất và các tin nóng trong ngành xây dựng."
          />
        </SectionHeader>
        <Grid>
          {NEWS_DATA.map((news, index) => (
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
