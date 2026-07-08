"use client";

import React from 'react';
import { HomeWrapper } from './styles';
import Carousel from '@/components/ui/Carousel';
import FeaturedProducts from './components/FeaturedProducts';
import FAQAndCommitments from './components/FAQAndCommitments';
import NewsSection from './components/NewsSection';
import TestimonialSection from './components/TestimonialSection';
import PartnerLogos from './components/PartnerLogos';
import { AssetManager } from '@/lib/AssetManager';

const HomeScreen = () => {
  return (
    <HomeWrapper>
      <Carousel images={AssetManager.banners} autoPlay={true} interval={4000} hideButtonCtr={true} />
      <FeaturedProducts />
      <FAQAndCommitments />
      <NewsSection />
      <TestimonialSection />
      <PartnerLogos />
    </HomeWrapper>
  );
};

export default HomeScreen;
