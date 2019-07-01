import React from 'react';
import PropTypes from 'prop-types';
import styles from './Loading.module.sass';

const Loading = ({ loading, children }) => (
    loading
        ?
        <h1>Loading...</h1>
        :
        children
)

Loading.propTypes = {
    loading: PropTypes.bool
};

export default Loading;