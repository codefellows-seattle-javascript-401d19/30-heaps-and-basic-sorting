'use strict';

const MinHeap = require('../min-heap.js');

describe('Min Heap', () => {
  test('min heap should sort in ascending values from the root', () => {
    let minHeapTest = new MinHeap();
    minHeapTest.insert(1);
    minHeapTest.insert(2);
    minHeapTest.insert(3);
    minHeapTest.insert(4);
    minHeapTest.insert(5);
    expect(minHeapTest._data[0]).toEqual(1);
    expect(minHeapTest._data[1]).toEqual(2);
    expect(minHeapTest._data[2]).toEqual(3);
    expect(minHeapTest._data[3]).toEqual(4);
    expect(minHeapTest._data[4]).toEqual(5);
  });
});
