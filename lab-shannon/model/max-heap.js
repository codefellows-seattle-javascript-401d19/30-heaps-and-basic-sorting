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

  // bubbleDown(index){}

  insert(value){
    if(typeof value !== 'number'){
      throw new TypeError(`__ERROR__ value must be a number`);
    }
    this._data.push(value);
    this.bubbleUp(this._data.length - 1);
  }

  getMax(){}
}

module.exports = maxHeap;
