'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
import LoginActivity from './activities/login-activity';


var mountNode = document.querySelector('[data-app="main"]');
ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={LoginActivity}>

    </Route>
  </Router>
), mountNode);
