import { AssetManagers } from '@/constants/assets';
import {
  SectionWrapper,
  MarqueeContainer,
  MarqueeTrack,
  LogoWrapper,
  LogoImage
} from './styles';

const PARTNER_LOGOS = [
  { id: 1, name: 'Thái Bình Dương', url: AssetManagers.partners.thaiBinhDuong },
  { id: 2, name: 'QH', url: AssetManagers.partners.qh },
  { id: 3, name: 'Yên Lê', url: AssetManagers.partners.yenLe },
  { id: 4, name: 'Lâm Trường Phát', url: AssetManagers.partners.lamTruongPhat },
  { id: 5, name: 'Thành Danh', url: AssetManagers.partners.thanhDanh },
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
