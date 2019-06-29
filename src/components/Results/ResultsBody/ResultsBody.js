import React from 'react';
import { wrapper } from './ResultsBody.module.sass';
import Repo from '../../Repository/Repo/Repo';

export default () => (
  <ul className={wrapper}>
    <Repo />
  </ul>
) 
