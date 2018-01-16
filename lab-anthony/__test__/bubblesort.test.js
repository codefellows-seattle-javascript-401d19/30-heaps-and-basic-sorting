'use-strict';

const bubbleSort = require('../bubble-sort');

describe('bubble sort', () => {
  let testArray = [5,3,9,1,0,2,3,4];
  test('bubble sort should return an array with values from index 0 to be smallest to largest', () => {
    expect(bubbleSort(testArray)).toEqual([0, 1, 2, 3, 3, 4, 5, 9]);
  });
});
