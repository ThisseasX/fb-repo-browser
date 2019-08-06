import { connect } from 'react-redux';
import { fetchRepos } from 'store/repo';
import { updateMaxPages } from 'store/table';

export const connectProps = connect(
  ({
    repo: { repos, activeRepoId },
    table: { page, sortBy, resultsPerPage, search },
    ui: { loading, error }
  }) => ({
    repos,
    activeRepoId,
    page,
    sortBy,
    resultsPerPage,
    search,
    loading,
    error
  }),
  dispatch => ({
    fetchRepos: payload => dispatch(fetchRepos(payload)),
    updateMaxPages: payload => dispatch(updateMaxPages(payload))
  })
);
