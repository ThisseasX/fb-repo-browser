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
    <select className={`${select} ${sortBy}`} defaultValue="name">
      <optgroup label="Sort by">
        <option value="name">Name</option>
        <option value="stars">Stars count</option>
      </optgroup>
    </select>
    <label className={resultsPerPage} htmlFor="results-per-page">results per page</label>
    <select className={select} defaultValue={8} id="results-per-page">
      <option value={8}>8</option>
      <option value={16}>16</option>
    </select>
  </div>
) 
