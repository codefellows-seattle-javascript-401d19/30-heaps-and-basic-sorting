'use strict';

let MaxHeap = require('../model/max-heap');

let Heap = new MaxHeap();

let heapFactory = () => {
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
};

describe('Testing MaxHeap and its public methods', () => {
	
	
	describe('MaxHeap creation/insertion', () => {
		beforeEach(() => {
			heapFactory();
		});

		afterEach(() => { 
			return Heap._data = []
		});

		test('MaxHeap should be created and abide by the rules of a MaxHeap.', () => {
			let expected = [110, 100, 36, 19, 32, 17, 3, 2, 7, 1, 25];
			expect(Heap._data).toEqual(expected);
			expect(Heap._data).toBeInstanceOf(Array);
			expect(Heap._data).toHaveLength(11);
		});

		test('Upon insertion of new greatest value, heap should reorganize to abide by the rules of a MaxHeap.', () => {
			Heap.insert(111);
			let expected = [111, 100, 110, 19, 32, 36, 3, 2, 7, 1, 25, 17];
			expect(Heap._data).toEqual(expected);
			expect(Heap._data).toBeInstanceOf(Array);
			expect(Heap._data).toHaveLength(12);
		});

		test('MaxHeap should throw error if no value passed.', () => {
			expect(() => {
				Heap.insert();
			}).toThrow();
		});
	})
})

