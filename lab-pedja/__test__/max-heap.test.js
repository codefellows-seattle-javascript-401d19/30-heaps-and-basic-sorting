'use strict';

const MaxHeap = require('../model/max-heap');

describe('max-heap.js', () => {
  test('INSERT method should add value to max heap', () => {
    let maxHeap = new MaxHeap();
    maxHeap.insert(13);
    maxHeap.insert(8);
    maxHeap.insert(10);
    maxHeap.insert(4);
    
    expect(maxHeap._data[0]).toEqual(13);
    expect(maxHeap._data[1]).toEqual(8);
    expect(maxHeap._data[2]).toEqual(10);
    expect(maxHeap._data[3]).toEqual(4);

    maxHeap.insert(9);
    
    expect(maxHeap._data[0]).toEqual(13);
    expect(maxHeap._data[1]).toEqual(9);
    expect(maxHeap._data[2]).toEqual(10);
    expect(maxHeap._data[3]).toEqual(4);
    expect(maxHeap._data[4]).toEqual(8);

    maxHeap.insert(14);
    
    expect(maxHeap._data[0]).toEqual(14);
    expect(maxHeap._data[1]).toEqual(9);
    expect(maxHeap._data[2]).toEqual(13);
    expect(maxHeap._data[3]).toEqual(4);
    expect(maxHeap._data[4]).toEqual(8);
    expect(maxHeap._data[5]).toEqual(10);
    
    expect(maxHeap.peek()).toEqual(14);
  });

  test('EXTRACT maximum should return the biggest value of heap', () => {
    let maxHeap = new MaxHeap();
    maxHeap.insert(13);
    maxHeap.insert(8);
    maxHeap.insert(10);
    maxHeap.insert(4);

    expect(maxHeap.extractMaximum()).toEqual(13);

    maxHeap.insert(15);
    expect(maxHeap.extractMaximum()).toEqual(15);
  });


});