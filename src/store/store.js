import { createStore, combineReducers } from 'redux';
import { uiReducer } from './ui';
import { tableReducer } from './table';
import { repoReducer } from './repo';
import { filterReducer } from './filter';

const store = createStore(
  combineReducers({
    ui: uiReducer,
    table: tableReducer,
    repo: repoReducer,
    filter: filterReducer
  })
);

export { store };
