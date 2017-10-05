import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './style.css';

const About = props => (
    <div className={classnames('About', props.className)} {...props}>
        <h1>About</h1>
    </div>
);

About.propTypes = {
    className: PropTypes.string
};

About.defaultProps = {
    className: ''
};

export default About;
