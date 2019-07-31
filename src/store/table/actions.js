import { createActions } from 'redux-actions';

const UPDATE_SORT_BY = 'UPDATE_SORT_BY';
const UPDATE_RESULTS_PER_PAGE = 'UPDATE_RESULTS_PER_PAGE';
const UPDATE_SEARCH = 'UPDATE_SEARCH';
const FIRST_PAGE = 'FIRST_PAGE';
const LAST_PAGE = 'LAST_PAGE';
const NEXT_PAGE = 'NEXT_PAGE';
const PREVIOUS_PAGE = 'PREVIOUS_PAGE';
const UPDATE_PAGE = 'UPDATE_PAGE';
const UPDATE_MAX_PAGES = 'UPDATE_MAX_PAGES';

export const {
  updateSortBy,
  updateResultsPerPage,
  updateSearch,
  firstPage,
  lastPage,
  nextPage,
  previousPage,
  updatePage,
  updateMaxPages
} = createActions(
  UPDATE_SORT_BY,
  UPDATE_RESULTS_PER_PAGE,
  UPDATE_SEARCH,
  FIRST_PAGE,
  LAST_PAGE,
  NEXT_PAGE,
  PREVIOUS_PAGE,
  UPDATE_PAGE,
  UPDATE_MAX_PAGES
);
