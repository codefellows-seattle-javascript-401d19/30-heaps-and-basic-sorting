'use strict';

class MaxHeap{
	constructor() {
		this._data = [];
	}

	_getParentIndex(index) {
		if(index === 0)
			return null;

		return Math.floor((index - 1) / 2);
	}

	_getLeftIndex(index) {
		return (2 * index) + 1;
	}

	_getRightIndex(index) {
		return (2 * index) + 2;
	}

	insert(value) {
		if(typeof value !== 'number')
		throw new TypeError ('__ERROR__ value should be integer');

		this._data.push(value);
		this._bubbleUp(this._data.length - 1);
	}

	_swapValues(indexA, indexB) {
		let tempSwapValue = this._data[indexA];

		this._data[indexA] = this._data[indexB];
		this._data[indexB] = tempSwapValue;
	}

	_bubbleUp(index) {
		if(this._getParentIndex(index) === null)
		return;

		let parentIndex = this._getParentIndex(index);

		if(this._data[parentIndex] < this._data[index]) {
			this._swapValues(parentIndex, index);
			this._bubbleUp(parentIndex);
		}
	}

	_bubbleDown(index) {
		let minIndex = index;
		let leftIndex = this._getLeftIndex(index);
		let rightIndex = this._getRightIndex(index);

		if(leftIndex <= this._data.length - 1) {
			if(this._data[minIndex] < this._data[leftIndex])
				minIndex = leftIndex;
		}

		if(rightIndex <= this._data.length - 1) {
			if(this._data[minIndex] < this._data[rightIndex])
				minIndex = rightIndex;
		}

		if(minIndex !== index) {
			this._swapValues(index, minIndex);
			this._bubbleDown(minIndex);
		}
	}

	extractMaximum() {
		if(this._data.length <= 0)
			return null;

		let max = this._data[0];
		let lastValue = this._data.pop();
		this._data[0] = lastValue;
		this._bubbleDown(0);
		return max;
	}

	peek() {
		if(this._data.length <= 0)
		return null;

		return this._data[0];
	}

	selectionSort() {

	if (this._data.length <= 0) {
		throw 'Array must contain at least one number';
	}

	if (this._data === null) {
		throw 'Array must not be null';
	}

	for (let i = 0; i < this._data.length; i++) {
		let minimumIndex = i;

		for (let j = i + 1; j < this._data.length; j++) {
			if (this._data[j] < this._data[minimumIndex]) {
				minimumIndex = j;
			}
		}
		this._swapValues(i, minimumIndex)
		}
		return this._data;
	}

	heapSort() {

	if (this._data.length <= 0) {
		throw 'Array must contain at least one number';
	}

	if (this._data === null) {
		throw 'Array must not be null';
	}

	this._generateHeap();

	for (let i = this._data.length - 1; i > 0; i--) {
		this._swapValues(i, 0);
		this._generateMaxHeap(0, i);
		}
		return this._data;
	}

	_generateMaxHeap(index, length) {
		
		while (this._data) {
			
		let leftIndex = this._getLeftIndex(index);
		let rightIndex = this._getRightIndex(index);
		let largest = index;
			
		if (leftIndex < length && this._data[leftIndex] > this._data[largest]) {
			largest = leftIndex;
		}
		if (rightIndex < length && this._data[rightIndex] > this._data[largest]) {
			largest = rightIndex;
		}
		if (index === largest) {
		 	break;
		}
		this._swapValues(index, largest);	
		index = largest;
		}
	}

	_generateHeap() {
	for (let i = Math.floor(this._data.length / 2 - 1); i >= 0; i--) {
		this._generateMaxHeap(i, this._data.length);
		}
	}
};

module.exports = MaxHeap;
