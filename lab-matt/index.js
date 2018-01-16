'use strict';

const MaxHeap = require('./model/max-heap');

let max = new MaxHeap();

max.insert(2);
max.insert(3);
max.insert(5);
max.insert(9);
max.insert(1);
max.insert(20);
max.insert(123);
max.insert(34);
max.insert(-3);
max.insert(-300);
max.insert(150);
max.insert(151);

console.log(max);
max.bubbleSort();
console.log(max);
console.log(max.peek());