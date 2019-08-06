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
  page: 1,
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
      page: 1
    }),
    [lastPage]: state => ({
      ...state,
      page: state.maxPages - 1
    }),
    [nextPage]: state => ({
      ...state,
      page: clamp(state.page + 1, 1, state.maxPages)
    }),
    [previousPage]: state => ({
      ...state,
      page: clamp(state.page - 1, 1, state.maxPages)
    }),
    [updatePage]: (state, { payload }) => ({
      ...state,
      page: clamp(payload, 1, state.maxPages)
    }),
    [updateMaxPages]: (state, { payload }) => ({
      ...state,
      maxPages: payload,
      page: clamp(state.page, 1, payload)
    })
  },
  initialState
);
