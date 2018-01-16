'use strict';

const MaxHeap = require('../max-heap.js');

describe('Max Heap', () => {
  test('max heap should sort in descending values from the root', () => {
    let maxHeapTest = new MaxHeap();
    maxHeapTest.insert(1);
    maxHeapTest.insert(2);
    maxHeapTest.insert(3);
    maxHeapTest.insert(4);
    maxHeapTest.insert(5);
    expect(maxHeapTest._data[0]).toEqual(5);
    expect(maxHeapTest._data[1]).toEqual(4);
    expect(maxHeapTest._data[2]).toEqual(2);
    expect(maxHeapTest._data[3]).toEqual(1);
    expect(maxHeapTest._data[4]).toEqual(3);
  });
});
