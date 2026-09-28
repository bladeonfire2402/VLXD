import styled from 'styled-components';

export const AccordionWrapper = styled.div`
  margin-bottom: var(--spacing-md);
`;

export const AccordionHeader = styled.div<{ $isOpen: boolean }>`
  background-color: var(--color-nav-active, #ffbc13);
  padding: var(--spacing-md) var(--spacing-lg);
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.9;
  }
`;

export const AccordionTitle = styled.h3`
  font-size: 1rem;
  font-weight: 700;
  color: #000;
  margin: 0;
  text-transform: uppercase;
`;

export const AccordionIconWrapper = styled.div`
  color: #000;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const AccordionContentWrapper = styled.div<{ $isOpen: boolean }>`
  display: grid;
  grid-template-rows: ${({ $isOpen }) => ($isOpen ? '1fr' : '0fr')};
  transition: grid-template-rows 0.3s ease-out;
`;

export const AccordionContentInner = styled.div`
  overflow: hidden;
`;

export const AccordionText = styled.div`
  padding: var(--spacing-lg) 0 0 0;
  color: #ffffff;
  line-height: 1.6;
  font-size: 0.95rem;
`;
