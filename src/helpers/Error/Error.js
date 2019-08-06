import React from 'react';
import PropTypes from 'prop-types';
import { connectProps } from './props';

const Error = ({ error, children }) => (!!error ? <p>{error}</p> : children);

Error.propTypes = {
  error: PropTypes.string.isRequired
};

export default connectProps(Error);
