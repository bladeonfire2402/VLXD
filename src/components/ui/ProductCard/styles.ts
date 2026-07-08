import styled from 'styled-components';

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 16px;
  background: #fff;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border-radius: 8px;
  
  &:hover {
    h3 {
      color: var(--primary-color, #ffbc13);
    }
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 200px;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ProductImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
`;

export const ProductName = styled.h3`
  font-size: 1rem;
  font-weight: 600;
  color: var(--text-color, #333);
  margin-bottom: 12px;
  line-height: 1.4;
`;

export const ActionText = styled.span`
  font-size: 0.875rem;
  color: #666;
  cursor: pointer;
  transition: color 0.2s ease;
`;
