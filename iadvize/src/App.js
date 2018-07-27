import React, { Component } from 'react';

import Chatbox from 'src/components/Chatbox';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Chatbox />
        <Chatbox />
      </div>
    );
  }
}

export default App;
