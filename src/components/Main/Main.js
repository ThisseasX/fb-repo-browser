import React, { useState } from 'react';
import { main } from './Main.module.sass';
import Search from 'components/Search';
import { ResultsList } from 'components/ResultComponents';

export default () => {
  const [search, setSearch] = useState('');

  return (
    <div className={main}>
      <Search setSearch={setSearch} />
      <ResultsList search={search} />
    </div>
  );
};
