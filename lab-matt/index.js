// 'use strict';

const MinHeap = require('./model/min-heap');

let min = new MinHeap();

min.insert(2);
min.insert(3);
min.insert(5);
min.insert(9);
min.insert(1);
min.insert(20);
min.insert(10);
min.insert(8);
min.insert(123);
min.insert(34);
min.insert(-3);
min.insert(-300);


console.log(min);

// console.log(min.extractMininum());

// arr = min._data;

// console.log(arr);

// function bubbleSort(arr) {
//   let swapped;
//   do {
//     swapped = false;
//     for (let i = 0; i < arr.length; i ++) {
//       let temp = 0;
      
//       if (arr[i + 1] && arr[i] > arr[i + 1]) {
//         temp = arr[i];
//         arr[i] = arr[i + 1];
//         arr[i + 1] = temp;
//         swapped = true;
//       }
//     }
//   } while (swapped)
    
//   return arr;
// }

// console.log(bubbleSort(arr));

// console.log(min.bubbleSort());
min.bubbleSort();

console.log(min);