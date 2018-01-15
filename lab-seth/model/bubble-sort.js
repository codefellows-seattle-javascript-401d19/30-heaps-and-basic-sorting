
const bubbleSort = (array) => {
  //repeat compar adjacent paris of elements and swap if necessary
  //- scan array, swapping pairs of elements if thye are not in order compared to each other, ( brings largest element to the end)
  //- Scan array again bubbling up the second largest element
  // - repeat until all elelments in order
  for(let i = array.length -1; i >= 0; i--){

    for( let j = 0; j <= i -1; j++){
      if(array[j] > array[j + 1]){
        //swap the data
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;

      }
    }
  }
  return array;
}
