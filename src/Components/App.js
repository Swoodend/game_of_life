import React, { Component } from 'react';
import Board from './Board';
import StartPauseButton from './StartPauseButton';
import "../../public/styles/App.css";

class App extends Component {

  constructor(props){
    super(props);
    this.runGame = this.runGame.bind(this);
    this.pauseGame = this.pauseGame.bind(this);
    this.resetGame = this.resetGame.bind(this);
    this.newGame = this.newGame.bind(this);
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

  newGame(){
    this.refs.board.setRandomState();
  }

  render() {
    return (
      <div>
      <h1><span className="red">L</span><span className="teal">I</span><span className="orange">F</span><span className="blue">E</span></h1>
        <div className="app">
          <Board ref="board"/>
          <div className="button-container">
            <StartPauseButton runGame={this.runGame} pauseGame={this.pauseGame}/>
            <div onClick={this.resetGame} className="button button-clear">Clear</div>
            <div onClick={this.newGame} className="button button-new">New</div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
