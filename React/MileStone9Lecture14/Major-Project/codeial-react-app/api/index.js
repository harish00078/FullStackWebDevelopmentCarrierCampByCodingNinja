// here we are creating  the (customFetch) function:
// so that we did not have to write the (fetch) function.again and again for the every function which we will create to get the data from the APIs related to the particular compomemt element of our application:
// with the help of this (customFetch) function.we did not have to write the (try) and (catch) method again and again as well. for the every function which we have created to get the data of particular application component element: 
// const customFetch = () => {

// };



// here we are creating the function for the particular component element of our application:whose data we have to get from the (api):
// here we are creating the (getPosts) function.so through this function we need to get the (posts) for our application component:through which we are showing (posts) on our application:
// we are fetching these (posts) from the (API):so we need to use the (get-post) API in our (getPosts) function.so that  we can get the (posts).
// so for using the (API) in our function:we need to use the (customFetch) function:where we have write our (APIs) logic:

// we also need to pass the two (arguments) this function:
// first is the (page).In this argument:we will define that which (page's) posts we want to fetch:
// second is the (limit).In  this argument: we will define that how much (posts) we want  to fetch  from the (API):


// // IMP => getPosts is  a (pull) API request:basically it means that we are getting the data from the (API):
// const getPosts = (page,limit) => {

//   // under this function: we need to call the (API):from where we get the (posts) data.
//   // Instead of directly calling the (API) in this (function): we will call our  (customFetch)  function. where we have written the (logic) related to our (API) calling:

//   // so for  connecting it with the (customFetch) function:we need to return it to the (customFetch) function:
//   return customFetch();

// }



