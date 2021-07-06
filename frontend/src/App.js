import React, { Component } from 'react'
import './App.css';
import { Switch } from "react-router";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Main from './components/Main';
import List from './components/List';
import { BrowserRouter as Router, Route } from "react-router-dom";
export class App extends Component {
  render() {
    return (
      <Router>
        <Header />
        <Switch>
          <Route exact path='/'>
            <Main />
          </Route>
          <Route exact path='/List'>
            <List />
          </Route>
        </Switch>
      </Router>
    )
  }
}

export default App


