import React, { useEffect } from 'react';
import {
  wrapper,
  noResults,
  paginationWrapper
} from './ResultsBody.module.sass';
import { Repo } from 'components/RepositoryComponents';
import Error from 'helpers/Error';
import Loading from 'helpers/Loading';
import Pagination from 'components/Pagination';
import { connect } from 'react-redux';
import { fetchRepos } from 'store/repo';
import { updateMaxPages } from 'store/table';

const ResultsBody = ({
  repos = [],
  fetchRepos,
  sortBy,
  resultsPerPage,
  search = '',
  page,
  updateMaxPages,
  loading,
  error
}) => {
  useEffect(() => {
    fetchRepos();
  }, []);

  const searchPatten = new RegExp(search.replace(' ', '.+'), 'ig');

  const sorter = (repoA, repoB, key, transform) => {
    transform = typeof transform === 'function' ? transform : value => value;

    const valueA = transform(repoA[key]);
    const valueB = transform(repoB[key]);

    switch (true) {
      case valueA < valueB:
        return -1;
      case valueA > valueB:
        return 1;
      default:
        return 0;
    }
  };

  const handleSort = (repoA, repoB, key) =>
    key === 'name'
      ? sorter(repoA, repoB, key)
      : sorter(repoA, repoB, key, Number);

  const processedRepos = repos
    .filter(repo => repo.name.match(searchPatten))
    .sort((repoA, repoB) => handleSort(repoA, repoB, sortBy));

  const remainingPagedItems = processedRepos.length % resultsPerPage;
  const maxPages =
    ~~(processedRepos.length / resultsPerPage) + !!remainingPagedItems;

  updateMaxPages(maxPages);

  const pagedRepos = processedRepos.slice(
    (page - 1) * resultsPerPage,
    page * resultsPerPage
  );

  return (
    <Error error={error}>
      <Loading loading={loading}>
        <ul className={wrapper}>
          {pagedRepos.length < 1 ? (
            <p className={noResults}>No results</p>
          ) : (
            pagedRepos.map(repo => <Repo key={repo.id} repo={repo} />)
          )}
        </ul>
        <div className={paginationWrapper}>
          <Pagination />
        </div>
      </Loading>
    </Error>
  );
};

export default connect(
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
)(ResultsBody);
