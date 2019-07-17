import React, { useEffect, useState } from 'react';
import { wrapper, noResults, paginationWrapper } from './ResultsBody.module.sass';
import Repo from '../../RepositoryComponents/Repo/Repo';
import Error from '../../../helpers/Error/Error';
import Loading from '../../../helpers/Loading/Loading';
import Pagination from '../../Pagination/Pagination';
import usePagination from '../../Pagination/usePagination';

export default ({ search, selectedValues }) => {

  const searchPatten = new RegExp(search.replace(' ', '.+'), 'ig');
  const { sortBy, resultsPerPage } = selectedValues;
  const [repos, setRepos] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchRepos();
  }, []);

  const fetchRepos = () => {
    fetch('https://api.github.com/users/facebook/repos?per_page=100', {
      headers: {
        'Authorization': 'token bd0e43bee286d8c2fa8df45443e97c2e2f288857'
      }
    })
      .then(res => res.json())
      .then(json => {
        setLoading(false);

        if (!Array.isArray(json)) {
          setError(json.message);
          return;
        }

        const responseRepos = json.map(
          ({ id, name, description, stargazers_count }) => ({
            id,
            name,
            description,
            stars: stargazers_count
          })
        );

        setRepos(responseRepos);
        firstPage();
      });
  };

  const sorter = (repoA, repoB, key, transform) => {
    transform = typeof transform === 'function'
      ? transform
      : value => value

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

  const processedRepos =
    repos
      .filter(repo => repo.name.match(searchPatten))
      .sort((repoA, repoB) => handleSort(repoA, repoB, sortBy));

  const remainingPagedItems = processedRepos.length % resultsPerPage;
  const maxPages = ~~(processedRepos.length / resultsPerPage) + !!remainingPagedItems;

  const {
    page,
    goToPage,
    nextPage,
    previousPage,
    firstPage,
    lastPage
  } = usePagination(maxPages);

  useEffect(() => {
    if (page > maxPages) lastPage();
    else if (page < 1) firstPage();
  }, [resultsPerPage, maxPages]);

  const pagedRepos =
    processedRepos
      .slice((page - 1) * resultsPerPage, page * resultsPerPage);

  const handlePageChange = (pageNumber) => {
    switch (pageNumber) {
      case -2:
        previousPage();
        break;
      case -1:
        nextPage();
        break;
      default:
        goToPage(pageNumber);
    }
  };

  return (
    <Error error={error}>
      <Loading loading={loading}>
        <ul className={wrapper}>
          {pagedRepos.length < 1
            ?
            <p className={noResults}>No results</p>
            :
            pagedRepos.map(repo => (
              <Repo key={repo.id} repo={repo} />
            ))
          }
        </ul>
        <div className={paginationWrapper}>
          <Pagination page={page || 1} maxPages={maxPages} handlePageChange={handlePageChange} />
        </div>
      </Loading>
    </Error>
  );
};
