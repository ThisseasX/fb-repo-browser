import React from 'react';
import { main } from './Main.module.sass';
import Search from 'components/Search';
import { ResultsList } from 'components/ResultComponents';

const Main = () => (
  <main className={main}>
    <Search />
    <ResultsList />
  </main>
);

export default Main;
