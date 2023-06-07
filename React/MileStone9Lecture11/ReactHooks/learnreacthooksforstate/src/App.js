// here we are learning about the (React-hooks):
// V.IMP => here we learn about that how we can use (state) in react: without the class-component method:
// so for that here we create (react-component):with the help of function-component method:instead of using  the (class-component) method:

// IMP = here we are learning about that:how can we use (state) in the react:without the class-component method:with the help of (react-hooks):

// IMP = so know we have to gave the state to our components:without the class-component method:for that we can use the (useState) method of the (react):
// this (useState) method is basically a (react-hook):because in react (hook) is basically a function which will let us to hook into the react (features):such as (state) or (component) lifecycle methods and etc:
// so with the help of (hooks):we can use the (features) or (functions) of the (react) easily:
// and mostly or more importantly we can use (hooks) in anywhere of our (app):

import React,{useState} from "react";


function App() {

  // (useState) method of (react) is basically  a (array) or we can say provide us the (array):which will only take the (one) argument:
  // and we have to pass the (initail-state) of our component in that (argument):we can also pass the (empty) string as (initail-state) of our component:
  // IMP = this (useState) function:basically return the two things or two arguments we can say:In first argument,we have the (current) state of our component:and In second argument,we have the (function):To that function we have pass our own created function which are (handling) the (OnChange) (event) of the component element:by passing our own created  function:To the (useState) method function: we can handle our component (state) or we can say change its (state):
  const emailState =  useState('');


  // here we create a (email) variable:which will get the value of (email) from some where else:
  // here we are  passing the value to the (email) variable:from  the (emailState) variable:which will basically have the return array value of the (useState) function:we have to pass the (0th) argument to this (email) variable:because that argument have the initail state of our component:
  const email = emailState[0];

  // here we create another variable (setEmail):which will have the (function) for our (onChange)event-handler:
  // here we are passing our component event handler function value to the (function):that we are getting in the return of (second) argument of our (useState) method array:and that second argument function will basically chnage  the value our component (state):
  // so here we have to pass the (first-index) of the array:because that will we the (function) which we are getting in the return from (useState) method:
  const setEmail = emailState[1];


  // if we want to create another component in same-app:for that we can again use the (useState) method in same-app:
  // we can use the (useState) method:In app as many times as we needed:
  // so here we use the (useState) method:for the (name) component:

  // const nameState = useState('');
  // const name = nameState[0];
  // const setName = nameState[1];

  // IMP => we can also define all the things in one line of code:we will create the (array) which will have the variables:and those varaibles where basically getting the values from the returning (array) of (useState)method:
  // we gave the variables to that array in the manner of (return) arguments array that we are getting from the (useState)method:
  const[name,setName]  = useState('');



  // here we create the function for our (event) handler:
  function handleChange(e){
    // which will have another function(setEmail):which we are getting from some where else:which will handle our (event) handler:
    setEmail(e.target.value);
  }

  // here we create the function for our event handler on (name) component:
  function handleChangeName(e){
    setName(e.target.value);
  }


  return (

    // so for learning about that:here we create a small react-app with the help of function-component method:not with the class-component method:
    // To know that how can we use the (state) and other functions or features of the react:without the class-component method:


    <div className="App" style={{padding:10}}>
      <input
      value={email}
      onChange={handleChange}
      />

      <input
      value={name}
      onChange={handleChangeName}
      />
      <p>Email:{email}</p>
      <p>Name:{name}</p>

      
    </div>
  );
}

export default App;
