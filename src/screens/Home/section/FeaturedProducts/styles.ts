import styled from 'styled-components';

export const SectionWrapper = styled.section`
  padding: 60px 16px;
  background-color: #fff;
  max-width: 1200px;
  margin: 0 auto;
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 24px;
  margin-bottom: 40px;
  
  @media (min-width: 576px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
  
  @media (min-width: 992px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
