import React, { useState, useEffect } from 'react';
import { AssetManagers } from '@/constants/assets';
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

const TestimonialSectionData = {
  TITLE: "MỌI NGƯỜI NÓI GÌ?",
  TESTIMONIALS_LIST: [
    {
      id: 1,
      name: 'TRẦN MINH KHÔI',
      role: '/ NHÀ THẦU XÂY DỰNG',
      avatar: AssetManagers.testimonials.avatar1,
      quote: 'Anh Tuấn cung cấp sắt thép đúng quy cách, đầy đủ chứng từ và bảo đảm tiến độ giao hàng. Đội ngũ tư vấn chuyên nghiệp, phản hồi nhanh chóng, giúp chúng tôi chủ động triển khai các công trình.'
    },
    {
      id: 2,
      name: 'LÊ QUỐC BẢO',
      role: '/ CHỦ CỬA HÀNG VẬT LIỆU XÂY DỰNG',
      avatar: AssetManagers.testimonials.avatar2,
      quote: 'Chúng tôi đánh giá cao sự ổn định về chất lượng sản phẩm và khả năng cung ứng của Anh Tuấn. Hàng hóa được giao đúng số lượng, báo giá minh bạch và chính sách hỗ trợ đối tác rất tận tâm.'
    },
    {
      id: 3,
      name: 'NGUYỄN THÀNH ĐẠT',
      role: '/ KỸ SƯ XÂY DỰNG',
      avatar: AssetManagers.testimonials.avatar3,
      quote: 'Sản phẩm do Anh Tuấn phân phối có nguồn gốc rõ ràng và đáp ứng tốt các yêu cầu kỹ thuật của công trình. Đội ngũ làm việc trách nhiệm, tư vấn chính xác và luôn hỗ trợ kịp thời khi cần.'
    }
  ]
};

const TestimonialSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev === TestimonialSectionData.TESTIMONIALS_LIST.length - 1 ? 0 : prev + 1));
    }, 5000); // Auto change every 5s

    return () => clearInterval(timer);
  }, []);

  const currentTestimonial = TestimonialSectionData.TESTIMONIALS_LIST[currentIndex];

  return (
    <SectionWrapper>
      <Container>
        <StyledSectionTitle title={TestimonialSectionData.TITLE} />

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
            {TestimonialSectionData.TESTIMONIALS_LIST.map((_, index) => (
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
