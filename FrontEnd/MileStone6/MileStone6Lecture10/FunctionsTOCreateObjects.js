// here we learn about the (OOPS) or (Objects) it the javascript:
// In other languages:we basically create classes:and under those classes:we have our objects related to that class:
// but in javascript:it  does not work this way:because in javascript: we did not have any class:
// In javascript we only  have (object):even is that the (function) are in the javascript:are also the (objects):


//=> so if we have to create the (objects) in the javascript:
// IMP = we have to create it with the help of (variable) under variable:we can create our object:for the (particular) thing:like in  other languages:we do  that with the help of (Classes):

// for example:if we want to create the (student) object:we do that with the help of (varaible):basically we create the object and gave it the  name with the help of variable keyword:

// if we have to create the one (Object):

var student1 = {
    name: "John",
    age: 20,
    marks: 80
};




// but if we have to create the (multiple) object:then this is not the correct way to do that:like we are not able to create the (100 or 1000) of objects by our own self:
// so for that we can do is: we can create the (function) which will help us to create the (objects):
// we will simple pass all the argument to the (function)that we want to use in our (object):

function createStudent(name,rollNo,marks){
  
  // here we are creating the student object:with the help of function (arguments):
  var student = {};
  student.name = name;
  student.rollNo = rollNo;
  student.marks = marks;

  // after  creating the student: we return the student object from the (function):
  return student;
}



// and here we are creating the (student) object:with the help of function:that we have created:
var student2 = createStudent("harish",20,80);

// and then after creating the student object with the help of function:we have to print that object:
console.log(student2);




console.log(student1);