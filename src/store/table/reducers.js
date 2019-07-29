import { handleActions } from 'redux-actions';
import { updateSortBy, updateResultsPerPage } from './actions';

const initialState = {
  sortBy: '',
  resultsPerPage: '8'
};

export const tableReducer = handleActions(
  {
    [updateSortBy]: (state, { payload }) => ({
      ...state,
      sortBy: payload
    }),
    [updateResultsPerPage]: (state, { payload }) => ({
      ...state,
      resultsPerPage: payload
    })
  },
  initialState
);
