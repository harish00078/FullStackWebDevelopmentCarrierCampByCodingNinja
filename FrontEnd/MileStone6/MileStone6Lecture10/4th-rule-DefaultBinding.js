// here learn about the 4th rule(Default-Binding):
// Default-Binding: when none of the above rules applies,the 'this' takes the value of the window object:

function ask(){
  // if we did not define any value to the function:
  // then (this) keyword will have (undefined) value:
  console.log(this,this.name);
}

// if we simply call the function:then it will came under the (gobal) scope:and it is known as the (default-binding):
ask();
