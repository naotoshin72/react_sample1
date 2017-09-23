import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';

import MaterialAppBar from '../components/materials/MaterialAppBar'
import ComponentA from '../components/ComponentA'

class PageC extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div>
        <MaterialAppBar />
          <h1>PageC</h1>
          <ComponentA />
        </div>
      </MuiThemeProvider>
    );
  }
}


export default PageC;
