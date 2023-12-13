// we use (useEffect) hook of (react):To fetch the data from the (server) through (API):
import { useEffect, useState } from "react";

// =>  here we are importing the functions.through which we are connecting to the (server):
// and the getting the (data) for the (component):
import { getPosts } from "../api";

// => here we are importing our application (pages):

// first we import the (home) page:
import { Home } from "../pages";

// here we import our (Navbar) component:
// so that we can use or get it into our application:
import {Navbar} from "./";

// here we are importing the loader-component:
// we can simply use the (./) to import  our Loader-comonent:
// because our (app) or (loader) component both present in the same folder:
import { Loader } from "./";

function App() {
  // here we using the (useState) hook to repersent our (posts) from the (server):
  // In our (app) or (home) component:
  // IMP = the initail value of (useState) hook will be a empty array:

  // V.IMP = after getting the (posts) from the (setPosts) function to (posts) variable:
  // we need to gave that (posts) or (posts) variable to our (home-page):
  // because we have written the (posts-component) in our home-page:
  // V.IMP = we can do that with the help of (props) method:
  // so we are passing the (posts) variable.which have our (posts) data:
  // To our (home-page) with the help of (props) method:
  const [posts, setPosts] = useState([]);

  // here we are creating the another (State) loading:
  // through which we will show the (loading) spinner on our application-browser:
  // while we are fetching the (data) from the (server):

  // by default this loader will have the (true) value:
  // so that when ever our application get start or load:
  // it will start immediately.and continous running until we will get the (data) from the (server) 
  const[loading,setLoading] = useState(true);


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
      console.log("response", response);

      // IMP => here we are giving our (posts) data to the (setPosts) function of the (useState) hook:
      // so that our (posts) data will get repersented on the browser:
      // IMP =>  through this (setPosts) function we will gave our data to the (posts) variable of (useState) hook:
      // and with the help of that (post) variable.
      /// we will gave our (posts) data to (post) component:

      // before giving the (post) data to the (setPosts) function:
      // we need to check that we have the (data) in our (response) or (data-variable);
      // so that we can avoid the (error) of the (undefined) data:
      // IMP => we can do that by simply checking the (message-key) in the (data):
      // if its (success).then it means we have the (data):
      if (response.success) {

        setPosts(response.data.posts);

      }

      // => and after we get the (data) from (server) successfully:
      // then we need to put the (loader) default value into (false):
      setLoading(false);

    };

    // now we just call the (fetchPosts) function:
    // so that we can access (data) of its outside the (function):In the (useEffect) method:
    fetchPosts();

    // we are also using the (square) brackets on the (useEffect) method:
    // so that can only run once:
  }, []);

  // IMP => if we did not get the (data) from the (server):
  // and the (home-page) still showing the (loading):
  // then we need to show the (loader-component):
  if(loading){
    // here we are returning the (Loader) component in our (app) component:
    return <Loader />;
  }



  return (
    <div className="App">
      
      {/*  here we have our (Navbar) component: */}
      <Navbar/>

      {/* here we are rendering or showing out (home) page */}
      {/* IMP = so here we passing the (posts) variable to our (home-page):
      =>with the help of (props) method:
      =>we are doing this because the (posts) variable will have all the data related to our (posts):
      => And in the (home-page).we have written our (posts-component):*/}
      <Home posts={posts}/>

      {/* <Home/> */}
    </div>
  ); 
}

export default App;
