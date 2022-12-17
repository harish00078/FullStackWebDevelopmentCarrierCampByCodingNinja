// here we learn more about the objects and Arrays:
// like we have Array:
var arr = [20,30,40,50];

// and we also have Objects:
var obj = {
  "0":20,
  "1":30,
  "2":40,
  "3":40,
}

// like we can add the property in the object as well as also in the array:because in javascript Array are also a objects:
// like here we add the property in the array:
arr.prop1 = "abc";
// and add the same property in the object also:
obj.prop1 = "abc";



// but they are slightly different from the each other:
// like if we create property in the array.then that will not we added in the length of the array:
console.log(arr);
// here we can clearly see that the property will not be added in the arr's length:
console.log(arr.length);

// so if we want to add any value in the array:then we also have to define its index:then that value will we added in the length of the array:
// like In this way:
arr[10] = "harish";
console.log(arr);
// know array will have increment in its length:
console.log(arr.length);


// IMP = here we also have another method to iterate over the arrays in the javascript:name as (for-in):
// here (i) represent the index's of the array:
for(var i in arr){
  console.log(i);
}


