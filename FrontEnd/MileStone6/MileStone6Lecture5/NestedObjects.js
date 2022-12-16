// here we learn about Nested Objects:
// so when we create a object inside an object and object that is known as Nested object:
// we can create the nested objects because the value of an object's property can be anything:

var student = {
  name: "abc",
  rollNo: 135,
  marks: 90,
  2: "two",
  /// now under this object we can also create another object: were we can define. Like the address of the student:
  address: {
    city: "new delhi",
    pincode: 1100,
  },
};

// here we are printing the hole student object.which also print its nested object also:
console.log(student);

// if we only want to print the Nested object of the student object: then we can do that in this way:
console.log(student.address);

// we can also access the nested object's particular value:like this:
console.log(student.address.city);
// when we are accessing the particular value of the nested object we can access through the [] square brackets also:
console.log(student.address["pincode"]);

// here we have problem related to Nested object in the topic:
// In this problem we are learning that how we can create a nested object without writing it in under the main object:
// means we can also write the nested object outside the main object:with providing a refrenece-address of the nested object to the main object:

// here we create main object:
var student1 = {
  name:"john",
  age:30,
  rollNo:12,
}

// here we create nested object: and connect it with main object:through refrenece-address:
student1.address1 ={
  city:"gurugram",
  state:"haryana",
}

console.log(student1);
delete student1.rollNo;
console.log(student1);

//

