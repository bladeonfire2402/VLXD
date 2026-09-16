"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, ArrowUpRight, Layers, Mountain, Box } from 'lucide-react';
import Button from '../../components/ui/Button';
import { RouteManager } from '@/constants/route';
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

const NotFoundData = {
  TOP_LABEL: 'LỖI 404 • KHÔNG TÌM THẤY TRANG',
  HEADING: <>Có vẻ bạn đã<br/>rẽ nhầm đường.</>,
  DESCRIPTION: 'Trang bạn đang tìm có thể đã được di chuyển, đổi tên hoặc không còn tồn tại. Hãy để chúng tôi đưa bạn về đúng nơi.',
  BTN_HOME: 'Về trang chủ',
  BTN_PRODUCTS: 'Xem vật liệu',
  SUPPORT_TEXT: 'Cần hỗ trợ? ',
  SUPPORT_LINK: 'Liên hệ với chúng tôi',
  ILLUSTRATION_CAPTION: '404 / PAGE NOT FOUND',
  EXPLORE_TITLE: 'TIẾP TỤC KHÁM PHÁ',
  EXPLORE_ITEMS: [
    {
      title: 'Đá xây dựng',
      desc: 'Vững chắc từ nền móng',
      url: RouteManager.productCategory('da-xay-dung'),
      icon: Layers
    },
    {
      title: 'Cát xây dựng',
      desc: 'Cho từng hạng mục công trình',
      url: RouteManager.productCategory('cat-xay-dung'),
      icon: Mountain
    },
    {
      title: 'Bê tông thương phẩm',
      desc: 'Kết nối mọi kết cấu',
      url: RouteManager.productCategory('be-tong'),
      icon: Box
    }
  ]
};

export default function NotFoundView() {
  const router = useRouter();

  return (
    <NotFoundContainer>
      <MainContent>
        <LeftColumn>
          <TopLabel>
            {NotFoundData.TOP_LABEL}
          </TopLabel>
          
          <Heading>{NotFoundData.HEADING}</Heading>
          
          <Description>
            {NotFoundData.DESCRIPTION}
          </Description>
          
          <ButtonGroup>
            <Button variant="solid" onClick={() => router.push(RouteManager.HOME)}>
              <ArrowLeft size={18} style={{ marginRight: '8px' }} />
              {NotFoundData.BTN_HOME}
            </Button>
            <Button variant="outline" onClick={() => router.push(RouteManager.PRODUCTS)}>
              {NotFoundData.BTN_PRODUCTS}
              <ArrowUpRight size={18} style={{ marginLeft: '8px' }} />
            </Button>
          </ButtonGroup>
          
          <SupportText>
            {NotFoundData.SUPPORT_TEXT} <span className="link" onClick={() => router.push(RouteManager.CONTACT)}>{NotFoundData.SUPPORT_LINK}</span>
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
            
            <div className="caption">{NotFoundData.ILLUSTRATION_CAPTION}</div>
          </Illustration404>
        </RightColumn>
      </MainContent>

      <BottomSection>
        <SectionDivider>
          <SectionTitle>{NotFoundData.EXPLORE_TITLE}</SectionTitle>
          <div className="line"></div>
        </SectionDivider>
        
        <ExploreGrid>
          {NotFoundData.EXPLORE_ITEMS.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <ExploreCard key={index} onClick={() => router.push(item.url)}>
                <CardIcon><IconComponent size={24} /></CardIcon>
                <CardContent>
                  <CardTitle>{item.title}</CardTitle>
                  <CardDesc>{item.desc}</CardDesc>
                </CardContent>
                <CardArrow><ArrowUpRight size={20} /></CardArrow>
              </ExploreCard>
            );
          })}
        </ExploreGrid>
      </BottomSection>
    </NotFoundContainer>
  );
}
