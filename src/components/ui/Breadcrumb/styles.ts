import styled from 'styled-components';
import Link from 'next/link';

export const BreadcrumbWrapper = styled.div`
  width: 100%;
  background-color: #f5f5f5;
  padding: 12px 0;
  border-bottom: 1px solid #eeeeee;
  border-top: 1px solid #eeeeee;
`;

export const BreadcrumbContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--spacing-md);
  display: flex;
  align-items: center;
  font-size: 0.9rem;
`;

export const BreadcrumbLink = styled(Link)`
  color: var(--color-nav-active, #ffbc13);
  text-decoration: none;
  font-weight: 500;

  &:hover {
    text-decoration: underline;
  }
`;

export const Separator = styled.span`
  margin: 0 10px;
  color: #888888;
  font-size: 0.8rem;
`;

export const CurrentPage = styled.span`
  color: #555555;
  font-weight: 500;
`;
