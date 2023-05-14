// here we create the another (index) file:under the (Components) folder:
// this is will be the (main) file for our all the (components):In the (Components) folder:


// In this file:we will import our all the components:that we have created:

import Navbar from "./Navbar";
import PostDetail from "./PostDetail";
import Home from "./Home";
import CreatePost from "./CreatePost";

// after that we need to export them:from this file:so that we can use them in our (App) component file:
// we will (export) them as a (Object):because that's the easy way to export multiple elements:
export{
  
  Navbar,
  Home,
  CreatePost,
  PostDetail
};

