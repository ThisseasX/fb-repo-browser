import React, { useEffect, useState } from 'react';
import { wrapper } from './ResultsBody.module.sass';
import Repo from '../../Repository/Repo/Repo';

export default () => {

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

        json.some(({ id, name, description, stargazers_count }, index) => {
          if (index >= 8) return true;

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
