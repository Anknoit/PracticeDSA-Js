// Making a pair loop
// (1,1)(1,2)(1,3)(1,4)(1,5)(2,1)(2,2)(2,3)(2,4)(2,1).....
const arr = [1,2,3,4,5];
function arrLog(array){
  for (let i =0; i<array.length; i++){
    for(let j=0; j<array.length; j++){
    console.log("("+array[i]+","+array[j]+")")      
    }
  }
}
arrLog(arr)