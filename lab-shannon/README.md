## Purpose
This program implements a max heap data structure as well as two in-place array sorting algorithms: insertion and selection.

## Set Up
1. clone the repo into whatever directory you choose
2. 'npm i' (to install all dependencies)
4. run 'npm run test' to run all tests

## Methods
  1. Max Heap
    * insert(value): Inserts a new value into the heap. If the value added is the largest value on the heap it will be moved to the root; otherwise it will be added to the next open space. The value provided must be an integer.
    * peek: Returns the value at the root of the heap.
    * getParent(index): Returns the parent index of the element who's index is provided. The index provided must be a number.
    * getRightIndex(index):Returns the index of the right child of the element who's index is provides. The index provided must be a number.
    * getLeftIndex(index):Returns the index of the left child of the element who's index is provides. The index provided must be a number.
    * getMinimum(index): Returns the minimum value of the tree who's root is the index provided. The index must be a number.
    * bubbleUp(index): Moves the value at the index provided up the tree, swapping it with its parent as it moves up the heap. The index provided must be a number.
    * swapValues(index1, index2): Switches the values at the two indices such that the value at index1 moves to index2 and the value at index2 moves to index1. Both indices provided must be integers.
  2. Insertion Sort
    * insertionSort takes a single parameter, an array of integers, and returns an array sorted from smallest to largest. Sorting occurs by iterating through the array one element at a time, finding the appropriate placement for the value, shifting all values to the right of the correct location up one, then inserting the value in the 'hole'. If an element in the array is not a number an error will occur.
  3. Selection Sort
    * selectionSort takes a single parameter, an array of integers, and returns an array sorted from smallest to largest. Sorting occurs by iterating through the array one element at a time, finding the smallest value, placing it at the beginning of the array, then finding each subsequent smallest value and placing it behind the last placed element. If an element in the array is not a number an error will occur.

## Technologies Used
  ES6
  jest

## License
MIT

## Credits
* insertion algorithm inspiration:  https://www.tutorialspoint.com/data_structures_algorithms/insertion_sort_algorithm.htm
* Vinicio Vladimir Sanchez Trejo & the Code Fellows curriculum provided the base .babelrc, .eslintrc, .eslintignore, and .gitignore files.
