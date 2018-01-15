'use strict';
 
const SortObj = {};

SortObj.insertionSort = array => {  
  if(typeof array !== 'object')
    throw new TypeError('array needs to be an array');

  for(let index in array) {
    for(let j = index; j > 0; j--) {
      if(array[j] < array[j - 1]){
        let temp = array[j];
        array[j] = array[j - 1];
        array[j - 1] = temp;
      } else {
        break;
      }
    }
  }
  return array;
};


module.exports = SortObj;