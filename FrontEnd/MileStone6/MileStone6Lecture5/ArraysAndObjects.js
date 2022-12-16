// here we learn about Arrays And Obects:
// IMP = Arrays are obects in the javascript.but if you see an Array on a console.then they are actually key-value pairs with the positive Integer as the keys:
// if we are saying that arrays are the objects in the javascript.then what are there keys:there [index-number] are there keys:
var arr = [20,30,40,50];
console.log(arr);
// we can check that array's are objects in the javascript:by print the array value through giving them a index_number:
console.log(arr[0]);
// that why in javascript the array index's are in the form of (string) datatype:
console.log(arr["1"]);

// here we have object:
var student = {
  name: "abc",
  age: 12,
}

//  Arrays and Objects in the javascript: they are not perfeclty similar: only the difference is that.
// we can use the length function on the (Arrays) not on the (objects) like this:
console.log(arr.length);
console.log(student.length);

// also because of the length function that array have we can also jump on the arrays index numbers:means we can create a empty array indexes or left with the empty array index:like this:
arr[7] = 98;
console.log(arr);

