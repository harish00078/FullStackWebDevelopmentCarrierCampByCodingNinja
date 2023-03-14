// here we are creating our cart-iteams:

// for that first:we have import the (react) from the (react) package:

import React from "react";

// here we are creating the (cart-iteams) with the help of the javascript (class) and extenting it with or we can say (inheriting) it with the help of the (component) class which is persent in the (react):

// IMP = we are inheriting the (cart-iteams) class with (react) component (class): because we want to use its (properties) or we can say its (features) in the (cart-iteams) class:

class CartItem extends React.Component {
  // here we are creating the (cart-item) as a (Class) component:
  // so we also have to convert it into the (React) component:
  render() {
    // here under (return) statement:we will write the (jsx) code for the(cart-item):
    return (
      // here we are giving the (class-names) to the (elements):so that we can (style) them:
      // we convert the (cart-item) container into  (two)parts:

      <div className="cart-iteam">

        {/* one part is the left-side part */}

        <div className="left-block">

        </div>

        {/* second part is the right-side part */}

        <div className="right-block">

        </div>
      </div>
    );
  }
}
