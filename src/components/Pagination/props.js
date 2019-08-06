import { connect } from 'react-redux';
import { nextPage, previousPage, updatePage } from 'store/table';

export const connectProps = connect(
  ({ table: { page, maxPages } }) => ({
    page,
    maxPages
  }),
  dispatch => ({
    nextPage: () => dispatch(nextPage()),
    previousPage: () => dispatch(previousPage()),
    updatePage: payload => dispatch(updatePage(payload))
  })
);
