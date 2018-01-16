'use strict';

const MaxHeap = require('../model/max-heap');


function createHeap(heap) {
  heap.insert(1);
  heap.insert(3);
  heap.insert(12);
  heap.insert(5);
  heap.insert(8);
  heap.insert(2);
  heap.insert(6);
}

describe('max-heap', () => {
  test('max-heap builds an array and keeps the maximum at [0] index', () => {
    let max = new MaxHeap;
    max.insert(2);
    max.insert(1);
    expect(max._data[0]).toEqual(2);
    max.insert(5);
    expect(max._data[0]).toEqual(5);
    max.insert(100);
    max.insert(-101);
    expect(max._data[0]).toEqual(100);
  });

  test('expect insert to throw if the value being inserted is now a number', () => {
    let heap = new MaxHeap;
    expect(() => {
      heap.insert('hi');
    }).toThrow();
  });

  test('bubbleSort sorts the max-heap data with the maximum value first and the minimum value last', () => {
    let heap = new MaxHeap;
    let expectedResult = [12, 8, 6, 5, 3, 2, 1];
    createHeap(heap);

    expect(heap._data[heap._data.length - 1]).not.toEqual(1);

    heap.bubbleSort();

    for (let i in heap._data) {
      expect(heap._data[i]).toEqual(expectedResult[i]);
    }
  });

  test('expect .peek() or .extractMaximum() on an empty heap to return null', () => {
    let empty = new MaxHeap;

    expect(empty.peek()).toBeNull();
    expect(empty.extractMaximum()).toBeNull();
  });

  test('expect .peek() on a max-heap to return the maximum value', () => {
    let heap = new MaxHeap;
    createHeap(heap);
    expect(heap.peek()).toEqual(12);
    heap.insert(100);
    expect(heap.peek()).toEqual(100);
  });

  test('expect .extractMaximum() on a max-heap to take the maximum value out of the array and return it', () => {
    let heap = new MaxHeap;
    createHeap(heap);
    expect(heap.peek()).toEqual(12);
    expect(heap.extractMaximum()).toEqual(12);
    expect(heap.peek()).toEqual(8);
  });

  test('expect ', () => {
    let heap = new MaxHeap;
    expect(() => {
      heap.insert('hi');
    }).toThrow();
  });
});
  