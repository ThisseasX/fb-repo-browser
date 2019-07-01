import React from 'react';
import PropTypes from 'prop-types';
import { wrapper, loadingText } from './Loading.module.sass';
import LoadingIcon from '../LoadingIcon/LoadingIcon';

const Loading = ({ loading, children }) => (
    loading
        ?
        <div className={wrapper}>
            <LoadingIcon />
            <p className={loadingText}>loading</p>
        </div>
        :
        children
);

Loading.propTypes = {
    loading: PropTypes.bool
};

export default Loading;
