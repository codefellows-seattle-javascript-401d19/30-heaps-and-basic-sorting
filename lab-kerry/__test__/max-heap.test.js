'use strict';

let MaxHeap = require('../model/max-heap');

let Heap = new MaxHeap();

Heap.insert(100);
Heap.insert(19);
Heap.insert(36);
Heap.insert(25);
Heap.insert(1);
Heap.insert(17);
Heap.insert(3);
Heap.insert(2);
Heap.insert(7);
Heap.insert(32);
Heap.insert(110);


console.log('MaxHeap', Heap);

console.log('Max value of heap', Heap.extractMaximum());


describe('Testing MaxHeap and its public methods', () => {
	
	describe('MaxHeap creation and insert', () => {
		test('MaxHeap should be created and insert should place greater values higher in the tree.', () => {

		})
	})
})

