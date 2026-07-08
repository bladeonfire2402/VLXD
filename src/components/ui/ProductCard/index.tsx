"use client";

import React from 'react';
import Link from 'next/link';
import { Product } from '@/types/product';
import {
  CardWrapper,
  ImageContainer,
  ProductImage,
  ProductName,
  ActionText
} from './styles';

interface ProductCardProps {
  product: Product;
  onClickAction?: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onClickAction }) => {
  return (
    <Link href={`/san-pham/${product.categorySlug}/${product.slug}`} style={{ textDecoration: 'none' }}>
      <CardWrapper>
        <ImageContainer>
          <ProductImage src={product.thumbnail} alt={product.name} loading="lazy" />
        </ImageContainer>
        <ProductName>{product.name}</ProductName>
        <ActionText>{product.price || 'Liên hệ'}</ActionText>
      </CardWrapper>
    </Link>
  );
};

export default ProductCard;

