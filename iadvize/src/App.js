import React, { Component } from 'react';

import Chatbox from 'src/components/Chatbox';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Chatbox author="Foo" />
        <Chatbox author="Bar" />
      </div>
    );
  }
}

export default App;
