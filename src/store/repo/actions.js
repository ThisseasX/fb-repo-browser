import { createActions } from 'redux-actions';

const FETCH_REPOS = 'FETCH_REPOS';
const ON_REPOS_FETCHED = 'ON_REPOS_FETCHED';
const UPDATE_ACTIVE_REPO_ID = 'UPDATE_ACTIVE_REPO_ID';

export const { fetchRepos, onReposFetched, updateActiveRepoId } = createActions(
  FETCH_REPOS,
  ON_REPOS_FETCHED,
  UPDATE_ACTIVE_REPO_ID
);
