"use client";

import { HomeWrapper } from './styles';
import Carousel from '@/components/ui/Carousel';
import FeaturedProducts from './section/FeaturedProducts';
import CategoryShowCase from './section/CategoryShowCase';
import FAQAndCommitments from './section/FAQAndCommitments';
import NewsSection from './section/NewsSection';
import TestimonialSection from './section/TestimonialSection';
import PartnerLogos from './section/PartnerLogos';
import { AssetManagers } from '@/constants/assets';

const HomeScreen = () => {
  return (
    <HomeWrapper>
      <Carousel images={AssetManagers.banners} autoPlay={true} interval={4000} hideButtonCtr={true} />
      <FeaturedProducts />
      <CategoryShowCase />
      <FAQAndCommitments />
      <NewsSection />
      <TestimonialSection />
      <PartnerLogos />
    </HomeWrapper>
  );
};

export default HomeScreen;
