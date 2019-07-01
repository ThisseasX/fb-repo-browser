import React, { useState } from 'react';
import { main } from './Main.module.sass';
import Search from '../Search/Search';
import ResultsList from '../ResultComponents/ResultsList/ResultsList';

export default () => {
  const [search, setSearch] = useState('');

  return (
    <div className={main}>
      <Search setSearch={setSearch} />
      <ResultsList search={search} />
    </div>
  );
};
