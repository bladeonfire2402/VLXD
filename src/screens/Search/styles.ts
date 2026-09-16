import styled from 'styled-components';

export const PageWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 30px;
  padding-bottom: 30px;
`;

export const EmptyState = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 60px 20px;
  text-align: center;
  background-color: #f9f9f9;
  border-radius: 8px;
  
  p {
    font-size: 1.1rem;
    color: #666;
    margin-bottom: 20px;
  }
`;

export const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
  margin-top: 30px;

  @media (min-width: 600px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;
