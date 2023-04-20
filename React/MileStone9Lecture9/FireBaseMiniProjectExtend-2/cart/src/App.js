import React from "react";
import Cart from "./Cart";
import Navbar from "./Navbar";

// here we are importing the firebase:
import firebase from "firebase/app";


class App extends React.Component {

  constructor() {

    super();

    this.state = {

      products:[],



      // here we are giving the (products) to our (state-object):from the (firebase) database:
      // for getting the data from the database:and put it into on the (component):for that we have to use the (ComponentDidmount) function of the component lifecycle:
      // here we create (products) array in our state object:
      // products: [
      //   {
      //     price: 99,
      //     title: 'Watch',
      //     qty: 1,
      //     img: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
      //     id: 1
      //   },
      //   {
      //     price: 999,
      //     title: 'Mobile Phone',
      //     qty: 10,
      //     img: 'https://images.unsplash.com/photo-1520923642038-b4259acecbd7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1306&q=80',
      //     id: 2
      //   },
      //   {
      //     price: 999,
      //     title: 'Laptop',
      //     qty: 4,
      //     img: 'https://images.unsplash.com/photo-1504707748692-419802cf939d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1330&q=80',
      //     id: 3
      //   }
      // ]


    };


    // this.increaseQuantity = this.increaseQuantity.bind(this);
    // this.testing();


  }

  // here we are using the (componentDidMount) method or function:so that we can get the data from the database: and put it on our component:

  componentDidMount() {

    // here we are getting the data from the (firebase) database:
    // and gave that data to this (componentDidMount) method:because this method will gave that data or we can say put that data into our component:

    // => here we are using the (function chaining) method:
    // => because while using the (firebase) database: we have to define multiple functions:
    // like => first =  we need to define that what kind of (database) we are using of the (firebase) database:here we use (firestore):
    
    // => second = we have to define that but kind of (collection) we are giving to this component:from the firebase's  database: here we want to gave the (products) collection to this component:

    // => third = we need to use the (get) method:this (get) method basically get the data from the (collection) of the (database):that we have given to him:
    // IMP -> this (get) method basically return us the (promise):In the form of Object type Task (QuerySnapshot):

    // In firestore we have specific type of mechanism for reading the data once. To read a single document, we can use DocumentReference’s get() method that returns a Task (<DocumentSnapshot>): while reading multiple documents from a collection or Query, we can use Firestore Query’s get() method that returns an object of type Task (<QuerySnapshot>). Both methods read the data only once.

    // => fourth = know after getting the data from the Firestore database:with the help of the (get) method:we have to use that (data) in our component:
    // so for that we have to use the (then) function or method:because the data that we are getting from the (get) method is in the form of (promise):

    // Imp => (then) method is basically a callback function of the (promise):when ever (promise) get resolved :it will attaches a callback function for the (fulfilled/success) and (rejection) of the (promise):
    
    // (then) = JavaScript Promise then () method is called whenever a promise is resolved. It takes data from the resolved promise. It can take up to two arguments which are (callback) functions for the (fulfilled/success) and rejected cases respectively. Just like the catch () method it also returns a Promise so it is used to chain Promises.

    // V.IMP => we are also giving the (querysnapshot) object to our (then) method or function:because that (object) will have the (data) of the (collection) which we want to (get or fetch) from our database:we are getting this (object) or (data) with the help of (get) method:

    firebase


      .firestore()
      .collection("products")
      .get()
      .then((snapshot) => {
        console.log(snapshot);
      });

  }

  handleIncreaseQuantity = (product) => {
    console.log("Heyy please inc the qty of ", product);
    const { products } = this.state;
    const index = products.indexOf(product);

    products[index].qty += 1;

    this.setState({
      products,
    });
  };
  handleDecreaseQuantity = (product) => {
    console.log("Heyy please inc the qty of ", product);
    const { products } = this.state;
    const index = products.indexOf(product);

    if (products[index].qty === 0) {
      return;
    }

    products[index].qty -= 1;

    this.setState({
      products,
    });
  };
  handleDeleteProduct = (id) => {
    const { products } = this.state;

    const items = products.filter((item) => item.id !== id); // [{}]

    this.setState({
      products: items,
    });
  };

  getCartCount = () => {
    const { products } = this.state;

    let count = 0;

    products.forEach((product) => {
      count += product.qty;
    });

    return count;
  };

  getCartTotal = () => {
    const { products } = this.state;

    let cartTotal = 0;

    products.map((product) => {
      cartTotal = cartTotal + product.qty * product.price;
      return cartTotal;
    });

    return cartTotal;
  };
  render() {
    const { products } = this.state;
    return (
      <div className="App">
        <Navbar count={this.getCartCount()} />
        <Cart
          products={products}
          onIncreaseQuantity={this.handleIncreaseQuantity}
          onDecreaseQuantity={this.handleDecreaseQuantity}
          onDeleteProduct={this.handleDeleteProduct}
        />
        <div style={{ padding: 10, fontSize: 20 }}>
          TOTAL: {this.getCartTotal()}{" "}
        </div>
      </div>
    );
  }
}

export default App;
