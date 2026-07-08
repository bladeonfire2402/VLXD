import styled from 'styled-components';
import Link from 'next/link';

export const SidebarWrapper = styled.aside`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const SidebarSection = styled.div`
  background-color: #ffffff;
  border: 1px solid #eeeeee;
`;

export const SidebarTitleWrapper = styled.div`
  padding: 15px 20px 10px;
`;

export const SidebarTitleText = styled.h3`
  font-size: 1.05rem;
  font-weight: 700;
  color: #333333;
  text-transform: uppercase;
  margin-bottom: 8px;
`;

export const SidebarTitleDivider = styled.div`
  display: flex;
  align-items: center;
`;

export const SidebarSquare = styled.div`
  width: 7px;
  height: 7px;
  border: 2px solid #555555;
  margin-right: 8px;
`;

export const SidebarYellowLine = styled.div`
  height: 2px;
  width: 35px;
  background-color: var(--color-nav-active, #ffbc13);
`;

/* Category List */
export const CategoryList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const CategoryItem = styled.li<{ $active?: boolean }>`
  border-top: 1px solid #f0f0f0;

  a {
    display: block;
    padding: 10px 20px;
    color: ${({ $active }) => ($active ? 'var(--color-nav-active, #ffbc13)' : '#555555')};
    font-size: 0.88rem;
    font-weight: ${({ $active }) => ($active ? '600' : '400')};
    text-decoration: none;
    transition: all 0.2s;

    &::before {
      content: '» ';
      margin-right: 4px;
    }

    &:hover {
      color: var(--color-nav-active, #ffbc13);
      padding-left: 25px;
    }
  }
`;

/* Article / News sidebar */
export const TabContainer = styled.div`
  display: flex;
  border-bottom: 1px solid #eeeeee;
`;

export const Tab = styled.button<{ $active?: boolean }>`
  flex: 1;
  padding: 10px 15px;
  border: none;
  background-color: ${({ $active }) => ($active ? '#ffffff' : '#f8f8f8')};
  color: ${({ $active }) => ($active ? 'var(--color-nav-active, #ffbc13)' : '#666666')};
  font-weight: ${({ $active }) => ($active ? '600' : '400')};
  font-size: 0.88rem;
  cursor: pointer;
  transition: all 0.2s;
  border-bottom: ${({ $active }) => ($active ? '2px solid var(--color-nav-active, #ffbc13)' : '2px solid transparent')};

  &:hover {
    color: var(--color-nav-active, #ffbc13);
  }
`;

export const ArticleList = styled.div`
  padding: 10px 15px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const ArticleItem = styled(Link)`
  display: flex;
  gap: 10px;
  text-decoration: none;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.8;
  }
`;

export const ArticleThumbnail = styled.img`
  width: 60px;
  height: 45px;
  object-fit: cover;
  border-radius: 2px;
  flex-shrink: 0;
`;

export const ArticleTitle = styled.span`
  font-size: 0.82rem;
  color: #444444;
  line-height: 1.3;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

/* Featured Products Sidebar */
export const FeaturedProductItem = styled(Link)`
  display: flex;
  gap: 10px;
  padding: 10px 15px;
  text-decoration: none;
  border-top: 1px solid #f0f0f0;
  transition: background-color 0.2s;

  &:hover {
    background-color: #fafafa;
  }
`;

export const FeaturedProductImage = styled.img`
  width: 60px;
  height: 60px;
  object-fit: cover;
  border-radius: 2px;
  flex-shrink: 0;
`;

export const FeaturedProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 4px;
`;

export const FeaturedProductName = styled.span`
  font-size: 0.85rem;
  color: #333333;
  font-weight: 500;
  line-height: 1.3;
`;

export const FeaturedProductPrice = styled.span`
  font-size: 0.8rem;
  color: #999999;
`;
