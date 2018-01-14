'use strict';

const MaxHeap = require('../model/max-heap');

describe('tests for max-heap.js', () => {
  test('testing that max-heap stores maximum value in root position', () => {
    let testHeap = new MaxHeap();
    expect(testHeap.peek()).toBeNull();
    testHeap.insert(5);
    expect(testHeap.peek()).toEqual(5);
    testHeap.insert(3);
    expect(testHeap.peek()).toEqual(5);
    testHeap.insert(6);
    expect(testHeap.peek()).toEqual(6);
  });
});