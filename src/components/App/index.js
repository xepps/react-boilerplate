import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './style.css';

import logo from './logo.svg';

const App = props => {
    return (
        <div className={classnames('App', props.className)} {...props}>
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1 className="App-title">Welcome to React</h1>
            </header>
            <p className="App-intro">
                To get started, edit <code>src/App.js</code> and save to reload.
            </p>
        </div>
    );
}

App.PropTypes = {
    className: PropTypes.object
};

export default App;
