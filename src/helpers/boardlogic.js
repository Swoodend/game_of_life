function setRandomState(board){
  return board.map((row) => {
    return row.map((cell) => {
      return Math.random() > 0.5 ? 1 : 0;
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


export default setRandomState
