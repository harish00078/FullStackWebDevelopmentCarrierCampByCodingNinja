// here we learn about the (arrays) another  function in javascript named as (splice-function):
// splice function or method is used to remove or replace or add elements to an array:basically used to make changing in the array:

var arr = [1,2,3,4,5];
console.log(arr);

// here we are using the splice function on the array:
arr.splice(1,1,6);
console.log(arr);

// if we simple use the splice function with only one argument value.then it will only print that index value all the others values will we deleted.
arr.splice(1);
console.log(arr);

// we can also insert the value  in the array using splice function.without  deleting current value of that index:
var arr1 = [1,2,3,4,5,6];

arr1.splice(2,0,10);

console.log(arr1);

//we can also insert the more than one value:
arr1.splice(3,0,20,30,40);
console.log(arr1);

// we can use the splice function for if we want to delete some values from the array. and put the another values on there position:
arr1.splice(2,2,40,50);
console.log(arr1);
