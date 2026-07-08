import styled from 'styled-components';

export const SectionWrapper = styled.section`
  background-color: #f3f0f0ff;
  padding: 60px 60px;
  width: 100%;
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--spacing-md);
`;

export const SectionHeader = styled.div`
  margin-bottom: var(--spacing-xl);
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--spacing-xl);

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;
