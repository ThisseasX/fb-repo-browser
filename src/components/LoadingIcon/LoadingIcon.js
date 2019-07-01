import React from 'react';
import { icon } from './LoadingIcon.module.sass'

export default () => (
  <svg className={icon} version="1.1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" width="80"
    height="80">
    <defs>
      <linearGradient id="rStscXQFhfAK" x1="0px" x2="40px" y1="40px" y2="40px" gradientUnits="userSpaceOnUse">
        <stop offset="0" stop-color="yellow" />
        <stop offset="1" stop-color="#f76b1c" />
      </linearGradient>
    </defs>
    <g>
      <path fill="none" stroke="#f0f0f0" paint-order="fill stroke markers"
        d=" M 70 40 A 30 30 0 1 1 69.99998500000125 39.97000000499998" stroke-miterlimit="10"
        stroke-dasharray="" />
      <path fill="none" stroke="url(#rStscXQFhfAK)" paint-order="fill stroke markers"
        d=" M 10 39.99999999999999 A 30 30 0 1 1 40 70" stroke-linecap="round" stroke-miterlimit="10"
        stroke-width="5" stroke-dasharray="" />
    </g>
  </svg>
);
