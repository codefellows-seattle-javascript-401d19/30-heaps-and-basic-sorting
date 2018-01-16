'use strict';

const bubbleSort = (array) => {
  if(typeof array !== 'object')
    throw new TypeError('input must be an array');

  if(!array.length) {
    return array;
  }
  let swap = array.length - 1;
  let tempValue = null;
  while(swap) {
    for(let i = 0; i < swap; i++) {
      if(array[i] > array[i + 1]) {
        tempValue = array[i];
        array[i] = array[i + 1];
        array[i + 1] = tempValue;
      }
    }
    swap -= 1;
  }
  return array;
};


module.exports = bubbleSort;