import React, { Component } from 'react';
import ReactDOM, {render} from 'react-dom';

import { Router, Route, IndexRoute, IndexLink, Link } from 'react-router';

import logo from './logo.svg';
import './App.css';
import Sample1 from './components/Sample1.js';
import Sample2 from './components/Sample2.js';

import PageA from './PageA'
import PageB from './PageB'

var destination = document.querySelector("#container");

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Sample1 />
        <Sample2 />

      </div>

    );
  }
}

export default App;
