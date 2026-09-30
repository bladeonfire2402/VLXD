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
  { name: 'CÁT XÂY DỰNG', image: AssetManagers.products.catVang, slug: CategoryType.CAT_XAY_DUNG },
  { name: 'ĐÁ XÂY DỰNG', image: AssetManagers.products.da1x2, slug: CategoryType.DA_XAY_DUNG },
  { name: 'BÊ TÔNG THƯƠNG PHẨM', image: AssetManagers.products.beTong, slug: CategoryType.BE_TONG_THUONG_PHAM }
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
