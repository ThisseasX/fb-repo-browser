import { handleActions } from 'redux-actions';
import { updateError, stopLoading } from './actions';

const initialState = {
  error: '',
  loading: true
};

export const uiReducer = handleActions(
  {
    [updateError]: (state, { payload }) => ({
      ...state,
      error: payload
    }),
    [stopLoading]: state => ({
      ...state,
      loading: false
    })
  },
  initialState
);
