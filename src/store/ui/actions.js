import { createActions } from 'redux-actions';

const UPDATE_ERROR = 'UPDATE_ERROR';
const STOP_LOADING = 'STOP_LOADING';

export const { updateError, stopLoading } = createActions(
  UPDATE_ERROR,
  STOP_LOADING
);
