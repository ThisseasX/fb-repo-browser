import { connect } from 'react-redux';
import { updateSearch } from 'store/table';

export const connectProps = connect(
  ({ table: { search } }) => ({ search }),
  dispatch => ({ updateSearch: payload => dispatch(updateSearch(payload)) })
);
