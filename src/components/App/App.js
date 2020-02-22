import React from 'react';
import 'normalize.css';
import './App.sass';
import { Provider } from 'react-redux';
import { store } from 'store';
import Topbar from 'components/Topbar';
import Main from 'components/Main';

const App = () => (
  <Provider store={store}>
    <Topbar />
    <Main />
  </Provider>
);

export default App;
