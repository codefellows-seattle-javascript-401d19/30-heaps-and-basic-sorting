'use strict';

const MaxHeap = require('../lib/max-heap');

describe('max-heap.js', () => {
  let testHeap = null;
  describe('Instantiation and helper functions.', () => {
    beforeEach(() => {
      testHeap = new MaxHeap();
      testHeap.insert(10);
      testHeap.insert(9);
      testHeap.insert(8);
    });

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

    test('Extracting the maximum should return the max from the heap and find the new max.', () => {
      expect(testHeap.extractMaximum()).toEqual(10);
      expect(testHeap._data).toEqual([9, 8]);
    });

    test('Extract should work with a more complicated heap', () => {
      testHeap.insert(50);
      testHeap.insert(60);
      testHeap.insert(70);
      testHeap.insert(80);
      testHeap.insert(90);
      testHeap.insert(510);
      testHeap.insert(5);
      expect(testHeap._data).toEqual([510, 90, 70, 80, 10, 8, 60, 9, 50, 5]);
      expect(testHeap.extractMaximum()).toEqual(510);
    });

    test('Extract should work with a more complicated heap', () => {
      testHeap.insert(50);
      testHeap.insert(60);
      testHeap.insert(70);
      testHeap.insert(80);
      testHeap.insert(90);
      testHeap.insert(510);
      expect(testHeap._data).toEqual([510, 90, 70, 80, 10, 8, 60, 9, 50]);
      expect(testHeap.extractMaximum()).toEqual(510);
    });

    test('extract maximum with an empty heap should return null', () => {
      let heap = new MaxHeap();
      expect(heap.extractMaximum()).toBeNull();
    });

    test('peek should return the max of the heap', () => {
      expect(testHeap.peek()).toEqual(10);
    });
  });
});