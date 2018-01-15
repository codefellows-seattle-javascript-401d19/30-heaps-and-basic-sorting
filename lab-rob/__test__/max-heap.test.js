'use strict';

const MaxHeap = require('../lib/max-heap');

describe('max-heap.js', () => {
  let testHeap = null;
  beforeAll(() => {
    testHeap = new MaxHeap();
    testHeap.insert(10);
    testHeap.insert(9);
    testHeap.insert(8);
  });

  describe('Instantiation and helper functions.', () => {
    test('Instantiation should return an object with an empty data array.', () => {
      let heap = new MaxHeap();
      expect(heap._data.length).toEqual(0);
    });

    test('Insertion should allow you to add values to the max heap', () => {
      let heap = new MaxHeap();
      heap.insert(10);
      heap.insert(9);
      heap.insert(8);
      expect(heap._data).toEqual([10, 9, 8]);
    });

    test('Inserting a new max value should add it to the end and then bubble it to the top.', () => {
      testHeap.insert(20);
      expect(testHeap._data).toEqual([20, 10, 8, 9]);
    });
  });
});