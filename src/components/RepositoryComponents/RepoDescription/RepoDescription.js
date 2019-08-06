import React from 'react';
import PropTypes from 'prop-types';
import {
  wrapper,
  descriptionText,
  header,
  body
} from './RepoDescription.module.sass';

const RepoDescription = ({ description }) => (
  <div className={wrapper}>
    <div className={descriptionText}>
      <p className={header}>Description:</p>
      <p className={body}>{description}</p>
    </div>
  </div>
);

RepoDescription.propTypes = {
  description: PropTypes.string
};

export default RepoDescription;
