'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import {
  Router,
  Route,
  hashHistory,
  IndexRoute,
  browserHistory
} from 'react-router'
import LoginActivity from './activities/login-activity';
import HomeActivity from './activities/home-activity';
import ColorsActivity from './activities/colors-activity';
import TypographysActivity from './activities/typographys-activity';
import StyleGuidesActivity from './activities/styleguides-activity';
import ColorListComponent from './ui/color-list-component';
import ColorPaletteListComponent from './ui/color-palette-list-component';
/*
<Route path="/home/colors/colors" component={ColorListComponent}/>
<Route
  path="/home/colors/color-palettes"
  component={ColorPaletteListComponent}/>
*/

var mountNode = document.querySelector('[data-app="main"]');
ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={LoginActivity}>
    </Route>
    <Route path="/home" component={HomeActivity}>
      <Route path="/home/styleguides" component={StyleGuidesActivity}/>
      <Route path="/home/colors" component={ColorsActivity}>

      </Route>
      <Route path="/home/typographys" component={TypographysActivity}/>
    </Route>
  </Router>
), mountNode);
