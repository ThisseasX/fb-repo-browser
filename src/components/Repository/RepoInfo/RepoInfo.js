import React from 'react';
import { wrapper, info, name } from './RepoInfo.module.sass';
import RepoStars from '../RepoStars/RepoStars';

export default () => (
  <div className={wrapper}>
    <div className={info}>
      <p className={name}>#Name of instance</p>
      <RepoStars />
    </div>
  </div>
) 
