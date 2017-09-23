import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class Home extends Component {
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
        <p><Link to="PageA">PageA(画面遷移テスト)</Link></p>
        <p><Link to="PageB">PageB(form/FacebookFluxテスト)</Link></p>
        <p><Link to="PageC">PageC(Material-UIテスト)</Link></p>

      </div>
    );
  }
}
export default Home;
