'use strict';

const selectionSort = require(`../model/selection-sort`);

describe(`selection sort`, () => {
  test(`selection sort should sort the array in place from smallest to largest`, () => {
    let testArray = [9,6,2,5,9,4,7];
    let sortedArray = selectionSort(testArray);
    expect(sortedArray).toEqual([2,4,5,6,7,9,9]);
  });
});
