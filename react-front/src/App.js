import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Home from './pages/Home'
import PageA from './pages/PageA'
import PageB from './pages/PageB'
import PageC from './pages/PageC'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/PageA" component={PageA} />
          <Route path="/PageB" component={PageB} />
          <Route path="/PageC" component={PageC} />
        </div>
      </Router>
    );
  }
}

export default App;
