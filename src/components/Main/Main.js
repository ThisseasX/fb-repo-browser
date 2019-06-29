import React from 'react';
import { main } from './Main.module.sass';
import Search from '../Search/Search';
import ResultsList from '../Results/ResultsList/ResultsList';

export default () => (
  <div className={main}>
    <Search />
    <ResultsList />
  </div>
) 
