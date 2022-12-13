// here we learn about (Arrays):
// In this way we can create the (Array) in the javascript:
// One way of creating array in the javascript:
// var arr = [1,2,3,4];
// console.log(arr);

// second way of creating array in the javascript:
var arr1 = new Array(1,2,3,4,5);
console.log(arr1);

// using this way in javascript we can access the any particular value of the array:
console.log(arr1[3]);

// if we try to access the out of index value then we have output as (undefined):
console.log(arr1[6]);


// if we want to assign a new value to the particular index of the array we can do that in this way in javascript:
arr1[2] = 90;
// checking that value changed in the array or not:
console.log(arr1);


// In javascript we can also insert the value at  the invalid array index: but if there is gap between in the array index from current index to new added index:then javascript will show the (empty) value on that index:
arr1[7]  = 100;
console.log(arr1);

// we can also check the array length:using (length) function:
console.log(arr1.length);

// we  can also create the (empty) array:
var arr3 = new Array();
console.log(arr3);

// we can also provide or define  the length of the array:
var arr2 =  new Array(2);//here (2) is the length of the array:
console.log(arr2);