'use strict';

const SortObj = require('../model/insertion-sort');

describe('insertion-sort.js', () => {
  test('INSERTION SORT should sort an array, smallest to biggest', () => {
    let testArray = [6, 4, 5, 1, 3];
    let sortedArray = SortObj.insertionSort(testArray);

    expect(sortedArray).toEqual([1, 3, 4, 5, 6]);
  });

  test('INSERTION SORT should throw an error if array is not an array', () => {
    let notValidArray = 'testing';
    
    expect(() => SortObj.insertionSort(notValidArray)).toThrow();
  });

});