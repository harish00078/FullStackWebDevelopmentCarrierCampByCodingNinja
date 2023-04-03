import React from "react";

// here we import the (Cart.js) file:which will have the (list) of (cart-items) components:
import Cart from "./Cart";

// here we import the (navbar.js) file:through which we will show the (navbar) components on our application:
import Navbar from "./Navbar";

class App extends React.Component {
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

    const { products } = this.state;

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
      products: products,

      // we can also write this same word (key-value):with one (word):

      // products,
    });
  };

  // here we create function: through which we are handling the (decrease quantity) event of the cart-item components:with the help of this function:
  // this function will have the (product) as a (argument):
  handleDecreaseQuantity = (product) => {
    console.log("hey please dec the qty of", product);

    const { products } = this.state;
    const index = products.indexOf(product);

    // before decreasing the (qty) of the particular (product):
    // first we have to check that it does not already have (zero) quantity:
    if (products[index].qty === 0) {
      // if its already zero:then we simply return  from this (decrease quantity) function:
      return;
    }

    products[index].qty -= 1;

    this.setState({ products: products });
  };

  // here we create (delete) function:through which we are handling the (delete) event of the (cart-item) component:
  // with the help of this function we can delete our cart-item component:

  // here we are passing the (product-id) of the (cart-item) component as a (argument) to this function:
  // so that we should only delete that (particular) cart-item component:amoung all of the other (cart-item) components:

  handleDeleteProduct = (id) => {


    // for deleting the particular component or product we can say:
    // for that first we have to find that (product) in the (products) array of the (state) object:
    const { products } = this.state;

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
      
      products: items,

    });

  };

  // here we are creating the (count) function:which will gave us the (count) of the (cart-item) products or components we can say:
  getCartCount = () => {

    // for that first we need the (products) array of the  (state) objects:
    // because we are creating the (cart-item) components:with the help or we can say acc to the (products) array of (state) objects:
    const {products} = this.state;


    // => for getting the (count) of the (products) array of (state) objects:
    // we have to use the (for-loop):so that we can iterate over them and get the (count) of that (products) array:
  
    // here we create (count) variable:which will have zero value by default:
    let count = 0;

    // we will increment this (count) variable:acc to the for-loop (iterations):means it will only increment acc to the (count) of the (products) which were present in the (products) array of the (state) objects:
    
    // IMP = for using for-loop in the (react):
    // IMP => or we can say if we have to (iterate) over the (multiple) things for  (counting) them:then for that we  can  use the (forEach) function:
    // (forEach) => The forEach() method can be used to iterate over an array outside of your JSX code in React. 
    // (map) => If you need to iterate over an array and render its elements directly in your JSX code, use the map() method instead.
    products.forEach((product) => {
      
      // we have to count the quantity of all the (products):
      // because some products may have multiple quantity of the particular (product) or (component) we can say:

      count += product.qty;


    });





    // and after that we will return that (count) variable:which will have the (count) value of the (products) or (components) we can say which were present in the (products) array of the  (state) object:
    return count;

  }


  render() {

    // here we are getting the multiple (cart-item) products from the (state): that we have created in it:

    const { products } = this.state;

    return (
      <div className="App">
        
        {/* here we are putting the (Navbar) component: in our (app.js) file or we can say in our (application) file: */}

        {/* here we are giving the (count) function to our (navbar) component:

        => IMP =  we gave that (count) function to the (navbar) component as (props): */}

        <Navbar count={this.getCartCount()} />

        {/* here we are putting the (CART) component: which will have the list of (cart-items) in our (app.js) file or we can say in our (application) file:  */}

        {/*  IMP => // we can pass multiple things to the component as (props):
            // like we can gave (function),(jsx),(another-component) etc: */}

        {/* // here we are giving the (handleIncreaseQuantity),(handleDecreaseQuantity) or (handleDeleteProduct) function as (props) to the (cart) components:
          // so that  we can handle the (increase or decrease quantity) event and also the (delete) product or component on the (cart-item) components: */}

        <Cart

          // here we are passing the (multiple) cart-item components or products: we can  say to the (cart) components:

          products = {products}

          onIncreaseQuantity={this.handleIncreaseQuantity}
          // here we are passing the (decrement-quantity) function as props to the (cart) components:
          // so that we can handle the decrease quantity evnets of the   cart-item (components):or we can say decrease there quantity with the help of this function:
          onDecreaseQuantity={this.handleDecreaseQuantity}
          // here we are passing the (Delete Product) function as props to the (cart) components:
          // so that we can handle the delete-component evnets of the cart-item (components):or we can say delete the component with the help of this function:
          onDeleteProduct={this.handleDeleteProduct}
        />
      </div>
    );
  }
}

export default App;
