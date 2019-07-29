import { createActions } from 'redux-actions';

const UPDATE_SORT_BY = 'UPDATE_SORT_BY';
const UPDATE_RESULTS_PER_PAGE = 'UPDATE_RESULTS_PER_PAGE';

export const { updateSortBy, updateResultsPerPage } = createActions(
  UPDATE_SORT_BY,
  UPDATE_RESULTS_PER_PAGE
);
