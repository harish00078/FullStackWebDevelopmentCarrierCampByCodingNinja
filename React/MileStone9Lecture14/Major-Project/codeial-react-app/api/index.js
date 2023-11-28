// here we are importing our object:which we have created in the (utils) folder of application:
// so that we can  store the  (token-key) in our application.
// and also we will be ablw to use it where-ever and when-ever we want it:
import { LOCALSTORAGE_TOEKN_KEY } from "../src/utils";

// here we are creating  the (customFetch) function:
// so that we did not have to write the (fetch) function.again and again for the every function which we will create to get the data from the APIs related to the particular compomemt element of our application:
// with the help of this (customFetch) function.we did not have to write the (try) and (catch) method again and again as well. for the every function which we have created to get the data of particular application component element:

// IMP = we also create our (customfetch) function:with the help of (async-await) method:
// IMp = In the custom-fetch function.we will put the (url) and (object or config-object) as the argument.
// this (config-object) argument will have two things or keys in it:
// 1 => (body) = body is basically a (user) data.like (email or password) or we can say the other (credentials or data) of (user).which we want to send when we are calling the (api) which will require the (user) data.
// 2 => (customConfig) =  this customConfig will have the other data related to the (api-request) of the (User). through which user making the request to the (backend):like some rules and ristrictions on the data which we want to get from the backend related to this  particular (api-request).
// IMP = here triple dots repersents the (spread-operator):
const customFetch = async (url, { body, ...customConfig }) => {
  // (1) => we need to get the token first:
  // because we need to pass the (token) in the (config) part of the (fetch) function or method with the (backend-api) url:
  // so the (server) knows that it the (authorized) person or user of the application which is making this (api-request):

  // => how we will get the token:
  // when ever user make the (log-in) request to the (server):
  // we will have the (token) in the response.
  // and will save that (token) in the (local-storage) of our system:or can say it will automatically get saved in the local storage of our (windows) system:
  // so that we can easily get or use that (token) in our (api-requests) in which were need it.
  //  for getting the data from the (server) for the (components) which required the (authorization) of the (user) in the application:

  // => how we can get the (token) from our (local-storage) system:
  // for that we need to use the (window.localStorage.getItem) function:
  const token = window.localStorage.getItem(LOCALSTORAGE_TOEKN_KEY);

  // (2)  => second we need to set the (headers):
  // through which we will tell about our (criteria) to the (server) related to the (api-request) which we are sending to it.
  // by simply adding this (headers) object which we have created in our (api-request):
  // we will tell it that be will only accept  the (Json) in the (request) of (api).
  // and also we will only accept the (Json) in the (response) as well:
  const headers = {
    "content-type": "application/json",
    Accept: "applicaiton/json",
  };

  //=> if there is a (token) present then we need to add it into our headers object:
  //=> so that server know it is the (authorized) user of the (application). whose making this particular (api-request):
  //=> for fetching some data from the (server):

  if (token) {
    //  we will add the (token) into the (Authorization) section of the (Header):
    // through or with the help of (Bearer):
    // what is bearer:
    // Bearer : is just a keyword used to describe the type of authentication.
    // like basic , digest etc..
    // but here we are using the (JWT) token based on the (bearer) keyword.
    headers.Authorization = `Bearer ${token}`;
  }

  // (3) => third we will create the (config) object:
  // which we are giving to the (fetch) function:
  // a => first it will have the (config) object will have all the data related to the (user) request to the (server):
  // like some rules and ristrictions on the data which we want to get from the backend or server related to this  particular (api-request).
  // and it will get it (data) from the (customConfig) argument:
  // b => second it will have the (headers) key in it:
  // through which will gave some intructions to the (server) related to our (api-request):
  // we also use the spread-operator on the (headers) object in the (headers-key) Of  (config) object:
  // so that (config) object can get all the data related to the (headers-object) in it:
  // c => also if in the (customConfig) argument we have the (headers) section or key  as well.
  // then we will also add it in the (headers) sections of our (config) object:

  const config = {
    ...customConfig,
    headers: {
      ...headers,
    },
  };

  // here we check that if we have (body) or data in our (body) argument.
  // then we will convert that (Body) or its data into the (Json) format.
  // simply using the (JSON.stringify) method:
  // and then we will gave our (body) argument or its (data) to the (config) object:

  if (body) {
    // here we gave our (body) argument to the (config) object.
    // while or after converting it into the (json) format:
    config.body = JSON.stringify(body);
  }

  // for (fetching) the data from the back-end (API). we will basically use the (try) and (catch) method. so that our application did not get (crashed).while we are fetching the data from the backend (api):

  try {
    // here we make the fetch request to (api):
    // IMP => we are also using the (await) function.while fetching the data from the (api):
    // In the (fetch) function.we will put the (url) and (config) argrument.because we want to fetch the data  from the backend or backend-api's.acc to the (url) and (config) be pass to this (customfetch) function.
    // because here we need to fetch the data from the different backend (api's) acc to our application components.

    const response = await fetch(url, config);

    // after getting the (response) or (data) from the (server):
    // => first we need to convert it into the (json) format:
    // by calling the (json) method on the (response) variable. Which has all the (data) from the (server):
    // IMP = this (json) method will also gave us the (promise):so we need to use the (await) method on it:
    // so that (promise) will (successfully) get (resolved).
    const data = await response.json();

    // if we (successfully) get the (data) from the (server):
    // then we need to (return) it from this (customFetch) function:
    // so we can use that (data) in our (Component) function and represent it on our application:
    if (response.success) {
      // our const (data) variable will have the (json) object:
      // and In that (json) object.we have the (data)-key.
      // In that (data-key) will have our (data) related to the (api-req) which we have made to the (server):
      // this why we are returing the (data.data) value:
      return {
        data: data.data,
        success: true,
      };
      console.log(data);
    }
    // console.log(data);

    // if we did not able to get the (data) from the (server):
    // then we need to (throw) an (error) with a message:
    // we will through the (message) which we will get from the (server-data):
    // IMP => for throwing an in (React).we will use the two method:with there type or property:
    // 1 = (throw) method.
    // 2 = (Error) method.
    // 3 = (new) message type or property:
    throw new Error(data.message || "Something went wrong");

    // if we have the error: when we are fetching the data from the (server):
  } catch (error) {
    console.log("error");
    // then we need to (return) that (error) message as well:
    return{
      message:error.message,
      success:false,
    }
  }
};

// here we are creating the function for the particular component element of our application:whose data we have to get from the (api):
// here we are creating the (getPosts) function.so through this function we need to get the (posts) for our application component:through which we are showing (posts) on our application:
// we are fetching these (posts) from the (API):so we need to use the (get-post) API in our (getPosts) function.so that  we can get the (posts).
// so for using the (API) in our function:we need to use the (customFetch) function:where we have write our (APIs) logic:

// we also need to pass the two (arguments) to this customFetch function:
// first is the (page).In this argument:we will define that which (page's) posts we want to fetch:
// second is the (limit).In  this argument: we will define that how much (posts) we want  to fetch  from the (API):

// IMP => getPosts is  a (pull) API request:basically it means that we are getting the data from the (API):
const getPosts = (page, limit) => {
  // under this function: we need to call the (API):from where we get the (posts) data.
  // Instead of directly calling the (API) in this (function): we will call our  (customFetch)  function. where we have written the (logic) related to our (API) calling:

  // so for  connecting it with the (customFetch) function:we need to return this (getPosts) function's data to the (customFetch) function:
  return customFetch();
};
