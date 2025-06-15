import React from "react";
import "./index.scss";

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  siblingCount?: number;
};

const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
  siblingCount = 1,
}: PaginationProps) => {
  const DOTS = "...";

  const getPageRange = () => {
    const totalPageNumbers = siblingCount * 2 + 5;
    if (totalPageNumbers >= totalPages) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    const leftSibling = Math.max(currentPage - siblingCount, 1);
    const rightSibling = Math.min(currentPage + siblingCount, totalPages);

    const shouldShowLeftDots = leftSibling > 2;
    const shouldShowRightDots = rightSibling < totalPages - 1;

    const firstPage = 1;
    const lastPage = totalPages;

    const pages: (number | string)[] = [];

    if (!shouldShowLeftDots && shouldShowRightDots) {
      const leftItems = Array.from({ length: 3 + siblingCount * 2 }, (_, i) => i + 1);
      pages.push(...leftItems, DOTS, lastPage);
    } else if (shouldShowLeftDots && !shouldShowRightDots) {
      const count = 3 + siblingCount * 2;
      const rightItems = Array.from({ length: count }, (_, i) => totalPages - count + i + 1);
      pages.push(firstPage, DOTS, ...rightItems);
    } else {
      const middle = Array.from({ length: rightSibling - leftSibling + 1 }, (_, i) => leftSibling + i);
      pages.push(firstPage, DOTS, ...middle, DOTS, lastPage);
    }

    return pages;
  };

  const pages = getPageRange();

  const handlePrev = () => {
    if (currentPage > 1) onPageChange(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) onPageChange(currentPage + 1);
  };

  return (
    <div className="pagination">
      <button
        className="pagination-button nav"
        onClick={() => onPageChange(1)}
        disabled={currentPage === 1}
      >
        First
      </button>
      <button
        className="pagination-button nav"
        onClick={handlePrev}
        disabled={currentPage === 1}
      >
        Prev
      </button>

      {pages.map((page, idx) =>
        page === DOTS ? (
          <span key={idx} className="pagination-dots">
            {DOTS}
          </span>
        ) : (
          <button
            key={idx}
            className={`pagination-button${page === currentPage ? " active" : ""}`}
            onClick={() => onPageChange(Number(page))}
          >
            {page}
          </button>
        )
      )}

      <button
        className="pagination-button nav"
        onClick={handleNext}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
       <button
        className="pagination-button nav"
        onClick={() => onPageChange(totalPages)}
        disabled={currentPage === totalPages}
      >
        Last
      </button>
    </div>
  );
};
export default Pagination;