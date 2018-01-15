'use strict';

const Sort = {};

Sort.selectionSort = array => {
  let minIndex = null;
  for (let i = 0; i < array.length; i++){
    let min = Infinity;
    let temp = array[i];
    for (let j = i; j < array.length; j++){
      if (array[j] < min){
        min = array[j];
        minIndex = j;
      }
    }
    array[i] = array[minIndex];
    array[minIndex] = temp;
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