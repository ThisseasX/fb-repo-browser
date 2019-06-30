import React from 'react';
import { wrapper, info, nameText } from './RepoInfo.module.sass';
import RepoStars from '../RepoStars/RepoStars';

export default ({ repo }) => {
  const { name, stars } = repo;

  return (
    <div className={wrapper}>
      <div className={info}>
        <p className={nameText}>{name}</p>
        <RepoStars stars={stars} />
      </div>
    </div>
  );
};
