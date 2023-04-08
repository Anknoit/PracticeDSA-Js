//Create a function with two arrays and return True or False if the arrays share a common element

// Ask what is important time complexity or space complexity

//About array whether it is static or scalable with time, whether it has same type of elements or not

function arrayVal(arr1, arr2){
  for(let i=0; i<arr1.length; i++){
    for(let j=0; j<arr2.length; j++){
      if (arr1[i]===arr2[j]){
        return true;
      }
    }
  }
  return false; 
}
arrayVal(["a","b",'c','d'], ["e","f","g",'h'])

//Not very efficient, O(n^2)
