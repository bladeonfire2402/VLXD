import styled from 'styled-components';

export const PolicyContainer = styled.div`
  width: 100%;
  background-color: #ffffff;
  padding-bottom: 60px;
`;

export const HeroSection = styled.div`
  background-color: #202426;
  color: #fff;
  padding: 60px 20px;
  text-align: center;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, var(--color-primary-light, #D79B4B), var(--color-primary-dark, #8E4D21));
  }
`;

export const Badge = styled.span`
  display: inline-block;
  background-color: rgba(215, 155, 75, 0.2);
  color: var(--color-primary-light, #D79B4B);
  padding: 6px 16px;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 600;
  letter-spacing: 1px;
  margin-bottom: 20px;
`;

export const Title = styled.h1`
  font-size: 2.2rem;
  font-weight: 800;
  margin-bottom: 15px;
  line-height: 1.3;

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

export const Subtitle = styled.p`
  font-size: 1.1rem;
  color: #A4AEB3;
  margin-bottom: 0;
`;

export const MainContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
  display: flex;
  gap: 40px;
  align-items: flex-start;

  @media (max-width: 992px) {
    flex-direction: column;
  }
`;

export const Sidebar = styled.aside`
  flex: 0 0 280px;
  position: sticky;
  top: 100px;
  background: #202426;
  border-radius: 8px;
  padding: 24px;
  box-shadow: var(--shadow-sm);
  border: 1px solid #3A4244;

  @media (max-width: 992px) {
    position: static;
    flex: auto;
    width: 100%;
    margin-bottom: 20px;
  }
`;

export const SidebarTitle = styled.h3`
  font-size: 1.1rem;
  font-weight: 700;
  margin-bottom: 16px;
  color: #ffffff;
  display: flex;
  align-items: center;
  gap: 8px;
  border-bottom: 2px solid #3A4244;
  padding-bottom: 10px;
`;

export const TableOfContents = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const TocItem = styled.li<{ $active?: boolean }>`
  margin-bottom: 8px;

  a {
    display: block;
    color: ${props => props.$active ? 'var(--color-primary)' : '#A4AEB3'};
    font-weight: ${props => props.$active ? '600' : '400'};
    font-size: 0.95rem;
    padding: 8px 12px;
    border-radius: 4px;
    transition: all 0.2s;
    background-color: ${props => props.$active ? 'rgba(215, 155, 75, 0.1)' : 'transparent'};

    &:hover {
      background-color: rgba(215, 155, 75, 0.05);
      color: var(--color-primary);
    }
  }
`;

export const ContentArea = styled.div`
  flex: 1;
  background: #202426;
  border-radius: 8px;
  padding: 40px;
  box-shadow: var(--shadow-sm);
  border: 1px solid #3A4244;

  @media (max-width: 768px) {
    padding: 24px;
  }
`;

export const IntroBlock = styled.div`
  background-color: #1A1D1E;
  border-left: 4px solid var(--color-primary);
  padding: 20px 24px;
  border-radius: 0 8px 8px 0;
  margin-bottom: 40px;
  color: #ffffff;
  font-size: 1.05rem;
  line-height: 1.6;
`;

export const Section = styled.section`
  margin-bottom: 40px;
  scroll-margin-top: 100px; /* For smooth scrolling offset */

  &:last-child {
    margin-bottom: 0;
  }
`;

export const SectionHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 20px;
`;

export const SectionNumber = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: var(--color-primary);
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 1rem;
`;

export const SectionTitle = styled.h2`
  font-size: 1.4rem;
  font-weight: 700;
  color: #ffffff;
  margin: 0;
`;

export const PolicyText = styled.div`
  color: #E9ECEB;
  line-height: 1.7;
  font-size: 1rem;

  p {
    margin-bottom: 16px;
  }

  ul {
    padding-left: 20px;
    margin-bottom: 16px;
    list-style-type: none;

    li {
      position: relative;
      margin-bottom: 8px;
      padding-left: 12px;

      &::before {
        content: '';
        position: absolute;
        left: -12px;
        top: 8px;
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background-color: var(--color-primary-light);
      }
    }
  }

  h4 {
    font-size: 1.1rem;
    font-weight: 600;
    margin-top: 24px;
    margin-bottom: 12px;
    color: #ffffff;
  }
`;

export const CalloutBox = styled.div`
  background-color: rgba(24bc2d, 0.05);
  border: 1px solid rgba(24bc2d, 0.2);
  padding: 16px;
  border-radius: 8px;
  margin: 20px 0;
  display: flex;
  gap: 12px;
  align-items: flex-start;

  svg {
    color: #fbc02d;
    flex-shrink: 0;
    margin-top: 2px;
  }

  p {
    margin: 0;
    font-size: 0.95rem;
  }
`;

export const SupportCard = styled.div`
  background: linear-gradient(135deg, #202426, #3A4244);
  color: #fff;
  padding: 30px;
  border-radius: 8px;
  margin-top: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

export const SupportInfo = styled.div`
  h3 {
    font-size: 1.3rem;
    margin-bottom: 8px;
  }
  p {
    color: #A4AEB3;
    margin: 0;
  }
`;

export const SupportButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background-color: var(--color-primary);
  color: #fff;
  padding: 12px 24px;
  border-radius: 4px;
  font-weight: 600;
  text-decoration: none;
  transition: background-color 0.2s;
  white-space: nowrap;

  &:hover {
    background-color: var(--color-primary-dark);
  }
`;
