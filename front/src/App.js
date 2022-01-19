
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import React from 'react';
import Home from './components/home';
import Login from './components/login.jsx';
import Pelis from './components/Pelis';


function App() {
  return (
      <React.Fragment>
        <Router>
          <Switch>
            <Route path="/" exact render = { props=> (<Login {...props} />)}></Route>
            <Route path="/home" exact render = { props=> (<Home {...props} />)}></Route>
            <Route path="/pelis" exact render = { props=> (<Pelis {...props} />)}></Route>
            
          </Switch>
        </Router>
      </React.Fragment>
  );
}

export default App;
