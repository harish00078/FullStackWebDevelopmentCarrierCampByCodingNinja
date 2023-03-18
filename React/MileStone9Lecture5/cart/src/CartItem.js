// here we are creating our cart-iteams:

// for that first:we have import the (react) from the (react) package:

import React from "react";

// here we create our first (class) component:
// here we are creating the (cart-iteams) component with the help of the javascript (class) and extenting it with or we can say (inheriting) it with the help of the (component) class which is persent in the (react):

// IMP = we are inheriting the (cart-iteams) class with (react) component (class): because we want to use its (properties) or we can say its (features) in the (cart-iteams) class:

class CartItem extends React.Component {
  // here we are creating the (state) Object:for this particular component:
  // => (state): A (state) is basically the way to store your (local-data) for that particular (component):
  // we create the (state) object with the help of the (constructor):
  // because the (constructor): is used to store the (state) of the (component):
  constructor() {
    // here we use the (super) function or constructor we can say:
    // (Super):super is a constructor of (parent) class that is (cartitem) which is under react-component library. we can call (super) class in the (state) constructor because we are (Inheriting) state-constructor in our (parent) constructor:
    super();

    this.state = {
      price: 999,
      title: "Mobile-phone",
      qty: 1,
      img: "",
    };

    // secondWay = we can also (bind) the (functions) that we have created for the (events): with in the (constructor) itself:
    // we did not have to (bind) the function with the (constructor) in the (event):
    // but this will create lot of (mess) in the (code):

    // this.increaseQuantity = this.increaseQuantity.bind(this);



  }

  // here we are creating the (increament) function for the (event):
  // IMP = ThirdWay => if we did not want to use the (bind) method:for binding our (event) function with the (state) constructor (object):
  // then we have to create the (event) function with the help of the (arrow) method:this will automatically bind the (state) constructor with our (increaseQuantity) event function:

  increaseQuantity = () => {

    // here we are printing the value of the (state) constructor:to check that our (increaseQuantity) event function is working or not:
    // because in (increaseQuantity) function we have to change the (value) of the (state) constructor (properties): 

    console.log("this",this.state);

  }




  // here we are creating the (cart-item) as a (Class) component:
  // so we also have to convert it into the (React) component:
  render() {
    // instead of writing (javascript) object everytime in the (cartitem) for the (state) data:but we can do is we can simply get all the (data) of the (state) object:and stored them in the (variables):
    // and we will gave those  variables to the (cartitem's):

    // but we are doing here is (object-destructuring):
    // (object-destructuring):destructuring is a javascript expression that allows us to  extract data from (arrays),(objects), and (maps) and set them into the new (distinct) varaibles:
    // here we basically doing that we are getting these three properties or we can say there (data) from the (state) object:
    const { price, title, qty } = this.state;

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

          <img alt="" style={styles.image} />
        </div>

        {/* second part is the right-side part */}

        <div className="right-block">
          {/* under right block:we have all the details related to the particular:(cart-iteam):and also had buttons  as well: */}

          {/* we can also style them the same-way be style the (image): */}
          {/* we can also gave the (style) properties:with in the (style) function to the elements:we did not have to create the  (different) javascript-objects for that:if there is not that much that we have write for  the (particular) element: */}

          {/* here we are giving the data to the (cartitem):with the help of the (state) object:that we have createde:
          => IMP =  with the help of the (state) object:we can gave the (local-data) to the (cart-item): */}
          {/* we can  gave that (state) object data with the help of the currly brackets({}): because we are giving the (javascript) object data to the (cart-item):and that cart-item is written in the (jsx) code: that's why we have to use the currly brackets*/}

          <div style={{ fontSize: 25 }}>{title}</div>
          <div style={{ color: "grey" }}>RS{price}</div>
          <div style={{ color: "grey" }}>Qty:{qty}</div>

          {/* In right-block:we also have button related to the (cart-iteams):
          => like (increase) quantity of (iteam):
          => deleting the cart-iteam etc: */}
          <div className="cart-item-actions">
            {/* here we create buttons:with the help of the (image)tag:
            => because we are using the (icons) as (buttons): */}
            {/* we are getting the icons from the (flaticon).com */}
            <img
              alt="increase"
              className="action-icons"
              src="https://cdn-icons-png.flaticon.com/512/992/992651.png"

              // here we are creating the (event) on this (increasing) quantity button:for increasing the quantity of the (product):
              // here we are creating the (onclick) event:
              // 1 = for creating event in the (react) component elements:we have to use the (cameL) case format for writing the event:
              // 2 = second under that event:we have to gave the reference of the (function):that we have created for this particular event:with the help  of the currly brackets ({}):

              // onewAY = we also have to (bind) this (increaseQuantity) function:with the (state) class (this) or its (object) we can say:
              // so that we did not lost its (data) or (value): when we call it in the (increaseQuantity) function:

              // onClick = {this.increaseQuantity.bind(this)}

              // here we are using the (increaseQuantity) function:that we have created with the help of the (arrow) method:

              onClick = {this.increaseQuantity}


            />
            <img
              alt="decrease"
              className="action-icons"
              src="https://cdn-icons-png.flaticon.com/512/9632/9632763.png"
            />
            <img
              alt="delete"
              className="action-icons"
              src="https://cdn-icons-png.flaticon.com/512/1214/1214428.png"
            />
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
const styles = {
  // IMP = we can also add different (properties) in (one-object):for the particular-element:of the react-component:
  // like: here we create (image) property:and under that  property we gave style to the (image) element:
  image: {
    // we did not have to define the (value) type of (keys) here:
    // javascript will automatically detect that:this is the (pixel) value or etc:
    height: 110,
    width: 110,
    // Imp = we also have to write the (properties) in the form of (camel) characters:not in the form of (css):because (javascript) mostly understand the (camel) characterization:
    // like here we write the (borderRadius) in the form of (camel) characters:not in the form of (css) = border-radius:
    borderRadius: 4,
    background: "grey",
  },
};

// we also have to export this (react) component that we have created:
// so we can connect this (component) with the main (app-file):
export default CartItem;
