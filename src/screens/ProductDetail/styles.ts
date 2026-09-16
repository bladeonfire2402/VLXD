import styled from 'styled-components';
import Link from 'next/link';

/* ===== HERO SECTION ===== */
export const HeroGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 25px;
  margin-bottom: 30px;

  @media (min-width: 600px) {
    grid-template-columns: 1fr 1fr;
    gap: 30px;
  }
`;

export const GalleryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const GalleryMain = styled.div`
  width: 100%;
  aspect-ratio: 4 / 3;
  overflow: hidden;
  border-radius: 4px;
  background-color: #f5f5f5;
`;

export const GalleryMainImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const GalleryThumbnails = styled.div`
  display: flex;
  gap: 8px;
`;

export const Thumbnail = styled.img<{ $active?: boolean }>`
  width: 60px;
  height: 45px;
  object-fit: cover;
  border-radius: 2px;
  cursor: pointer;
  border: 2px solid ${({ $active }) => ($active ? 'var(--color-nav-active, #ffbc13)' : 'transparent')};
  opacity: ${({ $active }) => ($active ? 1 : 0.6)};
  transition: all 0.2s;

  &:hover {
    opacity: 1;
  }
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const ProductName = styled.h1`
  font-size: 1.5rem;
  font-weight: 700;
  color: #333333;
  margin: 0;
`;

export const ProductPrice = styled.p`
  font-size: 1.1rem;
  font-weight: 600;
  color: #555555;
  margin: 0;
`;

export const ProductDescription = styled.p`
  font-size: 0.9rem;
  color: #666666;
  line-height: 1.6;
  margin: 0;
`;

export const ContactButton = styled.button`
  align-self: flex-start;
  background-color: var(--color-nav-active, #ffbc13);
  color: #ffffff;
  border: none;
  padding: 12px 25px;
  font-weight: 600;
  font-size: 0.9rem;
  cursor: pointer;
  border-radius: 3px;
  transition: background-color 0.3s;
  margin-top: 10px;

  &:hover {
    background-color: #e5a80f;
  }
`;

/* ===== TABS ===== */
export const TabsWrapper = styled.div`
  margin-bottom: 40px;
`;

export const TabsHeader = styled.div`
  display: flex;
  border-bottom: 2px solid #eeeeee;
  margin-bottom: 25px;
`;

export const TabButton = styled.button<{ $active?: boolean }>`
  padding: 12px 20px;
  border: none;
  background: none;
  font-size: 0.95rem;
  font-weight: ${({ $active }) => ($active ? '700' : '400')};
  color: ${({ $active }) => ($active ? '#333333' : '#888888')};
  cursor: pointer;
  border-bottom: 2px solid ${({ $active }) => ($active ? '#333333' : 'transparent')};
  margin-bottom: -2px;
  transition: all 0.2s;

  &:hover {
    color: #333333;
  }
`;

export const TabContent = styled.div`
  line-height: 1.7;
  color: #555555;
  font-size: 0.9rem;
`;

/* ===== COMPANY CARD ===== */
export const CompanyCard = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 20px;
  border: 1px solid #eeeeee;
  border-radius: 4px;
  margin-top: 25px;
  margin-bottom: 25px;
  background-color: #fafafa;
`;

export const CompanyLogo = styled.img`
  width: 100px;
  height: auto;
  flex-shrink: 0;
`;

export const CompanyInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  font-size: 0.85rem;
  color: #555555;

  strong {
    color: #333333;
    font-size: 0.95rem;
    text-transform: uppercase;
  }

  a {
    color: var(--color-nav-active, #ffbc13);
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

/* ===== TAGS ===== */
export const TagsSection = styled.div`
  margin-top: 20px;
`;

export const TagsTitle = styled.h3`
  font-size: 1rem;
  font-weight: 700;
  color: #333333;
  margin-bottom: 12px;
`;

export const TagList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

export const Tag = styled(Link)`
  padding: 6px 14px;
  border: 1px solid #dddddd;
  border-radius: 20px;
  font-size: 0.8rem;
  color: #555555;
  text-decoration: none;
  transition: all 0.2s;

  &:hover {
    border-color: var(--color-nav-active, #ffbc13);
    color: var(--color-nav-active, #ffbc13);
  }
`;

/* ===== ORDER TAB ===== */
export const OrderGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 30px;

  @media (min-width: 600px) {
    grid-template-columns: 1fr 1fr;
    gap: 40px;
  }
`;

export const QuickContactSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const QuickContactTitle = styled.h3`
  font-size: 1rem;
  font-weight: 700;
  color: #333333;
  text-transform: uppercase;
  margin-bottom: 15px;
`;

export const QuickContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 0;
  font-size: 0.9rem;
  color: #444444;

  svg {
    color: #555555;
    flex-shrink: 0;
  }
`;

export const OrderFormSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const OrderFormTitle = styled.h3`
  font-size: 1rem;
  font-weight: 700;
  color: #333333;
  text-transform: uppercase;
  margin-bottom: 10px;
`;

export const OrderInputGroup = styled.div`
  position: relative;
  display: flex;
  align-items: flex-start;
  width: 100%;
`;

export const OrderInputIcon = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #888888;
  pointer-events: none;
`;

export const OrderInputIconTop = styled(OrderInputIcon)`
  align-items: flex-start;
  padding-top: 12px;
`;

export const OrderInput = styled.input`
  width: 100%;
  padding: 12px 12px 12px 40px;
  border: 1px solid #e0e0e0;
  border-radius: 2px;
  font-size: 0.85rem;
  outline: none;
  transition: border-color 0.3s;

  &:focus {
    border-color: var(--color-nav-active, #ffbc13);
  }

  &::placeholder {
    color: #999999;
  }
`;

export const OrderTextarea = styled.textarea`
  width: 100%;
  padding: 12px 12px 12px 40px;
  border: 1px solid #e0e0e0;
  border-radius: 2px;
  font-size: 0.85rem;
  outline: none;
  resize: vertical;
  min-height: 100px;
  transition: border-color 0.3s;

  &:focus {
    border-color: var(--color-nav-active, #ffbc13);
  }

  &::placeholder {
    color: #999999;
  }
`;

export const OrderFormRow = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 12px;

  @media (min-width: 480px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const OrderSubmitButton = styled.button`
  width: 100%;
  background-color: var(--color-nav-active, #ffbc13);
  color: #ffffff;
  border: none;
  padding: 12px;
  font-weight: 600;
  font-size: 0.9rem;
  cursor: pointer;
  border-radius: 2px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #e5a80f;
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

/* ===== RELATED PRODUCTS ===== */
export const RelatedSection = styled.div`
  margin-top: 10px;
`;

export const RelatedGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 15px;
  margin-top: 20px;

  @media (min-width: 600px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;
