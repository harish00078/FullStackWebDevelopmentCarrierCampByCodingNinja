// here we will creating the  custom-hooks:
// which we are using in our application:

import { useState } from "react";

// first we create the (useProvideAuth) custom hook:
// through which we are handling the authentication in our application:
// IMP => we will create the custom-hooks:with the help of functions:
// here we are using the (arrow-function):
export const useProvideAuth = () => {
  // 1 => under this custom-hook or function.we  basically have or handle the (user-auth) state:
  // that (state) basically handle or manage by the inbuild  (useState) hook:
  // by default it has a value of (null):because by default our user have a (null) auth:
  const [user, setUser] = useState(null);
  // 2 => this function also have a (loading) functionality in it:
  // for that we are creating the another state (loading);with the help of (useState) hook:
  // which is initially or bydefault set to be true:
  const [laoding, setLoading] = useState(true);

  // 3 => after that it aslo have a (login) function init:
  // through which we are handling the (login) functionlity in our application:
  // this funciton will have a (two) arguments in it:
  // first is (email) of (user):
  // second is (password) which provided by the (user):
  const login = (email, password) => {};

  // 4 => it also have a (logout) functionality:
  // through which we are handling the (logout) functionlity in our application:
  const logout = () => {};

  // 5 => the (sign-up) functionality will also be handle under this (function):

  


};
