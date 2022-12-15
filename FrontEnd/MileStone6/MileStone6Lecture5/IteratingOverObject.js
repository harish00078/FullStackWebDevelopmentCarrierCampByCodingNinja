// here we learn about that how we can create iterater over the Objects:
var student = { name: "abc", rollNO: 135, marks: 90,"2":"two" };

// 1 = (one) way of iterating on the object properties or keys and with there values in the javascript:

// In this way in javascript we can Iterate over object's properties or we can say keys:
// here (prop) represent the Properties:
for(var prop in student){
  // and here we are printing those properties:
  // we can also print  the values of the properties:by write object name with [prop]:
  // like:student[prop]:
  console.log(prop, student[prop]);
}

// 2 = second way of iterating on the object properties or keys with there values also in the javascript:
// In second we are using the two (key) methods to print the properties of the object in javascript:

// a = first key method is to use (object.keys) with (object_name):like this:
var key = Object.keys(student);
console.log(key);
// b = second key method is to use (object.getOwnPropertyNames) with (object_name):
var key1 = Object.getOwnPropertyNames(student);
console.log(key1);


