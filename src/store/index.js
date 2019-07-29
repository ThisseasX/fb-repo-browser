import { updateError, stopLoading } from './ui';
import { updateSortBy, updateResultsPerPage } from './table';
import { fetchRepos, onReposFetched, updateActiveRepoId } from './repo';
import { updateSearch, updatePage } from './filter';
import { store } from './store';
export {
  // UI
  updateError,
  stopLoading,

  // Table
  updateSortBy,
  updateResultsPerPage,

  // Repos
  fetchRepos,
  onReposFetched,
  updateActiveRepoId,

  // Filters
  updateSearch,
  updatePage,

  // Store
  store
};
