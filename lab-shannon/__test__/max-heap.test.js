'use strict';
const maxHeap = require('../model/max-heap');

describe(`Max heap`, () => {
  test(`peek should show the first value in the array`, () => {
    let testArray = new maxHeap();
    testArray.insert(9);
    testArray.insert(5);
    testArray.insert(4);
    expect(testArray.peek()).toEqual(9);
  });
  test(`get parent index should return the parent index of the current index`, () => {
    let testArray = new maxHeap();
    testArray.insert(9);
    testArray.insert(5);
    testArray.insert(4);
    testArray.insert(11);
    testArray.insert(14);
    expect(testArray._getParentIndex(2)).toEqual(0);
    expect(testArray._getParentIndex(4)).toEqual(1);
  });
  test(`get left index should return the left child index of the current index`, () => {
    let testArray = new maxHeap();
    testArray.insert(9);
    testArray.insert(5);
    testArray.insert(4);
    testArray.insert(11);
    testArray.insert(14);
    expect(testArray._getLeftIndex(0)).toEqual(1);
    expect(testArray._getLeftIndex(2)).toEqual(5);
  });
  test(`get right index should return the right child index of the current index`, () => {
    let testArray = new maxHeap();
    testArray.insert(9);
    testArray.insert(5);
    testArray.insert(4);
    testArray.insert(11);
    testArray.insert(14);
    expect(testArray._getRightIndex(0)).toEqual(2);
    expect(testArray._getRightIndex(2)).toEqual(6);
  });
  test(`swapValues should swap the values of the two indices provided`, () => {
    let testArray = new maxHeap();
    testArray.insert(9);
    testArray.insert(5);
    testArray.insert(4);
    testArray.insert(11);
    testArray.insert(14);
    testArray._swapValues(1,2);
    expect(testArray._data).toEqual([14,4,11,5,9]);
  });
  test(`bubbleUp should ensure that the largest number is at index 0 and reorder the heap as needed`, () => {
    let testArray = new maxHeap();
    testArray.insert(9);
    testArray.insert(5);
    testArray.insert(4);
    testArray.insert(11);
    testArray.bubbleUp(4);
    expect(testArray._data).toEqual([11,9,4,5]);
  });
  test(`insert should add a new value to the heap, ensuring the largest value is still at index 0`, () => {
    let testArray = new maxHeap();
    testArray.insert(9);
    testArray.insert(5);
    testArray.insert(4);
    testArray.insert(14);
    expect(testArray._data).toEqual([14,9,4,5]);
  });
  test(`getMinimum should return the smallest value of the heap`, () => {
    let testArray = new maxHeap();
    testArray.insert(9);
    testArray.insert(5);
    testArray.insert(4);
    testArray.insert(14);
    expect(testArray.getMinimum(0)).toEqual(4);
  });
});
