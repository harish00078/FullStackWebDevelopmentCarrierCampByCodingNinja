import React, { useState } from "react";

// here we create function:In that function we basically create our (state) object and (event-handler) functions:which were related to our (function) component:

// IMP => It is also known as (Custom-hook):
// there are two rules related to the (Custom-hook):
// 1 = first thing is that the function-name should start with the (use) variable:
// 2 = second thing is that the function should have the react's inbuild (hook) in it:

// V.IMP => we can also (post) our (custom-hook):on the (react) community website:where other can use itL
// or we can also use there (custom-hooks) in our (react-app):




// we are doing because:if we need to use the same (state) object or (event-handler) fucntions agian and again in the (function) component:so instead of writing them again and again:
// what we can do is we will basically create the another function:and In that function we will create our (state) object or (event-handler) fucntions:which will related to our (function) component:
// and from this (fucntion) we will basically get our (state) object or (event-handler) fucntions: In our function component:so we did not have to write them again and again:

// here we are creating the (function) for our component (state) object or its (event-handler) functions:
// IMP => so we need to create the (state) object or its (event-handler) functions:acc to this logic:that we have to use them in the same component:and also have to use the (multiple) times:

// In argument:we have to pass  the (initial-value) to this function:
// because In (useState) method:we need to pass the (initial-value) of our component's (element):

function useFromInputs() {
  // IMP => so we need to create the (state) object or its (event-handler) functions:acc to this logic:that we have to use them in the same component:and also have to use the (multiple) times:

  const [value, setValue] = useState("");

  // and here we create (event-handler) function:for getting change in value:at (input-tag):
  function handleChange(e) {
    setValue(e.target.value);
  }

  // know after getting all the things:we need to return them from this function:
  // so that we can use them in our (function) component:
  // IMP => here we are returning the values and functions in the form of (Object):

  return {
    // here we are returning the value:

    value,

    // and also returning the function that we have created for the (onChange) event handler:
    // IMP => so here we gave the (onChange) name to this event-handler (function) and return it from this function:
    onChange: handleChange,
  };
}

// here we are creating the (logIn) form component for our web-app:with the help of (function) component:

function LogInForm() {
  // here we gave (state) our component elements:with the help of (useState) method:

  // const [email,setEmail] = useState('');
  // const [password,setPassword] = useState('');

  // here we create function for handling event on the (email) input-tag:

  // function handleEmailChange(e){
  //   setEmail(e.target.value);
  // }

  // here we create function for handling event on the (password) input-tag:

  // function handlePasswordChange(e){
  //   setPassword(e.target.value);

  // }

  // here we are getting the (state) value for our component's email and password element:from the (function) that we have created:
  // so here we are getting the (values and functions) in the form of  (object): from the (function):that we have created:

  // here we store that (object) in the (variables):
  // so that we can use that (object) in the component elements:
  const email = useFromInputs("");

  const password = useFromInputs("");

  // here we are creating our LogIn (form):

  return (
    <form>
      <div>Email</div>
      <div>
        {/* here we are using that Object:
        => we are giving the (state) and (event-handler) function:to our (component) element:
        => we need to gave the (keys):with the object to the element:for defining that which particular value of the (object):we need to gave the particular (element): */}

        {/* <input type="text" value={email.value} onChange={email.onChange} /> */}

        {/* V.IMP => so instead of giving the function returned object (keys): to the each (elements) of the component:
        
        => we can basically use (spread-operator) of our (email) object in the (element):where we want to use it:so that we did not have to provide the object (keys) to the every (element) separately:
        
        => IMP =  what this (spread-operator) = {...} do:it will basically connect the (value =  value) and (onChange = onChange): */}

        <input type="text" {...email} />
      </div>
      <br />
      <div>Password</div>
      <div>
        {/* here we are using that Object:
        => we are giving the (state) and (event-handler) function:to our (component) element:
      => we need to gave the (keys):with the object to the element:for defining that which particular value of the (object):we need to gave the particular (element): */}

        <input
          type="password"
          value={password.value}
          onChange={password.onChange}
        />
      </div>

      <p>
        {/* here we are using that Object:
        => we are giving the (state) and (event-handler) function:to our (component) element:
      => we need to gave the (keys):with the object to the element:for defining that which particular value of the (object):we need to gave the particular (element): */}

        <strong>
          <em>Email:</em>
        </strong>
        {email.value}

        <strong>
          <em>Password:</em>
        </strong>
        {password.value}
      </p>
    </form>
  );
}

// here we are creating the (SignUp) form component for our web-app:with the help of (function) component:

function SignUpForm() {
  // here we gave (state) our component elements:with the help of (useState) method:

  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [confirmpassword, setConfirmPassword] = useState("");

  // here we create function for handling event on the (email) input-tag:
  // function handleEmailChange(e) {
  //   setEmail(e.target.value);
  // }

  // here we create function for handling event on the (password) input-tag:
  // function handlePasswordChange(e) {
  //   setPassword(e.target.value);
  // }

  // here we create function for handling event on the (confirmPassword) input-tag:
  // function handleConfirmPasswordChange(e) {
  //   setConfirmPassword(e.target.value);
  // }

  // here we are getting the (state) value for our component elements:from the (function) that we have created:
  // so here we are getting the (values and functions) in the form of  (object): from the (function):that we have created:

  // here we store that (object) in the (variables):
  // so that we can use that (object) in the component elements:
  const email = useFromInputs("");

  const password = useFromInputs("");

  const confirmPassword = useFromInputs("");

  // here we are creating our SignUp (form):

  return (
    <form>
      <div>Email</div>
      <div>
        {/* <input type="text" value={email.value} onChange={email.onChange} /> */}

        {/* here we are using the (spread-operator):for giving the (values) to the component (elements): */}

        <input type="text" {...email} />
      </div>
      <br />
      <div>Password</div>
      <div>
        {/* <input
          type="password"
          value={password}
          onChange={handlePasswordChange}
        /> */}

        {/* here we are using the (spread-operator):for giving the (values) to the component (elements): */}

        <input type="password" {...password} />
      </div>
      <br />
      <div>ConfirmPassword</div>
      <div>
        {/* here we are using the (spread-operator):for giving the (values) to the component (elements): */}

        <input type="password" {...confirmPassword} />
      </div>

      <p>
        <strong>
          <em>Email:</em>
        </strong>
        {email.value}

        <strong>
          <em>Password:</em>
        </strong>
        {password.value}
        <strong>
          <em>ConfirmPassword:</em>
        </strong>
        {confirmPassword.value}
      </p>
    </form>
  );
}

function App(props) {
  return (
    <div className="App" style={{ paddingLeft: 20 }}>
      <h2>Login</h2>

      {/* here we have (login) form: */}

      <LogInForm />

      {/* here we gave horizontal-line between the both forms  */}
      <hr />

      <h3>SignUp</h3>

      {/* here we have (signup) form */}

      <SignUpForm />
    </div>
  );
}

export default App;
