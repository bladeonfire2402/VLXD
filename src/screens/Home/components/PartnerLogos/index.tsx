import React from 'react';
import {
  SectionWrapper,
  MarqueeContainer,
  MarqueeTrack,
  LogoWrapper,
  LogoImage
} from './styles';

const PARTNER_LOGOS = [
  { id: 1, name: 'Bosch', url: '/temp.png' },
  { id: 2, name: 'Makita', url: '/temp.png' },
  { id: 3, name: 'Sony', url: '/temp.png' },
  { id: 4, name: 'Panasonic', url: '/temp.png' },
  { id: 5, name: 'LG', url: '/temp.png' },
  { id: 6, name: 'Samsung', url: '/temp.png' },
  { id: 7, name: 'Siemens', url: '/temp.png' },
];

const PartnerLogos = () => {
  return (
    <SectionWrapper>
      <MarqueeContainer>
        <MarqueeTrack>
          {/* First set of logos */}
          {PARTNER_LOGOS.map((logo) => (
            <LogoWrapper key={`set1-${logo.id}`}>
              <LogoImage src={logo.url} alt={logo.name} loading="lazy" />
            </LogoWrapper>
          ))}
          {/* Second set of logos (duplicated for seamless looping) */}
          {PARTNER_LOGOS.map((logo) => (
            <LogoWrapper key={`set2-${logo.id}`}>
              <LogoImage src={logo.url} alt={logo.name} loading="lazy" />
            </LogoWrapper>
          ))}
        </MarqueeTrack>
      </MarqueeContainer>
    </SectionWrapper>
  );
};

export default PartnerLogos;
