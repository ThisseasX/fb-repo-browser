import React from 'react';
import PropTypes from 'prop-types';

const Error = ({ error, children }) => (
    !!error
        ?
        <p>{error}</p>
        :
        children
);

Error.propTypes = {
    error: PropTypes.string
};

export default Error;