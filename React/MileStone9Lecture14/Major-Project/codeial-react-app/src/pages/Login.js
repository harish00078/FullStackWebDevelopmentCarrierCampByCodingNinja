// here we are creating the Login page:

// here we are importing the style module:which we have created particularly created for this component:
import styles from "../styles/login.module.css";

const Login = () => {
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
        {/* we are using the three propeties of the input-tag:
        => first is (type) of the input-tag.
        => second we use the (placeholder) in it.To gave some repersentation value to the input-tag.so that user knows what kind of input they need to put in this particular input-tag
        => third is the (required) ristriction property:so that user did not leave this input-tag empty: */}

        <input type="email" placeholder="Email" required />
        {/* this div's input tag basically get the password input from the user: */}
      </div>
      <div className={styles.field}>
        {/* we are using the three propeties of the input-tag:
        => first is (type) of the input-tag.
        => second we use the (placeholder) in it.To gave some repersentation value to the input-tag.so that user knows what kind of input they need to put in this particular input-tag
        => third is the (required) ristriction property:so that user did not leave this input-tag empty: */}

        <input type="password" placeholder="Password" required />
      </div>
      {/* here we create another div:
      => under this div. we will have our submit button: */}
      <div className={styles.field}>
        <button>Log In</button>
      </div>
    </form>
  );
};
export default Login;
