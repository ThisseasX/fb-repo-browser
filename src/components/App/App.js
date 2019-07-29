import React, { Fragment } from 'react';
import 'normalize.css';
import './App.sass';
import Topbar from 'components/Topbar';
import Main from 'components/Main';

export default () => (
  <Fragment>
    <Topbar />
    <Main />
  </Fragment>
);
