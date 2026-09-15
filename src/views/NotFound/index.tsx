"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, ArrowUpRight, Layers, Mountain, Box } from 'lucide-react';
import Button from '../../components/ui/Button';
import {
  NotFoundContainer,
  MainContent,
  LeftColumn,
  TopLabel,
  Heading,
  Description,
  ButtonGroup,
  SupportText,
  RightColumn,
  Illustration404,
  IllustrationNumber,
  IllustrationBarrier,
  BottomSection,
  SectionDivider,
  SectionTitle,
  ExploreGrid,
  ExploreCard,
  CardIcon,
  CardContent,
  CardTitle,
  CardDesc,
  CardArrow
} from './styles';

export default function NotFoundView() {
  const router = useRouter();

  return (
    <NotFoundContainer>
      <MainContent>
        <LeftColumn>
          <TopLabel>
            <span className="line"></span>
            LỖI 404 &bull; KHÔNG TÌM THẤY TRANG
          </TopLabel>
          
          <Heading>Có vẻ bạn đã<br/>rẽ nhầm đường.</Heading>
          
          <Description>
            Trang bạn đang tìm có thể đã được di chuyển, đổi tên hoặc không còn tồn tại. Hãy để chúng tôi đưa bạn về đúng nơi.
          </Description>
          
          <ButtonGroup>
            <Button variant="solid" onClick={() => router.push('/')}>
              <ArrowLeft size={18} style={{ marginRight: '8px' }} />
              Về trang chủ
            </Button>
            <Button variant="outline" onClick={() => router.push('/san-pham')}>
              Xem vật liệu
              <ArrowUpRight size={18} style={{ marginLeft: '8px' }} />
            </Button>
          </ButtonGroup>
          
          <SupportText>
            Cần hỗ trợ? <span className="link" onClick={() => router.push('/lien-he')}>Liên hệ với chúng tôi</span>
          </SupportText>
        </LeftColumn>

        <RightColumn>
          <Illustration404>
            <div className="grid-bg"></div>
            
            <IllustrationNumber>
              <span className="digit">4</span>
              <span className="digit zero">0</span>
              <span className="digit">4</span>
            </IllustrationNumber>
            
            <IllustrationBarrier>
              <div className="barrier-bar"></div>
              <div className="barrier-leg left"></div>
              <div className="barrier-leg right"></div>
            </IllustrationBarrier>
            
            <div className="caption">404 / PAGE NOT FOUND</div>
          </Illustration404>
        </RightColumn>
      </MainContent>

      <BottomSection>
        <SectionDivider>
          <SectionTitle>TIẾP TỤC KHÁM PHÁ</SectionTitle>
          <div className="line"></div>
        </SectionDivider>
        
        <ExploreGrid>
          <ExploreCard onClick={() => router.push('/san-pham/da-xay-dung')}>
            <CardIcon><Layers size={24} /></CardIcon>
            <CardContent>
              <CardTitle>Đá xây dựng</CardTitle>
              <CardDesc>Vững chắc từ nền móng</CardDesc>
            </CardContent>
            <CardArrow><ArrowUpRight size={20} /></CardArrow>
          </ExploreCard>

          <ExploreCard onClick={() => router.push('/san-pham/cat-xay-dung')}>
            <CardIcon><Mountain size={24} /></CardIcon>
            <CardContent>
              <CardTitle>Cát xây dựng</CardTitle>
              <CardDesc>Cho từng hạng mục công trình</CardDesc>
            </CardContent>
            <CardArrow><ArrowUpRight size={20} /></CardArrow>
          </ExploreCard>

          <ExploreCard onClick={() => router.push('/san-pham/be-tong')}>
            <CardIcon><Box size={24} /></CardIcon>
            <CardContent>
              <CardTitle>Bê tông thương phẩm</CardTitle>
              <CardDesc>Kết nối mọi kết cấu</CardDesc>
            </CardContent>
            <CardArrow><ArrowUpRight size={20} /></CardArrow>
          </ExploreCard>
        </ExploreGrid>
      </BottomSection>
    </NotFoundContainer>
  );
}
