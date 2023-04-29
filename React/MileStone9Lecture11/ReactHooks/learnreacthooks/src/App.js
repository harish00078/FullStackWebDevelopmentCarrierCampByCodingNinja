// here we are learning about the (React-hooks):
// so for that here we create (react-component):with the help of function-component method:instead of using  the (class-component) method:

// IMP = here we are learning about that:how can we use (state) or other functions or features of the react:without the class-component method:with the help of (react-hooks):

// IMP = so know we have to gave the state to our components:without the class-component method:for that we can use the (useState) method of the (react):
// this (useState) method is basically a (react-hook):because in react (hook) is basically a function which will let us to hook into the react (features):such as (state) or (component) lifecycle methods and etc:
// so with the help of (hooks):we can use the (features) or (functions) of the (react) easily:
// and mostly or more importantly we can use (hooks) in anywhere of our (app):

import React,{useState} from "react";


function App() {

  // (useState) method of (react) is basically  a (array) or we can say provide us the (array):which will only take the (one) argument:
  // and we have to pass the (initail-state) of our component to that (argument):
  const emailState =  useState('a@a.com');


  // here we create a (email) variable:which will get the value of (email) from some where else:
  const email = //

  // here we create another variable (setEmail):which will have the (function) for our (onChange)event-handler:
  const setEmail = //

  // here we create the function for our (event) handler:
  function handleChange(e){
    // which will have another function(setEmail):which we are getting from some where else:which will handle our (event) handler:
    setEmail(e.target.value);
  }



  return (

    // so for learning about that:here we create a small react-app with the help of function-component method:not with the class-component method:
    // To know that how can we use the (state) and other functions or features of the react:without the class-component method:


    <div className="App" style={{padding:10}}>
      <input
      value={email}
      onChange={handleChange}
      />

      <p>Email:{email}</p>
      
    </div>
  );
}

export default App;
