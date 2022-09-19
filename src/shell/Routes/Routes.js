import React from 'react';
import {
  HashRouter as Router, 
  Switch, 
  Route, 
} from 'react-router-dom';

import Home from '../../pages/Home/Home.js'

export default function Routes() {
  return (
    <div className="routes">
        <Router>
          <Switch>
            <Route exact path="/">
                <Home />
            </Route>
          </Switch>
        </Router>
    </div>
  );
}