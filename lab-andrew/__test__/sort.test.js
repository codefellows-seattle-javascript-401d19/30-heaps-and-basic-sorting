'use strict';

const Sort = require('../model/sort');

describe('tests for sort.js', () => {
  test('test that selection sort returns a sorted array', () => {
    expect(Sort.selectionSort([9, 4, 5, 6, 2, 1, 7])).toEqual([1, 2, 4, 5, 6, 7, 9]);
    expect(Sort.selectionSort([-9, -4, -5, -6, -2, -1, -7])).toEqual([-9, -7, -6, -5, -4, -2, -1]);
  });
});