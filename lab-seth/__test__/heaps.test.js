const MaxHeap = require('../model/max-heap');
const MinHeap = require('../model/min-heap');

describe('Max Heap', () => {
  test('Proper creation of Max Heap class and one insertion', () => {
    const mockMaxHeap = new MaxHeap();
    expect(mockMaxHeap._data).toEqual([]);

    mockMaxHeap.insert(4);
    expect(mockMaxHeap._data).toEqual([4]);
  });

  test('Proper insertion of a single value, multiple times', () => {
    const mockMaxHeap = new MaxHeap();

    mockMaxHeap.insert(4);
    mockMaxHeap.insert(10);
    mockMaxHeap.insert(3);
    mockMaxHeap.insert(15);
    mockMaxHeap.insert(20);
    mockMaxHeap.insert(0);

    expect(mockMaxHeap._data).toEqual([20,15,3,4,10,0]);
  });
});

describe('Min Heap', () => {
  test('Proper creation of Min Heap class', () => {
    const mockMinHeap = new MinHeap();

    expect(mockMinHeap._data).toEqual([]);
  });

  test('Proper insertion of a single value, multiple times', () => {
    const mockMinHeap = new MinHeap();

    mockMinHeap.insert(4);
    mockMinHeap.insert(10);
    mockMinHeap.insert(3);
    mockMinHeap.insert(15);
    mockMinHeap.insert(20);
    mockMinHeap.insert(0);

    expect(mockMinHeap._data).toEqual([0,10,3,15,20,4]);
  });
});