'use strict';

let MinHeap = require('../model/min-heap');

let Heap = new MinHeap();

Heap.insert(100);
Heap.insert(19);
Heap.insert(36);
Heap.insert(25);
Heap.insert(1);
Heap.insert(17);
Heap.insert(3);
Heap.insert(2);
Heap.insert(7);


console.log('MinHeap', Heap);



describe('Testing MinHeap and its public methods', () => {

	describe('MinHeap creation and insert', () => {
		test('MinHeap should be created and insert should place lower values higher in the tree.', () => {

		})
	})
})

