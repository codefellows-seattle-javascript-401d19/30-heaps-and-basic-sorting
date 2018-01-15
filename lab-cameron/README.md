# Heaps And Basic Sorting

Features a max-heap implementation and a bubble-sort impementation.

# Tech Used

- JavaScript
- jest

# Features

### Max Heap

Max Heaps are a data structure that keep the largest value at the top
of the Heap, allowing for O(1) access.

```javascript
const Heap = require('model/max-heap');

// insertion Heap.insert(<value>), where value must be a number

Heap.insert(10);
Heap.insert(12);
Heap.insert(8);

Heap.insert('foo'); // throws a TypeError

// extractMaximum Heap.extractMaximum()

Heap.extractMaximum(); // returns 12
Heap.extractMaximum(); // returns 10
Heap.extractMaximum(); // returns 8
```

### Bubble Sort

```javascript
const bubbleSort = require('model/bubble-sort');

// bubbleSort(<unsortedArray>), where unsortedArray must be an Array

const unsortedArray = [3, 2, 1];

const sortedArray = bubbleSort(unsortedArray);

console.log(sortedArray); // returns 3, 2, 1
```

# Installation

- clone the repo
- require in the modules
- instantiate new `MaxHeap`'s
- sort using `bubbleSort`

# Tests

All tests done using Jest

# Credits

Cameron Moorehead

# License

GPL-3.0
