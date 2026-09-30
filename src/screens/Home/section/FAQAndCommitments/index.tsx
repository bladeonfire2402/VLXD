import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import AccordionItem from '@/components/shared/ui/AccordionItem';
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


const FAQAndCommitmentsData = {
  COMMITMENTSTITLE: 'ANH TUẤN CAM KẾT',
  FOOTERTEXT: 'Anh Tuấn – Chất lượng đúng cam kết, giá trị bền vững cho mọi công trình.',
  FAQs: [
    {
      title: 'Anh Tuấn hoạt động từ khi nào?',
      content: 'Công ty TNHH Anh Tuấn hoạt động từ năm 2021 trong lĩnh vực cung cấp và phân phối vật liệu xây dựng tại Bình Dương và các khu vực lân cận. Với định hướng trở thành đối tác cung ứng vật tư đáng tin cậy cho các công trình, Anh Tuấn chú trọng chất lượng sản phẩm, năng lực phục vụ và uy tín trong từng mối quan hệ hợp tác. Đây là những nền tảng để công ty đáp ứng nhu cầu của khách hàng và phát triển bền vững trong ngành vật liệu xây dựng',
      isOpen: true
    },
    {
      title: 'Phương châm hoạt động',
      content: 'Công ty TNHH Anh Tuấn đặt uy tín, chất lượng và hiệu quả làm nguyên tắc trong hoạt động cung ứng vật liệu xây dựng. Chúng tôi chú trọng chất lượng sản phẩm, sự minh bạch trong hợp tác và khả năng đáp ứng nhu cầu vật tư của từng công trình, qua đó xây dựng quan hệ bền vững với khách hàng và đối tác',
      isOpen: false
    },
    {
      title: 'Anh Tuấn phân phối những sản phẩm nào?',
      content: 'Công ty TNHH SX–TM–DV Anh Tuấn cung cấp và phân phối xi măng, cát, đá cùng các vật liệu liên quan. Danh mục sản phẩm đa dạng, nguồn hàng ổn định và quy trình cung ứng chuyên nghiệp giúp chúng tôi đáp ứng nhu cầu vật tư cho các công trình dân dụng, thương mại và công nghiệp',
      isOpen: false
    }
  ],
  COMMITMENTS: [
    'Giá cả minh bạch, cạnh tranh',
    'Tư vấn tận tâm, chuyên nghiệp',
    'Giao hàng đúng hẹn',
    'Đồng hành cùng khách hàng'
  ]
}

const FAQAndCommitments = () => {
  return (
    <SectionWrapper>
      <Container>
        <LeftColumn>
          {FAQAndCommitmentsData.FAQs.map((faq, index) => (
            <AccordionItem
              key={index}
              title={faq.title}
              content={faq.content}
              initialIsOpen={faq.isOpen}
            />
          ))}
        </LeftColumn>
        <RightColumn>
          <CommitmentsTitle>{FAQAndCommitmentsData.COMMITMENTSTITLE}</CommitmentsTitle>
          <CommitmentList>
            {FAQAndCommitmentsData.COMMITMENTS.map((commitment, index) => (
              <CommitmentItem key={index}>
                <IconWrapper>
                  <CheckCircle2 size={18} />
                </IconWrapper>
                {commitment}
              </CommitmentItem>
            ))}
          </CommitmentList>
          <FooterText>
            {FAQAndCommitmentsData.FOOTERTEXT}
          </FooterText>
        </RightColumn>
      </Container>
    </SectionWrapper>
  );
};

export default FAQAndCommitments;
