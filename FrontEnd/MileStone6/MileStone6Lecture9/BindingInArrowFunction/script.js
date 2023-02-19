// here we learn about the (binding) of (Arrow) function:
// or we can say that the (working) of the (arrow) function:

// note:
// simple (function) will have its own binding to the (this) function:
// but (arrow) function will not have a binding to the (this) function:


// for example:if we use (this) with the (simple) function:

// function Person(name){
//   this.name = name;

//   // In simple function:if (variable) was created under the (global-scrope):then it will  print the (value) of the (this):and it will print the (value) of the (person):
//   console.log(this);
//   setTimeout(function(){
//     // but if we try to print: the (this) value  under the (setTimeout) function  on the console:then this will print the (diff) values:instead of printing the (person) name:
//     console.log(this);

//   },1000);


// }

// var p = new Person("John");


// for example:if we use (this) with the (arrow) function:

function Person(name){

  
  this.name = name;
  // console (statement) will print the value of the (name) argument:
  console.log(this);

  // In this way:we can use the (setTimeout) function with the help of (arrow) function:

  // IMP =  the (Console) statement:that we have written in the (setTimeout) function:will also print the value of the  (name) argument:that's the difference between the (simple) function and the (arrow) function:
  setTimeout(() => console.log(this),1000 );

}

var p = new Person("John");