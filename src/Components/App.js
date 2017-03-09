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
    console.log('run game')
    console.log(this.refs.board);
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
        <div onClick={this.runGame} className="start-button">Start</div>
        <div onClick={this.pauseGame} className="start-button">Pause</div>
        <div onClick={this.resetGame} className="start-button">Reset</div>
      </div>
    );
  }
}

export default App;
