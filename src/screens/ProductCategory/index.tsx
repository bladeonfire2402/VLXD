"use client";

import React from 'react';
import SectionTitle from '@/components/ui/SectionTitle';
import ProductCard from '@/components/ui/ProductCard';
import { Product } from '@/types/product';
import { PageWrapper, Description, ProductGrid } from './styles';

const ProductCategoryData = {
  CONTACT_LOG: 'Liên hệ:'
};

interface ProductCategoryPageProps {
  title: string;
  description?: string;
  products: Product[];
}

const ProductCategoryPage: React.FC<ProductCategoryPageProps> = ({
  title,
  description,
  products
}) => {
  return (
    <PageWrapper>
      <SectionTitle title={title} />
      {description && <Description>{description}</Description>}
      <ProductGrid>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onClickAction={() => console.log(ProductCategoryData.CONTACT_LOG, product.name)}
          />
        ))}
      </ProductGrid>
    </PageWrapper>
  );
};

export default ProductCategoryPage;
