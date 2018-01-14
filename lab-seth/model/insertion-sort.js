'use strict';

const insertionSort = (array) => {
  //Maintain sorted subarray and repeat insertion of new elements into it
  //- Take first element as sorted sub array
  //- Insert second second element and swap elements if needed
  //- insert third element and swap if needed
  if(((typeof array !== 'object') || (typeof array[0] !== 'number'))) throw new TypeError('_ERROR_ Input must be an array with numbers!');

  for (let i = 1; i < array.length; i++){
    let temp = array[i];
    let j;
    for(j = i; j > 0; j--){
      if(array[j - 1] < temp)
      break;

      array[j] = array[j - 1];
    }
    array[j] = temp;
  }
  return array;
}

let array1 = [1,4,7,2,9,4,9,0];
let array2 = [10,5,3,7,8,9,2,4,5,7,8];