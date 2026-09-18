"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import { AssetManagers } from '@/constants/assets';
import { RouteManager } from '@/constants/route';
import { CategoryType } from '@/constants/data';
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
  { name: 'ĐÁ XÂY DỰNG', image: AssetManagers.products.gachNgoi, slug: CategoryType.DA_XAY_DUNG },
  { name: 'CÁT XÂY DỰNG', image: AssetManagers.products.gachCui, slug: CategoryType.CAT_XAY_DUNG },
  { name: 'GẠCH TUYNEL', image: AssetManagers.products.gachNgoi, slug: CategoryType.GACH_TUYNEL },
  { name: 'XI MĂNG', image: AssetManagers.products.gachCui, slug: CategoryType.XI_MANG },
  { name: 'SẮT THÉP XÂY DỰNG', image: AssetManagers.products.gachNgoi, slug: CategoryType.SAT_THEP_XAY_DUNG }
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
