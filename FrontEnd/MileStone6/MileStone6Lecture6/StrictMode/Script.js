// here we are using (Strict-mode);
"use strict";
// after doing that we can see the errors on the console:
// IMP = we can also use the (Strict-Mode) for the particular code or for the particular function as well from the hole code of the webpage:

var Box = document.getElementById('box');
var ClickCount = document.getElementById('click-count');

var count = 0;

Box.addEventListener('click',function(){
  count++;
  // 1 => so if we create a random variable here.then javascript will automatically.convert that variables into the global variables and does not gave us a error:
  demo = 100;

  // 2 => and that is not good from the point of view of a developer.because when our code get reviewed it provide or gave confusion to the  reviewer's mind: 

  // 3 => for that in javascript we have (Strict-mode).
  // Strict-Mode: will gave us a errors where we have in our code.this will not let javascript to handle the (errors) by itself automatically:

  // so if we want to use the (strict-mode).for that we only have to write the("use strict"):after writing this syntax.the code we will write will not get corrected or not get resolved by it self: it will provide us a error:


  console.log(count);
  ClickCount.innerText = count+" ";

})