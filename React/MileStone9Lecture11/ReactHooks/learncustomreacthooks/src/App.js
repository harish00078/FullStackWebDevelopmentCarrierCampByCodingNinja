import React, {useState} from  'react';

// here we are creating the (logIn) form component for our web-app:with the help of (function) component:

function LogInForm(){

  // here we gave (state) our component elements:with the help of (useState) method:

  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');

  // here we create function for handling event on the (email) input-tag:

  function handleEmailChange(e){
    setEmail(e.target.value);
  }

  // here we create function for handling event on the (password) input-tag:

  function handlePasswordChange(e){
    setPassword(e.target.value);
  
  }

  // here we are creating our LogIn (form):

  return (

    <form>
      <div>
        Email
      </div>
      <div>
        <input type='text' value={email} onChange={handleEmailChange}  />
      </div>
      <br/>
      <div>Password</div>
      <div>
        <input
        type="password"
        value={password}
        onChange={handlePasswordChange}
        />
      </div>


      <p>

        <strong>
          <em>Email:</em>
        </strong>
        {email}

        <strong>
          <em>Password:</em>
        </strong>
        {password}

      </p>



    </form>

  )




}


// here we are creating the (SignUp) form component for our web-app:with the help of (function) component:

function SignUpForm(){

  // here we gave (state) our component elements:with the help of (useState) method:


  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [confirmpassword,setConfirmPassword] = useState('');


  // here we create function for handling event on the (email) input-tag:
  function handleEmailChange(e){
    setEmail(e.target.value);
  }

  // here we create function for handling event on the (password) input-tag:
  function handlePasswordChange(e){
    setPassword(e.target.value);
  }

  // here we create function for handling event on the (confirmPassword) input-tag:
  function handleConfirmPasswordChange(e){
    setConfirmPassword(e.target.value);
  }


    // here we are creating our SignUp (form):

    return (

      <form>
        <div>
          Email
        </div>
        <div>
          <input type='text' value={email} onChange={handleEmailChange}  />
        </div>
        <br/>
        <div>Password</div>
        <div>
          <input
          type="password"
          value={password}
          onChange={handlePasswordChange}
          />
        </div>
        <br/>
        <div>ConfirmPassword</div>
        <div>
          <input
          type="password"
          value={confirmpassword}
          onChange={handleConfirmPasswordChange}
          />
        </div>
  
  
        <p>
  
          <strong>
            <em>Email:</em>
          </strong>
          {email}
  
          <strong>
            <em>Password:</em>
          </strong>
          {password}
          <strong>
            <em>ConfirmPassword:</em>
          </strong>
          {confirmpassword}
  
        </p>
  
  
  
      </form>
  
    )




}





function App(props) {
  return (
    <div className="App" style={{paddingLeft:20}}>

      <h2>Login</h2>

      {/* here we have (login) form: */}

      <LogInForm />

      {/* here we gave horizontal-line between the both forms  */}
      <hr/>

      <h3>SignUp</h3>

      {/* here we have (signup) form */}

      <SignUpForm />





    </div>
  );
}

export default App;
