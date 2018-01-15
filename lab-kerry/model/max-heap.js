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
		this._bubbleUp(0);
		return max;
	}

	peek() {
		if(this._data.length <= 0)
		return null;

	return this._data[0];
	}

	selectionSort(array) {

	if (array.length <= 0) {
		throw 'Array must contain at least one number';
	}

	if (array.length === null) {
		throw 'Array must not be null';
	}

	for (let i = 0; i < array.length; i++) {
		let minimumIndex = i;

		for (let j = i + 1; j < array.length; j++) {
			if (array[j] < array[minimumIndex]) {
				minimumIndex = j;
			}
		}
		this._swapValues(i, minimumIndex)
		}
	return array;
	}

};

module.exports = MaxHeap;