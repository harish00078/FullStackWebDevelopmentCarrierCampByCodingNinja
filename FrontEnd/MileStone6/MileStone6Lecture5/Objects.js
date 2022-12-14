// here we learn about Objects in the javascript:
// Objects in javascript are collection of properties in a key-value pair:

// we use currly brackets for creating object in javscript:
var student = {name:"abc", rollNo: 135, marks:90};
console.log(typeof(student));

// here we are printing the object that we have created:
console.log(student);

//we can also access the particular property of the object:
console.log(student.marks);

// we can also change the particular property's value:
student.marks = 100;
console.log(student);

// if we try access the property in the javascript's object which we did not have define then we will have a output as (undefined):
console.log(student.sem);

// we can aslo differently add the properties in the object:
student.sem = 4;
console.log(student);