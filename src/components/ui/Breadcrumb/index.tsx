"use client";

import React from 'react';
import { usePathname } from 'next/navigation';
import { CATEGORY_MAP } from '@/constants/data';
import { findProductBySlug } from '@/utils/productUtils';
import { RouteManager } from '@/constants/route';
import {
  BreadcrumbWrapper,
  BreadcrumbContainer,
  BreadcrumbLink,
  Separator,
  CurrentPage
} from './styles';

const BreadcrumbData = {
  HOME: 'Trang chủ',
  PRODUCTS: 'Vật liệu xây dựng',
  CONTACT: 'Liên hệ',
  POLICY: 'Chính sách & Quy định',
  FALLBACK_PAGE: 'Trang',
  SEPARATOR: '»'
};

// Static route mapping
const staticRoutes: Record<string, string> = {
  [RouteManager.CONTACT]: BreadcrumbData.CONTACT,
  [RouteManager.PRODUCTS]: BreadcrumbData.PRODUCTS,
  [RouteManager.POLICY]: BreadcrumbData.POLICY,
};

const Breadcrumb = () => {
  const pathname = usePathname();

  if (!pathname || pathname === '/') {
    return null;
  }

  // Static routes
  if (staticRoutes[pathname]) {
    return (
      <BreadcrumbWrapper>
        <BreadcrumbContainer>
          <BreadcrumbLink href={RouteManager.HOME}>{BreadcrumbData.HOME}</BreadcrumbLink>
          <Separator>{BreadcrumbData.SEPARATOR}</Separator>
          <CurrentPage>{staticRoutes[pathname]}</CurrentPage>
        </BreadcrumbContainer>
      </BreadcrumbWrapper>
    );
  }

  // Dynamic: /san-pham/[category] or /san-pham/[category]/[product]
  if (pathname.startsWith('/san-pham/')) {
    const segments = pathname.split('/').filter(Boolean); // ['san-pham', 'category', 'product?']
    const categorySlug = segments[1];
    const productSlug = segments[2];
    const categoryName = CATEGORY_MAP[categorySlug];

    // /san-pham/[category] — category page
    if (categoryName && !productSlug) {
      return (
        <BreadcrumbWrapper>
          <BreadcrumbContainer>
            <BreadcrumbLink href={RouteManager.HOME}>{BreadcrumbData.HOME}</BreadcrumbLink>
            <Separator>{BreadcrumbData.SEPARATOR}</Separator>
            <BreadcrumbLink href={RouteManager.PRODUCTS}>{BreadcrumbData.PRODUCTS}</BreadcrumbLink>
            <Separator>{BreadcrumbData.SEPARATOR}</Separator>
            <CurrentPage>{categoryName}</CurrentPage>
          </BreadcrumbContainer>
        </BreadcrumbWrapper>
      );
    }

    // /san-pham/[category]/[product] — product detail
    if (categoryName && productSlug) {
      const product = findProductBySlug(productSlug);
      return (
        <BreadcrumbWrapper>
          <BreadcrumbContainer>
            <BreadcrumbLink href={RouteManager.HOME}>{BreadcrumbData.HOME}</BreadcrumbLink>
            <Separator>{BreadcrumbData.SEPARATOR}</Separator>
            <BreadcrumbLink href={RouteManager.PRODUCTS}>{BreadcrumbData.PRODUCTS}</BreadcrumbLink>
            <Separator>{BreadcrumbData.SEPARATOR}</Separator>
            <BreadcrumbLink href={RouteManager.productCategory(categorySlug)}>{categoryName}</BreadcrumbLink>
            <Separator>{BreadcrumbData.SEPARATOR}</Separator>
            <CurrentPage>{product?.name || productSlug}</CurrentPage>
          </BreadcrumbContainer>
        </BreadcrumbWrapper>
      );
    }
  }

  // Fallback
  const fallbackName = pathname.split('/').pop()?.replace(/-/g, ' ') || BreadcrumbData.FALLBACK_PAGE;
  return (
    <BreadcrumbWrapper>
      <BreadcrumbContainer>
        <BreadcrumbLink href={RouteManager.HOME}>{BreadcrumbData.HOME}</BreadcrumbLink>
        <Separator>{BreadcrumbData.SEPARATOR}</Separator>
        <CurrentPage>{fallbackName.charAt(0).toUpperCase() + fallbackName.slice(1)}</CurrentPage>
      </BreadcrumbContainer>
    </BreadcrumbWrapper>
  );
};

export default Breadcrumb;