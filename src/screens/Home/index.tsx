"use client";

import { HomeWrapper } from './styles';
import Carousel from '@/components/ui/Carousel';
import FeaturedProducts from './section/FeaturedProducts';
import FAQAndCommitments from './section/FAQAndCommitments';
import NewsSection from './section/NewsSection';
import TestimonialSection from './section/TestimonialSection';
import PartnerLogos from './section/PartnerLogos';
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
