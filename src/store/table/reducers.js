import { handleActions } from 'redux-actions';
import {
  updateSortBy,
  updateResultsPerPage,
  updateSearch,
  firstPage,
  lastPage,
  nextPage,
  previousPage,
  updatePage,
  updateMaxPages
} from './actions';

const initialState = {
  sortBy: 'name',
  resultsPerPage: '8',
  search: '',
  page: 0,
  maxPages: 0
};

const clamp = (num, min, max) => ~~Math.min(max, Math.max(min, num));

export const tableReducer = handleActions(
  {
    [updateSortBy]: (state, { payload }) => ({
      ...state,
      sortBy: payload
    }),
    [updateResultsPerPage]: (state, { payload }) => ({
      ...state,
      resultsPerPage: payload
    }),
    [updateSearch]: (state, { payload }) => ({
      ...state,
      search: payload
    }),
    [firstPage]: state => ({
      ...state,
      page: 0
    }),
    [lastPage]: state => ({
      ...state,
      page: state.maxPages - 1
    }),
    [nextPage]: state => ({
      ...state,
      page: clamp(state.page + 1, 0, state.maxPages - 1)
    }),
    [previousPage]: state => ({
      ...state,
      page: clamp(state.page - 1, 0, state.maxPages - 1)
    }),
    [updatePage]: (state, { payload }) => ({
      ...state,
      page: clamp(payload, 0, state.maxPages - 1)
    }),
    [updateMaxPages]: (state, { payload }) => ({
      ...state,
      maxPages: payload
    })
  },
  initialState
);
