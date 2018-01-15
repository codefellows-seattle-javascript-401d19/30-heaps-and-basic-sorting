'use strict';

const swap = (array, i, j) => {
  let temp = array[i];
  array[i] = array[j];
  array[j] = temp;
};

const bubbleSort = array => {
  let swapped = null;
  do {
    swapped = false;
    for (let i = 0; i < array.length; i++) {
      if (array[i] && array[i + 1] && array[i] > array[i + 1]) {
        swap(array, i, i + 1);
        swapped = true;
      }
    }
  } while (swapped);
  return array;
};

module.exports = bubbleSort;
