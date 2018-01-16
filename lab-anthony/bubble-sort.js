'use strict';

const swap = (array, i, check) => {
  let temp = array[i];
  array[i] = array[check];
  array[check] = temp;
};

const bubbleSort = (array) => {
  for(let i = 0; i < array.length; i++) {
    for(let check = 1; check < array.length; check++) {
      if(array[check - 1] > array[check]) {
        swap(array, check - 1, check);
      }
    }
  }
  return array;
};

module.exports = bubbleSort;
