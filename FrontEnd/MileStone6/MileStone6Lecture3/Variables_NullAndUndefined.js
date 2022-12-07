// Undefined:
// undefined variables are those variables which does not have asign value in it.
var a;
console.log(a);

// Null: 
// we use null variable when we did not have any value to asign to the variable.
var b = null;
console.log(b);

// Infinity: 
// infinity is a variable in global scope. its value is greater than any other number.it literally works as infinity.

// 1 = if we divide any value or number with the zero (1/0). then that will gave us output as a (Infinity).
var c = 1 / 0;
console.log(c);
// 2 = if we divide any number or value with Infinity (2/Infinity) then that will gave us a  output as (zero).
var d = 2 / Infinity;
console.log(d);
// 3 = there is also a  limitation in the javascript for storing the number values .like: if we are doing the (math.pow) operation of (10,1000) then this value will gave us a output as  (Infinity).
var e = Math.pow(10, 1000);
console.log(e);
// 4 = we can also check the maximum number value that we can store in the javascript:
var f = Number.MIN_VALUE;
console.log(f);

// NaN: NaN means not a  number.so if any expression fails to return a number,then NaN is printed on the console.
// for example  if we want to find out the squareroot of the (-1) number.then we have output as (NaN);
var g = Math.sqrt(-1);
console.log(g);
// other example is parseInt() function of javascript.
// ParseInt() function  is used to accept the string and radix parameter and convert it into an integer;so if we put a alphbets in the parseInt() function.then it will not able to convert that  alphbets into the integer;and that will gave us a output as (NaN); 
var h = parseInt("aaaa");
console.log(h);


