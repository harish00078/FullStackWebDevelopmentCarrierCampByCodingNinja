import React from "react";

// here In (Cart.js) file:we have (list) of cart-items or component:we can say:

// so for having (cart-items) in the (cart) file:we have to import the (cart-item) file:
// through which we can create (list) of cart-items in the (Cart) file:

import CartItem from "./CartItem";

class Cart extends React.Component {

  // here we are using the (state) function in the (Cart) file:for creating multiple cart-item (products):
  // instead of only creating a single cart-item (products):
  // for creating multiple cart-item (products): we have to Use the (array)  in the (state) function:

  // under that array : we will basically create multiple the cart-items (products):
    constructor() {
    super();

    // here we create multiple cart-item (products):with the help of the (state) function:

    this.state = {

      // for creating multiple cart-item (products): we have to Use the (array) in the (state) function:

      products:[

        // under that array : we will basically create multiple the cart-items (products):
        // we can gave different values to these (cart-items) objects:and create multiple (cart-items) products:
        // we also have to create unique-key for the each cart-item product:that we have to send:with in the cart-items component:
        // so that (react) can easily diffferentiate between  the multiple cart-items components:

        {
          
          price: 9999,
          title: "Watch ",
          qty: 1,
          img: "",
          // here we gave (unique-key) to the  (cart-items) object:
          id:1

        },
        {
          
          price: 199999,
          title: "Mobile Phone",
          qty: 10,
          img: "",
          id:2

        },
        {
          
          price: 59999,
          title: "Laptop",
          qty: 4,
          img: "",
          id:3

        },
        {
          
          price: 568686,
          title: "Pc",
          qty: 1,
          img: "",

          id:4

        }
        

      ]


    }



    // here we create single cart-item (products):with the help of the (state) function:
    // this.state = {
    //   price: 999,
    //   title: "Mobile Phone",
    //   qty: 1,
    //   img: "",
    // };




    // this.increaseQuantity = this.increaseQuantity.bind(this);

  }





  render() {

    // here we create (array):which will have (list) of (numbers) in it:
    // const arr = [1, 2, 3, 4, 5];

    // here we are getting the multiple (cart-item) products from the (state): that we have created in it:
    const {products} = this.state;


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
        {products.map((product)=>{

          // here we are giving the (products) objects to the (cart-item) component:

          // we also have to gave the (unique-key) with the each (cart-item) component:

          // so that (React) can differentiate between the each cart-item component:
          

          return (

            // we can pass multiple things to the component as (props):
            // like we can gave (function),(jsx),(another-component) etc:
          <CartItem product={product} key={product.id} />

          )
        })}






      </div>


    );



  }


}

export default Cart;
