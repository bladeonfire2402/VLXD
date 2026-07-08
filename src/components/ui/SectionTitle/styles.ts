import styled from 'styled-components';

export const SectionTitleContainer = styled.div`
  text-align: center;
  margin-bottom: 2.5rem;
`;

export const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  text-transform: uppercase;
  color: var(--text-color, #333);
  margin-bottom: 0.5rem;
  
  @media (min-width: 768px) {
    font-size: 1.75rem;
  }
`;

export const Divider = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 12px 0 16px;
  
  &::before,
  &::after {
    content: '';
    display: inline-block;
    width: 60px;
    height: 2px;
    background-color: var(--primary-color, #ffbc13);
  }
`;

export const Square = styled.span`
  display: inline-block;
  width: 8px;
  height: 8px;
  border: 2px solid #555;
  margin: 0 8px;
`;

export const Subtitle = styled.p`
  font-size: 0.875rem;
  color: #666;
  max-width: 600px;
  margin: 0 auto;
  
  @media (min-width: 768px) {
    font-size: 1rem;
  }
`;
