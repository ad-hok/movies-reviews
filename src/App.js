import React, { Component } from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import NavSearch from './views/NavSearch';
import MoviesContainer from './views/MoviesContainer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <NavSearch />
        <HashRouter>
          <Switch>
            <Route path="/" name="Movies" component={MoviesContainer}/>
          </Switch>
        </HashRouter>
      </div>
    );
  }
}

export default App;
