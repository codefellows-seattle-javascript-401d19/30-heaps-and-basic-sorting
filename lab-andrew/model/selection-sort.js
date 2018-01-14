'use strict';

module.exports = array => {
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