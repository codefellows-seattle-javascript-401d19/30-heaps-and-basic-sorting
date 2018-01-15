'use strict';

let selectionSort = (array) => {
  for(let n = 0; n < array.length; n++){
    if(typeof array[n] !== 'number'){
      throw new TypeError('all values must be integers');
    }
    let endOfSortedArray = n;

    for(let i = n; i < array.length; i++){
      if(typeof array[i] !== 'number'){
        throw new TypeError('all values must be integers');
      }
      let min = array[endOfSortedArray];
      let minIndex = endOfSortedArray;
      if(array[i] < min){
        min = array[i];
        minIndex = i;
      }
      if(minIndex !== endOfSortedArray){
        let tempValue = array[endOfSortedArray];
        array[endOfSortedArray] = min;
        array[minIndex] = tempValue;
      }
    }
  }
  return array;
};

module.exports = selectionSort;
