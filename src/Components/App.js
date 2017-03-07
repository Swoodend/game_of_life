import React, { Component } from 'react';
import Board from './Board';
import "../../public/styles/App.css";

class App extends Component {
  render() {
    return (
      <div className="app">
        <Board />
        <div className="start-button">Start</div>
      </div>
    );
  }
}

export default App;
