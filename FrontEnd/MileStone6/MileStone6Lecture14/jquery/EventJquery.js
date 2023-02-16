// here we learn about that how can we create (event) on the (elements) with the help of (jquery):

// we have  a div element:
$('div').css({

  'width':'200px',
  'height':'200px',
  'backgroundColor':'cyan',
  'color':'white',
  'font-size':'20px',
  'text-align':'center',
  'border':'1px solid black',
  'border-radius':'5px',
  'box-shadow':'5px 5px 10px 5px black',
  'cursor':'pointer',
  'transition':'all 0.1s ease-in-out infinite',
  'box-sizing':'border-box',
  'position':'absolute',
  'bottom':'-5%',
  'left':'30%',

});


// first way of creating (event) on the(element) with the help of (jquery):
// here we create (event) on this (div) element:

$('div').click(function(){

  // if we want to create some (manipulation) on the (div) element:
  // while we create (event) on the (div) element:
  // we can do that with the help of (this)  function:
  // this funciton will gave us the (div) element:
  // and after that we can (manupulate) the (div) element:
  // here we use (this) function with the help of (jquery):
  var element = $(this);

  // here we are changing the (width) of the (div) element:when ever the event will be triggered on the (div) element:
  // we will increase the (width) of the (div) element:

  element.width(element.width() + 20 + 'px');


  // here we create (alert) event on this (div) element:
  alert("div clicked");

  


});

// second way of creating (event) on the(element) with the help of (jquery):through the (javascript) property (on):

$('div').on('click', function(){

  alert("div clicked");

});

// here we create (click) event on the (anchor-tag) with the help of (jquery):

$('a').on('click', function(event){

  // here we are (stoping) the default (work) or (behavior) of the (anchor-tag):

  // because here we gave the (preventdefault) property to the (anchor-tag) event:
  
  // so that when ever (anchor-tag) event (accour): we will (stop) the default behavior of the (anchor-tag):
  event.preventDefault();

  // and only have to gave the (alert) on the (anchor-tag) event:
  alert("Anchor tag clicked");

});
