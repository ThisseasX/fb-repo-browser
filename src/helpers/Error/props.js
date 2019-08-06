import { connect } from 'react-redux';

export const connectProps = connect(({ ui: { error } }) => ({ error }));
