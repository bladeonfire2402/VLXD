"use client";

import React from 'react';
import SectionTitle from '@/components/ui/SectionTitle';
import ProductCard from '@/components/ui/ProductCard';
import Button from '@/components/ui/Button';
import { MOCK_FEATURED_PRODUCTS } from '@/lib/constants';
import { useRouter } from 'next/navigation';
import { SectionWrapper, GridContainer, ButtonWrapper } from './styles';

const FeaturedProductsData = {
  TITLE: "SẢN PHẨM NỔI BẬT",
  SUBTITLE: "Các sản phẩm bán chạy nhất và được khách hàng yêu thích nhất.",
  VIEW_ALL_BTN: "Xem tất cả sản phẩm »"
};

const FeaturedProducts = () => {
  const router = useRouter();
  
  const handleViewAll = () => {
    router.push('/san-pham');
  };

  return (
    <SectionWrapper>
      <SectionTitle 
        title={FeaturedProductsData.TITLE} 
        subtitle={FeaturedProductsData.SUBTITLE} 
      />
      
      <GridContainer>
        {MOCK_FEATURED_PRODUCTS.map((product) => (
          <ProductCard 
            key={product.id} 
            product={product} 
          />
        ))}
      </GridContainer>

      <ButtonWrapper>
        <Button variant="outline" onClick={handleViewAll}>
          {FeaturedProductsData.VIEW_ALL_BTN}
        </Button>
      </ButtonWrapper>
    </SectionWrapper>
  );
};

export default FeaturedProducts;
