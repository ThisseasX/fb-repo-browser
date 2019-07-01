import React, { useEffect, useState } from 'react';
import { wrapper } from './ResultsBody.module.sass';
import Repo from '../../Repository/Repo/Repo';

export default ({ search, selectedValues }) => {

  const { sortBy, resultsPerPage } = selectedValues;
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch('https://api.github.com/users/facebook/repos?per_page=100', {
      headers: {
        'Authorization': 'token bd0e43bee286d8c2fa8df45443e97c2e2f288857'
      }
    })
      .then(res => res.json())
      .then(json => {
        const responseRepos = [];

        if (!Array.isArray(json)) {
          console.log(json.message);
          return;
        }

        json.some(({ id, name, description, stargazers_count }) => {

          responseRepos.push({
            id,
            name,
            description,
            stars: stargazers_count
          });
        });

        setRepos(responseRepos);
      });
  }, []);

  const sorter = (repoA, repoB, key, transform) => {
    transform = transform || function (x) { return x };

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
    repos.length < 1
      ?
      <h1>Loading...</h1>
      :
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
  )
};