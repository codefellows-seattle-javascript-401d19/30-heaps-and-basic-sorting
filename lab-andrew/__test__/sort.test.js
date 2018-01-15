'use strict';

const Sort = require('../model/sort');

describe('tests for sort.js', () => {
  test('test that selection sort returns a sorted array for various kinds of valid input', () => {
    expect(Sort.selectionSort([9, 4, 5, 6, 2, 1, 7])).toEqual([1, 2, 4, 5, 6, 7, 9]);
    expect(Sort.selectionSort([-9, -4, -5, -6, -2, -1, -7])).toEqual([-9, -7, -6, -5, -4, -2, -1]);
    expect(Sort.selectionSort([])).toEqual([]);
    expect(Sort.selectionSort([1])).toEqual([1]);
    expect(Sort.selectionSort([1, 2, 3])).toEqual([1, 2, 3]);
    expect(Sort.selectionSort([0, 3, -2, 9, -4])).toEqual([-4, -2, 0, 3, 9]);
    expect(Sort.selectionSort([2, 2, 2, 2, 2, 4, 1, 3, 3, 3])).toEqual([1, 2, 2, 2, 2, 2, 3, 3, 3, 4]);
  });

  test('test that bubble sort returns a sorted array for various kinds of valid input', () => {
    expect(Sort.bubbleSort([9, 4, 5, 6, 2, 1, 7])).toEqual([1, 2, 4, 5, 6, 7, 9]);
    expect(Sort.bubbleSort([-9, -4, -5, -6, -2, -1, -7])).toEqual([-9, -7, -6, -5, -4, -2, -1]);
    expect(Sort.bubbleSort([])).toEqual([]);
    expect(Sort.bubbleSort([1])).toEqual([1]);
    expect(Sort.bubbleSort([1, 2, 3])).toEqual([1, 2, 3]);
    expect(Sort.bubbleSort([0, 3, -2, 9, -4])).toEqual([-4, -2, 0, 3, 9]);
    expect(Sort.bubbleSort([2, 2, 2, 2, 2, 4, 1])).toEqual([1, 2, 2, 2, 2, 2, 4]);
  });

  test('test that insertion sort returns a sorted array for various kinds of valid input', () => {
    expect(Sort.insertionSort([9, 4, 5, 6, 2, 1, 7])).toEqual([1, 2, 4, 5, 6, 7, 9]);
    expect(Sort.insertionSort([-9, -4, -5, -6, -2, -1, -7])).toEqual([-9, -7, -6, -5, -4, -2, -1]);
    expect(Sort.insertionSort([])).toEqual([]);
    expect(Sort.insertionSort([1])).toEqual([1]);
    expect(Sort.insertionSort([1, 2, 3])).toEqual([1, 2, 3]);
    expect(Sort.insertionSort([0, 3, -2, 9, -4])).toEqual([-4, -2, 0, 3, 9]);
    expect(Sort.insertionSort([2, 2, 2, 2, 2, 4, 1])).toEqual([1, 2, 2, 2, 2, 2, 4]);
  });
});