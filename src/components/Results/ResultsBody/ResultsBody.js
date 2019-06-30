import React, { useEffect, useState } from 'react';
import { wrapper } from './ResultsBody.module.sass';
import Repo from '../../Repository/Repo/Repo';

export default () => {

  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch('https://api.github.com/users/facebook/repos?per_page=100')
      .then(res => res.json())
      .then(json => {
        const responseRepos = [];

        json.some(({ id, name, description, stargazers_count }, index) => {

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

  return (
    repos.length < 1
      ?
      <h1>Loading...</h1>
      :
      <ul className={wrapper}>
        {repos.map(repo => (
          <Repo key={repo.id} repo={repo} />
        ))}
      </ul>
  )
};
