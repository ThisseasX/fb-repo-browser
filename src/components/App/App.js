import React, { Fragment } from 'react';
import '../../../node_modules/normalize.css/normalize.css';
import './App.sass';
import Topbar from '../Topbar/Topbar';
import Main from '../Main/Main';

export default () => (
  <Fragment>
    <Topbar />
    <Main />
  </Fragment>
)
