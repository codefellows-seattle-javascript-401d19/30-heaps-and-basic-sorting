# Lab 30 Heaps and Basic Sorting

## Overview

This is a model of a max heap and three basic sorting algorithms.
***
## Getting Started

Basic understanding of git and npm is assumed. Clone down the repo and navigate to the directory. Install by running `npm i`. If you wish to use these modules, simply copy the desired module's file into your project and require it into the script in which you would like to use it. For example:

```const MaxHeap = require('./model/max-heap')```

To run tests to check functionality, do an

```npm run test```

A new max heap can be instatiated with `new MaxHeap(`<`...options`>`)`. The sort module is not a constructor, but rather a collection of Array methods. To use these, simply pass in an array of numbers to one of the methods. A sorted array will be returned.
***
## Modules

The modules being exported are max-heap and sort.
***
### MaxHeap:

The max heap is a data structure which always keeps the maximum value in the root position. This works by using an array internally, but it helps to think of the data structure as a balanced binary tree, as it keeps the big O of insertion and extraction at log(n).

#### MaxHeap.insert:

This method has an arity of one and takes any number as an argument. This will push the number at the end of the internal array, and use a private internal method to check the insertion and move it up the tree as needed until the inserted value exists at the correct level in the tree. In the worst case, the inserted number is the largest in the heap, and it would make log(n) node swaps moving all the way to the root. The n in this case is the number of nodes in the tree.

#### MaxHeap.peek:

This method doesn't take any arguments, it simply returns the largest number in the heap. This has a lookup time of O(1).

#### MaxHeap.extractMaximum:

This method also doesn't take any arguments. It returns the largest number in the heap, also removing it from the heap. This operation places the last element of the internal array at the top, and 'bubbles down', having in the worst case a big O of log(n).

***
### Sort:

This is a module which contains three sorting methods. They all have an arity of one, and valid input for all of these methods is restricted to arrays of numbers. They all will take an unsorted array and return a sorted one. They will do this by different means, but they all perform the sort 'in-place', i.e. they mutate the input array. All of these methods have a big O of n^2. This is because they each in one way or another loop through the input, and for each value loop through a second time to compare that value to the rest of the array.


#### Sort.selectionSort:

This method works by doing a loop through the entire array. Within that loop, it loops through the remainder of the array, the unsorted portion of the array, and finds the smallest number. It then splices that value and pushing it to the end of the sorted portion of the array (i.e. the beginning of the unsorted portion).

#### Sort.bubbleSort:

This method works by comparing each value to the next, and swapping where necessary. It will loop through until the array is sorted. On each iteration, the largest values will get pushed to the end; the sorted array is built in place from largest to smallest.

#### Sort.insertionSort:

This method works by looping through the array and then looping backwards from that position to place that value in the correct spot. The sorted array is built in place at the beginning of the array as the loop through the array occurs.

***
## Code Examples:

```javascript
const MaxHeap = require('./model/max-heap');
const Sort = require('./model/sort');

const heap = new MaxHeap();

heap.insert(5);
heap.insert(8);
heap.insert(3);

heap.peek(); // 8
heap.extractMaximum(); // 8
heap.peek(); // 5

const array1 = [3, 5, 4, 2, 1]
const array2 = [3, 5, 4, 2, 1]
const array3 = [3, 5, 4, 2, 1]

Sort.selectionSort(array1);
Sort.bubbleSort(array2);
Sort.insertionSort(array3);

console.log(array1) // [1, 2, 3, 4, 5] 
console.log(array2) // [1, 2, 3, 4, 5] 
console.log(array3) // [1, 2, 3, 4, 5] 
```
***
## Technology/Credits

By Andrew Bloom. Using jest to test functionality.