import { handleActions } from 'redux-actions';
import { updateRepos, updateActiveRepoId } from './actions';

const initialState = {
  repos: [],
  activeRepoId: 0
};

export const repoReducer = handleActions(
  {
    [updateRepos]: (state, { payload }) => ({
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
