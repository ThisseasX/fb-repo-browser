import React from 'react';
import PropTypes from 'prop-types';
import {
  wrapper,
  title,
  select,
  sortBy,
  resultsPerPage
} from './ResultsHeader.module.sass';
import { connectProps } from './props';

const ResultsHeader = ({ updateSortBy, updateResultsPerPage }) => {
  const handleSortByChange = e => {
    updateSortBy(e.target.value);
  };
  const handleResultsPerPageChange = e => {
    updateResultsPerPage(e.target.value);
  };

  return (
    <div className={wrapper}>
      <p className={title}>Repository results</p>
      <select
        onChange={handleSortByChange}
        className={`${select} ${sortBy}`}
        defaultValue="name"
      >
        <optgroup label="Sort by">
          <option value="name">Name</option>
          <option value="stars">Stars count</option>
        </optgroup>
      </select>
      <label className={resultsPerPage} htmlFor="results-per-page">
        results per page
      </label>
      <select
        onChange={handleResultsPerPageChange}
        className={select}
        defaultValue={8}
        id="results-per-page"
      >
        <option value="8">8</option>
        <option value="16">16</option>
      </select>
    </div>
  );
};

ResultsHeader.propTypes = {
  updateSortBy: PropTypes.func.isRequired,
  updateResultsPerPage: PropTypes.func.isRequired
};

export default connectProps(ResultsHeader);
