'use strict';
const selectionSort = require('../lib/selection-sort');

describe('selection sort', () => {
  test('selection sort returns array in min to max order', () => {
    let array = [3, 2, 1];
    selectionSort(array);
    expect(array).toEqual([1, 2, 3]);
  })
})