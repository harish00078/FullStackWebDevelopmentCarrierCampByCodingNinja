// here we learn that how we can iterate over that array: in javascript:
// we have array:
var arr = [2,3,4,5,6,7];

//first way to iterate over that array is (for-loop):
for(var i = 0; i < arr.length; i++){
  console.log(arr[i]);
}

// second way to iterate over the arrays are (for-each)method:
// In for-each method we also have to pass the argument:In the argument we have to pass the (function) that we want to iterate over:
// so we have to create the print function of array first.then we have to pass that fucntion to the (for-each) method as arguments:

// here we create print array element function:
// In this function we can also pass the (Index) value:
// we can pass the array itself(array):
function print(element){
  console.log(element);
}

arr.forEach(print);
