'use strict';

const Sort = {};

Sort.selectionSort = array => {
  const unsorted = array;
  const sorted = [];
  while (unsorted.length){
    let min = Infinity;
    for (let number of unsorted){
      if (number < min){
        min = number;
      }
    }
    let minIndex = unsorted.indexOf(min);
    let currentMin = unsorted.splice(minIndex, 1)[0];
    sorted.push(currentMin);
  }
  return sorted;
};

Sort.bubbleSort = array => {
  const arrayToSort = array;
  if (!arrayToSort.length) return arrayToSort;
  let swapWindow = arrayToSort.length - 1;
  let temp = null;
  while (swapWindow){
    for (let i = 0; i < swapWindow; i++){
      if (arrayToSort[i] > arrayToSort[i + 1]){
        temp = arrayToSort[i];
        arrayToSort[i] = arrayToSort[i + 1];
        arrayToSort[i + 1] = temp;
      }
    }
    swapWindow -= 1;
  }
  return arrayToSort;
};

Sort.insertionSort = array => {
  const arrayToSort = array;
  let temp = null;
  for (let index in arrayToSort){
    for (let i = index; i > 0; i--){
      if (arrayToSort[i] < arrayToSort[i - 1]){
        temp = arrayToSort[i];
        arrayToSort[i] = arrayToSort[i - 1];
        arrayToSort[i - 1] = temp;
      } else {
        break;
      }
    }
  }
  return arrayToSort;
};

module.exports = Sort;