import React from 'react';
import { wrapper, icon, count } from './RepoStars.module.sass';
import StarIcon from '../../StarIcon/StarIcon';

export default ({ stars }) => (
  <div className={wrapper}>
    <div className={icon}>
      <StarIcon />
    </div>
    <p className={count}>{stars}</p>
  </div>
);
