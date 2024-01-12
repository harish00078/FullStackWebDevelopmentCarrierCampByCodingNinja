// here we are creating the (Sign-Up) or (Register) page for our application:
// this is where users will create a new account if they don't already have one.

// import the (useState) hook from (react):
// through which we will basically hanlde the (register) and (sign-uip) state related to the (user):
import {useState} from 'react';

// import the (useHistory) library from  (react-router-dom):
import {useHistory} from 'react-router-dom';

// import the (useToasts) library from (react-toast-notifications) package:
// through which  we will basically  provide the (notifications) to our application (Component-elements):
import {useToasts} from 'react-toast-notifications';

// import the (useAuth) custom-hook:
// through which we will basically provide (authentication) to our (application-components):
import {useAuth} from '../hooks';

// import the (styles) from (styles) folder:
// we are basically using  our (login) file styles here as well:
// because the (register) or (sign-up) page will be similer to the (login) page:
import styles from '../styles/login.module.css';


// here we are creating the (sign-up) or (register) component for our application:
const Signup = () =>{
    // 1 = first => we will manage the (name) of the (user) in our component:through (useState) hook:
    // the (name) that has been given to us.by the (signup) form.which we have created in the (sign-up) component:
    // through that (form) we will basically get the (user) data in our (sign-up) component:
    const [user,setName] = useState('');
    // 2 = secondly => we will handle the (email) of the (user):through (useState) hook:
    // the (email) that has been given to us.by the (signup) form.which we have created in the (sign-up) component:
    // through that (form) we will basically get the (user) data in our (sign-up) component:
    const [email,setEnail] =  useState('');
    // 3 = thirdly => we will handle the (password) of the (user):
    // the same way.we get the user (name) or (email):
    const [password, setPassword] = useState('');
    // 4 = fourth => we will handle the (confirmPassword) section of the (user):
    // In the (sign-up) page of our application: we will basically have the (two) password section:
    // one for entering the (password) and another for confirming it:
    // we will also handle it in the same way.we hanlde the other elements of the (form):
    const [confirmPassword,setConfirmPassword] = useState('');
    // 5 = fifth => here we are managing the (state) for our (register) and (sign-up) button:
    // we gonna also do that  with the help of (useState) hook:
    // we are doing this because we did not want to crash our application:
    // IMP = In simple words that we will basically block our button.when user (click) the (sign-up) button:
    // and we will not release the (block) state of that button:
    // until the (user's) first (sign-up) request does not get satteled by the (server):
    const [signingUp, setSigningUp] = useState('');
    // 6 = sixth => here we are importing (addToast) function of the (useToasts) library:
    // through which we will basically (provide) and (add) notification in our application component-elements:
    const {addTast} = useToasts();
    // 7 = seventh => here we will call our (useAuth) custom-hook:
    // through which we will basically provide the (auth) to our application components:
    const auth = useAuth();

    // 8 = eight => here we are calling the (useHistory) Library:
    // through that we can redirect the user to the homepage after successful registration:
    const history = useHistory();


    // => 1 = Here we are creating the Fucntion:
    // through which we will basically handle the (submission) of our (sign-up) component's (form):
    // with the help of this function.we are basically getting the (userS-data):
    // through which they are try to get (register) into our application:
    // after getting the (user-data) from the (form) in the (function):
    // we will basically pass that (data) to the (server).
    // with the help of (useAuth) custom-hook:and if its (data) is in the correct format.
    // acc to the (server).then (user) will successfully get (authenticated) in our application:
    
    // IMP => 1 =  we are basically get the (user-data) from the (form) in the (event-hanlder):
    // we have to pass that (event-hanlder) to the (function):
    // so we can access that (user-data) in the (function):
    // IMP => 2 =  we are also adding the (async) method on this function:
    // so that our application did not get crashed.
    // when we are getting or (passing) the (user-data) to the (server):
    const handleFormSubmit = asyn (e) =>{
    
        // => 3 = first we need to (stop) the (default) setting of the signUp-form's (event-hanlder):
        // so that our (sign-up) form does not get reloaded.after it get submitted:
        // we only want to reload it.when (user's) sign-up request is satteled by the (server):
        // IMp = for doing this we need to use the (preventDefault) function on the (event-handler):
        e.preventDefault();

        // => 4 = second we have to (block) our (sign-up) button:
        // so that (user) will not able to (click) twice:
        // on the (sign-up) button:for that we are managing the (state) of the (button):
        // IMP = when(user) once clicked the (sign-up) button:will set its state (true):
        // so that (user) will not able to click again on the (button):
        // util it get its (first-request) response from the (server):
        setSigningUp(true);

        // => 5-IMP = third in here we are managing the (errors) in our (handleFormSubmit) function:
        // so for managing the (error) in this (function):
        // we basically the create the (variable):which is maintaing a (boolen) value in it:
        // so that whenever:we want to tell the (user) that you have (error):
        // with the (form) that you are trying to submitting to the (server):
        // IMP = where we have the (error). we will basically set that (error) variable's value to (true).
        // But by default it has (false) value:
        // IMP = example if we have (error):then we need to tell that (error) to the (user):
        // we will tell that (error) to the (user) with the help of (notification):
        // for trigging that (notification):we are basically maintaing that (error) variable:
        // so when we got (error) in any of the (check) points in the (fucntion):
        // we wil set the (error) variable (value) to (true):and with that the (notification):
        // which we have added in the (particular) check point:will automatically get triggred.
        // and show the (notification) to the (user):
        // we are using the (let) variable-type to create the (variable):
        let error = false;


        // => 6 = then we will validate our (user-data):
        // that (data) which we get from the (form):
        // Is that data is  (appropriate) or (filled) with all the (fields) of the (form):
        // then only we are able to send (user-register) request to the (server):
        // we need to check the (four) fields of sign-up (form):
        if (!name || !email || !password || !confirmPassword){
            // if any of one form field is missing:
            // then we have to trigger the (error):
            // for (triggering) the (error) in between the (function) sequence:
            // we have to use the (error) varaible .which we are maintaing to (trigger) the (error) in between execution sequence of (function):
            
            // IMP = we create (notification):with the help of (addToast) function:
            addToast('please fill all the fields of form',{
                // we also have to provide some properties to this (notification) as well:
                // like: Its-type,and remove-state from our web-app:
                appearance:'error',
                autoDismiss:true,
            });

            // if we have (error).then we simply set the (error) variable value to (true):
            // and that will trigger.our (error) notification:
            // which we have (created) for this (error) check point:
            error = true;



        }

        // => 7 = if that (check-point) get (pass):
        // then we have to match our both passwords (fields):
        // Like our both  passwords (fields) .should have the same (password):
        // IMP = all other it have the (same) process.
        // Like we did on checking all the (form-fields) to show (notification).
        // if we have (error) in it:
        if(password !== confirmPassword){
            addToast('make sure password and confirm password field matches',{
                appearance:'error',
                autoDismiss:true,
            });
            error = true;
        }

        // IMP = And if we get any of the (error) from above form-data check-points:
        // then we also have to (disabled) our (form) button:
        // so that (user) can again gave  (request) to the (server):
        // by providing the (appropriate) data on the (form):
        if (error){
            return setSigningUp(false);
        }

    }




}