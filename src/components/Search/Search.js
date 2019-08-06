import React from 'react';
import PropTypes from 'prop-types';
import { searchWrapper, input, iconWrapper } from './Search.module.sass';
import SearchIcon from 'icons/SearchIcon';
import { connectProps } from './props';

const Search = ({ search, updateSearch }) => {
  const handleSearch = e => {
    updateSearch(e.target.value);
  };

  return (
    <div className={searchWrapper}>
      <input
        onChange={handleSearch}
        value={search}
        className={input}
        autoComplete="off"
        placeholder="Search"
      />
      <div className={iconWrapper}>
        <SearchIcon />
      </div>
    </div>
  );
};

Search.propTypes = {
  search: PropTypes.string.isRequired,
  updateSearch: PropTypes.func.isRequired
};

export default connectProps(Search);
