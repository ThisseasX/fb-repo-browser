import { useState } from 'react';

export default (maxPages) => {
  const [page, selectPage] = useState(1);

  const clamp = (num) => (Math.floor(Math.min(maxPages, Math.max(1, num))));

  const goToPage = (pageNumber) => {
    selectPage(clamp(pageNumber));
  };

  const nextPage = () => {
    selectPage(clamp(page + 1));
  };

  const previousPage = () => {
    selectPage(clamp(page - 1));
  };

  const firstPage = () => {
    selectPage(1);
  };

  const lastPage = () => {
    selectPage(maxPages);
  };

  return {
    page,
    goToPage,
    nextPage,
    previousPage,
    firstPage,
    lastPage
  };
};
