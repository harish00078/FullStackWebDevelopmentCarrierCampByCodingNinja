"use strict";


var shaPe = [
  "square", "rectangle", "circle", "oval", "triangle-up", "triangle-down", "triangle-topleft", "triangle-bottomleft", "triangle-bottomright", "triangle-right"
];

var Color = [
  "red", "orange", "green", "maroon", "pink", "violet"
];

//  here we work on the (COLOR-Section):
var ColorChange = document.getElementById("change-color");

ColorChange.addEventListener("click",function(){
  // (1) => here we have to return or print the (random-color) on webpage .whenever user click on the color-button:
  // for printing a random number on the webpage.we have to generate a random number and acc to that number. the color will we selected from the array:using that number as a index:
  // for that we are using two javascript methods named as:
  // 1 = first we are using = (math.floor).
  // 2 = second we are using = (math.random) with multiplication of (*) color(arrays).length:
  // Math.floor = Returns the greatest integer less than or equal to its numeric argument.
  // Math.random = Returns a pseudorandom number between 0 and 1.
  var next_color = Color[Math.floor(Math.random() * Color.length)];

  // (2) => after that we have to show that color on the (container)element:for that we have to set color on the (background)of the (container):
 var ConTainer = document.getElementsByClassName("container");
 ConTainer[0].style.backgroundColor = next_color;

})

// here we work on the (SHAPE_Section):
var Shapes = document.getElementById("change-shape");

Shapes.addEventListener("click",function(){

  // here we also do the same thing to print a randow shape on the webpage. that we do in the (color-section); 
  var next_shape = shaPe[Math.floor(Math.random() * shaPe.length)];

  var SHAPES = document.getElementById("shaper");
  // here we are using the (setAttribute) property of the javascript for providing a (shapes) to the element:
  SHAPES.setAttribute("class", next_shape);
});

