import React from 'react';
import { wrapper, icon, count } from './RepoStars.module.sass';

export default ({ stars }) => (
  <div className={wrapper}>
    <div className={icon}>
      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24">
        <path stroke="white" fill="white"
          d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" />
      </svg>
    </div>
    <p className={count}>{stars}</p>
  </div>
) 
