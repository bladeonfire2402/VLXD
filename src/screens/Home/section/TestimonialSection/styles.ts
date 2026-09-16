import styled from 'styled-components';
import SectionTitle from '@/components/ui/SectionTitle';

export const SectionWrapper = styled.section`
  background-color: #000000;
  padding: 60px 60px;
  width: 100%;
  color: #ffffff;
`;

export const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 var(--spacing-md);
  text-align: center;
`;

export const StyledSectionTitle = styled(SectionTitle)`
  h2 {
    color: #ffffff;
  }
  
  span {
    border-color: #ffffff;
  }
  
  p {
    color: #aaaaaa;
  }
`;

export const SliderContainer = styled.div`
  position: relative;
  overflow: hidden;
  margin-top: var(--spacing-xl);
`;

export const TestimonialContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 var(--spacing-md);
  animation: fadeIn 0.5s ease-in-out;

  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
  }
`;

export const AvatarContainer = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: 2px solid rgba(255, 255, 255, 0.2);
  overflow: hidden;
  margin-bottom: var(--spacing-md);
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const AuthorInfo = styled.div`
  margin-bottom: var(--spacing-lg);
  font-size: 0.9rem;
`;

export const Name = styled.span`
  color: #ffffff;
  font-weight: 700;
  text-transform: uppercase;
`;

export const Role = styled.span`
  color: var(--color-nav-active, #ffbc13);
  font-weight: 700;
  text-transform: uppercase;
  margin-left: 4px;
`;

export const Quote = styled.p`
  color: #ffffff;
  font-size: 1rem;
  line-height: 1.6;
  text-align: center;
  font-style: italic;
  margin: 0;
`;

export const DotsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  margin-top: var(--spacing-xl);
`;

export const Dot = styled.button<{ $active: boolean }>`
  width: 10px;
  height: 10px;
  padding: 0;
  border: 1px solid ${({ $active }) => ($active ? 'var(--color-nav-active, #ffbc13)' : '#555555')};
  background-color: ${({ $active }) => ($active ? 'var(--color-nav-active, #ffbc13)' : 'transparent')};
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    border-color: var(--color-nav-active, #ffbc13);
  }
`;
