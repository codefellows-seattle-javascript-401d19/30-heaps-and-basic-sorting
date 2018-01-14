'use strict';

class maxHeap {
  constructor(){
    this._data = [];
  }

  insert(value){
    this._data.push(value);
    this._bubbleUp(this._data.length - 1);
  }

  _bubbleUp(index) {
    if (!index)
      return;

    let parentIndex = this._parentIndex(index);

    if (this._data[parentIndex] < this._data[index]) {
      this._swap(parentIndex, index);
      this._bubbleUp(parentIndex);
    }
  }

  _parentIndex(index) {
    return Math.floor((index - 1) / 2);
  }

  _swap(i, j) {
    let temp = this._data[i];

    this._data[i] = this._data[j];
    this._data[j] = temp;
  }

  peek(){
    if (this._data.length === 0){
      return null;
    }

    return this._data[0];
  }
}

module.exports = maxHeap;