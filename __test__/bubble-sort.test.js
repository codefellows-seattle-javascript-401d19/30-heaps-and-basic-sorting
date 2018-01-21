'use strict';

const bubbleSort = require('../lib/bubble-sort');

describe('bubble-sort.js', () => {
  test('testing that bubble sort method should throw an error if the input is not an array', () => {
    expect(() => bubbleSort('notAnArray')).toThrow();
  });
  
  test('bubble sort method should return a sorted array', () => {
    const arrayToSort = [8, 2, 7, 25, 3, 6, 4];
    
    expect(bubbleSort(arrayToSort)).toEqual([2, 3, 4, 6, 7, 8, 25]);
  });
});