import { connect } from 'react-redux';
import { updateActiveRepoId } from 'store/repo';

export const connectProps = connect(
  ({ activeRepoId }) => ({
    activeRepoId
  }),
  dispatch => ({
    updateActiveRepoId: payload => dispatch(updateActiveRepoId(payload))
  })
);
