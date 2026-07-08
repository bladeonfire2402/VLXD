"use client";

import React from 'react';
import styled from 'styled-components';
import ProductSidebar from '@/components/shared/ProductSidebar';

const LayoutGrid = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 30px var(--spacing-md);
  display: grid;
  grid-template-columns: 1fr;
  gap: 30px;

  @media (min-width: 900px) {
    grid-template-columns: 1fr 300px;
    gap: 40px;
  }
`;

const MainContent = styled.main`
  min-width: 0;
`;

export default function SanPhamLayout({ children }: { children: React.ReactNode }) {
  return (
    <LayoutGrid>
      <MainContent>{children}</MainContent>
      <ProductSidebar />
    </LayoutGrid>
  );
}
