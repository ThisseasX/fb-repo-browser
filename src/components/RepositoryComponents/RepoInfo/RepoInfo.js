import React from 'react';
import PropTypes from 'prop-types';
import { wrapper, info, nameText, triangle } from './RepoInfo.module.sass';
import RepoStars from '../RepoStars';

const RepoInfo = ({ repo: { name, stars } }) => {
  return (
    <div className={wrapper}>
      <div className={info}>
        <p className={nameText}>{name}</p>
        <RepoStars stars={stars} />
        <div className={triangle} />
      </div>
    </div>
  );
};

RepoInfo.propTypes = {
  repo: PropTypes.shape({
    name: PropTypes.string.isRequired,
    stars: PropTypes.number.isRequired
  })
};

export default RepoInfo;
