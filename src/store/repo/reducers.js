import { handleActions } from 'redux-actions';
import { onReposFetched, updateActiveRepoId } from './actions';

const initialState = {
  repos: [],
  activeRepoId: 0
};

export const repoReducer = handleActions(
  {
    [onReposFetched]: (state, { payload }) => ({
      ...state,
      repos: payload
    }),
    [updateActiveRepoId]: (state, { payload }) => ({
      ...state,
      activeRepoId: payload
    })
  },
  initialState
);
