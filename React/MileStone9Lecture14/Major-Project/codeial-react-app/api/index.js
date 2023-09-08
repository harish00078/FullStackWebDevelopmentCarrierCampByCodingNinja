// here we are creating  the (customFetch) function:
// so that we did not have to write the (fetch) function.again and again for the every function which we will create to get the data from the APIs related to the particular compomemt element of our application:
// with the help of this (customFetch) function.we did not have to write the (try) and (catch) method again and again as well. for the every function which we have created to get the data of particular application component element: 

// IMP = we also create our (customfetch) function:with the help of (async-await) method:
// IMp = In the custom-fetch function.we will put the (url) and (object or config-ob ject) as the argument.this (config-object) argument will have two things or keys:
// 1 => (body) = body is basically a (user) data.like (email or password) or we can say the other (credentials or data) of (user).which we want to send when we are calling the (api) which will require the (user) data.
// 2 => (customConfig) = 

const customFetch = async (url,{body}) => {

  // for (fetching) the data from the back-end (API). we will basically use the (try) and (catch) method. so that our application did not get (crashed).while we are fetching the data from the backend (api):
  
  try{

    // here we make the fetch request the (api):
    // IMP => we are also using the (await) function.while fetching the data from the (api):
    // In the fetch function.we will put the (url) and (config) argrument.because we want to fetch the data  from the backend or backend-api's.acc to the (url) and (config) be pass to this (customfetch) function.because here we need to fetch the data from the different backend (api's) acc to our application components.
    const response = await fetch(url,config);


  }catch(error){
    console.log('error');
  }

};



// here we are creating the function for the particular component element of our application:whose data we have to get from the (api):
// here we are creating the (getPosts) function.so through this function we need to get the (posts) for our application component:through which we are showing (posts) on our application:
// we are fetching these (posts) from the (API):so we need to use the (get-post) API in our (getPosts) function.so that  we can get the (posts).
// so for using the (API) in our function:we need to use the (customFetch) function:where we have write our (APIs) logic:

// we also need to pass the two (arguments) this function:
// first is the (page).In this argument:we will define that which (page's) posts we want to fetch:
// second is the (limit).In  this argument: we will define that how much (posts) we want  to fetch  from the (API):


// IMP => getPosts is  a (pull) API request:basically it means that we are getting the data from the (API):
const getPosts = (page,limit) => {

  // under this function: we need to call the (API):from where we get the (posts) data.
  // Instead of directly calling the (API) in this (function): we will call our  (customFetch)  function. where we have written the (logic) related to our (API) calling:

  // so for  connecting it with the (customFetch) function:we need to return it to the (customFetch) function:
  return customFetch();

}



