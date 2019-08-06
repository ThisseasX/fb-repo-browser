import React from 'react';
import PropTypes from 'prop-types';
import { wrapper, icon, count } from './RepoStars.module.sass';
import StarIcon from 'icons/StarIcon';

const RepoStars = ({ stars }) => (
  <div className={wrapper}>
    <div className={icon}>
      <StarIcon />
    </div>
    <p className={count}>{stars}</p>
  </div>
);

RepoStars.propTypes = {
  stars: PropTypes.number.isRequired
};

export default RepoStars;
