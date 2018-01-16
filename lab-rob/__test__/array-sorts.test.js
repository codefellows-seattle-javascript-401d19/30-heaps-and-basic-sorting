'use strict';

const arraySorts = require('../lib/array-sorts');

let testArray = null, empty = null;
const sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const getTestArray = () => [10, 8, 5, 1, 3, 2, 6, 7, 9, 4];


describe('array-sorts.js', () => {
  beforeEach(() => {
    testArray = getTestArray();
    empty = [];
  });

  test('bubbleSort()', () => {

    expect(arraySorts.bubbleSort(testArray)).toEqual(sortedArray);
    expect(testArray).toEqual(sortedArray);
    expect(arraySorts.bubbleSort(empty)).toEqual([]);
  });

  test('insertionSort()', () => {
    expect(arraySorts.insertionSort(testArray)).toEqual(sortedArray);
    expect(testArray).toEqual(sortedArray);
    expect(arraySorts.insertionSort(empty)).toEqual([]);
  });


});