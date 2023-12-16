// here we are creating the Login page:

// here we are importing the style module:which we have created particularly created for this component:
import { useState } from "react";
import styles from "../styles/login.module.css";

const Login = () => {
  // we are using the (useState) hook:To get the data from the (form):
  // and gave that data to the component elements:which will send that data to the (server) for authentication the user with the help of that data:

  // first (useState) hook:we create for the (email) data:
  const [email, setEmail] = useState("");
  // second (useState) hook: we create for the (password) data:
  const [password, setPassword] = useState("");

  // IMP = third => we also need to maintain the (data) of the user's (login) button:
  // so that user did not click that login button again and again:
  // IMP = until its get the information from the server: related to its first login-request to the server:
  // IMP = By default its (false):means user can use that button to send request to the server:
  // but when request get send to the server:then that button get disabled.until user did not get the conformation related for its first-request to the server:
  const [loggingIn, setLoggingIn] = useState(false);

  // under the Login-page:we will create the (Form):
  // through which we will get the input from the user related to there user-id and password:
  // and gave that data back to the server.TO check that this user is authorized user of the application or not:

  return (
    <form className={styles.loginForm}>
      {/* we use span-tag as our page header */}
      <span className={styles.loginSignupHeader}>Log-In</span>
      {/* here we user div-tag:
        =>under that div-tag.we basically use the input-tags to get (data) from user related to there login credentials: */}
      {/* this div's input-tag get the e-mail input from the user: */}
      <div className={styles.field}>
        {/* we are using the propeties of the input-tag:
        => first is (type) of the input-tag.
        => second we use the (placeholder) in it.To gave some repersentation value to the input-tag.so that user knows what kind of input they need to put in this particular input-tag
        => third is the (required) ristriction property:so that user did not leave this input-tag empty: */}

        {/* V.IMP = here we are using the another property of the input-tag:
        => through which we will gave the (initial-value) to (value) the email (input-tag): 
        => IMP = for that we are using the (value) property of the (input-tag):
        => and that (value) property. will get the (value) for it. from the (email) variable of the useState hook*/}

        {/* V.IMP = we are also using the (event-handler) on this input-tag:
        => so that we can get its (data) or (value).when it get triggered by the user.
        =< by simply clicking on of its (form) button or submit-button:
        V.IMP = after getting its data. we will send that data to our (setEmail) variable of the useState hook:
        = which will pass that data to the (email) variable of (userState) hook:
        => and from that varaible.we will send the user-email data to the (server).for authenticating the (user): */}
        {/* V.V.IMP = we are using the (onchange) event-handler.
        => 1 =  we need to add that (onChange) event-handler on the (input-tag).
        => 2 =  so that when ever the (input-tag) get triggered:
        => 3 =  then this event-handler will collect it (data):
        // after getting the data of input-tag in the event-handler:
        V.V.IMP = we will create the arrow-function in the (onchange) event-handler:
      => so that we can get the event-data of the input-tag from the (onchange) event-handler.
      => we will pass the event-handler data to the function as a (arguement).by simply adding (e) in the argument:
      => this (e) repersent the event-handler.
      => know we need to get the (data) from this (e) or event-handler.
      => for that we need to use the property of the (event-handler).which will gave us the (data) or (value) of the event-handler:
      => and that property name is (e.target.value):
      // IMp = after getting the value or data of the input-tag.with the help of (event-handler):
      => we have to gave that data to the (setEmail) state variable of the (useState) hook:
      => and that (setEmail) state variable of useState hook.which is basically a function itself.
      => IMP = that function basically used to change value of the other-ariable of the (useState) hook.which will have the initial or starting value related to the element:
      => and when that initail-value holder variable get the value from the function-variable:
      => then we will use that (initail-value) holder varaible :To send the (data) of the (users) credentials to the server.through which user  are try to authenticate in the application: 
      */}

        <input
          type="email"
          placeholder="Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {/* this div's input tag basically get the password input from the user: */}
      </div>
      <div className={styles.field}>
        {/* we are using the three propeties of the input-tag:
        => first is (type) of the input-tag.
        => second we use the (placeholder) in it.To gave some repersentation value to the input-tag.so that user knows what kind of input they need to put in this particular input-tag
        => third is the (required) ristriction property:so that user did not leave this input-tag empty: */}

        {/* V.V.IMP = same thing we need to do.
        => for collecting the value of password from its input-tag: 
        => the way we did in collecting the (value) of the (email):from its input-tag:
        => and send that value to its (useState) hook variable:*/}

        <input
          type="password"
          placeholder="Password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      {/* here we create another div:
      => under this div. we will have our submit button: */}
      {/* IMP = here we are giving the (disabled) property to this (button) through its (div):
      => and that disabled property will have a (value) in it.acc to the (loggingIn) state.which we have maintain with the help of usestate hook:  */}
      <div className={styles.field} disabled={loggingIn}>
        {/* IMP = here we are giving the (object) to this button:
        => with the help of our (loggingIn) state:so that user did not trigger that button again and again: */}
        <button>{loggingIn ? "Logging in...." : "Log In"}</button>
      </div>
    </form>
  );
};
export default Login;
