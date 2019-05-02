import React, { Component } from 'react';
import './App.css';
import Home from './views/Home';
import {Route, HashRouter} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="content">
            <Route exact path="/" component={Home}/>
        </div>
      </HashRouter>
    );
  }
}

export default App;
