import React from 'react';
import {
  CardWrapper,
  ImageContainer,
  Image,
  DateBadge,
  DayMonth,
  Year,
  ContentWrapper,
  Title,
  Description
} from './styles';

export interface NewsCardProps {
  image: string;
  date: string;
  year: string;
  title: string;
  description?: string;
  onClick?: () => void;
}

const NewsCard: React.FC<NewsCardProps> = ({
  image,
  date,
  year,
  title,
  description,
  onClick
}) => {
  return (
    <CardWrapper onClick={onClick}>
      <ImageContainer>
        <Image src={image} alt={title} loading="lazy" />
        <DateBadge>
          <DayMonth>{date}</DayMonth>
          <Year>{year}</Year>
        </DateBadge>
      </ImageContainer>
      <ContentWrapper>
        <Title>{title}</Title>
        {description && <Description>{description}</Description>}
      </ContentWrapper>
    </CardWrapper>
  );
};

export default NewsCard;
