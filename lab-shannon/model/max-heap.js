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

  _swapValues(val1, val2){
    let tempValue = this._data[val1];
    this._data[val1] = this._data[val2];
    this._data[val2] = tempValue;
  }

  bubbleUp(index){}

  bubbleDown(index){}

  insert(value){
    this._data.push(value);
  }

  getMax(){}
}

module.exports = maxHeap;
