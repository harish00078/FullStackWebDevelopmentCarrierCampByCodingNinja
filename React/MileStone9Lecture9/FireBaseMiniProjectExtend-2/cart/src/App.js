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

      // here we create  another state:and named it as (loading):
      // we use it as (text)  for reperesting that (products) are loading on browser:
      loading:true,



      



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

        // IMP => In (snapshot) object:we have a (docs) array element:and that docs (array) contains our (products):that we have created in the (firebase) database:

        //  for getting the each product: those where present in the (docs) array:we have to use the (map) function:which will help us to traverse or loop on the each (product or object) of the array:

        // eslint-disable-next-line array-callback-return
        snapshot.docs.map((doc) => {

          // and under that (docs) array: we have another element (data):which will have the (data) of each (product):
          // so for getting the data of those (products):we have to use the (data) element of the (snapshot's) docs object:
          console.log(doc.data());


        });


        // know after getting all the products with there data:know we have to show them on the browser:
        // for that we have to use the (setstate) function:which will set the state of our (component):

        // for that first we have to store our (products) with there (data) in the (varaible):so that we can easily gave them to the (setstate) function:

        // or we can say we have to create the variable on that variable: we will create the arrow function:and that (arrow) function  will returing us all the  products with there data:

        // we use (arrow) function with (map) function:so that we can (loop) over on the (snapshot) object's (docs) element:which will have the array of our (products): 
        
        // we also did this so that we can (loop) over them one by one with there (data):and then gave them to our components one by one:with the help of (setstate) function:

        const products = snapshot.docs.map((doc) => {

          // here we create (data) variable:which will have the (data) of our (products):
          const data = doc.data();

          // we also have to return the (unique-id) of our each product:
          // so here we are putting or storing  the (unique-id) of our each product:In the (data) variable:
          // we create a (array) in our data variable:and that array will have the (string) of our products (UniqueId):
          data['id'] = doc.id;

          return data;

        })

        // here we are giving our (products) to our components:with the help of (setstate) function:
        this.setState({

          products:products,

          // after we will get all the products from our (database) on broswer:we will set our (loading) state into (false):
          loading:false,


        })



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
    const { products, loading } = this.state;
    return (
      <div className="App">
        <Navbar count={this.getCartCount()} />
        <Cart
          products={products}
          onIncreaseQuantity={this.handleIncreaseQuantity}
          onDecreaseQuantity={this.handleDecreaseQuantity}
          onDeleteProduct={this.handleDeleteProduct}
        />
        {/* here we are creating the conditional rendering:
        => on our (loading) state:
        => this (loading) state will work as a (loading products..) text on our browser:until we did not get all products from the (database):*/}
        {loading && <h1>loading products ...</h1>}


        <div style={{ padding: 10, fontSize: 20 }}>
          TOTAL: {this.getCartTotal()}{" "}
        </div>
      </div>
    );
  }
}

export default App;
