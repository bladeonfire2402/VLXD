import styled from 'styled-components';

export const NotFoundContainer = styled.div`
  max-width: var(--container-width, 1200px);
  margin: 0 auto;
  padding: 40px 20px 80px;
  background-color: var(--color-bg-main, #F7F7F5);
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: var(--font-family-base, 'Inter', sans-serif);
`;

export const MainContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 80px;
  gap: 40px;

  @media (max-width: 991px) {
    flex-direction: column;
    text-align: center;
  }
`;

export const LeftColumn = styled.div`
  flex: 1;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  
  @media (max-width: 991px) {
    align-items: center;
  }
`;

export const TopLabel = styled.div`
  display: flex;
  align-items: center;
  font-size: 12px;
  font-weight: 700;
  color: var(--color-primary, #B86B32);
  letter-spacing: 1px;
  margin-bottom: 24px;
  text-transform: uppercase;

  .line {
    width: 32px;
    height: 2px;
    background-color: var(--color-primary, #B86B32);
    margin-right: 12px;
  }
`;

export const Heading = styled.h1`
  font-size: 48px;
  font-weight: 800;
  line-height: 1.2;
  color: var(--color-text-main, #202426);
  margin-bottom: 24px;
  letter-spacing: -1px;

  @media (max-width: 768px) {
    font-size: 36px;
  }
`;

export const Description = styled.p`
  font-size: 16px;
  line-height: 1.6;
  color: var(--color-text-muted, #687176);
  margin-bottom: 32px;
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: 32px;
  flex-wrap: wrap;

  @media (max-width: 991px) {
    justify-content: center;
  }
`;

export const SupportText = styled.p`
  font-size: 14px;
  color: var(--color-text-muted, #687176);

  .link {
    color: var(--color-text-main, #202426);
    font-weight: 600;
    text-decoration: underline;
    cursor: pointer;
    transition: color 0.2s;

    &:hover {
      color: var(--color-primary, #B86B32);
    }
  }
`;

export const RightColumn = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  position: relative;
  min-height: 350px;
  width: 100%;
`;

export const Illustration404 = styled.div`
  position: relative;
  width: 100%;
  max-width: 500px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .grid-bg {
    position: absolute;
    top: 10%;
    left: 0;
    width: 100%;
    height: 80%;
    background-image: linear-gradient(#e5e5e5 1px, transparent 1px), linear-gradient(90deg, #e5e5e5 1px, transparent 1px);
    background-size: 30px 30px;
    z-index: 0;
    opacity: 0.6;
  }

  .caption {
    font-size: 12px;
    letter-spacing: 2px;
    color: var(--color-text-muted, #687176);
    margin-top: 40px;
    z-index: 2;
    text-transform: uppercase;
  }
`;

export const IllustrationNumber = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
  gap: 10px;

  .digit {
    font-size: 160px;
    font-weight: 900;
    color: var(--color-text-main, #202426);
    line-height: 1;
    text-shadow: 4px 4px 0px rgba(0,0,0,0.05);

    &.zero {
      color: var(--color-primary, #B86B32);
    }

    @media (max-width: 768px) {
      font-size: 100px;
    }
  }
`;

export const IllustrationBarrier = styled.div`
  position: absolute;
  bottom: 80px;
  right: 50px;
  z-index: 2;

  .barrier-bar {
    width: 120px;
    height: 16px;
    background: repeating-linear-gradient(
      -45deg,
      #F5A623,
      #F5A623 10px,
      #202426 10px,
      #202426 20px
    );
    border: 2px solid #202426;
    transform: rotate(-3deg);
    box-shadow: 2px 4px 0px rgba(0,0,0,0.1);
  }

  .barrier-leg {
    width: 4px;
    height: 24px;
    background-color: #202426;
    position: absolute;
    bottom: -22px;

    &.left {
      left: 20px;
    }
    &.right {
      right: 20px;
    }
  }
  
  @media (max-width: 768px) {
    right: 20px;
    bottom: 50px;
  }
`;

export const BottomSection = styled.div`
  width: 100%;
`;

export const SectionDivider = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 40px;
  
  .line {
    flex: 1;
    height: 1px;
    background-color: var(--color-border, #CDD3D2);
    margin-left: 20px;
  }
`;

export const SectionTitle = styled.h2`
  font-size: 12px;
  font-weight: 700;
  color: var(--color-text-muted, #687176);
  text-transform: uppercase;
  letter-spacing: 1px;
`;

export const ExploreGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;

  @media (max-width: 991px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

export const CardIcon = styled.div`
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-primary, #B86B32);
  background-color: rgba(184, 107, 50, 0.1);
  border-radius: 8px;
  margin-right: 16px;
  flex-shrink: 0;
`;

export const CardContent = styled.div`
  flex: 1;
`;

export const CardTitle = styled.h3`
  font-size: 16px;
  font-weight: 700;
  color: var(--color-text-main, #202426);
  margin: 0 0 4px 0;
`;

export const CardDesc = styled.p`
  font-size: 13px;
  color: var(--color-text-muted, #687176);
  margin: 0;
`;

export const CardArrow = styled.div`
  color: var(--color-text-muted, #687176);
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 16px;
`;

export const ExploreCard = styled.div`
  display: flex;
  align-items: center;
  padding: 20px 0;
  cursor: pointer;
  border-top: 1px solid transparent;
  transition: all 0.3s ease;
  text-decoration: none;

  &:hover {
    transform: translateY(-2px);
    
    ${CardArrow} {
      color: var(--color-primary, #B86B32);
      transform: translate(2px, -2px);
    }
  }
`;
