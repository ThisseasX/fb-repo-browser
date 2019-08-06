import React from 'react';
import { main } from './Main.module.sass';
import Search from 'components/Search';
import { ResultsList } from 'components/ResultComponents';

const Main = () => (
  <div className={main}>
    <Search />
    <ResultsList />
  </div>
);

export default Main;
