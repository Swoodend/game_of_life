import React, { Component } from 'react';
import Cell from './Cell';
import copyArr from '../helpers/boardlogic';

var running = false;
var loop;

class Board extends Component {

  constructor(props){
    super(props);
    this.changeColor = this.changeColor.bind(this);
    this.tick = this.tick.bind(this);
    this.run = this.run.bind(this);
    this.pause = this.pause.bind(this);
    this.startGame = this.startGame.bind(this);
    this.clearBoard = this.clearBoard.bind(this);
    this.state = {
      cellGrid: [],
      numRowsCols: 50,
      generation: 0
    };
  }

  componentWillMount(){
    let board = [];
    for (let i = 0; i < 50; i++){
      board.push([]);
      for (let j = 0; j < 50; j++){
        if ((i !==0 && i!== this.state.numRowsCols - 1) && (j!==0 && j!== this.state.numRowsCols - 1)){ //the grid is 50x50
          board[i].push(Math.random() > 0.85 ? 1 : 0);
        } else {
          board[i].push(0);
        }
      }
    }
    this.setState({
      cellGrid: board
    });
  }

  changeColor(row, column){
    let grid = this.state.cellGrid;

    if (grid[row][column] === 1){
      grid[row][column] = 0;
    } else {
      grid[row][column] = 1;
    }

    this.setState({
      cellGrid: grid
    });
  }

  clearBoard(){
    let board = copyArr(this.state.cellGrid);
    for (let i = 0; i < board.length; i++){
      for (let j = 0; j < board[i].length; j++){
        board[i][j] = 0;
      }
    }

    this.setState({
      cellGrid: board,
      generation: 0
    });
  }

  tick(){
    let board = this.state.cellGrid;
    let boardCopy = copyArr(this.state.cellGrid);

    for(let i = 1; i < board.length - 1; i++){
      for (let j = 1; j < board[i].length - 1; j++){
        //get value of all the neighbours of currentCell
        let currentCell = board[i][j];
        let topLeft = board[i-1][j-1];
        let above = board[i-1][j];
        let topRight = board[i-1][j+1];
        let left = board[i][j-1];
        let right = board[i][j+1];
        let bottomLeft = board[i+1][j-1];
        let bottom = board[i+1][j];
        let bottomRight = board[i+1][j+1];

        //add them up
        let totalNeighbours = [
          topLeft, above, topRight,
          left, right, bottomLeft,
          bottom, bottomRight
        ].reduce((a, b) =>{
          return a + b;
        });

        //implement logic
        if (currentCell === 1){ //if the currentCell is alive
          if (totalNeighbours < 2){
            boardCopy[i][j] = 0; //die from isolation
          }

          if (totalNeighbours > 3) {
            boardCopy[i][j] = 0; //die from overpopulation
          }
        } else { //currentCell is dead
          if (totalNeighbours === 3){
            boardCopy[i][j] = 1; //birth
          }
        }
      }
    }

    board = boardCopy;
    this.setState({
      cellGrid: board,
      generation: this.state.generation + 1
    });
  }

  run(){
    running = true;
    this.tick();
    loop = window.requestAnimationFrame(this.run);
  }

  startGame(){
    if (!running){
      this.run();
    }
  }

  pause(){
    if (running){
      running = false;
      window.cancelAnimationFrame(loop);
    }
  }

  render() {
    let cells = this.state.cellGrid.map((cellRow, i) => {
      return cellRow.map((cellColumn, j) => {
        if (cellColumn){
          return (
            <Cell
              changeColor={this.changeColor}
              key={i+j}
              row={i}
              column={j}
              style={{background: "black"}}
            />
          );
        } else {
          return (
            <Cell
              changeColor={this.changeColor}
              key={i+j}
              row={i}
              column={j}
            />
          );
        }
      })
    })
    return (
      <div className="board">
        <div className="generation-count">GENERATION: {this.state.generation}</div>
        {cells}
      </div>
    );
  }
}

export default Board;
