import styled from 'styled-components';

export const PageWrapper = styled.div`
  width: 100%;
`;

export const Description = styled.p`
  font-size: 0.9rem;
  color: #666666;
  margin-bottom: 30px;
  line-height: 1.6;
`;

export const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;

  @media (min-width: 600px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;
