"use client";

import React, { useState, useEffect, useRef } from 'react';
import { AlertCircle, Phone } from 'lucide-react';
import Breadcrumb from '@/components/ui/Breadcrumb';
import {
  PolicyContainer,
  HeroSection,
  Badge,
  Title,
  Subtitle,
  MainContent,
  Sidebar,
  SidebarTitle,
  TableOfContents,
  TocItem,
  ContentArea,
  IntroBlock,
  Section,
  SectionHeader,
  SectionNumber,
  SectionTitle,
  PolicyText,
  CalloutBox,
  SupportCard,
  SupportInfo,
  SupportButton
} from './styles';

const sections = [
  { id: 'gia-ban', title: 'Chính sách giá bán' },
  { id: 'dat-hang', title: 'Chính sách đặt hàng' },
  { id: 'thanh-toan', title: 'Chính sách đặt cọc và thanh toán' },
  { id: 'giao-hang', title: 'Chính sách giao hàng' },
  { id: 'kiem-tra', title: 'Kiểm tra và xác nhận hàng hóa' },
  { id: 'doi-tra', title: 'Chính sách đổi trả' },
  { id: 'bao-hanh', title: 'Chính sách bảo hành' },
  { id: 'cam-ket', title: 'Cam kết của Công ty' },
  { id: 'trach-nhiem', title: 'Trách nhiệm của khách hàng' },
  { id: 'bat-kha-khang', title: 'Trường hợp bất khả kháng' },
  { id: 'giai-quyet', title: 'Tiếp nhận phản ánh và giải quyết tranh chấp' },
];

