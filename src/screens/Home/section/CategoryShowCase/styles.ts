import styled from 'styled-components';
import Image from 'next/image';

export const SectionWrapper = styled.section`
  padding: 60px 16px;
  background-color: var(--color-primary-light);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0.1;
    background-image: linear-gradient(var(--color-text-heading) 1px, transparent 1px),
      linear-gradient(90deg, var(--color-text-heading) 1px, transparent 1px);
    background-size: 50px 50px;
    pointer-events: none;
    z-index: 0;
  }
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`;

export const Title = styled.h2`
  text-align: center;
  font-size: 28px;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 40px;
  text-transform: uppercase;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
`;

export const CategoryList = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;

  @media (min-width: 768px) {
    gap: 40px;
  }
`;

export const CategoryItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  transition: transform 0.3s ease;
  width: 140px;
  text-align: center;

  &:hover {
    transform: translateY(-5px);
    
    .img-wrapper {
      border-color: #ffffff;
      box-shadow: 0 0 15px rgba(255, 255, 255, 0.6);
    }
    
    h3 {
      text-shadow: 0 0 8px rgba(255, 255, 255, 0.8);
    }
  }
  
  @media (min-width: 768px) {
    width: 180px;
  }
`;

export const ImageWrapper = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  border: 2px dashed rgba(255, 255, 255, 0.7);
  padding: 8px;
  margin-bottom: 16px;
  transition: all 0.3s ease;
  background-color: var(--color-bg-card);
  
  @media (min-width: 768px) {
    width: 160px;
    height: 160px;
  }
`;

export const ImageInner = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  overflow: hidden;
  position: relative;
`;

export const CategoryImage = styled(Image)`
  object-fit: cover;
`;

export const CategoryName = styled.h3`
  font-size: 14px;
  font-weight: 700;
  color: #ffffff;
  text-transform: uppercase;
  margin: 0;
  line-height: 1.4;
  transition: all 0.3s ease;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
  
  @media (min-width: 768px) {
    font-size: 16px;
  }
`;

