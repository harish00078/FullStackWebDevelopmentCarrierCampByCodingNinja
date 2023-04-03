import React from "react";

// here In (Cart.js) file:we have (list) of cart-items or component:we can say:

// so for having (cart-items) in the (cart) file:we have to import the (cart-item) file:
// through which we can create (list) of cart-items in the (Cart) file:

import CartItem from "./CartItem";

// here we ara converting our class (cart) component:into the function (cart) component:

const  Cart = (props) => {



  // render() {

    // here we create (array):which will have (list) of (numbers) in it:
    // const arr = [1, 2, 3, 4, 5];

    // // here we are getting the multiple (cart-item) products from the (state): that we have created in it:

    // const { products } = this.state;


    // here we are passing the (products) to the (cart) component:with the help of the (props) function:
    // because we have given those (products) to the (cart) component as (props) or we can say as (arguments) in the (App) component:
    const {products} = props;

    return (
      // here we are giving the (list) of (cart-items) to the (cart) file:
      <div className="cart">
        {/* here we are rendering the (list) of (numbers) of the (array) in the browser: */}

        {/* {arr} */}

        {/* we can also (loop) or (iterate) over the each (item) of the (ARRAY):
        IMP => and add some additional (features) or (values) in it: while we are (iterating) over them :  */}
        {/* for doing that we have to use the (map) method:which will help us to do that: */}

        {/*  // here (item) argument:will have the (itams) of the (array): one by one */}

        {/* {arr.map((item) => {

         
          // and we will add some (values) on them (one by one):

          return item + 5

        })} */}

        {/* here we are giving the (properties) or we can say (props) to the (cartitem): */}

        {/* <CartItem qty={1} price={198999} title={"watch"} img={''}/> */}

        {/* IMP => here we create multiple cart-iteam components:
        => with the help of the (state) objects:
        => under that (state) object we have multiple (cart-item) object:that we have created under the products (array): */}

        {/* we have to gave those (cart-item) objects to the (cart-item) component:

        IMP => we can do that with the help of the (map) function of the (react):with the help of that we can (traverse) or (loop) on each (object) of the (products) array:
        
        V.IMP => and we will gave the (properties) of those (products) objects to the (cart-item) component:with the help of the (props) function:*/}
        {products.map((product) => {
          // here we are giving the (products) objects to the (cart-item) component:

          // we also have to gave the (unique-key) with the each (cart-item) component:

          // so that (React) can differentiate between the each cart-item component:

          return (



            <CartItem

              product={product}

              key={product.id}

              // here we are accessing the (functions) with the help of the (props) function:In the (cart) component file:
              // that we have given to the (cart) component as (argument) or we can say (props) in the (App) component:

              IncreaseQuantity={props.onIncreaseQuantity}

              DecreaseQuantity = {props.onDecreaseQuantity}

 
              DeleteProduct = {props.onDeleteProduct}

            />


          );



        })}


      </div>



    );



  // }


}

export default Cart;
