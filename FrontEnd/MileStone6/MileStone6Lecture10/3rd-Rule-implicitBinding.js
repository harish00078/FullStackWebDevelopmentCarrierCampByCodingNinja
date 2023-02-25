// here we learn about the third-rule:(implicit-binding):
// implicit-binding:it implicitly decides the value of (this):

// for example: if we have variable-object function:
var raj = {
  name: "raj",
  greet:function(){
    console.log("hello",this);
  }
};


// so when we call this function on the (object)simply:then that is know as (implicit-binding):
// because we are implicitly telling the (javascript):that  here are calling the (greet) function on the (raj) object:
raj.greet();