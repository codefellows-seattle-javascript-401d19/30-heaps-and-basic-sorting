const selectionSort = require('../model/selection-sort');
const insertionSort = require('../model/insertion-sort');
const bubbleSort = require('../model/bubble-sort');

describe('Selection Sort', () => {
  test('Should sort any array from smallest to largest', () => {
    let mockArray = [1,6,3,9,1,3,9,10,50];

    result = selectionSort(mockArray);

    expect(result).toEqual([1,1,3,3,6,9,9,10,50])
  })
});

describe('Insertion Sort', () => {
  test('Should sort any array from smallest to largest', () => {
    let mockArray = [1,6,3,9,1,3,9,10,50];

    result = selectionSort(mockArray);

    expect(result).toEqual([1,1,3,3,6,9,9,10,50])
  })
});

describe('Bubble Sort', () => {
  test('Should sort any array from smallest to largest', () => {
    let mockArray = [1,6,3,9,1,3,9,10,50];

    result = selectionSort(mockArray);

    expect(result).toEqual([1,1,3,3,6,9,9,10,50])
  })
});