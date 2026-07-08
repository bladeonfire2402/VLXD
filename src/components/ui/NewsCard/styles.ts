import styled from 'styled-components';

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  transition: box-shadow 0.3s ease;
  cursor: pointer;
  height: 100%;
  background-color: white;

  &:hover {
    box-shadow: var(--shadow-md, 0 4px 12px rgba(0, 0, 0, 0.1));
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  padding-top: 66.66%; /* 3:2 Aspect Ratio */
  overflow: hidden;
`;

export const Image = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
  
  ${CardWrapper}:hover & {
    transform: scale(1.05);
  }
`;

export const DateBadge = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  z-index: 1;
`;

export const DayMonth = styled.div`
  background-color: #000000;
  font-weight: 700;
  font-size: 0.8rem;
  padding: 4px 8px;
  text-align: center;
`;

export const Year = styled.div`
  background-color: var(--color-nav-active, #ffbc13);
  color: #000000;
  font-weight: 700;
  font-size: 0.8rem;
  padding: 4px 8px;
  text-align: center;
`;

export const ContentWrapper = styled.div`
  padding: var(--spacing-lg);
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const Title = styled.h3`
  font-size: 1.1rem;
  font-weight: 700;
  // color: var(--color-text-heading, #212529);
  color: black;
  margin-top: 0;
  margin-bottom: var(--spacing-sm);
  text-transform: uppercase;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Description = styled.p`
  font-size: 0.9rem;
  color: var(--color-text-muted, #6c757d);
  line-height: 1.6;
  margin: 0;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;
