import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Error = ({ error, children }) => (!!error ? <p>{error}</p> : children);

Error.propTypes = {
  error: PropTypes.string
};

export default connect(({ error }) => ({ error }))(Error);
