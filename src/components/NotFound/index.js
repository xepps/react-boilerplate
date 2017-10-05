import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './style.css';

const NotFound = props => (
    <div className={classnames('NotFound', props.className)} {...props}>
        <h1>
            404 <small>Not Found:(</small>
        </h1>
    </div>
);

NotFound.propTypes = {
    className: PropTypes.string
};

NotFound.defaultProps = {
    className: ''
};

export default NotFound;
