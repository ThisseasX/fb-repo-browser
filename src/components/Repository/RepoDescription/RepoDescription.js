import React from 'react';
import {
  wrapper,
  description,
  header,
  body,
  active
} from './RepoDescription.module.sass';

export default ({ isActive }) => (
  <div className={`${wrapper} ${isActive && active}`}>
    <div className={description}>
      <p className={header}>Description:</p>
      <p className={body}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
          fuga ipsam natus error
          repellendus magni tempore voluptates libero optio ut! Ipsa, commodi? Dicta, vitae
          quibusdam. Quibusdam, odit! Eaque, molestias dolorum?</p>
    </div>
  </div>
) 
