import styled, { keyframes } from 'styled-components';

const scroll = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
`;

export const SectionWrapper = styled.section`
  background-color: var(--color-nav-active, #ffbc13);
  padding: 30px 0;
  width: 100%;
  overflow: hidden;
  position: relative;
`;

export const MarqueeContainer = styled.div`
  display: flex;
  width: 200%; /* Enough width to hold 2 sets of logos if needed, but flex handles this mostly */
`;

export const MarqueeTrack = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
  animation: ${scroll} 25s linear infinite;
  
  /* Pause animation on hover */
  &:hover {
    animation-play-state: paused;
  }
  
  /* Make sure the track takes exactly twice the space of one set so -50% works */
  width: max-content;
  padding-left: 20px;
  padding-right: 20px;
`;

export const LogoWrapper = styled.div`
  flex-shrink: 0;
  width: 220px;
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

export const LogoImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: fill;
  filter: grayscale(100%) opacity(0.7);
  transition: all 0.3s ease;

  ${LogoWrapper}:hover & {
    filter: grayscale(0%) opacity(1);
  }
`;
