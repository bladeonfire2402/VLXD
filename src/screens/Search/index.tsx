"use client";

import React from 'react';
import Link from 'next/link';
import SectionTitle from '@/components/ui/SectionTitle';
import ProductCard from '@/components/ui/ProductCard';
import { Product } from '@/types/product';
import { RouteManager } from '@/constants/route';
import { PageWrapper, EmptyState, ProductGrid } from './styles';

interface SearchPageProps {
  keyword: string;
  products: Product[];
}

const SearchScreen: React.FC<SearchPageProps> = ({
  keyword,
  products
}) => {
  return (
    <PageWrapper>
      <SectionTitle title={`Kết quả tìm kiếm cho: "${keyword}"`} />
      
      {products.length > 0 ? (
        <ProductGrid>
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onClickAction={() => console.log('Xem sản phẩm:', product.name)}
            />
          ))}
        </ProductGrid>
      ) : (
        <EmptyState>
          <p>Không tìm thấy sản phẩm nào phù hợp với từ khóa <strong>{keyword}</strong>.</p>
          <Link href={RouteManager.HOME} style={{ color: 'var(--primary)', fontWeight: 'bold' }}>
            Quay lại trang chủ
          </Link>
        </EmptyState>
      )}
    </PageWrapper>
  );
};

export default SearchScreen;
