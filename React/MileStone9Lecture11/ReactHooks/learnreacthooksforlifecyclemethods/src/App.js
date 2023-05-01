/* eslint-disable array-callback-return */
// here we learn about that:how can we use component-life-cycle methods in the (function) component:with the help of (React-hooks):

// so basically the (life-cycle) methods and other features like using (firebase) and other (libraries) in the (react) is known as  (side-effects):
// so for using these methods or effects in the function component:we need to use the (useEffect) method:

// (useEffect) => useEffect is a substitution to class component lifecycle methods. We can use it to copy the functionality of componentDidMount, componentDidUpdate etc. It helps to tell the component to execute some logic after rendering the component.
// Does it run after every render? => Yes, it runs before the first render and after every update.



// here we also import the (useState and useEffect) method of the React:
import React,{useState,useEffect} from "react";




function App(props) {

  // here we gave (state) to the (function) component:with the help of (useState) method:


  // here we gave (initial) value (1) to our (userId)) with the help of (useState) method:
  // and also gave the (setUserId) function to the return function of the (useState) method:
  // which will basically change our initial value (1) to (2):
  const [userId, setUserId] = useState('1');

  // here we gave the (empty) array (state) to the (data) variable with the help of (useState) method:
  // we also gave the (setData) function to the return function of the (useState) method:

  const [data, setData] = useState([]);


  // here we are getting the (data) from the (API) for our component:In the function component with the help of (useEffect) method:
  // when we are using the (useEffect) method:we have to pass the callBack function to it:
  // and under that (callBack) function:we will (fetches the data) from the (API) or (URL):
  useEffect(() => {

    // In callback function:first we need to define the (ApI or Url):through which we will (fetches the data):
    // we are using the dummy (API) or (url) Of  (jsonplaceholder):from which we will (fetches the data):this will gave us the dummy (post) data:
    // we also gave the (userId)  to this (API) or (URL):because we need to define the (api) that from which (user) we want to (fetches the data):
    const url = `https://jsonplaceholder.typicode.com/posts?userId=${userId}`;

    // know we need to fetch the data from this (API): for that we need to use the (fetch) method:
    fetch(url)
    // and this fetch method will basically return us the (promise):
    // and that promise will have (response) object in it:and that (Object) will have the (data) of our (API):
    // so for handling the promise:we need to use the (then) method:
    
    //  we need to use the two (then) methods:
    // IN first:(then) method we will (convert) our response object into the (Json) format object:
    // for that will create the callback function:under that (then) method:and we will pass the promise (response) object as argument to that (callback) function:
    // because in react we are using the (JSX):
    .then((response) => response.json())
    // In second:(then) method we will use that (data):that we are getting from the first (then)  method:
    // for that we will create the (callback) function under the (then) method:and also pass the (data) as argument to that function:
    .then((data) => {
      // we will print that (data) on the console:
      console.log('DATA',data);
      // know we need to use that (data):we will gave that (data):to the (function) that we are getting in the return from the (useState) method:
      // we connect that (function) with the (setData) variable:that why we need to gave that (data) to the (setData) method:
      setData(data);
    });



    // we also need to put or gave the (empty-array) to the (useEffect) method:so that it only renders the One time:we did not want that it goes into the (inifinite) loop:
    // because (useEffect) method will work again and again:every time after the (component) get (render): 
    // IMP => and component get (render):when we gave the (data) to the (useState) method:after the rendering (useEffect) method get triggered again and this will go into the (inifinite) loop:

    // V.IMP => here we gave the (userId) to the (useEffect) method:so that after the first time (rendering):if the (userId) get changes again: thenwe need to again (run) the (useEffect) method:for getting the data of that another (user):

  },[userId]);


  return (
    <div className="App" style={{paddingLeft:20}}>

      <h1>App</h1>

      {/* this button will change or set the (userId) to (2): */}
      <button  onClick={() => setUserId('2')}>change user id to 2</button>


      {/* and here we are printing the titles of the (users): */}
      
      {data.map((user) => (
        <div>
          <p>{user.title}</p>
        </div>
      ))}

    </div>
  );
}

export default App;


