import { connect } from 'react-redux';
import { updateSortBy, updateResultsPerPage } from 'store/table';

export const connectProps = connect(
  null,
  dispatch => ({
    updateSortBy: payload => dispatch(updateSortBy(payload)),
    updateResultsPerPage: payload => dispatch(updateResultsPerPage(payload))
  })
);
