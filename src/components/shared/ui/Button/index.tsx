"use client";

import React, { ButtonHTMLAttributes } from 'react';
import { ButtonWrapper } from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'solid' | 'outline' | 'text';
  size?: 'small' | 'medium' | 'large';
  fullWidth?: boolean;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  variant = 'solid',
  size = 'medium',
  fullWidth = false,
  children,
  ...props
}) => {
  return (
    <ButtonWrapper
      $variant={variant}
      $size={size}
      $fullWidth={fullWidth}
      {...props}
    >
      {children}
    </ButtonWrapper>
  );
};

export default Button;
