import React, { useEffect, useState } from 'react';
import { wrapper } from './ResultsBody.module.sass';
import Repo from '../../Repository/Repo/Repo';
import Error from '../../Error/Error';
import Loading from '../../Loading/Loading';

export default ({ search, selectedValues }) => {

  const { sortBy, resultsPerPage } = selectedValues;
  const [repos, setRepos] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
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
      });
  }, []);

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
        return 0
    }
  };

  const handleSort = (repoA, repoB, key) =>
    key === 'name'
      ? sorter(repoA, repoB, key)
      : sorter(repoA, repoB, key, Number);

  const processedRepos =
    repos
      .filter(repo => repo.name.includes(search))
      .sort((repoA, repoB) => handleSort(repoA, repoB, sortBy))
      .slice(0, resultsPerPage);

  return (
    <Error error={error}>
      <Loading loading={loading}>
        <ul className={wrapper}>
          {processedRepos.length < 1
            ?
            <p>No results</p>
            :
            processedRepos.map(repo => (
              <Repo key={repo.id} repo={repo} />
            ))
          }
        </ul>
      </Loading>
    </Error>
  )
};
