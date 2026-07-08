import React, { useState, useEffect } from 'react';
import {
  SectionWrapper,
  Container,
  StyledSectionTitle,
  SliderContainer,
  TestimonialContent,
  AvatarContainer,
  AuthorInfo,
  Name,
  Role,
  Quote,
  DotsContainer,
  Dot
} from './styles';

const TESTIMONIALS_DATA = [
  {
    id: 1,
    name: 'NGÔ HOÀI THANH',
    role: '/ KINH DOANH TỰ DO',
    avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=200&q=80',
    quote: 'Vật liệu xây dựng do Tư Thành Phát cung cấp luôn có giấy tờ xuất xứ rõ ràng, số lượng chính xác. Nhân viên tư vấn nhiệt tình và nhanh chóng.'
  },
  {
    id: 2,
    name: 'TRẦN VĂN AN',
    role: '/ CHỦ THẦU XÂY DỰNG',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80',
    quote: 'Giá cả cạnh tranh và giao hàng rất đúng hẹn. Đây là đối tác chiến lược mà công ty chúng tôi luôn tin tưởng lựa chọn cho các dự án lớn.'
  },
  {
    id: 3,
    name: 'LÊ THỊ HOA',
    role: '/ KHÁCH HÀNG CÁ NHÂN',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80',
    quote: 'Tôi xây nhà lần đầu nên rất bỡ ngỡ, may nhờ có nhân viên hỗ trợ nhiệt tình nên đã chọn được vật liệu ưng ý với chi phí hợp lý.'
  }
];

const TestimonialSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev === TESTIMONIALS_DATA.length - 1 ? 0 : prev + 1));
    }, 5000); // Auto change every 5s

    return () => clearInterval(timer);
  }, []);

  const currentTestimonial = TESTIMONIALS_DATA[currentIndex];

  return (
    <SectionWrapper>
      <Container>
        <StyledSectionTitle title="MỌI NGƯỜI NÓI GÌ?" />
        
        <SliderContainer>
          <TestimonialContent key={currentTestimonial.id}>
            <AvatarContainer>
              <img src={currentTestimonial.avatar} alt={currentTestimonial.name} loading="lazy" />
            </AvatarContainer>
            <AuthorInfo>
              <Name>{currentTestimonial.name}</Name>
              <Role>{currentTestimonial.role}</Role>
            </AuthorInfo>
            <Quote>{currentTestimonial.quote}</Quote>
          </TestimonialContent>
          
          <DotsContainer>
            {TESTIMONIALS_DATA.map((_, index) => (
              <Dot
                key={index}
                $active={index === currentIndex}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </DotsContainer>
        </SliderContainer>
      </Container>
    </SectionWrapper>
  );
};

export default TestimonialSection;
