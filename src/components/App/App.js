import React, { Fragment } from 'react';
import 'normalize.css';
import './App.sass';
import Topbar from 'components/Topbar';
import Main from 'components/Main';

const App = () => (
  <Fragment>
    <Topbar />
    <Main />
  </Fragment>
);

export default App;
