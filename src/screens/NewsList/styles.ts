import styled from 'styled-components';

export const NewsListContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
`;

export const HeroSection = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
  margin-bottom: 48px;

  @media (min-width: 768px) {
    grid-template-columns: 2fr 1fr;
  }
`;

export const MainHeroArticle = styled.article`
  cursor: pointer;
  group: hero;
  transition: all 0.3s ease;

  &:hover h2 {
    color: #2563EB;
  }

  img {
    width: 100%;
    height: 400px;
    object-fit: cover;
    border-radius: 12px;
    margin-bottom: 16px;
  }
`;

export const MetaData = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 0.875rem;
  color: #64748B;
  margin-bottom: 12px;
  font-weight: 500;
`;

export const CategoryTag = styled.span`
  background-color: #F1F5F9;
  color: #3B82F6;
  padding: 4px 8px;
  border-radius: 4px;
  font-weight: 600;
  text-transform: uppercase;
  font-size: 0.75rem;
`;

export const HeroTitle = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  color: #0F172A;
  margin-bottom: 12px;
  line-height: 1.3;
  transition: color 0.3s ease;
`;

export const HeroSummary = styled.p`
  font-size: 1.125rem;
  color: #475569;
  line-height: 1.6;
`;

export const SidebarTrending = styled.aside`
  background-color: #F8FAFC;
  padding: 24px;
  border-radius: 12px;
  border: 1px solid #E2E8F0;
`;

export const SidebarTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 700;
  color: #0F172A;
  margin-bottom: 20px;
  padding-bottom: 12px;
  border-bottom: 2px solid #E2E8F0;
  text-transform: uppercase;
`;

export const TrendingList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const TrendingItem = styled.li`
  cursor: pointer;
  display: flex;
  gap: 16px;

  &:not(:last-child) {
    padding-bottom: 16px;
    border-bottom: 1px solid #E2E8F0;
  }

  h4 {
    font-size: 1rem;
    font-weight: 600;
    color: #0F172A;
    line-height: 1.4;
    transition: color 0.2s ease;
  }

  &:hover h4 {
    color: #2563EB;
  }
`;

export const TrendingRank = styled.span`
  font-size: 1.5rem;
  font-weight: 800;
  color: #CBD5E1;
`;

export const GridSection = styled.section`
  margin-top: 40px;
`;

export const SectionHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
  border-bottom: 2px solid #0F172A;
  padding-bottom: 12px;
`;

export const SectionTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  color: #0F172A;
  text-transform: uppercase;
`;

export const NewsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;
