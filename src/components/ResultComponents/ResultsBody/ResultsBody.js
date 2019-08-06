import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  wrapper,
  noResults,
  paginationWrapper
} from './ResultsBody.module.sass';
import { Repo } from 'components/RepositoryComponents';
import Error from 'helpers/Error';
import Loading from 'helpers/Loading';
import Pagination from 'components/Pagination';
import { connectProps } from './props';

const ResultsBody = ({
  repos,
  fetchRepos,
  sortBy,
  resultsPerPage,
  search,
  page,
  updateMaxPages,
  loading,
  error
}) => {
  useEffect(() => {
    fetchRepos();
  }, [fetchRepos]);

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

ResultsBody.propTypes = {
  repos: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        description: PropTypes.string,
        stars: PropTypes.number.isRequired
      })
    ),
    PropTypes.shape({
      message: PropTypes.string.isRequired
    })
  ]).isRequired,
  fetchRepos: PropTypes.func.isRequired,
  sortBy: PropTypes.string.isRequired,
  resultsPerPage: PropTypes.string.isRequired,
  search: PropTypes.string.isRequired,
  page: PropTypes.number.isRequired,
  updateMaxPages: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired
};

export default connectProps(ResultsBody);
