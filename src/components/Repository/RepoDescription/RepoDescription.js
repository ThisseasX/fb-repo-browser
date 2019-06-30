import React from 'react';
import {
  wrapper,
  descriptionText,
  header,
  body,
  active
} from './RepoDescription.module.sass';

export default ({ description, isActive }) => (
  <div className={`${wrapper} ${isActive && active}`}>
    <div className={descriptionText}>
      <p className={header}>Description:</p>
      <p className={body}>{description}</p>
    </div>
  </div>
) 
