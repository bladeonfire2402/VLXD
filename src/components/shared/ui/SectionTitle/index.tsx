"use client";

import React from 'react';
import {
  SectionTitleContainer,
  Title,
  Divider,
  Square,
  Subtitle
} from './styles';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  className?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle, className }) => {
  return (
    <SectionTitleContainer className={className}>
      <Title>{title}</Title>
      <Divider>
        <Square />
      </Divider>
      {subtitle && <Subtitle>{subtitle}</Subtitle>}
    </SectionTitleContainer>
  );
};

export default SectionTitle;
