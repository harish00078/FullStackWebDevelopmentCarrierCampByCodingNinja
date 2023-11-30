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

    // IMP => here we are putting our (firebase()) and  (.firestore()) functions in the (variable) under our (state-object):
    // so that we can simply call this (variable) where ever:if we want to use these two functions:

    this.db = firebase.firestore();

  }

  // here we are using the (componentDidMount) method or function:so that we can get the data from the database: and put it on our component:

  componentDidMount() {

    // we have two methods to fetch the data from the database:
    // => 1 = get() method:-this method will only read the data once:means that it is not in the continous connection state with the database: 
    // => 2 = onsnapshot method:-this method basically Attaches a listener and listens for any operational changes on our Firestore database in real time: — such as CRUD (Create, Read, Update and Delete) operations.means that it is in the continous connection state with the database:


    // here we use first method (get):
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

    // V.IMP => we are also giving the (querysnapshot) object to our (then) method or function:because that (object) will have the (data) of our (collection's) document which we want to (get or fetch) from our database:we are getting this (object) or (data) with the help of (get) method:

    // firebase


    //   .firestore()
    //   .collection("products")
    //   .get()
    //   .then((snapshot) => {

    //     console.log(snapshot);

    //     // IMP => In (snapshot) object:we have a (docs) array element:and that docs (array) contains our (products):that we have created in the (firebase) database:

    //     //  for getting the each product: those where present in the (docs) array:we have to use the (map) function:which will help us to traverse or loop on the each (product or object) of the array:

    //     // eslint-disable-next-line array-callback-return
    //     snapshot.docs.map((doc) => {

    //       // and under that (docs) array: we have another element (data):which will have the (data) of each (product):
    //       // so for getting the data of those (products):we have to use the (data) element of the (snapshot's) docs object:
    //       console.log(doc.data());


    //     });


    //     know after getting all the products with there data:know we have to show them on the browser:
    //     for that we have to use the (setstate) function:which will set the state of our (component):

    //    for that first we have to store our (products) with there (data) in the (varaible):so that we can easily gave them to the (setstate) function:

    //    or we can say we have to create the variable on that variable: we will create the arrow function:and that (arrow) function  will returing us all the  products with there data:

    //    we use (arrow) function with (map) function:so that we can (loop) over on the (snapshot) object's (docs) element:which will have the array of our (products): 
        
    //    we also did this so that we can (loop) over them one by one with there (data):and then gave them to our components one by one:with the help of (setstate) function:

    //     const products = snapshot.docs.map((doc) => {

    //      here we create (data) variable:which will have the (data) of our (products):
    //       const data = doc.data();

    //      we also have to return the (unique-id) of our each product:
    //      so here we are putting or storing  the (unique-id) of our each product:In the (data) variable:
    //      we create a (array) in our data variable:and that array will have the (string) of our products (UniqueId):
    //       data['id'] = doc.id;

    //       return data;

    //     })

    //    here we are giving our (products) to our components:with the help of (setstate) function:
    //     this.setState({

    //       products:products,

    //        after we will get all the products from our (database) on broswer:we will set our (loading) state into (false):
    //       loading:false,


    //     })



    //   });





    // => here we are using the second method (onsnapshot):

    // V.IMP => when we use the (onsnapshot) method:for fetching the data from the (database):
    // we will directly gave the callback function to the (onsnapshot) method:
    // we are also passing the (querysnapshot) object as argument to our callback function:
    // V.IMP => we are also giving the (querysnapshot) object to our callback function:because that (object) will have the (data) of our  (collection's) document which we want to (get or fetch) from our database:


    // here Instead of using the (firebase) and (.firestore)) methods:we can use the (db) variable:that we have created under the (state) object:which will already have these two (methods) with in it:
    // firebase
    // .firestore()
    this.db
    .collection("products")

    // here we are creating the (query) with the help of (where) function:
    // if we want the particular product:from the (database):for that we have to create the query:or we can create the query with the help of the (where) function:
    // we need to create the query before when we are fetching the data from the database:

    // .where('price','>=',3000)

    // we can also create the multiple queries:

    // .where('title','==','camera')

    // we can also sort our products:with the help of (orderBy) query method:
    .orderBy('price', 'asc')




    .onSnapshot((snapshot) => {

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
  
  
  
        })





  }

  handleIncreaseQuantity = (product) => {

    console.log("Heyy please inc the qty of ", product);

    const { products } = this.state;

    // 1 => here we are getting the (index) number of our particular (product) from the (state) object's (products) array:with the help of (indexOf) function:


    // => for updating a particular (product's) quantity in the database:first we need to get that (product) from the database:so that we can increment the right product's quantity:

    // IMP => so for that first we have to find that (product) in the (state) object's (products) array:we can find that particular (product) in the (state) object with the help of its (index) number because it is the (array) object:for that we can use the (indexOf) function:

    const index = products.indexOf(product);

    // products[index].qty += 1;

    // this.setState({
    //   products,
    // });




  

    // here we are (updating) or (Increasing) the value of  our (product's) quantity in the (firebase) database:

    // => after finding the index-number of  our (product) in the (state) object:which we want to update:know we have to find that (product) in our (products) or (documents) array of  (database) as well: so that we can change or update its value from the (database):
    
    // IMP => for finding that particular (product) in the (database): we have to use its (index-number):because in database we have a (array) of (products) or (documents) we can say: and after finding that (product) in the (database) with the help of its (index-number):  
    // V.IMP => know we can easily get the (unique-id) of particular (product):

    
    // 2 => here we are finding that product in the (database): with the help of there (index-number) or (unique-id):

    // IMP => In (database): our product is  basically a (document):so that's why we are using the (doc):it basically have a (array) of (documents) or (products) we can say:but we only want the particular (product) or (document) that's why we are using the (doc):

    // (doc) => Get a DocumentReference for the document within the collection at the specified path. If no path is specified, an automatically-generated unique ID will be used for the returned DocumentReference.



    const docRef = this.db.collection('products').doc(products[index].id);

    // after getting the reference of that particular product from the database:
    // know we have to update that particular (product):so here we are basically updating its (quantity):
    // IMP => because its a (increasequantity) function:
    // => for doing that we need to use the (update) method of the database:
    // we will basically pass the (object) to the (update) method: of the product (element) which we want to update:and that (object) will have the (updated) value:
    // this method will basically update the (quantity) of the (product):and return us with a (promise):
    // it basically return a Promise once the data has been successfully written to the backend:

    docRef
    .update({

      // for updating the quantity of the  product in database:first we need its previous quantity value:
      // for that we can use the (product[index].qty):this will gave us the product with its (quantity) key-element:
      qty: products[index].qty + 1
    })

    // after updating the quantity value of the product:with the help of (update) method:it will gave us the (promise):
    // know we also have to handle the (promise):we can do that with the help of (then) method:we can simple gave the (callback) to the (promise) with the help of (then) method:
    .then(() => {
      console.log('document updated successfully');
    })
    // we can also use the (.catch) method for handling the (errors):that if our product does not get updated:
   .catch((error) => {
    console.log('Error',error);
   })





  };


  handleDecreaseQuantity = (product) => {

    console.log("Heyy please inc the qty of ", product);

    const { products } = this.state;

    const index = products.indexOf(product);


    if (products[index].qty === 0) {
      return;
    }

    // products[index].qty -= 1;

    // this.setState({
    //   products,
    // });


    // here we are decreasing the quantity of our (product) in the (database) directly:for the decreasequantity function:


    // => for doing that: first we need to get that product from the (database):
    // we can get that product or its reference from the (database):with the help of its (unique-id): which is given to all the products by the database automatically:

    // before that first we need to get the index-number of our product from our state object:for finding the index number of our product:we have to use the (indexOf) function:
    // because we have to find our product in the (products) array of our (database):so for that we need to have the  index-number of our product:

    // IMP => this index number will help us to find our (product) in the (products) array easily:

    // V.IMP => and after that with the index number of our product: we can easily get the (unique-id) of a particular (product):
    // so that we can easily connect with our (product) in the (products) array of our database:

    // => we will save the reference of our (product) in the variable:so that we can easily work on our (product):with the help of database (methods or functions):

    // IMP => In (database): our product is  basically a (document):so that's why we are using the (doc):it basically have a (array) of (documents) or (products) we can say:but we only want the particular (product) or (document) that's why we are using the (doc):

    // (doc) => Get a DocumentReference for the document within the collection at the specified path. If no path is specified, an automatically-generated unique ID will be used for the returned DocumentReference.



    const docRef = this.db.collection('products').doc(products[index].id);

    // after getting the reference of that particular product from the database:
    // know we have to update that particular (product):so here we are basically updating its (quantity):
    // IMP => because its a (decreasequantity) function:
    // => for doing that we need to use the (update) method of the database:
    // we will basically pass the (object) to the (update) method: of the product (element) which we want to update:and that (object) will have the (updated) value:
    // this method will basically update the (quantity) of the (product):and return us with a (promise):
    // it basically return a Promise once the data has been successfully written to the backend:

    docRef
    .update({

      // for updating the quantity of the  product in database:first we need its previous quantity value:
      // for that we can use the (product[index].qty):this will gave us the product with its (quantity) key-element:
      qty: products[index].qty - 1
    })

    // after updating the quantity value of the product:with the help of (update) method:it will gave us the (promise):
    // know we also have to handle the (promise):we can do that with the help of (then) method:we can simple gave the (callback) to the (promise) with the help of (then) method:

    .then(() => {

      console.log('document updated successfully');

    })

    // we can also use the (.catch) method for handling the (errors):that if our product does not get updated:

   .catch((error) => {

    console.log('Error',error);

   })







  };


  handleDeleteProduct = (id) => {

    // const { products } = this.state;

    // const items = products.filter((item) => item.id !== id); // [{}]

    // this.setState({
    //   products: items,
    // });
    
    // here we are deleting the product:from the (database) directly:

    // for that we need that (product) or (document) we can say  from our (database):so that we can interact with it or delete it from our database:

    // so for deleting the particular product or (document):from the (database):we need the reference of there (unique-id):which is given by the database to them automatically:

    const docRef = this.db.collection('products').doc(id);

    // know after getting the reference of that particular product OR (document): we have to delete it from the database:we can do that with the help of (delete) method:
    docRef
    .delete()
    // this delete method will gave us the (promise): after deleting the particular product or document from the database:
    //  we have to handle that (promise):we can do that with the help of (then) method:

    .then(() => {

      console.log('document deleted successfully');

    })

    // we can also use the (.catch) method for handling the (errors):that if our product does not get deleted successfully:

   .catch((error) => {

    console.log('Error',error);

   })



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



  // here we are creating the (addProduct) function:through which we will add the products in our database direclty from our (App): 

  addProduct = () => {

    // here we are also using the (db) variable that we have created:which  will have the (firebase and (.firestore())) methods in it:
    this.db
    // and here we gave  collection and its name in which we want to add the new products:
    .collection('products')

    // after giving the collection and its name: know we have to use the (add) method of the firebase:
    // => through which we will add the new products in our database direclty:
    // under this (add) method:we will gave or pass an our  (new-product) as object:

    // (add) => Add a new document to this collection with the specified data, assigning to it: and also add or assigning a document-ID automatically to it.
    .add({

      img:'',
      price:'139788',
      qty:3,
      title:'washing machine'

    })

    // and after that this (add) method:will return or gave us a A Promise resolved with a DocumentReference pointing to the newly created document after it has been written to the backend.
    // => means that after creating a new document on the (database) with the help of (add) method:it will gave or return us the (reference) of that (new-document) In the form of (promise)::which it has created on the database:
    // know for handling the (promise):that we are getting from the (get) method:we will use the (then) method:
    // which basically work as a callback function to the fulfill or rejection on the (promise) work:
    
    // => we also pass the (docRef) as argument to the (then) method:that we are getting from the (get) method:
    .then((docRef) => {

      // here we print  the docRef:that we are getting from the (get) method:
      console.log('Product has been added to the database',docRef);

    })
    // we can also add the (catch) method:with the (then) method:so that we can catch the (error): while adding the (new-product) or document in the database:
    .catch((error) => {

      // we will print that (error) on the (console):so that we can see it or (debug) it:
      console.log('Error: In adding the products to the database',error);

    });






  }


  render() {
    const { products, loading } = this.state;
    return (
      <div className="App">
        <Navbar count={this.getCartCount()} />

        {/* here we create the button in our (App):
        => so that with the help of this (button): we can create the (products) in our (database) from our (App) directly: */}

        {/* we also gave the (onClick) event-listener to this button:
        => and that (event-listener) will have the reference to (addProduct) function which we have created:  */}
        <button onClick={this.addProduct} style={{padding:20,fontSize:20,backgroundColor:'black',color:'white'}}>Add a product</button>

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
