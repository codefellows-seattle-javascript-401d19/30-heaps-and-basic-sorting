'use strict';

class maxHeap{
  constructor(){
    this._data = [];
  }

  peek(){
    if(this._data.length === 0){
      return null;
    }
    return this._data[0];
  }

  _getParentIndex(index){
    if(index === 0){
      return null;
    }
    let parentIndex = Math.floor((index - 1) / 2);
    return parentIndex;
  }

  _getLeftIndex(index){
    return Math.floor((index * 2) + 1);
  }

  _getRightIndex(index){
    return Math.floor((index * 2) + 2);
  }

  _swapValues(index1, index2){
    let tempValue = this._data[index1];
    this._data[index1] = this._data[index2];
    this._data[index2] = tempValue;
  }

  bubbleUp(index){
    let parentIndex = this._getParentIndex(index);

    if(parentIndex === null){
      return;
    }else if(this._data[index] > this._data[parentIndex]){
      this._swapValues(parentIndex, index);
      this.bubbleUp(parentIndex);
    }
  }

  insert(value){
    if(typeof value !== 'number'){
      throw new TypeError(`__ERROR__ value must be a number`);
    }
    this._data.push(value);
    this.bubbleUp(this._data.length - 1);
  }

  getMinimum(index, rightMin = null, leftMin = null){
    console.log(rightMin, `rightMin`);
    console.log(leftMin, `leftMin`);
    let rightIndex = this._getRightIndex(index);
    let leftIndex = this._getLeftIndex(index);

    if(rightIndex <= this._data.length - 1){
      if(this._data[rightIndex] < this._data[index]){
        rightMin = this._data[rightIndex];
        this.getMinimum(rightIndex, rightMin, leftMin);
      }
    }

    if(leftIndex <= this._data.length - 1){
      if(this._data[leftIndex] < this._data[index]){
        leftMin = this._data[leftIndex];
        this.getMinimum(leftIndex, rightMin, leftMin);
      }
    }

    if(leftMin < rightMin){
      return leftMin;
    }
    return rightMin;
  }
}

module.exports = maxHeap;
