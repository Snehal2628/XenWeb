import React from 'react';

import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Project from './components/pages/project'
function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Switch>
        <Route path='/' exact component={Project}></Route>
      </Switch>
      </Router>
    </>
  );
}

export default App;
