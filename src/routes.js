import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import App from './components/App';
import About from './components/About';
import NotFound from './components/NotFound';

export default () => (
    <Router>
        <div>
            <Route path="/" component={App} />
            <Switch>
                <Route path="/about" component={About} />
                <Route component={NotFound} />
            </Switch>
        </div>
    </Router>
);
