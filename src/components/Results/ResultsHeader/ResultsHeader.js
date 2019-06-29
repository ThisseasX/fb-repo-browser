import React from 'react';
import {
  wrapper,
  title,
  select,
  sortBy,
  resultsPerPage
} from './ResultsHeader.module.sass';

export default () => (
  <div className={wrapper}>
    <p className={title}>Repository results</p>
    <select className={`${select} ${sortBy}`}>
      <option selected disabled>Sort by</option>
      <option value="name">Name</option>
      <option value="stars">Stars count</option>
    </select>
    <label className={resultsPerPage} for="results-per-page">results per page</label>
    <select className={select} id="results-per-page">
      <option value="8">8</option>
      <option value="16">16</option>
    </select>
  </div>
) 
