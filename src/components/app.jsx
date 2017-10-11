import React, { Component } from 'react';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { test: true };
  }
  render() {
    return (
      <h1 className="app-root">Hello from React</h1>
    );
  }
}
