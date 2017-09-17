import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Home from './Home'
import PageA from './PageA'
import PageB from './PageB'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/PageA" component={PageA} />
          <Route path="/PageB" component={PageB} />
        </div>
      </Router>
    );
  }
}

export default App;
