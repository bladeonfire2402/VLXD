import styled from 'styled-components';

export const PaginationWrapper = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  margin-top: 40px;
  margin-bottom: 40px;
`;

export const PageButton = styled.button<{ $active?: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 8px;
  border: 1px solid ${({ $active }) => ($active ? '#0F172A' : '#E2E8F0')};
  background-color: ${({ $active }) => ($active ? '#0F172A' : '#FFFFFF')};
  color: ${({ $active }) => ($active ? '#FFFFFF' : '#475569')};
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover:not(:disabled) {
    border-color: #0F172A;
    color: ${({ $active }) => ($active ? '#FFFFFF' : '#0F172A')};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const Ellipsis = styled.span`
  color: #64748B;
  padding: 0 4px;
`;
