// one way of creating object:
var obj = {};
// other way of creating object:
var obj = new Object();

// here we create a object:
// 1 =  var student = { name: "abc", rollNO: 135, marks: 90 };

// 2 = if we create a objects properties  or keys  like this:like here we create a name property with special character:
// var student = { "-name": "abc", rollNO: 135, marks: 90 };

// 3 = if we create a object properties or keys like with the help of number:like this:
var student = { "-name": "abc", rollNO: 135, marks: 90,"2":"two" };



console.log(student);

// here we also have two ways to access the property of the object:
// first is (.)operator:
console.log(student.marks);
// the  disadvantage of the (.) operator is that we are not able to  access the specail character properties through the (.)operetor:
// 1:
console.log(student.name); 

// 2:
// second is [] square brackets:
console.log(student["name"]);
// with square  brackets we can also access  the special character properties:
console.log(student["-name"]);

// 3: we can also did not access the number typee object property  with the help of (.) operator:
// console.log(student."2");
// we have to use the [] square brackets:
console.log(student[2]);

// if we create a printproperty function:then In under that function we did not use the (.) operator to print the property of the object:we have to use the [] square brackets:
function printproperty(obj,prop){
  // here we are  using the [] square brackets to access property of the object:
  console.log(obj[prop]);
}


// here we are using the function to print the any property of the obect:
printproperty(student,"marks")