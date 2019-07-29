import React from 'react';
import { wrapper, info, nameText, triangle } from './RepoInfo.module.sass';
import RepoStars from '../RepoStars';

export default ({ repo }) => {
  const { name, stars } = repo;

  return (
    <div className={wrapper}>
      <div className={info}>
        <p className={nameText}>{name}</p>
        <RepoStars stars={stars} />
        <div className={triangle} />
      </div>
    </div>
  );
};
