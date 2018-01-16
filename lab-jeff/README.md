# Code 401 lab 30
This lab was to practice with a max heap and selection sort

## Code Style
Standard Javascript with ES6.

## Getting Started
Copy the contents of the lib folder into your project directory.  

To use the binary search tree methods, put ```const MaxHeap = require('../lib/max-heap');``` into your javacript file.  You will then have access to the methods by using the constructor with the 'new' callout.  For example, ``` let maxHeap = new MaxHeap()``` creates a new instance of a max heap.  To append a value to this heap with the value 2, ```maxHeap.insert(2)```.


Selection Sort is an in-place array sorting method.  To use it, put ```const selectionSort = require('../lib/selection-sort');``` into your javascript file.  Then pass an array into its function.

To run the tests, also copy the test folder.  You will also need to install jest via npm at the command line by typing ```npm install -D jest```.  Then, you can type ```npm run test``` to run the tests.

## MaxHeap methods
### insert(value)
This method has an arity of 1.  It expects a value which it will store.  The value must be a number else the method throws an error.  The method puts the value in a binary tree such that each value is always greater than it's children.  As such, the root node is always the greatest value in the heap.

### extractMaximum()
This method has an arity of 0. This method returns the maximum value in the heap (which is always the root) and rearranges the heap such that the root is the next highest value in the heap.  If the heap contains no values, null is returned.

### peek()
This method has an arity of 0.  It returns the maximum value in the heap but does not make any changes to the heap itself.  If the heap contains no values, null is returned.

## Selection Sort method
### selectionSort(array)
The constructor has an arity of 1.  The argument is an array.  It returns an array ordered from min to max.
