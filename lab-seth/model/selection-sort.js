
const selectionSort = (array) => {
  //Repeatedly Pick the smallest element to append to the result
  //- Find the Smallest and put it to the first positon
  //- find the next smallest and put it to the second positon
  //- repeat until all elements are in the right positions

  for(let i = 0; i < array.length -1; i++){
    
    let min = i;
    for(let j = i + 1; j < array.length; j++){
      
      if(array[j] < array[min]) min = j;
    }
    //swap the data
    let temp = array[i];
    array[i] = array[min];
    array[min] = temp;
  }
}

