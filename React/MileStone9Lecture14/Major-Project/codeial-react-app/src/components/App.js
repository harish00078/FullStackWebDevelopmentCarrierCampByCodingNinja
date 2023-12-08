// we use (useEffect) hook of (react):To fetch the data from the (server) through (API):
import { useEffect } from "react";

// =>  here we are importing the functions.through which we are connecting to the (server):
// and the getting the (data) for the (component):
import { getPosts } from "../api";

// => here we are importing our application (pages):

// first we import the (home) page:
import { Home } from "../pages";

function App() {
  // here we are using the (useEffect) hook:
  // To calling the (api_url) for the particular (component):
  // IMP => we are also using the (async) function here on the (useEffect) method:
  // so that our application did not get (crash).and successfully (get) or (fetch) the (data) from the (api) function:

  useEffect(() => {
    // V.IMP = so instead of using the (async) function direclty on the (useEffect) method:
    // we can created the another (arrow-function) and on that (function) we will use the (async) method:
    // and  In this function we will  (fetch) or get our  (data) from the (api) function:
    const fetchPosts = async () => {
      // here we will get the (data) from the (getPosts) function:
      // and we will save it in the (response) variable:
      // IMP = we are also using the (await) function on the (variable).
      // so that we will successfully (fetch) our data from the (api) function:
      const response = await getPosts();
      console.log('response',response);
    };
    // now we just call the (fetchPosts) function:
    // so that we can access (data) of its outside the (function):In the (useEffect) method:
    fetchPosts();

    // we are also using the (square) brackets on the (useEffect) method:
    // so that can only run once:
  },[]);

  return (
    <div className="App">
    
        {/* here we are rendering or showing out (home) page */}
        <Home/>
      
    </div>
  );
}

export default App;
