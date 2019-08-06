import { connect } from 'react-redux';

export const connectProps = connect(({ error }) => ({ error }));
