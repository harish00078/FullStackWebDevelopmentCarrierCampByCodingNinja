// simple way to (fetch) the (paragraph) in the (script)file:
// or we can say (fetch) with the help of (DOM):

// var para1 = document.getElementById('para1');
// para1.innerHTML ="welcome to";


// =>
// how can we (fetch)the (paragraph) in the (script)file:through the (jquery):
// for changing the paragraph value through (jquery):be simple have to use the (html) property and gave him the (change-value) for the (para1):

// here ($) is basically a  function that is  written  in  the (jquery):
// how it works:it not exactly like the (query) function:but its overall idea:

/*
function $(query){

  return document.querySelector(query);
}

*/


// Imp = here we have the (value) of the (para1) in the form of a jQuery object:because we are (fetching) the (para1) through the jQuery:so that converting it into the html element:
// we are use the ( html) property:so that (DOM) can understand it:
$("#para1").html("welcome");

// there are so many different ways to (manipulate) the (elements):
// 1 = one of them is we can (check) the (width) of the (element) or we can also change the (width) of the element:

// $('#para1').width(100);

// how can we (fetch) the (tags) in the (script) through (jquery):
$('p').html('I am the boss');

// IMP = two ways to get the (particular) element from the (jquery) object:

// 1 = first is the (eq()) property of the (jquery):this will gave us the (element) in the form of (jquery) object:

// here we get all the (paragraph) elements:
var paras = $('p');

// here we only use the (first) element:but for getting that (first) element: we use the (eq) property of the (jquery):so that's why it is in the form of (jquery) object:
var p1 = paras.eq(0);

// that why for using this element: we have to convert it into the (html) form:
p1.html('harish');

// 2 = second is that we can  simply use the (index-number) of element that we want from the  (jquery) object:
// we can get that (element) from the (jquery) object:with the help of square-brackets([]):
// this (element) is already in the form of(DOM):OR WE can say in the form of (html):so we did not have to convert it into the form of (html):it will directly work on the (webpage):
var p = paras[1];
// but there is drowback of this method is that we will not able to chnage it (directly):because it is in the form of (DOM):
// and that's why (jquery) obejct is (better): because we can (manipulate) them:or we can say do the (different) things on them:




 


