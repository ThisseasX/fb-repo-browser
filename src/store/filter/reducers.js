import { handleActions } from 'redux-actions';
import { updateSearch, updatePage } from './actions';

const initialState = {
  search: '',
  page: 1
};

export const filterReducer = handleActions(
  {
    [updateSearch]: (state, { payload }) => ({
      ...state,
      search: payload
    }),
    [updatePage]: (state, { payload }) => ({
      ...state,
      page: payload
    })
  },
  initialState
);
