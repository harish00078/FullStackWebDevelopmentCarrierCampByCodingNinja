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

      products: [
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
          id: 1,
        },
        {
          price: 19999,
          title: "Mobile Phone",
          qty: 10,
          img: "",
          id: 2,
        },
        {
          price: 59999,
          title: "Laptop",
          qty: 4,
          img: "",
          id: 3,
        },
        {
          price: 568686,
          title: "Pc",
          qty: 1,
          img: "",

          id: 4,
        },
      ],
    };

    // here we create single cart-item (products):with the help of the (state) function:
    // this.state = {
    //   price: 999,
    //   title: "Mobile Phone",
    //   qty: 1,
    //   img: "",
    // };

    // this.increaseQuantity = this.increaseQuantity.bind(this);
  }

  // here we create function: through which we are handling the (increase quantity) event of the cart-item components:with the help of this function:
  // this function will have the (product) as a (argument):
  // because we only have to  change the properties and the values of the particular (product) from the (multiple) component (products):
  // we only have to change the properties and the values of the (product):from which (product) that Increase quantity (event) has been triggered:
  // that's why we are passing the (product) as a (argument) in the event (function):so that we can change its (property) values:

  handleIncreaseQuantity = (product) => {

    console.log("hey please increase the qty of", product);
    // for changing the quantity (property) of the particular (cart-item) component (product):
    // => for that  first we  have to get the (products) array of the (cart-item) components:from the (state):
    // so that we can get that particular (product) from the (state):In which product we have to change the (value) of the (quantity) property:

    const {products} = this.state;

    // => for changing the quantity (property) of the particular (cart-item) component (product):
    // we have to first get that (product) from the (products) array of the (state):

    // we can get the particular (product) from the (products) array of the (state):with the help of the cart-item component (product-id):that we have send with in other (properties) of the (cart-item) component:

    // for finding that particular (product) in that  (products) array:with the help of its (product-id):for using that (product-id): we have to use the (indexOf) function:through which we can use that  (product-id) to find that particular product in the (products) array:
    const index = products.indexOf(product);

    // after getting that product from the (products) array:with the help of its (product-id):
    // know we can simple get the (property) of that (product) that we want to change:and change it acc to the (event):

    products[index].qty += 1;
    
    // after changing the property value of the particular (product):
    // know we also have to reflect that change value on the (browser):
    // for that we have to gave that change (property) value of the  particular (product) to the (products) array in the (state) function or object we can say:
    // because our cart-item components are getting the (properties) and there (values) from the (state) object:
    // so doing that we have to use the (setState) function:

    this.setState({

      // we are giving or setting that change value in the (products) array of the (state) object:
      products:products,

      // we can also write this same word (key-value):with one (word):
      
      // products,


    });





  };

  // here we create function: through which we are handling the (decrease quantity) event of the cart-item components:with the help of this function:
  // this function will have the (product) as a (argument):
  handleDecreaseQuantity = (product) => {

    console.log('hey please dec the qty of',product);

    const {products} = this.state;
    const index = products.indexOf(product);

    // before decreasing the (qty) of the particular (product):
    // first we have to check that it does not already have (zero) quantity:
    if(products[index].qty === 0){

      // if its already zero:then we simply return  from this (decrease quantity) function:
      return;

    }
    
   products[index].qty -= 1;

    this.setState({products: products});



  }

  // here we create (delete) function:through which we are handling the (delete) event of the (cart-item) component:
  // with the help of this function we can delete our cart-item component:

  // here we are passing the (product-id) of the (cart-item) component as a (argument) to this function:
  // so that we should only delete that (particular) cart-item component:amoung all of the other (cart-item) components::
  handleDeleteProduct = (id) =>{

    // for deleting the particular component or product we can say:
    // for that first we have to find that (product) in the (products) array of the (state) object:
    const {products} = this.state;

    // know we have to find that (product) in the (products) array:that we want to delete:we can find it with the help of its (unique-id):that we have given to every (cart-item) component (product):

    // for finding the product in the (products) array:with the help of its (unique-id):we have to use the (filter) function:

    // under this (filter) function we create another function:In that function we are doing that if the (item.id) is not equal to the product (id) that we are passing as argument to this delete function:
    // IMP => this filter function (basically) filter the (products) array and create a new array will not have the (product) that we want to delete:basically with the help of filter function we delete the (product) which we want to delete: because filter function will create a new array which will not have the (product) that we want to delete:
    // means we are basically checking the (product) with the help of its (id) in the (products) array:
    // IMP => this function basically checks the (product) with the help of its (id) in the (products) array:
    // V.IMP => and its will return the new (array) and that array will have all the (products) which were not match with the (product) that we are finding to delete:
    // basically this new array not have the (product) that we are finding:so if we gave this new array to the (products) array of the (state) object:then the (product) will automatically  get deleted from the (products) array of the (state) object:
    // because we filter the (products) array with the help of the (filter) function:

    const items = products.filter((item) => item.id !== id);


    // know we have to gave this new-array to the (products) array of (state) objects:so that we can reflect that deleted cart-item product or component on our (web-app):
    this.setState({

      products: items

    })

  }





  render() {

    // here we create (array):which will have (list) of (numbers) in it:
    // const arr = [1, 2, 3, 4, 5];

    // here we are getting the multiple (cart-item) products from the (state): that we have created in it:

    const { products } = this.state;

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
            // we can pass multiple things to the component as (props):
            // like we can gave (function),(jsx),(another-component) etc:

            // here we are giving the (handleIncreaseQuantity) function as a (props) to the (cart-item) components:
            // so that  we can handle the (increase-quantity) event on the (cart-item) components:
            <CartItem

              product={product}

              key={product.id}

              onIncreaseQuantity={this.handleIncreaseQuantity}
              // here we are passing the (decrement-quantity) function as props to the (cart-item) components:
              // so that we can handle the decrease quantity evnets of the (components):or we can say decrease there quantity with the help of this function:
              onDecreaseQuantity = {this.handleDecreaseQuantity}

              // here we are passing the (Delete Product) function as props to the (cart-item) components:
              // so that we can handle the delete-component evnets of the cart-item (components):or we can say delete the component with the help of this function:
              onDeleteProduct = {this.handleDeleteProduct}

            />


          );



        })}


      </div>



    );



  }


}

export default Cart;
