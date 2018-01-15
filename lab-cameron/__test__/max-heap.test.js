'use strict';

const MaxHeap = require('../model/max-heap');

describe('max-heap.js', () => {
  describe('max-heap.insert(<value>)', () => {
    test('insert should place new values at correct place, keeping root as max', () => {
      const Heap = new MaxHeap();
      Heap.insert(1);
      expect(Heap.peek()).toEqual(1);
      Heap.insert(10);
      expect(Heap.peek()).toEqual(10);
      Heap.insert(30);
      expect(Heap.peek()).toEqual(30);
    });

    test('insert should throw an error if value to insert is not a number', () => {
      const Heap = new MaxHeap();
      expect(() => {
        Heap.insert('not a number');
      }).toThrow();
    });
  });

  describe('max-heap.extractMaximum()', () => {
    test('extract-maximum should return the max value', () => {
      const Heap = new MaxHeap();
      Heap.insert(1);
      Heap.insert(2);
      Heap.insert(3);
      Heap.insert(4);
      Heap.insert(5);

      expect(Heap.extractMaximum()).toEqual(5);
      expect(Heap.extractMaximum()).toEqual(4);
      expect(Heap.extractMaximum()).toEqual(3);
      expect(Heap.extractMaximum()).toEqual(2);
      expect(Heap.extractMaximum()).toEqual(1);
    });
  });
});
