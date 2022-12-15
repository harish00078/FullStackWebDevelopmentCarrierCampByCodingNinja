// here we learn about that  how to Deleting properties from the objects:

// we simply have to use the (delete) method:like this:
var student = { name: "abc", rollNO: 135, marks: 90,"2":"two" };
delete(student.marks);
console.log(student);

// here we also have the two ways to use the delete method:
// 1 = (.) dot operator:
// 2 = []  square brackets:
delete(student["2"]);
console.log(student);