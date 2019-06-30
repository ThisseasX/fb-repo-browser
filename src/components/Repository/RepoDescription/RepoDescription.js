import React from 'react';
import {
  wrapper,
  descriptionText,
  header,
  body
} from './RepoDescription.module.sass';

export default ({ description }) => (
  <div className={wrapper}>
    <div className={descriptionText}>
      <p className={header}>Description:</p>
      <p className={body}>{description}</p>
    </div>
  </div>
) 
