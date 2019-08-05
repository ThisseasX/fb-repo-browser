import { updateError, stopLoading } from './ui';
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
} from './table';
import { fetchRepos, onReposFetched, updateActiveRepoId } from './repo';
import { store } from './store';
export {
  // UI
  updateError,
  stopLoading,
  // Table
  updateSortBy,
  updateResultsPerPage,
  updateSearch,
  firstPage,
  lastPage,
  nextPage,
  previousPage,
  updatePage,
  updateMaxPages,
  // Repos
  fetchRepos,
  onReposFetched,
  updateActiveRepoId,
  // Store
  store
};
