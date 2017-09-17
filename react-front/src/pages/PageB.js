import React, { Component } from 'react';
import {Actions} from '../actions.js'
import {nameStore, messageStore} from '../stores.js'


class PageB extends Component {

  constructor (props) {

    super(props)
    this.state = {name: '', message: ''}
    nameStore.onChange = () => {
      this.setState({name: nameStore.name})
    }
    messageStore.onChange = () => {
      this.setState({message: messageStore.message})
    }
  }
  render() {

    console.log('View PageB render')
    return (
      <div>
        <h2>Page B</h2>
        <input
          value={this.state.name}
          onChange={(e) => Actions.changeName(e.target.value)}/>

          <button onClick={(e) => Actions.submitName()}>登録</button>

          <div>{this.state.message}</div>
      </div>
    );
  }
}

export default PageB;
