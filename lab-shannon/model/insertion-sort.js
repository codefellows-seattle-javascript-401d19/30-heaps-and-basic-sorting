'use strict';

let insertionSort = (array) => {
  for(let i = 1; i < array.length; i++){
    if(typeof array[i] !== 'number'){
      throw new TypeError(`all values must be integers`);
    }
    let valueToInsert = array[i];
    let holePosition = i;

    while(valueToInsert < array[holePosition - 1] && holePosition > 0){
      array[holePosition] = array[holePosition - 1];
      holePosition--;
    }
    array[holePosition] = valueToInsert;
  }
  return array;
};

module.exports = insertionSort;
