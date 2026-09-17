"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import { RouteManager } from '@/constants/route';
import { 
  SectionWrapper, 
  Container, 
  Title, 
  CategoryList, 
  CategoryItem, 
  ImageWrapper, 
  ImageInner, 
  CategoryImage, 
  CategoryName 
} from './styles';

const CATEGORIES = [
  { name: 'ĐÁ XÂY DỰNG', image: '/images/product/gach_ngoi.png', slug: 'da-xay-dung' },
  { name: 'CÁT XÂY DỰNG', image: '/images/product/gach_cui.png', slug: 'cat-xay-dung' },
  { name: 'GẠCH TUYNEL', image: '/images/product/gach_ngoi.png', slug: 'gach-tuynel' },
  { name: 'XI MĂNG', image: '/images/product/gach_cui.png', slug: 'xi-mang' },
  { name: 'SẮT THÉP XÂY DỰNG', image: '/images/product/gach_ngoi.png', slug: 'sat-thep-xay-dung' }
];

const CategoryShowCase = () => {
  const router = useRouter();

  const handleCategoryClick = (slug: string) => {
    router.push(RouteManager.productCategory(slug));
  };

  return (
    <SectionWrapper>
      <Container>
        <Title>DANH MỤC SẢN PHẨM</Title>
        <CategoryList>
          {CATEGORIES.map((category) => (
            <CategoryItem 
              key={category.slug} 
              onClick={() => handleCategoryClick(category.slug)}
            >
              <ImageWrapper className="img-wrapper">
                <ImageInner>
                  <CategoryImage src={category.image} alt={category.name} loading="lazy" />
                </ImageInner>
              </ImageWrapper>
              <CategoryName>{category.name}</CategoryName>
            </CategoryItem>
          ))}
        </CategoryList>
      </Container>
    </SectionWrapper>
  );
};

export default CategoryShowCase;
