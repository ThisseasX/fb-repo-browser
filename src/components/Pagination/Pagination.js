import React from 'react';
import {
  list,
  listItem,
  arrowWrapper,
  arrowIcon,
  ellipsis,
  left,
  right,
  active
} from './Pagination.module.sass';

export default ({ page, maxPages, handlePageChange }) => {

  const handleMouseDown = (e) => {
    e.preventDefault();
    handlePageChange(e.currentTarget.value);
  };

  const leftArrow =
    <li onMouseDown={handleMouseDown} className={`${listItem} ${arrowWrapper}`} key={'first'} value={-2}>
      <div className={`${arrowIcon} ${left}`} />
    </li>

  const pageNumbers =
    new Array(maxPages).fill().map((_, index) =>
      <li onMouseDown={handleMouseDown} className={`${listItem} ${index + 1 === page && active}`} key={index + 1} value={index + 1}>{index + 1}</li>
    );

  const rightArrow =
    <li onMouseDown={handleMouseDown} className={`${listItem} ${arrowWrapper}`} key={'last'} value={-1}>
      <div className={`${arrowIcon} ${right}`} />
    </li>

  return (
    <ul className={list} >
      {[
        leftArrow,
        pageNumbers,
        rightArrow
      ]}
    </ul>
  );
};