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


const FAQAndCommitmentsData = {
  COMMITMENTSTITLE: 'ANH TUẤN CAM KẾT',
  FOOTERTEXT: 'Anh Tuấn – Chất lượng đúng cam kết, giá trị bền vững cho mọi công trình.',
  FAQs: [
    {
      title: 'Anh Tuấn hoạt động từ khi nào?',
      content: 'Công ty TNHH SX-TM-DV Anh Tuấn chính thức đi vào hoạt động từ năm 2021, chuyên cung cấp và phân phối các sản phẩm sắt thép xây dựng tại Bình Dương và các khu vực lân cận. Với phương châm lấy chất lượng sản phẩm, uy tín và sự hài lòng của khách hàng làm nền tảng phát triển, Anh Tuấn không ngừng nâng cao năng lực phục vụ, từng bước khẳng định vị thế và trở thành đối tác tin cậy của khách hàng trong lĩnh vực vật liệu xây dựng.',
      isOpen: true
    },
    {
      title: 'Phương châm hoạt động',
      content: 'Công ty TNHH SX–TM–DV Anh Tuấn luôn lấy quyền lợi và sự hài lòng của khách hàng làm nền tảng cho mọi hoạt động. Với phương châm “Uy tín – Chất lượng – Hiệu quả”, chúng tôi không ngừng nâng cao chất lượng sản phẩm, hoàn thiện dịch vụ và tối ưu quy trình cung ứng, nhằm mang đến những giải pháp vật liệu xây dựng phù hợp, minh bạch và đáng tin cậy cho từng công trình.',
      isOpen: false
    },
    {
      title: 'Anh Tuấn phân phối những sản phẩm nào?',
      content: 'Công ty TNHH SX–TM–DV Anh Tuấn chuyên cung cấp và phân phối đa dạng vật liệu xây dựng, bao gồm sắt thép xây dựng, xi măng, gạch tuynel, cát, đá và nhiều sản phẩm liên quan. Với nguồn hàng ổn định và quy trình cung ứng chuyên nghiệp, Anh Tuấn đáp ứng linh hoạt nhu cầu của các công trình dân dụng, thương mại và công nghiệp.',
      isOpen: false
    }
  ],
  COMMITMENTS: [
    'Giá cả minh bạch, cạnh tranh',
    'Sản phẩm đúng tiêu chuẩn',
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
