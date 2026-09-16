import styled from 'styled-components';

export const DetailContainer = styled.main`
  max-width: 800px;
  margin: 0 auto;
  padding: 40px 20px;
  background-color: #FFFFFF;
`;

export const BreadcrumbNav = styled.nav`
  font-size: 0.875rem;
  color: #64748B;
  margin-bottom: 24px;
  
  a {
    color: #3B82F6;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
  
  span {
    margin: 0 8px;
  }
`;

export const CategoryBadge = styled.span`
  display: inline-block;
  background-color: #F1F5F9;
  color: #3B82F6;
  padding: 6px 12px;
  border-radius: 4px;
  font-weight: 600;
  text-transform: uppercase;
  font-size: 0.75rem;
  margin-bottom: 16px;
`;

export const ArticleTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: 800;
  color: #0F172A;
  line-height: 1.2;
  margin-bottom: 24px;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const ArticleMeta = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  padding-bottom: 24px;
  border-bottom: 1px solid #E2E8F0;
  margin-bottom: 32px;
`;

export const AuthorInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const AuthorAvatar = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-color: #E2E8F0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  color: #64748B;
  font-size: 1.25rem;
`;

export const AuthorDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

export const AuthorName = styled.span`
  font-weight: 600;
  color: #0F172A;
`;

export const PublishDate = styled.span`
  font-size: 0.875rem;
  color: #64748B;
`;

export const HeroImage = styled.img`
  width: 100%;
  height: auto;
  max-height: 500px;
  object-fit: cover;
  border-radius: 12px;
  margin-bottom: 40px;
`;

export const ArticleTags = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 48px;
  padding-top: 24px;
  border-top: 1px solid #E2E8F0;
`;

export const TagLabel = styled.span`
  font-weight: 600;
  color: #475569;
  font-size: 0.875rem;
`;

export const Tag = styled.span`
  background-color: #F1F5F9;
  color: #475569;
  padding: 6px 12px;
  border-radius: 9999px;
  font-size: 0.875rem;
  transition: all 0.2s ease;

  &:hover {
    background-color: #E2E8F0;
    color: #0F172A;
    cursor: pointer;
  }
`;

export const RelatedSection = styled.section`
  margin-top: 64px;
  padding-top: 40px;
  border-top: 2px solid #0F172A;
`;

export const RelatedTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  color: #0F172A;
  margin-bottom: 24px;
  text-transform: uppercase;
`;

export const RelatedGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
