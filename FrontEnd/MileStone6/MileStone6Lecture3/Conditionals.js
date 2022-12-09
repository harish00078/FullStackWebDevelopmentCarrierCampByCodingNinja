// learn about conditions using javascript:
// var a = 10;
var a = -2;

if(a > 0){
  console.log("positive");
}else if(a < 0){
  console.log("negative");
}else{
  console.log("zero")
}

// In javaScript all the other numbers are will get (true) value.but (zero) did not get it. because zero will have a (false) value:
var b = 0;
if(b){
  console.log("true")
}else{
  console.log("false");
}

if(""){
  console.log("true")
}else{
  console.log("false")
}