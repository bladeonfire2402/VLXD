import React, { useState, useEffect } from 'react';
import Image from 'next/image';
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
      quote: 'Chúng tôi đánh giá cao sự chuyên nghiệp, minh bạch và tinh thần trách nhiệm của Anh Tuấn. Trong quá trình hợp tác, đội ngũ luôn phối hợp chặt chẽ, trao đổi rõ ràng và thực hiện đúng những cam kết đã thống nhất.'
    },
    {
      id: 2,
      name: 'LÊ QUỐC BẢO',
      role: '/ CHỦ CỬA HÀNG VẬT LIỆU XÂY DỰNG',
      avatar: AssetManagers.testimonials.avatar2,
      quote: 'Anh Tuấn làm việc chuyên nghiệp và giữ liên lạc xuyên suốt quá trình hợp tác. Những vấn đề phát sinh được trao đổi và xử lý kịp thời, giúp chúng tôi chủ động trong kế hoạch của mình.'
    },
    {
      id: 3,
      name: 'NGUYỄN THÀNH ĐẠT',
      role: '/ KỸ SƯ XÂY DỰNG',
      avatar: AssetManagers.testimonials.avatar3,
      quote: 'Điều tôi đánh giá cao ở Anh Tuấn là cách làm việc rõ ràng và trách nhiệm. Đội ngũ trao đổi thẳng thắn, phản hồi kịp thời và luôn chủ động phối hợp để công việc diễn ra thuận lợi.'
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
              <Image
                src={currentTestimonial.avatar}
                alt={currentTestimonial.name}
                width={80}
                height={80}
              />
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
