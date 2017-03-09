import React, { Component } from 'react';
import Board from './Board';
import "../../public/styles/App.css";

class App extends Component {

  constructor(props){
    super(props);
    this.runGame = this.runGame.bind(this);
    this.pauseGame = this.pauseGame.bind(this);
    this.resetGame = this.resetGame.bind(this);
  }

  runGame(){
    this.refs.board.startGame();
  }

  pauseGame(){
    this.refs.board.pause();
  }

  resetGame(){
    this.refs.board.clearBoard();
  }

  render() {
    return (
      <div className="app">
        <Board ref="board"/>
        <div onClick={this.runGame} className="button button-run">Start</div>
        <div onClick={this.pauseGame} className="button button-pause">Pause</div>
        <div onClick={this.resetGame} className="button button-clear">Clear</div>
      </div>
    );
  }
}

export default App;
