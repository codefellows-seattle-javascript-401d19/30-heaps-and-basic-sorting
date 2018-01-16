# Code Fellows: Seattle 401 JavaScript - 401d19

## Lab 30: Max Heap & Basic Sorting


### Author: 
Catherine Looper

### Motivation

### Build

#### Max Heap

Max Heap is a data structure that stores the maximum value in its root. max-heap.js contains the external methods: `insert(value)`, `extractMaximum()`, and `peek()`.

##### `insert(value)`

This method accepts a value that must be a number. The value is then inserted into the correct position in the heap. This method has a Big O of log(n) where n is the number of nodes in the heap.

##### `extractMaximum()`

This method does not accept any arguments. This method removes the biggest number in the heap and returns it. This method has a Big O of log(n).

##### `peek()`

This method does not accept any arguments. This method returns the biggest number in the heap. This method has a Big O of O(1).

##### To test the Max Heap:

```
  test('testing that insert method is functioning properly and that peek returns max value', () => {
    const testMaxHeap = new MaxHeap();

    testMaxHeap.insert(6);
    expect(testMaxHeap.peek()).toEqual(6);
    testMaxHeap.insert(10);
    expect(testMaxHeap.peek()).toEqual(10);
    testMaxHeap.insert(15);
    expect(testMaxHeap.peek()).toEqual(15);
  });

  test('testing that extractMaximum method is functioning properly', () => {
    const testMaxHeap = new MaxHeap();

    testMaxHeap.insert(10);
    testMaxHeap.insert(7);
    testMaxHeap.insert(8);
    testMaxHeap.insert(5);
    testMaxHeap.insert(9);
    expect(testMaxHeap.extractMaximum()).toEqual(10);
    expect(testMaxHeap.extractMaximum()).toEqual(9);
    expect(testMaxHeap.extractMaximum()).toEqual(8);
    expect(testMaxHeap.extractMaximum()).toEqual(7);
    expect(testMaxHeap.extractMaximum()).toEqual(5);
  });
  ```

#### Bubble Sort

This method accepts an unsorted array as an argument and returns a sorted array. This method has a Big O of O(n^2) due to nested loops. This method iterates through the array and compares each value to the value next to it. If the values need to be swapped, then the method will swap them.

```
test('bubble sort method should return a sorted array', () => {
    const arrayToSort = [8, 2, 7, 25, 3, 6, 4];
    
    expect(bubbleSort(arrayToSort)).toEqual([2, 3, 4, 6, 7, 8, 25]);
  });

```

### Limitations

To use this app - it is assumed that the user has familiarity with the tech and frameworks listed below.

### Code Style

Standard JavaScript with ES6.

### Tech/Framework Used

* eslint
* jest

### How to use?

* Step 1. Fork and Clone the Repository.
* Step 2. `npm install`
* Step 3. To test this application: `npm run test`


### Credits

* Code Fellows

### License

MIT © Catherine Looper

