function setRandomState(board){
  return board.map((row) => {
    return row.map((cell) => {
      return Math.random() > 0.5 ? 1 : 0;
    });
  });
}

export default setRandomState
