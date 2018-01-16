'use strict';
const MaxHeap = require('../lib/max-heap');

describe('max-heap', () => {
  test('insert method adds new integers in the correct order', () => {
    let newHeap = new MaxHeap();
    expect(newHeap._data.length).toBe(0);

    newHeap.insert(3);
    expect(newHeap._data[0]).toBe(3);

    newHeap.insert(5);
    expect(newHeap._data[0]).toBe(5);
    expect(newHeap._data[1]).toBe(3);

    newHeap.insert(4);
    expect(newHeap._data[0]).toBe(5);
    expect(newHeap._data[1]).toBe(3);
    expect(newHeap._data[2]).toBe(4);

  });
  test('insert method returns an error if a non-number is inserted', () => {
    let newHeap = new MaxHeap();
    expect(() => newHeap.insert('error')).toThrow();
  });

  test('peek method returns the max value in the heap', () => {
    let newHeap = new MaxHeap();
    newHeap.insert(3);
    newHeap.insert(4);
    newHeap.insert(5);

    expect(newHeap.peek()).toBe(5);
  });

  test('peek should return null if there are no values in the heap', () => {
    let newHeap = new MaxHeap();
    expect(newHeap.peek()).toBeNull();
  });

  test('extractMaximum should return the maximum value from the heap and remove it from the heap', () => {
    let newHeap = new MaxHeap();
    newHeap.insert(0);
    newHeap.insert(1);
    newHeap.insert(2);
    newHeap.insert(3);
    newHeap.insert(4);
    newHeap.insert(5);

    expect(newHeap.extractMaximum()).toBe(5);
    expect(newHeap.extractMaximum()).toBe(4);
    expect(newHeap.extractMaximum()).toBe(3);
  });

  test('extractMaximum should return null if there are no values in the heap', () => {
    let newHeap = new MaxHeap();
    expect(newHeap.extractMaximum()).toBeNull();
  });
});