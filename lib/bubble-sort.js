
'use strict';

const bubbleSort = (array) => {
  if(typeof array !== 'object')
    throw new TypeError('input must be an array');

  if(!array.length) {
    return array;
  }
  let lengthOfArray = array.length - 1;
  let tempValue;
  while(lengthOfArray) {
    for(let i = 0; i < lengthOfArray; i++) {
      if(array[i] > array[i + 1]) {
        tempValue = array[i];
        array[i] = array[i + 1];
        array[i + 1] = tempValue;
      }
    }
    lengthOfArray -= 1;
  }
  return array;
};


module.exports = bubbleSort;