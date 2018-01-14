'use strict';

let selectionSort = (array) => {
  for(let n = 0; n < array.length; n++){
    let endOfSortedArray = n;

    for(let i = n; i < array.length; i++){
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
