"use client";

import React, { useState, useEffect, useCallback } from 'react';
import {
  CarouselContainer,
  CarouselTrack,
  CarouselSlide,
  SlideImage,
  PrevButton,
  NextButton,
  DotsContainer,
  Dot
} from './styles';

interface CarouselProps {
  images: string[];
  autoPlay?: boolean;
  interval?: number;
  hideButtonCtr?: boolean;
  height?: number | string;
}

const Carousel: React.FC<CarouselProps> = ({ 
  images, 
  autoPlay = true, 
  interval = 3000,
  hideButtonCtr = false,
  height = 350
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  }, [images.length]);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    if (!autoPlay || images.length <= 1) return;

    const slideInterval = setInterval(nextSlide, interval);
    return () => clearInterval(slideInterval);
  }, [autoPlay, interval, nextSlide, images.length]);

  if (!images || images.length === 0) return null;

  return (
    <CarouselContainer>
      <CarouselTrack $currentIndex={currentIndex} $height={height}>
        {images.map((img, index) => (
          <CarouselSlide key={index}>
            <SlideImage src={img} alt={`Slide ${index + 1}`} />
          </CarouselSlide>
        ))}
      </CarouselTrack>

      {images.length > 1 && (
        <>
          {!hideButtonCtr && (
            <>
              <PrevButton onClick={prevSlide}>&#10094;</PrevButton>
              <NextButton onClick={nextSlide}>&#10095;</NextButton>
            </>
          )}
          
          <DotsContainer>
            {images.map((_, index) => (
              <Dot
                key={index}
                $active={index === currentIndex}
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </DotsContainer>
        </>
      )}
    </CarouselContainer>
  );
};

export default Carousel;
