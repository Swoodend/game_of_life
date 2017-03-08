import React, { Component } from 'react';
import Board from './Board';
import "../../public/styles/App.css";

class App extends Component {

  constructor(props){
    super(props)
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    this.refs.board.tick();
  }

  render() {
    return (
      <div className="app">
        <Board ref="board"/>
        <div onClick={this.handleClick} className="start-button">Start</div>
      </div>
    );
  }
}

export default App;
