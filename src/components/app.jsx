import React, { Component } from 'react';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { test: true };
  }
  render() {
    return (
      <div className="app-root">React advanced starter</div>
    );
  }
}