'use strict';
const insertionSort = require('../model/insertion-sort');

describe(`insertion sort`, () => {
  test(`insertion sort should sort the array in-place from smallest to largest`, () => {
    let testArray = [6,2,9,18,4,5];
    let sortedArray = insertionSort(testArray);
    expect(sortedArray).toEqual([2,4,5,6,9,18]);
  });
  test(`insertion sort should sort the array in-place from smallest to largest`, () => {
    let testArray = [1,2,3,4,9,8,7,6,5,4];
    let sortedArray = insertionSort(testArray);
    expect(sortedArray).toEqual([1,2,3,4,4,5,6,7,8,9]);
  });
  test(`insertion sort should throw an error if a value in the array is not a number`, () => {
    let testArray = [6,2,9,18,4,5, 'fish'];
    expect(() => insertionSort(testArray)).toThrow();
  });
});
