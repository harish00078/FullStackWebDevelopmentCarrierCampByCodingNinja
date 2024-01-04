// here we will creating the  custom-hooks:
// which we are using in our application:

import { useContext, useState } from "react";

// here we are importing the (AuthContext):so that we can have the access of this (AuthContext) or (AuthState) of the (user):
// In every component of our application:with the help of (useAuth) custom-hook function:
import { AuthContext } from "../providers/AuthProvider";

// here we are importing the (login) function from the (api) folder:
// which is basically connected to the (server) and get the (user-auth) from the (server):
// after (server) authenticate the (user-credentials):which has been send to the (Server) in the (request):
// through this (login) function:\
// IMp = we have to change the name of this (login) function:
// which we are importing from the (api) folder:
// because we have written the same name for the other (login) or (login) handing function:
// we can change its with the help of (as) keyword:
// by using it we can change the name of (login) fucntion:
// when we are importing it from the (api) folder:
import { login as userLogin } from "../api";

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
  // when we try to login the (user) with the help of this function:

  const login = async (email, password) => {
    // => 1 = V.IMP = this (login) function is also connected with the another (login) function:
    // which we have written in our (api) folder's (main-file):
    // that is the (function) which is connected to the (server) and get the (user-auth) from the (server):
    // => 2 = V.IMp = so for getting (user-auth) from the (server):
    // we need to call that (login-function) which is connected to the (server).under this function:
    // and to that function we have pass the (user-credentials):
    // so that it can pass those (user-credentials) to the (server).
    // and get the (user-auth) from the (server) for us:

    //  => 3 =  V.IMP = when we get the (user-auth) result from the (login-function):
    // which is connected to the (server):
    // we have to save that (result) in this (login) fucntion:were  are handling the (login) functionality for our (application):
    /// so that we can  authenticate the (user) to  our application:
    // when its (login-credentials) successfully get (authenticated) by the (server):

    // => 4 = we are saving the (server) response related to the (user-auth):
    // In the (response) variable:
    

    const response = await userLogin(email, password);

    // => 5 = after that we have to check that:
    // (user) successfully get authenticated or not:
    // if the (server) response is (successfull) or (true):
    if (response.success) {
      // if user (successfully) get authenticated:
      // then we will gave the (user) data which we are getting from the (server):
      // To our (user) state:which we have created:
      // so we can access that (state) in our application components:
      // with the help of (useAuth) custom-hooK:
      // here we will only gave the (user) data to the (user) state:
      // IMP = under the (data) section of our (server's) response:we have the (user) data:
      setUser(response.data.user);
      // console.log('sever',response.data);
  

      // then we need to return that (success) response:
      // from this (login) function:so that (useProvideAuth) function:
      // can have the (access) of that (response):
      // and gave that to the every component of our applicaion:
      return {
        success: true,
      };
      // if the (server) response is (notsuccessfull) or (false):
    } else {
      // then we return.the whatever message.we get from the (server):
      // through (login) function:so that (useProvideAuth) function:
      // can have the (access) of that (response):
      // and gave that to the every component of our applicaion:
      return {
        return: false,
        message: response.message,
      };
    }
  };

  // 4 => it also have a (logout) functionality:
  // through which we are handling the (logout) functionlity in our application:
  const logout = () => {
    // for hanlding the (logout) functionality of our application:through the (logout) function:
    // we simply have to set the (user) state to (null): 
    setUser(null);
  };

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
