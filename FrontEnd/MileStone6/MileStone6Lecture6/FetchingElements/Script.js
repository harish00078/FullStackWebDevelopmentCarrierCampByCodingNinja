// In javascript we have two ways to access or work with  the elements of the html or css of the webpage: we can also change there values:

// first = simple (document) property or object of the (DOM):

// second = css (document.queryselector)property:
// but if we are using the (DOM) css property or object method .then we also have to define the types of the elements through there symbols:like for ID we use (#) and for CLASS we use (.):



// firstly we see that how we can use the simple(document) property to access the elements of the webpage:

// 1 = In this we can access the elements of the webpage: 
// we can access it through (ID):
document.getElementById('one');
// we can also work on this element and change its value also through javascript:
// but firstly we have to store that element in the variable of the javascript:
var heading = document.getElementById('one');
//after storing it in the variable:know we can work on this element through javascript:
heading.style.color = 'red';

// 2 =  we can access it  through (Tag-name):
var heading = document.getElementsByTagName('h1');
// we can also change there text:
// [1] represent the first heading of the array or we can saythat  first heading of the webpage:
// we have to define its index because here we are using the (tag) to access the element:
 heading[1].innerText = "My name is harish";

// 3 = we can access it through (class):
var para = document.getElementsByClassName('para');

// if we want to change the css value of the element through (document):we do that in this way: In the second heading we are using the css property(border):we want to change its color:
heading[1].style.border = '4px solid cyan';




// second way is to access the elements of the webpage through (css-Selector):named as (document.querySelector):

// IMP = but here here we have to define the elements by our own-self:like we do in the css: for (ID) we use (# with element name ); for class we use (. with elment name):

// 1 = we can access the element through(ID):
var heading = document.querySelector('#one');

// 2 = we can access the elements through(CLASS):
var heading = document.querySelector('.para');

// 3 = Important feature of the css(queryselector) is that  we can access all the elements of the same (class) or same (ID) and we can change there values or properties of  all of them by once:



