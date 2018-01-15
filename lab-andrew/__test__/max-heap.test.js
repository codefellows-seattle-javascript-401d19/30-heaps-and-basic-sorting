'use strict';

const MaxHeap = require('../model/max-heap');

describe('tests for max-heap.js', () => {
  test('testing that insert behaves properly and max-heap stores maximum value in internal array at index 0, also testing that peek returns the max value in the heap', () => {
    let testHeap = new MaxHeap();
    expect(testHeap.peek()).toBeNull();
    testHeap.insert(5);
    expect(testHeap.peek()).toEqual(5);
    testHeap.insert(3);
    expect(testHeap.peek()).toEqual(5);
    testHeap.insert(6);
    expect(testHeap.peek()).toEqual(6);
  });

  test('testing that extractMaximum method properly returns max value in the max-heap and removes that value', () => {
    let testHeap = new MaxHeap();
    testHeap.insert(5);
    expect(testHeap.extractMaximum()).toEqual(5);
    expect(testHeap.extractMaximum()).toBeNull();
    testHeap.insert(4);
    testHeap.insert(5);
    testHeap.insert(6);
    testHeap.insert(3);
    testHeap.insert(1);
    testHeap.insert(2);
    expect(testHeap.extractMaximum()).toEqual(6);
    expect(testHeap.extractMaximum()).toEqual(5);
    expect(testHeap.extractMaximum()).toEqual(4);
    expect(testHeap.extractMaximum()).toEqual(3);
    expect(testHeap.extractMaximum()).toEqual(2);
    expect(testHeap.extractMaximum()).toEqual(1);

  });
});