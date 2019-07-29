import React from 'react';
import { topbar, brand } from './Topbar.module.sass';
import FacebookIcon from 'icons/FacebookIcon';

export default () => (
  <div className={topbar}>
    <FacebookIcon />
    <h1 className={brand}>
      Repository
    </h1>
  </div>
); 
