'use strict';

const arraySorts = module.exports = {};

arraySorts.bubbleSort = array => {
  for(let i = 0; i < array.length - 1; i++) {
    for(let j = 0; j < array.length - 1 - i; j++) {
      if(array[j] > array[j + 1])
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
    }
  }

  return array;
};

arraySorts.insertionSort = array => {
  for(let i = 1; i < array.length; i++) {
    for(let j = i; j > 0; j--) {
      if(array[j] < array[j - 1])
        [array[j], array[j - 1]] = [array[j - 1], array[j]];
      else
        break;
    }
  }

  return array;
};

arraySorts.selectionSort = array => {
  let smallestIndex, smallest = null;
  
  for(let i = 0; i < array.length - 2; i++) {
    smallestIndex = i;
    smallest = array[i];

    for(let j = i + 1; j < array.length; j++) {
      if(array[j] < smallest) {
        smallest = array[j];
        smallestIndex = j;
      }
    }

    [array[i], array[smallestIndex]] = [array[smallestIndex], array[i]];
  }

  return array;
};