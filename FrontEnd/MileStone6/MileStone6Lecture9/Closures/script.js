// here we learning about the (Closures):


var i = 10;

function outer(){
  var j = 20;

  console.log(i,j);

  var inner = function inner(){
    var k = 30;
    console.log(j,k);
  }
  return inner;
}

var inner =  outer();
inner;