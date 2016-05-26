'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
import LoginActivity from './activities/login-activity';
import HomeActivity from './activities/home-activity';


var mountNode = document.querySelector('[data-app="main"]');
ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={LoginActivity}>
      <Route path="/home" component={HomeActivity}>
      </Route>
    </Route>
  </Router>
), mountNode);
