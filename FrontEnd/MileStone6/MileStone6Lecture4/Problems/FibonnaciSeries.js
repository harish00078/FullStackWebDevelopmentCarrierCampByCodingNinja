function Fibo(n){
  var a = 0;
  var b = 1;
  var c;
  for(var i = 0; i <n; i++){
    c = a+b;
    a = b;
    b = c;
  }
  return (a===n);
}

console.log(Fibo(5));