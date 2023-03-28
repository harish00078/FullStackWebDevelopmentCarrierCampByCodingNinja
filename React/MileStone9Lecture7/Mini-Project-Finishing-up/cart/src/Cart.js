import React from "react";

// here In (Cart.js) file:we have (list) of cart-items or component:we can say:

// so for having (cart-items) in the (cart) file:we have to import the (cart-item) file:
// through which we can create (list) of cart-items in the (Cart) file:

import CartItem from './CartItem';


class Cart extends React.Component {

  render(){

    // here we create (array):which will have (list) of (numbers) in it:
    const arr = [1,2,3,4,5,];
    return(

      // here we are giving the (list) of (cart-items) to the (cart) file:
      <div className="cart"> 

        {/* here we are rendering the (list) of (numbers) of the (array) in the browser: */}

        {/* {arr} */}

        {/* we can also (loop) or (iterate) over the each (item) of the (ARRAY):
        IMP => and add some additional (features) or (values) in it: while we are (iterating) over them :  */}
        {/* for doing that we have to use the (map) method:which will help us to do that: */}
        
        {/*  // here (item) argument:will have the (itams) of the (array): one by one */}
        {arr.map((item) => {

         
          // and we will add some (values) on them (one by one):

          return item + 5

        })}

        <CartItem />
        <CartItem />
        <CartItem />




      </div>
    )
    

  }


}

export default Cart;
