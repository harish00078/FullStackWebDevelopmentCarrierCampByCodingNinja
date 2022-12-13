// here we learn about that how the functions work with the array in the javascript:
// so arrays in javascript basically are hetrogeneous.means that array in javascript can store the  different types of values at the same time:
// like this:
var arr = ["abc", 10, true, 20];
console.log(arr);

// other function are:

// 1 = push function is used : if we want to add any value at the end of the array:
arr.push(10);
console.log(arr);


// 2 = pop function is used : if we want to remove any value at the end of the array:
arr.pop();
console.log(arr);

// 3 = shift function is used: if we want to shift the any value of the array:by default its doing the left shifting:
arr.shift();
console.log(arr);
// we can also do the right-shift by using (unshift) method:while shifting we also have to provide him the value:for acquire that space:
arr.unshift(8);
console.log(arr);