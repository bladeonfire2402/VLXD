import styled from 'styled-components';
import Image from 'next/image';

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 16px;
  background: var(--color-bg-card, #fff);
  border: 1px solid var(--color-border, #CDD3D2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);

    h3 {
      color: var(--color-primary, #B86B32);
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

export const ProductImage = styled(Image)`
  object-fit: contain;
`;

export const ProductName = styled.h3`
  font-size: 1rem;
  font-weight: 600;
  color: var(--color-text-main, #202426);
  margin-bottom: 12px;
  line-height: 1.4;
`;

export const ActionText = styled.span`
  font-size: 0.875rem;
  color: var(--color-primary, #B86B32);
  cursor: pointer;
  font-weight: 500;
  transition: color 0.2s ease;
`;
