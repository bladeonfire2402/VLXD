import React, { useState } from 'react';
import { Plus, X } from 'lucide-react';
import {
  AccordionWrapper,
  AccordionHeader,
  AccordionTitle,
  AccordionIconWrapper,
  AccordionContentWrapper,
  AccordionContentInner,
  AccordionText
} from './styles';

export interface AccordionItemProps {
  title: string;
  content: string;
  initialIsOpen?: boolean;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ title, content, initialIsOpen = false }) => {
  const [isOpen, setIsOpen] = useState(initialIsOpen);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <AccordionWrapper>
      <AccordionHeader $isOpen={isOpen} onClick={toggleAccordion}>
        <AccordionTitle>{title}</AccordionTitle>
        <AccordionIconWrapper>
          {isOpen ? <X size={20} strokeWidth={3} /> : <Plus size={20} strokeWidth={3} />}
        </AccordionIconWrapper>
      </AccordionHeader>
      <AccordionContentWrapper $isOpen={isOpen}>
        <AccordionContentInner>
          <AccordionText>{content}</AccordionText>
        </AccordionContentInner>
      </AccordionContentWrapper>
    </AccordionWrapper>
  );
};

export default AccordionItem;
