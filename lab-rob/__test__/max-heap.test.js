'use strict';

const MaxHeap = require('../lib/max-heap');

describe('max-heap.js', () => {
  describe('Instantiation and helper functions.', () => {
    test('Instantiation should return an object with an empty data array.', () => {
      let heap = new MaxHeap();
      expect(heap._data.length).toEqual(0);
    });

    
  });
});