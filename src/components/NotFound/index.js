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

NotFound.PropTypes = {
    className: PropTypes.object
};

export default NotFound;
