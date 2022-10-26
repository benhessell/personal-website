import React from 'react';
import {
  HashRouter as Router, 
  Switch, 
  Route, 
} from 'react-router-dom';

import Home from '../../pages/Home/Home.js';
import Projects from '../../pages/Projects/Projects.js';
import Education from '../../pages/Education/Education.js';
import Tools from '../../pages/Tools/Tools.js';

export default function Routes() {
  return (
    <div className="routes">
        <Router>
          <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route exact path="/projects">
                <Projects />
            </Route>
            <Route exact path="/education">
                <Education />
            </Route>
            <Route exact path="/tools">
                <Tools />
            </Route>
            
          </Switch>
          
        </Router>
    </div>
  );
}