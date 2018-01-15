'use strict';

const Sort = {};

Sort.selectionSort = array => {
  const unsorted = array.splice(0, array.length);
  while (unsorted.length){
    let min = Infinity;
    for (let number of unsorted){
      if (number < min){
        min = number;
      }
    }
    let minIndex = unsorted.indexOf(min);
    let currentMin = unsorted.splice(minIndex, 1)[0];
    array.push(currentMin);
  }
  return array;
};

Sort.bubbleSort = array => {
  if (!array.length) return array;
  let swapWindow = array.length - 1;
  let temp = null;
  while (swapWindow){
    for (let i = 0; i < swapWindow; i++){
      if (array[i] > array[i + 1]){
        temp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = temp;
      }
    }
    swapWindow -= 1;
  }
  return array;
};

Sort.insertionSort = array => {
  let temp = null;
  for (let index in array){
    for (let i = index; i > 0; i--){
      if (array[i] < array[i - 1]){
        temp = array[i];
        array[i] = array[i - 1];
        array[i - 1] = temp;
      } else {
        break;
      }
    }
  }
  return array;
};

module.exports = Sort;