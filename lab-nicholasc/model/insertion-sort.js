'use strict';

const insertionSort = function(array) {
  for(let i = 0; i < array.length; i++){
    let insertion = array[i];
    let comparisonInd = i - 1;

    while(comparisonInd >= 0 && insertion < array[comparisonInd]){
      array[comparisonInd + 1] = array[comparisonInd];
      comparisonInd --;
    }
    comparisonInd++;
    array[comparisonInd] = insertion;
  }

  console.log(array);
  return array;
};





let testArray = [9, 8, 5, 6, 3, 1, 4, 7, 2];

insertionSort(testArray);

module.exports = insertionSort;
