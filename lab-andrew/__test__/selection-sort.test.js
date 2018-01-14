'use strict';

const selectionSort = require('../model/selection-sort');

describe('tests for selection-sort.js', () => {
  test('test that selection sort returns a sorted array', () => {
    expect(selectionSort([9, 4, 5, 6, 2, 1, 7])).toEqual([1, 2, 4, 5, 6, 7, 9]);
  });
});