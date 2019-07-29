import { createActions } from 'redux-actions';

const UPDATE_SEARCH = 'UPDATE_SEARCH';
const UPDATE_PAGE = 'UPDATE_PAGE';

export const { updateSearch, updatePage } = createActions(
  UPDATE_SEARCH,
  UPDATE_PAGE
);
