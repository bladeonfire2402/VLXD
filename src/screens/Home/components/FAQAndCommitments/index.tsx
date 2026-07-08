import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import AccordionItem from '@/components/ui/AccordionItem';
import {
  SectionWrapper,
  Container,
  LeftColumn,
  RightColumn,
  CommitmentsTitle,
  CommitmentList,
  CommitmentItem,
  IconWrapper,
  FooterText
} from './styles';

const FAQ_DATA = [
  {
    title: 'TƯ THÀNH PHÁT HOẠT ĐỘNG TỪ KHI NÀO?',
    content: 'Công ty TNHH SX-TM-DV Tư Thành Phát được thành lập vào tháng 01 năm 2008. Đây là thời kỳ ngành xây dựng Việt Nam có nhiều biến động và ngành vật liệu xây dựng gặp rất nhiều khó khăn. Mãi đến tháng 01 năm 2010, Tư Thành Phát mới chính thức được khách hàng ghi nhận là nhà phân phối sắt thép xây dựng hàng đầu ở TP.Hồ Chí Minh và khu vực lân cận.',
    isOpen: true
  },
  {
    title: 'PHƯƠNG CHÂM HOẠT ĐỘNG.',
    content: 'Chúng tôi luôn đặt lợi ích và sự hài lòng của khách hàng lên hàng đầu. Với phương châm "Uy tín - Chất lượng - Hiệu quả", Tư Thành Phát không ngừng nỗ lực để mang đến những sản phẩm và dịch vụ tốt nhất.',
    isOpen: false
  },
  {
    title: 'TƯ THÀNH PHÁT PHÂN PHỐI NHỮNG SẢN PHẨM NÀO?',
    content: 'Tư Thành Phát chuyên phân phối các loại vật liệu xây dựng như: Sắt thép xây dựng (Pomina, Việt Nhật, Miền Nam...), xi măng, gạch tuynel, cát, đá xây dựng và các loại vật liệu khác phục vụ cho mọi công trình.',
    isOpen: false
  }
];

const COMMITMENTS_DATA = [
  'Hàng bán với giá được niêm yết của nhà máy.',
  'Tư vấn miễn phí nhiệt tình chu đáo về mặt kỹ thuật cho khách hàng.',
  'Giao hàng đúng chất lượng, đúng tiến độ.',
  'Giao hàng tận chân công trình, tạo mọi điều kiện tốt nhất cho khách hàng.',
  'Lấy cái lợi của khách hàng là trọng tâm.'
];

const FAQAndCommitments = () => {
  return (
    <SectionWrapper>
      <Container>
        <LeftColumn>
          {FAQ_DATA.map((faq, index) => (
            <AccordionItem
              key={index}
              title={faq.title}
              content={faq.content}
              initialIsOpen={faq.isOpen}
            />
          ))}
        </LeftColumn>
        <RightColumn>
          <CommitmentsTitle>TƯ THÀNH PHÁT CAM KẾT GÌ?</CommitmentsTitle>
          <CommitmentList>
            {COMMITMENTS_DATA.map((commitment, index) => (
              <CommitmentItem key={index}>
                <IconWrapper>
                  <CheckCircle2 size={18} />
                </IconWrapper>
                {commitment}
              </CommitmentItem>
            ))}
          </CommitmentList>
          <FooterText>
            Mang đến cho khách hàng sự hài lòng về chất lượng với giá thành tốt nhất!
          </FooterText>
        </RightColumn>
      </Container>
    </SectionWrapper>
  );
};

export default FAQAndCommitments;
