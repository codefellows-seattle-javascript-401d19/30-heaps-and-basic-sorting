![cf](https://i.imgur.com/7v5ASc8.png) Lab 30: Max Heap & Basic Sorting
======

* Purpose of this lab is to practice implementation of max heap and basic sort in place array methods - used method in this lab is `insertion-sort`

## Code Style
* Vanilla Javascript and Jest for testing


## Tech / framework used

* [npm package jest](http://facebook.github.io/jest/) used for TDD



## Installation and How To Use

  * Fork || clone this repo to you computer.

  * Run `npm install`

  * To run tests run `npm test` command.


## Max Heap

* Max heaps are data structures in which value in each internal node is greater than or equal to the values in the children of that node. With find max value of constant lookup time - Big 0(1).

## Sorting inplace methods

`insertion-sort`
* This method expects an array as parameter. If parameter is not an array - error will be thrown. This method is basic in place sorting method returns array sorted from smallest to biggest. Used for small data sets, at each iteration, insertion sort removes one element from the input data, finds the location it belongs within the sorted list, and inserts it there. It repeats until no input elements remain.

  ``` javascript
  let testArray = [6, 3, 4, 7, 5];
  let sortedArray = SortObj.insertionSort(testArray);
  console.log(sortedArray); // [3, 4, 5, 6, 7]
  ```


## Licence
MIT © Pedja Josifovic

