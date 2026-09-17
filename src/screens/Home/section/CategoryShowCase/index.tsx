"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import { AssetManagers } from '@/constants/assets';
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
  { name: 'ĐÁ XÂY DỰNG', image: AssetManagers.products.gachNgoi, slug: 'da-xay-dung' },
  { name: 'CÁT XÂY DỰNG', image: AssetManagers.products.gachCui, slug: 'cat-xay-dung' },
  { name: 'GẠCH TUYNEL', image: AssetManagers.products.gachNgoi, slug: 'gach-tuynel' },
  { name: 'XI MĂNG', image: AssetManagers.products.gachCui, slug: 'xi-mang' },
  { name: 'SẮT THÉP XÂY DỰNG', image: AssetManagers.products.gachNgoi, slug: 'sat-thep-xay-dung' }
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
                  <CategoryImage
                    src={category.image}
                    alt={category.name}
                    fill
                    sizes="160px"
                  />
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
