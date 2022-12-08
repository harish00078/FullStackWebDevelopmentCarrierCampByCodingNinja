// Learn about Operators:

// 1 = (typeof) operator:
//used to check the datatype of the values.
var a = typeof "harish";
console.log(a);

// if we gave (null) value to any variable then its datatype is (object).And this is a (bug) in the javascript.because (null) values datatype should be null.
var b = null;
console.log(typeof b);
// And if the check the datatype of the (NaN) value.then that will gave us a output as (number)datatype.
var c = NaN;
console.log(typeof c);

// other operators are:
// Arithmetic operators:like +,-,/,*,% etc:
var d = 10 + 2;
console.log(d);
//  here In javascript when we use the division operator and its output are getting in the form of decimals.then it also print that value it will not approx that value.
var e = 13 / 2;
console.log(e);
// here we use modulo(%) operator that will provide us the remainder of the division numbers.
var f = 15 % 2;
console.log(f);

// Assignment Operators:
var a = 10;
// we can also use the Assignment operator with the arithmetic operator:like this:-
a += 2;
console.log(a);

// uninary operators:
// postincrement (a++) or preincrement (++a):
// same for the Postdecrement(a--) or predecrement(--a):

//postIncrement: A post-increment operator is used to increment the value of the variable after executing the expression completely in which post-increment is used.
var a = 5;
a++;
console.log(a);

//preIncrement:A pre-increment operator is used to increment the value of a variable before using it in an expression:
var h = 5;
++h;
console.log(h);

// comparison operators:>,<,>=,<=,!=,==:
// these comparison operators are different from other languages in javascript: ===, !==:
var g = 100;
var l = 50;
console.log(g==l);

//logical operators: &&, ||, !:
// here In javascript compiler mostly does not check the second value while using the comparison operator: 
var m = 40;
var n = 30;
console.log(m<n && m>n);
console.log(m<n || m>n);
console.log(m<n != m>n);

// Bitwise operator: >>,<<,&,>>>:
// we use bitwise operators  for calculating value in the form  of bit:
var s = 5|13;
console.log(s);