import React from 'react';
import { PaginationWrapper, PageButton, Ellipsis } from './styles';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  const handlePrev = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const renderPageNumbers = () => {
    const pages = [];
    // Show max 5 pages at a time, or ellipsis
    // Simplified logic for this example
    for (let i = 1; i <= totalPages; i++) {
      if (
        i === 1 || 
        i === totalPages || 
        (i >= currentPage - 1 && i <= currentPage + 1)
      ) {
        pages.push(
          <PageButton
            key={i}
            $active={i === currentPage}
            onClick={() => onPageChange(i)}
          >
            {i}
          </PageButton>
        );
      } else if (i === currentPage - 2 || i === currentPage + 2) {
        pages.push(<Ellipsis key={`ellipsis-${i}`}>...</Ellipsis>);
      }
    }
    
    // Remove duplicate ellipsis if any
    return pages.filter((item, index, arr) => {
      if (item.type === Ellipsis && arr[index - 1]?.type === Ellipsis) {
        return false;
      }
      return true;
    });
  };

  if (totalPages <= 1) return null;

  return (
    <PaginationWrapper>
      <PageButton onClick={handlePrev} disabled={currentPage === 1}>
        Trang trước
      </PageButton>
      
      {renderPageNumbers()}
      
      <PageButton onClick={handleNext} disabled={currentPage === totalPages}>
        Trang sau
      </PageButton>
    </PaginationWrapper>
  );
};

export default Pagination;
