// here we learn about that how we can pass the functions as arguments:
// we can use the functions as arguments.because in  javascript functions are the objects:

// here we have factorial expression-function:
var factorail = function fact(n) {
  var ans = 1;
  for (var i = 1; i <= n; i++) {
    ans = ans * i;
  }
  return ans;
};


// here we are using the factorail function as argument.for calculating (NcR) value:
function ncr(n,r, factorail){
  // here we write the formula for calculating (NcR) value:
  return factorail(n)/(factorail(r) * factorail(n-r));
}


// here we are using the NcR function for calulating NcR value:which are using  a factorail function as a  argumemts:
console.log(ncr(5,2,factorail));
