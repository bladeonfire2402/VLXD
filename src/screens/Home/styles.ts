import styled from 'styled-components';

export const HomeWrapper = styled.div`
  min-height: calc(100vh - 200px);
  margin: 0 auto;
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  color: var(--primary-color, #ffbc13);
  margin-bottom: 16px;
  text-align: center;
`;

export const Description = styled.p`
  font-size: 1.2rem;
  color: var(--text-color, #333);
  text-align: center;
`;
