"use client";

import React from "react";

export function getPaginationNumbers(currentPage, totalPages, maxVisiblePages = 5) {
  const pages = [];
  let startPage = Math.max(1, currentPage - 2);
  let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

  if (endPage - startPage < maxVisiblePages - 1) {
    startPage = Math.max(1, endPage - maxVisiblePages + 1);
  }

  for (let page = startPage; page <= endPage; page++) {
    pages.push(page);
  }

  return pages;
}

export default function ResourcePagination({
  currentPage,
  totalPages,
  onPageChange,
  loading = false,
  className = "",
}) {
  if (totalPages <= 1) {
    return null;
  }

  const pages = getPaginationNumbers(currentPage, totalPages);

  const handleChange = (page) => {
    if (page < 1 || page > totalPages || page === currentPage || loading) {
      return;
    }
    onPageChange(page);
  };

  const preventFocusScroll = (event) => {
    event.preventDefault();
  };

  return (
    <div
      className={`flex flex-wrap items-center justify-center gap-2 pt-10 ${className}`}
      data-testid="resource-pagination"
    >
      <button
        type="button"
        onMouseDown={preventFocusScroll}
        onClick={() => handleChange(currentPage - 1)}
        disabled={currentPage === 1 || loading}
        className={`px-4 py-2 rounded-full border text-sm transition ${
          currentPage === 1 || loading
            ? "border-white/10 text-white/30 cursor-not-allowed"
            : "border-white/20 text-white/80 hover:bg-white/10"
        }`}
      >
        Previous
      </button>

      {pages.map((page) => (
        <button
          key={page}
          type="button"
          onMouseDown={preventFocusScroll}
          onClick={() => handleChange(page)}
          disabled={loading}
          className={`h-10 min-w-10 px-3 rounded-full border text-sm transition ${
            currentPage === page
              ? "border-white bg-white text-black"
              : "border-white/20 text-white/80 hover:bg-white/10"
          } ${loading ? "opacity-60 cursor-not-allowed" : ""}`}
        >
          {page}
        </button>
      ))}

      <button
        type="button"
        onMouseDown={preventFocusScroll}
        onClick={() => handleChange(currentPage + 1)}
        disabled={currentPage === totalPages || loading}
        className={`px-4 py-2 rounded-full border text-sm transition ${
          currentPage === totalPages || loading
            ? "border-white/10 text-white/30 cursor-not-allowed"
            : "border-white/20 text-white/80 hover:bg-white/10"
        }`}
      >
        Next
      </button>
    </div>
  );
}
