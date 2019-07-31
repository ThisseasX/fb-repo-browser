import { createStore, combineReducers } from 'redux';
import { uiReducer } from './ui';
import { tableReducer } from './table';
import { repoReducer } from './repo';

const store = createStore(
  combineReducers({
    ui: uiReducer,
    table: tableReducer,
    repo: repoReducer
  })
);

export { store };
