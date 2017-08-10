import React from 'react';
import ReactDOM from 'react-dom';

import {
    Router, Route, browserHistory
} from 'react-router'

import './index.css';
import App from './App';
import One from './One';
import two from './Two';
import NoMatch from './NoMatch';
import Children from './Children';

import registerServiceWorker from './registerServiceWorker';
ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={App}></Route>
        <Route path="/one" component={One}></Route>
        <Route path="/two" component={two}>
            <Route path="/two/:id" component={Children}></Route>
        </Route>
        <Route path="*" component={NoMatch}></Route>
    </Router>
    ,
    document.getElementById('root')
);
registerServiceWorker();