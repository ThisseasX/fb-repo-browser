import React from 'react';
import { item, active } from './Repo.module.sass';
import RepoInfo from '../RepoInfo/RepoInfo';
import RepoDescription from '../RepoDescription/RepoDescription';

export default () => (
  <li className={item}>
    <RepoInfo />
    <RepoDescription />
  </li>
) 
