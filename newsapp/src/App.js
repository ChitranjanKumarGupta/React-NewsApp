import './App.css';

import React, { Component } from 'react';

export default class App extends Component {
  c = 'John';
  render() {
    return (
      <div>
        Hello my First class Based Component {this.c}.
      </div>
    )
  }
}