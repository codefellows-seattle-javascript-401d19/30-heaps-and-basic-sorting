'use strict';

const _swap = (array, first, second) => {
  let temp = array[first];
  array[first] = array[second];
  array[second] = temp;
}

const selectionSort = (array) => {
  let min = null;

  for (let i = 0; i < array.length; i++) {
    min = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[min]) {
        min = j;
      }
    }
    if (i !== min) {
      _swap(array, i, min);
    }
  }
  return array;
}

module.exports = selectionSort;