import React from 'react';
import { searchWrapper, input, iconWrapper } from './Search.module.sass';
import SearchIcon from '../../icons/SearchIcon/SearchIcon';

export default ({ setSearch }) => {

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className={searchWrapper}>
      <input onChange={handleSearch} className={input} autoComplete="off" placeholder="Search" />
      <div className={iconWrapper}>
        <SearchIcon />
      </div>
    </div>
  );
};
