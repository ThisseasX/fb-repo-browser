import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { uiReducer } from './ui';
import { tableReducer } from './table';
import { repoReducer, repoEpic } from './repo';
import { createEpicMiddleware } from 'redux-observable';

const epicMiddleware = createEpicMiddleware();

const store = createStore(
  combineReducers({
    ui: uiReducer,
    table: tableReducer,
    repo: repoReducer
  }),
  composeWithDevTools(
    applyMiddleware(epicMiddleware)
  )
);

epicMiddleware.run(repoEpic);

export { store };
