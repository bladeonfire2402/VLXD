import {
  SectionWrapper,
  MarqueeContainer,
  MarqueeTrack,
  LogoWrapper,
  LogoImage
} from './styles';

const PARTNER_LOGOS = [
  { id: 1, name: 'Thái Bình Dương', url: '/images/partners/thai-binh-duong.png' },
  { id: 2, name: 'QH', url: '/images/partners/qh.png' },
  { id: 3, name: 'Yên Lê', url: '/images/partners/yen-le.png' },
  { id: 4, name: 'Lâm Trường Phát', url: '/images/partners/lam-truong-phat.png' },
  { id: 5, name: 'Thành Danh', url: '/images/partners/thanh-danh.png' },
];

const PartnerLogos = () => {
  const repeatedLogos = [...PARTNER_LOGOS, ...PARTNER_LOGOS, ...PARTNER_LOGOS, ...PARTNER_LOGOS];

  return (
    <SectionWrapper>
      <MarqueeContainer>
        <MarqueeTrack>
          {/* First set of logos */}
          {repeatedLogos.map((logo, index) => (
            <LogoWrapper key={`set1-${logo.id}-${index}`}>
              <LogoImage src={logo.url} alt={logo.name} loading="lazy" />
            </LogoWrapper>
          ))}
          {/* Second set of logos (duplicated for seamless looping) */}
          {repeatedLogos.map((logo, index) => (
            <LogoWrapper key={`set2-${logo.id}-${index}`}>
              <LogoImage src={logo.url} alt={logo.name} loading="lazy" />
            </LogoWrapper>
          ))}
        </MarqueeTrack>
      </MarqueeContainer>
    </SectionWrapper>
  );
};

export default PartnerLogos;
