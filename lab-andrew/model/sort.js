'use strict';

const Sort = {};

Sort.selectionSort = array => {
  const sorted = [];
  while (array.length){
    let min = Infinity;
    for (let number of array){
      if (number < min){
        min = number;
      }
    }
    let minIndex = array.indexOf(min);
    let currentMin = array.splice(minIndex, 1)[0];
    sorted.push(currentMin);
  }
  return sorted;
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