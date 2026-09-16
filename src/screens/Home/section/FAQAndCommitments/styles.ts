import styled from 'styled-components';

export const SectionWrapper = styled.section`
  background-color: #000000;
  padding: var(--spacing-xl) 0;
  width: 100%;
  padding-bottom: 4rem;
  padding-top: 4rem
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--spacing-md);
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xl);

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
  }
`;

export const LeftColumn = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const RightColumn = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const CommitmentsTitle = styled.h2`
  color: var(--color-nav-active, #ffbc13);
  font-size: 1.75rem;
  font-weight: 700;
  margin-top: 0;
  margin-bottom: var(--spacing-md);
  text-transform: uppercase;
`;

export const CommitmentList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 var(--spacing-lg) 0;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
`;

export const CommitmentItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: var(--spacing-sm);
  color: #ffffff;
  font-size: 0.95rem;
  line-height: 1.5;
`;

export const IconWrapper = styled.div`
  color: var(--color-nav-active, #ffbc13);
  flex-shrink: 0;
  margin-top: 2px;
`;

export const FooterText = styled.p`
  color: #ffffff;
  font-weight: 600;
  font-size: 1rem;
  margin: 0;
`;
