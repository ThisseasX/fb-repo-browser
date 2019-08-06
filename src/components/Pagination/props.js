import { connect } from 'react-redux';
import { nextPage, previousPage, updatePage } from 'store/table';

export const connectProps = connect(
  ({ page, maxPages }) => ({
    page,
    maxPages
  }),
  dispatch => ({
    nextPage: () => dispatch(nextPage()),
    previousPage: () => dispatch(previousPage()),
    updatePage: () => dispatch(updatePage())
  })
);
