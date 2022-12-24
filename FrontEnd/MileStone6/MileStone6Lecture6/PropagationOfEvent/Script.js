// here we are creating a click-event on the inner-div:
var innerDiv = document.getElementById('inner');

// if we create a click-evnet on the (inner-div) then only the (inner-div) event will trigerred:

//IMP =  we can also stop the propogation of event:by using (event) as an argument in the function.and then gave him a javascript function named as (stopPropogation).

innerDiv.addEventListener('click',function(event){
  console.log('click Inner Div');
  // here we are using the (stop-Propogation) function on the inner-div;
  event.stopPropagation();
});

// here we create a click-event on the outer-div also:
var outerDiv = document.getElementById('outer');

// but if we create a click-event or event on the (outer-div) also . and then we click on the (inner-div) the (outer-div) will automatically get triggered:
outerDiv.addEventListener('click', function(){
  console.log('click Outer Div');
});


// we can also create the click-event on the (document) itself to check that it is working in this way.
document.addEventListener('click',function(){
  console.log("click document");
});