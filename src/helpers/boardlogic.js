function getRandomState(board){
  return board.map((row, i) => {
    return row.map((cell, j) => {
      //only consider birthing the cell if it isnt an edge piece (ignoring the edges for this implementation)
      if ((i !== 0 && i !== board.length -1) && (j !== 0 && j!==board[i].length -1)){
        return Math.random() > 0.85 ? 1 : 0;
      } else {
        return 0;
      }
    });
  });
}

function copyArr(arr){
  let newArr = arr.slice();
  for (let i = 0; i < arr.length; i++){
    if (Array.isArray(arr[i])){
      newArr[i] = copyArr(arr[i]);
    } else {
      newArr[i] = arr[i]
    }
  }
  return newArr;
}


export { getRandomState, copyArr }
