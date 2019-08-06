import React from 'react';
import PropTypes from 'prop-types';
import {
  wrapper,
  list,
  listItem,
  arrowWrapper,
  arrowIcon,
  left,
  right,
  active
} from './Pagination.module.sass';
import { connectProps } from './props';

const Pagination = ({ page, maxPages, nextPage, previousPage, updatePage }) => {
  const handleNextPage = () => {
    nextPage();
  };
  const handlePreviousPage = () => {
    previousPage();
  };

  const handlePageChange = e => {
    updatePage(e.target.value);
  };

  const leftArrow = (
    <li
      onMouseDown={handlePreviousPage}
      className={`${listItem} ${arrowWrapper}`}
      key={'previous'}
    >
      <div className={`${arrowIcon} ${left}`} />
    </li>
  );

  const pageNumbers = new Array(maxPages).fill().map((_, index) => (
    <li
      onMouseDown={handlePageChange}
      className={`${listItem} ${index + 1 === page && active}`}
      key={index + 1}
      value={index + 1}
    >
      {index + 1}
    </li>
  ));

  const rightArrow = (
    <li
      onMouseDown={handleNextPage}
      className={`${listItem} ${arrowWrapper}`}
      key={'next'}
    >
      <div className={`${arrowIcon} ${right}`} />
    </li>
  );

  const pagination = [leftArrow, pageNumbers, rightArrow];

  return (
    <div className={wrapper}>
      <ul className={list}>{pagination}</ul>
    </div>
  );
};

Pagination.propTypes = {
  page: PropTypes.number.isRequired,
  maxPages: PropTypes.number.isRequired,
  nextPage: PropTypes.func.isRequired,
  previousPage: PropTypes.func.isRequired,
  updatePage: PropTypes.func.isRequired
};

export default connectProps(Pagination);
