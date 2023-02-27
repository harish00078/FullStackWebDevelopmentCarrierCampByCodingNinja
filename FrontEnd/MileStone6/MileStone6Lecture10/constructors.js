//  here we learn about the (constructor) in javascript:

// Constructor: you can create objects in javascript using curly braces ({}) syntax:but what if you need to create multiple similar objects:you can either write the same syntax for very object or you can use the constructor to create objects:

// => using curly braces ({}) syntax to create multiple objects can create certain inconsistencies in code:there can be spelling mistakes,changes to all the  objects will be difficult etc:
// => TO overcome all the  above inconsistencies.javascript provides a function constructor.the constructor provides a blueprint/structure for objects:you use  this same structure to create multiple objects:

// IMP = objects can be created by calling the constructor function with the (new) keyword:


// for example: we have function:that we use create a new object:

// function createStudent(name,rollNo,marks){
//   var student = {};
//   student.name = name;
//   student.rollNo = rollNo;
//   student.marks = marks;
//   return student;
// }


// other we have constructor method:to create a new object:
// the first character of the (constructor method) is in the form of (capital) letter:
function Student(name,rollNo,marks){

  // 1 = In constructor:we did not have to define the (object) under the constructor:

  // var student = {};

  //  2 = and aslo:if we are not declaring the (student) object in the Constructor:then we have to use the ('this') keyword:
  this.name = name;
  this.rollNo = rollNo;
  this.marks = marks;

  // we also did not have to return the (object):

  // return student;
}


// for creating (object) from the constructor:we only have to use the (new) keyword:
// IMP = objects can be created by calling the constructor function with the (new) keyword:
var student1 = new Student("John","123456789","90");
var student2 = new Student("Mike","123456789","80");
var student3 = new Student("Mike","123456789","70");
var student4 = new Student("Mike","123456789","60");
var student5 = new Student("Mike","123456789","50");
var student6 = new Student("Mike","123456789","40");
var student7 = new Student("Mike","123456789","30");
var student8 = new Student("Mike","123456789","20");
var student9 = new Student("Mike","123456789","10");
var student10 = new Student("Mike","123456789","0");
var student11 = new Student("Mike","123456789","-10");
var student12 = new Student("Mike","123456789","-20");
var student13 = new Student("Mike","123456789","-30");
var student14 = new Student("Mike","123456789","-40");
var student15 = new Student("Mike","123456789","-50");


// and here we are printing the students object in the console:
// that we have create through constructor:
console.log(student1);
console.log(student2);
console.log(student3);
console.log(student4);
console.log(student5);
console.log(student6);
console.log(student7);
console.log(student8);
console.log(student9);
console.log(student10);
console.log(student11);
console.log(student12);
console.log(student13);
console.log(student14);
console.log(student15);
