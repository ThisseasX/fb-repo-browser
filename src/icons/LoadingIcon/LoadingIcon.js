import React from 'react';
import { icon } from './LoadingIcon.module.sass'

export default () => (
  <svg className={icon} version="1.1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" width="80"
    height="80">
    <defs>
      <linearGradient id="rStscXQFhfAK" x1="0px" x2="40px" y1="40px" y2="40px" gradientUnits="userSpaceOnUse">
        <stop offset="0" stopColor="yellow" />
        <stop offset="1" stopColor="#f76b1c" />
      </linearGradient>
    </defs>
    <g>
      <path fill="none" stroke="#f0f0f0" paintOrder="fill stroke markers"
        d=" M 70 40 A 30 30 0 1 1 69.99998500000125 39.97000000499998" strokeMiterlimit="10"
        strokeDasharray="" />
      <path fill="none" stroke="url(#rStscXQFhfAK)" paintOrder="fill stroke markers"
        d=" M 10 39.99999999999999 A 30 30 0 1 1 40 70" strokeLinecap="round" strokeMiterlimit="10"
        strokeWidth="5" strokeDasharray="" />
    </g>
  </svg>
);
