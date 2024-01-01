// here we will creating the  custom-hooks:
// which we are using in our application:

import { useContext, useState } from "react";

// here we are importing the (AuthContext):so that we can have the access of this (AuthContext) or (AuthState) of the (user):
// In every component of our application:with the help of (useAuth) custom-hook function:
import { AuthContext } from "../providers/AuthProvider";

// 2 => here we create the second custom-hook named as (useAuth):with the help of this custom-hook:
// IMP = we will be able to (access) the (Auth-state) of the (user) in  our application-components:
// 1 = basically means that the (AuthProvider) function will (provide) the (auth-state) of the (user) to the every component of our application:
// 2 = And with the help of (useAuth) custom-hook: we will be able to (access) that (Auth-state) of the (user) in our application components:

export const useAuth = () => {
  // V.IMP= 3  => so for giving the acccess of the (user-auth) state.
  //  with the help of this custom-hook function.In each and every component of our application:
  //  V.IMP=4  => we need to (return) the (auth-state) or (auth-context) of the (user) from this custom-hook function:
  //so that whenever we want to access the (auth-state) of the (user).
  // In our application components.we can have that with the help of this (useAuth) custom-hook:

  // V.IMP = 5=> the (Auth-state) of the (user).will be present in the(Auth-context).which we have created:
  // so we have to (return) that (Auth-context):form this custom-hook fucntion:
  // so that we can have the (access) of that (Auth-context or state) of the (user) in our each and every component of application:
  // V.IMP = 6 => so for doing that first we need to have that (Auth-context) of the (user) in this (custom-hook) function:
  // we can have that (Auth-context)  in this custom-hook:
  // with the help of (inbuild) hook named as (useContext):
  // and after that from this (custom-hook) function.we will have that (Auth-context).
  // In every component of our application:
  // V.IMP = 7 => the main reason of doing this or creating this (custom-hook) function:
  // so that we did not have to import the (useContext) hook again and again.
  // were we want to have the access of user (Auth-state or Context):
  // we can simple get that state with the help of this (custom-hook) funciton:

  return useContext(AuthContext);




};

// 1 => here we create the first custom-hook named as (useProvideAuth):
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
  // IMP = we will add the (async-await) method on this function:
  // so that our (application) did not get (crash):through any of the (error):
  // when we try to login the (user) with the help of function:
  
  const login = async (email, password) => {

    

  };

  // 4 => it also have a (logout) functionality:
  // through which we are handling the (logout) functionlity in our application:
  const logout = () => {};

  // 5 => the (sign-up) functionality will also be handle under this (function):

  // 6 => V.IMP = we also need to return all these things from this function:
  // because through this function.we are providing the these things to the another function or element:
  // that why we have to return them from this function:
  // so that we can access these things on the another function or element:
  return {
    user,
    login,
    logout,
    laoding,
  };
};
