import styled from 'styled-components';

export const CarouselContainer = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
`;

export const CarouselTrack = styled.div<{ $currentIndex: number; $height?: number | string }>`
  display: flex;
  width: 100%;
  transition: transform 0.5s ease-in-out;
  transform: translateX(-${props => props.$currentIndex * 100}%);
  height: ${props => typeof props.$height === 'number' ? `${props.$height}px` : props.$height || '350px'};
`;

export const CarouselSlide = styled.div`
  min-width: 100%;
  flex: 0 0 100%;
  height: 100%;
  background-color: red;
`;

export const SlideImage = styled.img`
  width: 100%;
  height: 650px;
  display: block;
  object-fit: cover;
`;

export const Button = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.4);
  color: white;
  border: none;
  cursor: pointer;
  z-index: 10;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  transition: background-color 0.3s;

  &:hover {
    background-color: rgba(0, 0, 0, 0.8);
  }
`;

export const PrevButton = styled(Button)`
  left: 10px;
`;

export const NextButton = styled(Button)`
  right: 10px;
`;

export const DotsContainer = styled.div`
  position: absolute;
  bottom: 15px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 8px;
`;

export const Dot = styled.button<{ $active: boolean }>`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: none;
  background-color: ${props => (props.$active ? 'var(--primary-color, #ffbc13)' : 'rgba(255, 255, 255, 0.5)')};
  cursor: pointer;
  padding: 0;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${props => (props.$active ? 'var(--primary-color, #ffbc13)' : 'rgba(255, 255, 255, 0.9)')};
  }
`;
