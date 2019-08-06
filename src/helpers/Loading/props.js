import { connect } from 'react-redux';

export const connectProps = connect(({ ui: { loading } }) => ({ loading }));
