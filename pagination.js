import React from "react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pagesToShow = 5; // number of pages to show in the pagination
  const halfPagesToShow = Math.floor(pagesToShow / 2);
  const startPage =
    currentPage - halfPagesToShow < 1 ? 1 : currentPage - halfPagesToShow;
  const endPage =
    startPage + pagesToShow - 1 > totalPages
      ? totalPages
      : startPage + pagesToShow - 1;

  const handlePageClick = (page) => {
    if (page !== currentPage) {
      onPageChange(page);
    }
  };

  const pages = [];
  for (let i = startPage; i <= endPage; i++) {
    pages.push(
      <button
        key={i}
        className={i === currentPage ? "active" : ""}
        onClick={() => handlePageClick(i)}
      >
        {i}
      </button>
    );
  }

  return <div className="pagination">{pages}</div>;
};

export default Pagination;
