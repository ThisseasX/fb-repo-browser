import React from 'react';
import {
  wrapper,
  title,
  select,
  sortBy,
  resultsPerPage
} from './ResultsHeader.module.sass';

export default ({ selectedValues, setSelectedValues }) => {

  const handleChange = (e) => {
    const { name, value } = e.target;

    setSelectedValues({
      ...selectedValues,
      [name]: value
    });
  }

  return (
    <div className={wrapper}>
      <p className={title}>Repository results</p>
      <select onChange={handleChange} className={`${select} ${sortBy}`} name="sortBy" defaultValue="name">
        <optgroup label="Sort by">
          <option value="name">Name</option>
          <option value="stars">Stars count</option>
        </optgroup>
      </select>
      <label className={resultsPerPage} htmlFor="results-per-page">results per page</label>
      <select onChange={handleChange} className={select} defaultValue={8} name="resultsPerPage" id="results-per-page">
        <option value="8">8</option>
        <option value="16">16</option>
      </select>
    </div>
  )
}
