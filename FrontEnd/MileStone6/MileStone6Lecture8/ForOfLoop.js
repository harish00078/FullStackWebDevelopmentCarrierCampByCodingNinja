// here we learn about (ForOf-Loop):
// ForOf:- the for-Of statement creates a loop iterating over iterable objects:- including built-in string,arrays; arrays-like objects:

// for example:- this is the simple way of iterating over the array:
var arr = [1,2,3,4];

for(let i = 0; i < arr.length;i++){
  console.log(arr[i]);
}

// here we are using the (for-of) statment loop: for iterating over the array:
for(let i of arr){
  console.log(i);
}