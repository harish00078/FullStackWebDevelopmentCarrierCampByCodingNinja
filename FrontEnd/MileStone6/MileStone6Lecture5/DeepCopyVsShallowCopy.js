// here we learn about Deep-copy or Shallow copy:

// 1 = Deep-copy:In deep copy,the values that are copied in the new variable are copied and disconnected from the original variable,means if you try to change the new variable,the original variable should not have any changes:
var num = 5;
var copiedValue = num;

// if we change the copiedvalue: then the original value remain same:
copiedValue = 10;
console.log(num);

// IMP = using spread operator(...).we can also make copy of the (arrays) and (object):like this:
var susan = {
  name:'susan',
  age:30,
}

console.log("before using spread operator");
console.log(susan);


// here we are using (spead-operator):
var copiedSusan = {
  ...susan,
}

copiedSusan.name = "raj";
console.log("after using spread operator");
// here we change the original object value using:spread-operator:In deep-copy:
console.log(copiedSusan);
// here we have value of the original-object:
console.log(susan);




// 2 = Shallow-copy:In shallow copy,when we copy the origial object into the new object,the new object has the copy of the original object's memory address,which means both objects points to the same memory address:

var person1 = {
  name:'john',
  age:25,
}
var person2 = person1;

// if we check that person1 is equal to the person2:then we have a output as (true)
console.log(person1 === person2);

//if we enter any value in the any of the obect:then other object will also have the property:
person2.state = "delhi";
console.log(person2);
console.log(person1);