const PolicyScreen = () => {
  const [activeSection, setActiveSection] = useState(sections[0].id);

  // ScrollSpy logic to highlight the TOC based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150; // offset for header

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionId = sections[i].id;
        const element = document.getElementById(sectionId);
        
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(sectionId);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 100,
        behavior: 'smooth'
      });
      // Optionally update url hash if desired, but we keep it simple here
    }
  };

  return (
    <PolicyContainer>
      <HeroSection>
        <Badge>QUY ĐỊNH & CHÍNH SÁCH CHÍNH THỨC</Badge>
        <Title>CHÍNH SÁCH BÁN HÀNG, GIAO NHẬN VÀ ĐỔI TRẢ</Title>
        <Subtitle>CÔNG TY TNHH SX–TM–DV ANH TUẤN</Subtitle>
      </HeroSection>

      <Breadcrumb />

      <MainContent>
        <Sidebar>
          <SidebarTitle>Nội dung chính</SidebarTitle>
          <TableOfContents>
            {sections.map((section, idx) => (
              <TocItem key={section.id} $active={activeSection === section.id}>
                <a 
                  href={`#${section.id}`} 
                  onClick={(e) => scrollToSection(e, section.id)}
                >
                  {idx + 1}. {section.title}
                </a>
              </TocItem>
            ))}
          </TableOfContents>
        </Sidebar>

        <ContentArea>
          <IntroBlock>
            Công ty TNHH SX–TM–DV Anh Tuấn (“Anh Tuấn” hoặc “Công ty”) cam kết cung cấp sản phẩm đúng chủng loại, quy cách, số lượng và chất lượng theo nội dung đã xác nhận với khách hàng. Công ty lấy sự minh bạch, uy tín và quyền lợi chính đáng của khách hàng làm nền tảng trong mọi giao dịch.
          </IntroBlock>

          <Section id="gia-ban">
            <SectionHeader>
              <SectionNumber>1</SectionNumber>
              <SectionTitle>Chính sách giá bán</SectionTitle>
            </SectionHeader>
            <PolicyText>
              <ul>
                <li>Giá sản phẩm được cung cấp tại cửa hàng, qua báo giá hoặc trên các kênh thông tin chính thức của Công ty.</li>
                <li>Giá vật liệu xây dựng có thể thay đổi theo thị trường, số lượng đặt mua, khu vực giao hàng và chính sách ưu đãi tại từng thời điểm.</li>
                <li>Báo giá chỉ có hiệu lực trong thời hạn được ghi trên báo giá. Sau thời hạn này, Công ty có quyền cập nhật giá theo tình hình thị trường.</li>
                <li>Đơn giá của đơn hàng đã được hai bên xác nhận sẽ được áp dụng theo nội dung báo giá, đơn đặt hàng hoặc hợp đồng tương ứng.</li>
                <li>Giá bán có thể chưa bao gồm thuế giá trị gia tăng, phí vận chuyển, phí bốc xếp và các chi phí phát sinh khác, trừ khi báo giá hoặc thỏa thuận có quy định khác.</li>
                <li>Mọi khoản phí sẽ được thông báo rõ ràng trước khi khách hàng xác nhận đơn hàng.</li>
              </ul>
            </PolicyText>
          </Section>

          <Section id="dat-hang">
            <SectionHeader>
              <SectionNumber>2</SectionNumber>
              <SectionTitle>Chính sách đặt hàng</SectionTitle>
            </SectionHeader>
            <PolicyText>
              <p>Khách hàng có thể đặt hàng qua các hình thức sau:</p>
              <ul>
                <li>Trực tiếp tại địa điểm kinh doanh của Công ty;</li>
                <li>Qua điện thoại hoặc Zalo chính thức;</li>
                <li>Qua website, Facebook hoặc các kênh trực tuyến chính thức khác;</li>
                <li>Qua báo giá, đơn đặt hàng hoặc hợp đồng được hai bên xác nhận.</li>
              </ul>
              <p>Đơn hàng được xem là đã xác nhận sau khi Công ty và khách hàng thống nhất các nội dung cơ bản, bao gồm:</p>
              <ul>
                <li>Tên sản phẩm, chủng loại và quy cách;</li>
                <li>Số lượng hoặc khối lượng;</li>
                <li>Đơn giá và tổng giá trị;</li>
                <li>Địa điểm, thời gian và phương thức giao hàng;</li>
                <li>Chi phí vận chuyển, bốc xếp và các chi phí liên quan;</li>
                <li>Phương thức, thời hạn thanh toán và mức đặt cọc, nếu có.</li>
              </ul>
              <p><em>Khách hàng có trách nhiệm kiểm tra kỹ thông tin trước khi xác nhận đơn hàng.</em></p>
            </PolicyText>
          </Section>

          <Section id="thanh-toan">
            <SectionHeader>
              <SectionNumber>3</SectionNumber>
              <SectionTitle>Chính sách đặt cọc và thanh toán</SectionTitle>
            </SectionHeader>
            <PolicyText>
              <h4>Phương thức thanh toán</h4>
              <p>Công ty chấp nhận các phương thức thanh toán sau:</p>
              <ul>
                <li>Tiền mặt tại địa điểm kinh doanh;</li>
                <li>Tiền mặt khi nhận hàng, nếu được Công ty xác nhận;</li>
                <li>Chuyển khoản vào tài khoản ngân hàng chính thức do Công ty cung cấp;</li>
                <li>Các phương thức khác theo thỏa thuận bằng văn bản giữa hai bên.</li>
              </ul>
              <CalloutBox>
                <AlertCircle size={20} />
                <p>Khách hàng chỉ nên thanh toán vào tài khoản hoặc kênh thanh toán được Công ty xác nhận chính thức. Công ty không chịu trách nhiệm đối với các khoản thanh toán được thực hiện vào tài khoản không do Công ty cung cấp hoặc xác nhận.</p>
              </CalloutBox>

              <h4>Chính sách đặt cọc</h4>
              <p>Một số đơn hàng có giá trị lớn, sản phẩm đặt riêng, hàng gia công theo quy cách hoặc hàng cần điều phối từ nhà cung cấp có thể yêu cầu đặt cọc.</p>
              <p>Mức đặt cọc, thời hạn thanh toán phần còn lại và điều kiện hoàn hoặc khấu trừ tiền cọc sẽ được thông báo rõ ràng trong báo giá, đơn đặt hàng hoặc hợp đồng trước khi khách hàng thanh toán.</p>
              <p>Trường hợp khách hàng thay đổi hoặc hủy đơn sau khi Công ty đã đặt hàng, gia công, điều phối phương tiện hoặc phát sinh chi phí thực tế, việc hoàn tiền cọc sẽ được xử lý theo thỏa thuận của đơn hàng và các chi phí hợp lý đã phát sinh.</p>
            </PolicyText>
          </Section>

          <Section id="giao-hang">
            <SectionHeader>
              <SectionNumber>4</SectionNumber>
              <SectionTitle>Chính sách giao hàng</SectionTitle>
            </SectionHeader>
            <PolicyText>
              <h4>Phạm vi giao hàng</h4>
              <p>Công ty hỗ trợ giao hàng tại Bình Dương và các khu vực lân cận. Khả năng giao hàng đến từng địa điểm cụ thể sẽ được xác nhận dựa trên loại hàng, khối lượng, phương tiện vận chuyển và điều kiện tiếp cận công trình.</p>
              
              <h4>Thời gian giao hàng</h4>
              <ul>
                <li>Thời gian giao hàng dự kiến sẽ được thông báo khi xác nhận đơn.</li>
                <li>Thời gian thực tế có thể thay đổi tùy theo tình trạng hàng hóa, khoảng cách, điều kiện giao thông, thời tiết hoặc những yếu tố khách quan khác.</li>
                <li>Khi phát sinh thay đổi đáng kể, Công ty sẽ chủ động thông báo và phối hợp với khách hàng để điều chỉnh lịch giao phù hợp.</li>
              </ul>

              <h4>Phí vận chuyển và bốc xếp</h4>
              <ul>
                <li>Phí vận chuyển được xác định theo khu vực, quãng đường, khối lượng hàng hóa và loại phương tiện sử dụng.</li>
                <li>Phí bốc xếp, vận chuyển vào đường hẹp, đưa hàng lên tầng cao hoặc sử dụng thiết bị nâng hạ không mặc nhiên bao gồm trong phí giao hàng.</li>
                <li>Các khoản phí liên quan sẽ được thông báo và thống nhất trước khi xác nhận đơn hàng.</li>
              </ul>

              <h4>Điều kiện tiếp nhận hàng</h4>
              <p>Khách hàng có trách nhiệm:</p>
              <ul>
                <li>Cung cấp chính xác địa chỉ, số điện thoại người nhận và thời gian có thể tiếp nhận hàng;</li>
                <li>Bảo đảm địa điểm giao hàng có lối tiếp cận an toàn, phù hợp với phương tiện vận chuyển;</li>
                <li>Chuẩn bị nhân sự hoặc thiết bị bốc dỡ nếu nội dung đơn hàng không bao gồm dịch vụ này;</li>
                <li>Phối hợp nhận hàng đúng thời gian đã thỏa thuận.</li>
              </ul>
              <p>Chi phí phát sinh do địa chỉ không chính xác, không có người nhận hoặc điều kiện giao hàng khác với thông tin đã cung cấp có thể được tính bổ sung sau khi thông báo cho khách hàng.</p>
            </PolicyText>
          </Section>

          <Section id="kiem-tra">
            <SectionHeader>
              <SectionNumber>5</SectionNumber>
              <SectionTitle>Kiểm tra và xác nhận hàng hóa</SectionTitle>
            </SectionHeader>
            <PolicyText>
              <p>Khi nhận hàng, khách hàng nên kiểm tra:</p>
              <ul>
                <li>Tên và chủng loại sản phẩm;</li>
                <li>Quy cách, kích thước hoặc khối lượng;</li>
                <li>Số lượng thực tế;</li>
                <li>Tình trạng bên ngoài của hàng hóa;</li>
                <li>Chứng từ giao hàng và các tài liệu liên quan.</li>
              </ul>
              <p>Nếu phát hiện sai lệch hoặc hư hỏng có thể nhận biết tại thời điểm giao, khách hàng cần ghi nhận trên biên bản giao nhận, chụp ảnh hoặc quay video và thông báo ngay cho Công ty.</p>
              <p>Việc ký nhận hàng không làm mất quyền phản ánh của khách hàng đối với những sai sót hoặc khiếm khuyết không thể nhận biết bằng kiểm tra thông thường tại thời điểm giao nhận.</p>
            </PolicyText>
          </Section>

          <Section id="doi-tra">
            <SectionHeader>
              <SectionNumber>6</SectionNumber>
              <SectionTitle>Chính sách đổi trả</SectionTitle>
            </SectionHeader>
            <PolicyText>
              <p>Công ty tiếp nhận yêu cầu đổi trả trong vòng <strong>03 ngày</strong> kể từ ngày khách hàng nhận hàng đối với các trường hợp:</p>
              <ul>
                <li>Giao sai sản phẩm, chủng loại hoặc quy cách đã xác nhận;</li>
                <li>Giao thiếu hoặc thừa số lượng;</li>
                <li>Hàng hóa bị hư hỏng do quá trình vận chuyển do Công ty chịu trách nhiệm;</li>
                <li>Sản phẩm không phù hợp với nội dung trong báo giá, đơn đặt hàng hoặc hợp đồng.</li>
              </ul>

              <h4>Điều kiện đổi trả</h4>
              <ul>
                <li>Khách hàng cung cấp hóa đơn, phiếu giao hàng hoặc thông tin xác nhận đơn;</li>
                <li>Sản phẩm còn nguyên trạng, chưa sử dụng, thi công, cắt, uốn, gia công hoặc làm thay đổi đặc tính ban đầu;</li>
                <li>Có hình ảnh, video hoặc biên bản giao nhận thể hiện tình trạng cần xử lý, nếu có;</li>
                <li>Yêu cầu được gửi trong thời hạn quy định.</li>
              </ul>

              <h4>Trường hợp không áp dụng đổi trả</h4>
              <ul>
                <li>Sản phẩm đặt riêng hoặc gia công theo yêu cầu;</li>
                <li>Sản phẩm đã được sử dụng, thi công, cắt, uốn hoặc thay đổi hiện trạng;</li>
                <li>Hư hỏng do khách hàng bảo quản, vận chuyển hoặc sử dụng không đúng hướng dẫn;</li>
                <li>Sai sót xuất phát từ thông tin quy cách hoặc số lượng do khách hàng cung cấp và đã xác nhận;</li>
                <li>Biến động giá thị trường sau thời điểm đơn hàng được xác nhận.</li>
              </ul>
              <p>Sau khi kiểm tra, Công ty sẽ thống nhất với khách hàng phương án đổi hàng, bổ sung hàng, thu hồi hàng, hoàn tiền hoặc khắc phục phù hợp với từng trường hợp.</p>
            </PolicyText>
          </Section>

          <Section id="bao-hanh">
            <SectionHeader>
              <SectionNumber>7</SectionNumber>
              <SectionTitle>Chính sách bảo hành</SectionTitle>
            </SectionHeader>
            <PolicyText>
              <p>Chính sách bảo hành chỉ áp dụng đối với sản phẩm có quy định bảo hành của nhà sản xuất hoặc nhà cung cấp.</p>
              <p>Thời hạn, phạm vi và điều kiện bảo hành sẽ được thông báo trong báo giá, chứng từ mua hàng hoặc tài liệu kèm theo sản phẩm. Công ty sẽ hỗ trợ khách hàng làm việc với nhà sản xuất hoặc nhà cung cấp trong phạm vi trách nhiệm liên quan.</p>
              <p>Hư hỏng phát sinh từ việc vận chuyển, bảo quản, thi công hoặc sử dụng không đúng hướng dẫn không thuộc phạm vi bảo hành, trừ khi có thỏa thuận khác.</p>
            </PolicyText>
          </Section>

          <Section id="cam-ket">
            <SectionHeader>
              <SectionNumber>8</SectionNumber>
              <SectionTitle>Cam kết của Công ty</SectionTitle>
            </SectionHeader>
            <PolicyText>
              <p>Công ty TNHH SX–TM–DV Anh Tuấn cam kết:</p>
              <ul>
                <li>Cung cấp thông tin sản phẩm và báo giá minh bạch;</li>
                <li>Giao đúng sản phẩm, quy cách và số lượng đã xác nhận;</li>
                <li>Cung cấp hàng hóa có nguồn gốc rõ ràng theo hồ sơ hiện có;</li>
                <li>Không cố ý cung cấp hoặc trà trộn hàng hóa không đúng thỏa thuận;</li>
                <li>Chủ động thông báo khi có thay đổi ảnh hưởng đến đơn hàng;</li>
                <li>Tiếp nhận và xử lý phản ánh của khách hàng trên tinh thần hợp tác, trách nhiệm.</li>
              </ul>
            </PolicyText>
          </Section>

          <Section id="trach-nhiem">
            <SectionHeader>
              <SectionNumber>9</SectionNumber>
              <SectionTitle>Trách nhiệm của khách hàng</SectionTitle>
            </SectionHeader>
            <PolicyText>
              <p>Khách hàng có trách nhiệm:</p>
              <ul>
                <li>Cung cấp đầy đủ và chính xác thông tin đặt hàng, giao nhận và xuất hóa đơn;</li>
                <li>Kiểm tra kỹ báo giá, quy cách và số lượng trước khi xác nhận;</li>
                <li>Thanh toán đầy đủ, đúng thời hạn đã thỏa thuận;</li>
                <li>Kiểm tra hàng hóa khi nhận và thông báo kịp thời nếu phát hiện sai sót;</li>
                <li>Bảo quản, thi công và sử dụng sản phẩm đúng mục đích, tiêu chuẩn kỹ thuật và hướng dẫn liên quan;</li>
                <li>Không tự ý thay đổi hoặc hủy đơn hàng khi chưa thống nhất với Công ty.</li>
              </ul>
            </PolicyText>
          </Section>

          <Section id="bat-kha-khang">
            <SectionHeader>
              <SectionNumber>10</SectionNumber>
              <SectionTitle>Trường hợp bất khả kháng</SectionTitle>
            </SectionHeader>
            <PolicyText>
              <p>Công ty không bị xem là vi phạm nghĩa vụ khi việc giao hàng hoặc cung cấp dịch vụ bị ảnh hưởng bởi các sự kiện ngoài khả năng kiểm soát hợp lý, như thiên tai, dịch bệnh, hỏa hoạn, gián đoạn giao thông, thay đổi chính sách, thiếu hụt nguồn cung hoặc sự cố từ đơn vị vận chuyển.</p>
              <p>Trong trường hợp này, Công ty sẽ thông báo cho khách hàng và phối hợp thống nhất phương án xử lý phù hợp.</p>
            </PolicyText>
          </Section>

          <Section id="giai-quyet">
            <SectionHeader>
              <SectionNumber>11</SectionNumber>
              <SectionTitle>Tiếp nhận phản ánh và giải quyết tranh chấp</SectionTitle>
            </SectionHeader>
            <PolicyText>
              <p>Mọi phản ánh hoặc khiếu nại sẽ được tiếp nhận qua các kênh liên hệ chính thức của Công ty. Hai bên ưu tiên giải quyết trên tinh thần hợp tác và thương lượng.</p>
              <p>Nếu không thể thống nhất, tranh chấp sẽ được giải quyết tại cơ quan có thẩm quyền theo quy định pháp luật hiện hành.</p>
            </PolicyText>
          </Section>

          <SupportCard>
            <SupportInfo>
              <h3>Bạn cần hỗ trợ thêm?</h3>
              <p>Liên hệ ngay với đội ngũ chăm sóc khách hàng của chúng tôi để được tư vấn và giải đáp.</p>
            </SupportInfo>
            <SupportButton href="tel:0909746816">
              <Phone size={18} /> Hotline: 0909 746 816
            </SupportButton>
          </SupportCard>

        </ContentArea>
      </MainContent>
    </PolicyContainer>
  );
};

export default PolicyScreen;
