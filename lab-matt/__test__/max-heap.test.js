'use strict';

const MaxHeap = require('../model/max-heap');

describe('max-heap', () => {
  test('max-heap builds an array and keeps the maximum at [0] index', () => {
    let max = new MaxHeap;
    max.insert(2);
    max.insert(1);
    expect(max._data[0]).toEqual(2);

  
  });
});