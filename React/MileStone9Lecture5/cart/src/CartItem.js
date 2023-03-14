// here we are creating our cart-iteams:

// for that first:we have import the (react) from the (react) package:

import React from "react";

// here we create our first (class) component:
// here we are creating the (cart-iteams) component with the help of the javascript (class) and extenting it with or we can say (inheriting) it with the help of the (component) class which is persent in the (react):

// IMP = we are inheriting the (cart-iteams) class with (react) component (class): because we want to use its (properties) or we can say its (features) in the (cart-iteams) class:

class CartItem extends React.Component {
  // here we are creating the (cart-item) as a (Class) component:
  // so we also have to convert it into the (React) component:
  render() {
    // here under (return) statement:we will write the (jsx) code for the(cart-item):
    return (
      // here we are giving the (class-names) to the (elements):so that we can (style) them:
      // we convert the (cart-item) container into  (two)parts:

      <div className="cart-item">

        {/* one part is the left-side part */}

        <div className="left-block">
          {/* In left side we have the image of the (car-iteam): */}
          {/* we have to write the (image) tag in the way of (jsx): */}

          {/* for giving (javascript) object style to the (particular) element: */}
          
          {/* IMP =  we have to define the (style) function in it:
          => and In under that function:we will gave the (javascript) object style:reference to the (element):
          => with the help of the currly brackets ({}):because we only able to write (javascript) in the (jsx):with in the currly brackets: */}

          {/* IMP = here in (img) tag:we have to gave the (alt) attribute:otherwise it will show us the (error): */}

          <img  alt="" style = {styles.image} />
          
        </div>

        {/* second part is the right-side part */}

        <div className="right-block">

          {/* under right block:we have all the details related to the particular:(cart-iteam):and also had buttons  as well: */}

          {/* we can also style them the same-way be style the (image): */}
          {/* we can also gave the (style) properties:with in the (style) function to the elements:we did not have to create the  (different) javascript-objects for that:if there is not that much that we have write for  the (particular) element: */}

          <div style={{fontSize: 25}}>Phone</div>
          <div style={{color:'grey'}}>Rs 999</div>
          <div style={{color:'grey'}}>Qty: 1</div>

          {/* In right-block:we also have button related to the (cart-iteams):
          => like (increase) quantity of (iteam):
          => deleting the cart-iteam etc: */}
          <div className="cart-item-actions">


          </div>


        </div>

      </div>
    );
  }
}

// we can gave the style to the (react-components) elements:with the help of the (javascript) objects as well: 
// because we create the (react-components):with the help of the (jsx) syntax:and it is the another (syntax) form of the (javascript):
// that why we can  use (javascipt) object:for giving styles to the (react-component) elements:
// we did not have to style the (react-component) in the (another-file):with the help of the (css):
// we can style it with in the (same-file): were we create that (react-component):

// => here we create one (object) with the name of (styles):
const styles  = {

  // IMP = we can also add different (properties) in (one-object):for the particular-element:of the react-component:
  // like: here we create (image) property:and under that  property we gave style to the (image) element:
  image:{
    // we did not have to define the (value) type of (keys) here:
    // javascript will automatically detect that:this is the (pixel) value or etc:
    height:110,
    width:110,
    // Imp = we also have to write the (properties) in the form of (camel) characters:not in the form of (css):because (javascript) mostly understand the (camel) characterization:
    // like here we write the (borderRadius) in the form of (camel) characters:not in the form of (css) = border-radius:
    borderRadius:4,
    background:'grey',
  }



}



// we also have to export this (react) component that we have created:
// so we can connect this (component) with the main (app-file):
export default CartItem;