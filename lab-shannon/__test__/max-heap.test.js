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
  test(`swap values should swap the values of the two indices provided`, () => {
    let testArray = new maxHeap();
    testArray.insert(9);
    testArray.insert(5);
    testArray.insert(4);
    testArray.insert(11);
    testArray.insert(14);
    expect(testArray._swap(4,5)).toEqual();
  });
});
