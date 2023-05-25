// here we create the hooks:under this hooks-file:
// IMP => we can create the multiple (hooks):for the multiple components of our application in this one-file:
// IMP => Or we can create the (one-hook):which we need to create again and again for the multiple components of our application: So instead of creating that hook again and again for the multiple components:we will only create it once in this hooks-file:and we can use it in the multiple components of  our application from this file:

import { useState } from "react";


// SO for doing that we need to create the custom-hook:
// we can create the custom-hook:with the help of (use) function:
// IMP => here we create (FormInput) custom-hook:with the help of (use) function:
// we are creating the custom-hook:so that we can use it in the multiple components of our application:for getting the value of there (forms):

// we also need to gave the (initialvalue) to the custom-hook:
export  function useFormInput (initialvalue){

  // under this custom-hook:we use the react's (useState):through which we can gave the (state) to the react components:  
  const [value,setValue] = useState(initialvalue);


  // we also need to create the (event-handler) function:under this custom-hook function:
  // so that we can handle the (data) of our (form's) event:
  // and also we are able to gave that (data) to our application (component) with the help of (useState) function:
  function handleChange(e){

    // here we gave the data of (form's) event:to the (useState) function:
    // so that we can gave the (form-data): To our application (component):with the help of (useState) function:
    setValue(e.target.value);



  }

  // and after that we need to return:
  // => the (value) of our component or the (event-handler) function:from this (custom-hook) function:
  // so that we can gave them to our application (component):
  // and we will return them into the (object):so that we can return both the things in the one return statement:and also we are retruning the value(array) from the (useState)function:

  return{
    value,
    onChange:handleChange,
  }




}