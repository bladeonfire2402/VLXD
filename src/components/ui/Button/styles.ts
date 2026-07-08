import styled, { css } from 'styled-components';

export interface ButtonWrapperProps {
  $variant?: 'solid' | 'outline' | 'text';
  $size?: 'small' | 'medium' | 'large';
  $fullWidth?: boolean;
}

export const ButtonWrapper = styled.button<ButtonWrapperProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-family: inherit;
  cursor: pointer;
  border-radius: 24px;
  transition: all 0.3s ease;
  font-weight: 500;
  
  /* Size */
  ${({ $size }) => {
    switch ($size) {
      case 'small':
        return css`
          padding: 6px 12px;
          font-size: 0.875rem;
        `;
      case 'large':
        return css`
          padding: 12px 24px;
          font-size: 1.125rem;
        `;
      case 'medium':
      default:
        return css`
          padding: 10px 24px;
          font-size: 1rem;
        `;
    }
  }}

  /* Full Width */
  ${({ $fullWidth }) => $fullWidth && css`width: 100%;`}

  /* Variant */
  ${({ $variant }) => {
    switch ($variant) {
      case 'solid':
        return css`
          background-color: var(--primary-color, #ffbc13);
          color: #fff;
          border: 1px solid var(--primary-color, #ffbc13);
          &:hover {
            background-color: #e5a811;
            border-color: #e5a811;
          }
        `;
      case 'text':
        return css`
          background-color: transparent;
          color: var(--text-color, #333);
          border: none;
          &:hover {
            color: var(--primary-color, #ffbc13);
          }
        `;
      case 'outline':
      default:
        return css`
          background-color: transparent;
          color: var(--text-color, #333);
          border: 1px solid #555;
          &:hover {
            background-color: #555;
            color: #fff;
          }
        `;
    }
  }}
`;
