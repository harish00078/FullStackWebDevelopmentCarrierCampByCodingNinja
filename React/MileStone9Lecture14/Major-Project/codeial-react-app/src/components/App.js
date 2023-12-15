// we use (useEffect) hook of (react):To fetch the data from the (server) through (API):
import { useEffect, useState } from "react";

// we are using the (react-router-dom) package.
// for providing or giving the (routes) to our application pages or components:
// IMP => we need to import the multiple (methods or functions) from the (react-router-dom) package:
// which will help us to giving the (routes) to our application pages or components:
// first method is (BrowserRouter).we need to import it as (BrowserRouter as Router):
// second method is (Routes):
// third method is (Route):
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// =>  here we are importing the functions.through which we are connecting to the (server):
// and the getting the (data) for the (component):
import { getPosts } from "../api";

// => here we are importing our application (pages):

// first we import the (home) page:
// second we import the (Login) page:
import { Home, Login } from "../pages";

// here we import our (Navbar) component:
// so that we can use or get it into our application:
import { Navbar } from "./";

// here we are importing the loader-component:
// we can simply use the (./) to import  our Loader-comonent:
// because our (app) or (loader) component both present in the same folder:
import { Loader } from "./";

const About = () => {
  return <h1>About</h1>;
};
const UserInfo = () => {
  return <h1>UserInfo</h1>;
};
const Page404 = () => {
  return <h1>404</h1>;
};
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
  const [loading, setLoading] = useState(true);

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
  if (loading) {
    // here we are returning the (Loader) component in our (app) component:
    return <Loader />;
  }

  return (
    <div className="App">
      {/* here we are rendering or showing out (home) page */}
      {/* IMP = so here we passing the (posts) variable to our (home-page):
      =>with the help of (props) method:
      =>we are doing this because the (posts) variable will have all the data related to our (posts):
      => And in the (home-page).we have written our (posts-component):*/}

      {/* here we gave (Routers) to our application pages and components: 
      => for giving (Routes) to the pages and components:
      => first we  use the (Router) method of package:
      => under that second we use the (Routes) method of package:we use it when we are creating the multiple (Route) for the Application:
      => and with in that (Routes) method we will gave the (Route) to reach (page) and (component).
      with the help of third (Route) method of the package:*/}

      {/* here we have (Router) method first: */}
      <Router>
        {/* under (Router) method: we can put our those (components):
        => which we did not want to get (Route):
        => Like = Navbar-component,Footer-component*/}
        {/*  here we have our (Navbar) component: */}
        <Navbar />

        {/* here we have (Routes) Method second:  */}
        <Routes>
          {/* and  under that (Routes) method.we create the multiple (Route):
        => And we will gave that each Route to the Each page or component of our Application:*/}

          {/* IMP = Under the Route method.we need to provide the (path) for the (Route) of the particular page or component:
        => we have to provide the (path) for our page or component:In the way we have define or use them in our Application:
        => IMP = for providing path in the (Route). we can use the (Path) function of the (Route) method: */}

          {/* here we gave (Route) to our (home) component:*/}

          {/* V.V.IMP = (Note-1) => if we are using the (React-Router) version is greater than (6):
      => V.V.IMP = then we need to provide the (pages) and (components).
      => To the (Route) method.with the help of Route method's (element) function or Prop:
      => we need to gave our (page) or (component) To the particular (Route):
      => with the help of (Route) method's (element) named (function or Prop):
      => IMP = we will create the javascript-object with in the (element) Prop or function of (Route) method:
      => and Under that object we will provide our (page) and (component)*/}
          {/*  V.V.IMP = (Note-2) => if we are using the (React-Router) version is greater than (6):
      => then we also define or use the (Route) method.In our application the same way we define the (components) or (pages) of our application:
      => In simple words we did not define or use the (Route) method.In our application as a (tag):
      => we define or use it in the way.we define or use our application components or pages:
      => other important functions which we use in our application:like (Image)tag:
      => IMP =  In react we use the self closing tags.and we use the (Route) method in our application.
      => with the (self-closing) tag:In the self closing tags.we did not have to write the closing-element of the tag:
      => we can simple user the forward-slash in the (end) of the tag's (starting-element) */}

      {/* V.V.IMP = (Note-3) => we also need to use the (exact) property of the (Route) method:
      => so that Browser's (render) function.did to get confuse between the (route-paths):
      => if they were little-bit matches with each other: */}

          <Route path="/"  element={<Home posts={posts} />} exact />

          {/* same thing we need to do for the other pages and components:
        => which we have did in the (home) Route: */}

          <Route path="/login" element={<Login />} exact/>

          <Route path="/About" element={<About />} exact />

          <Route path="/user/wertewr" element={<UserInfo />} exact />

          {/* here we create the route at the end of all the routes:
          => with the help of  the error or 404 component:
          =>if any of above route does not match with the (user's) route request:
          => then we will show this error or (404) component to the user: */}
          {/* IMP = we also need to  gave the (path) and (exact) property to this route:
          => IMp = In the path function. we have to gave him the (*) start:
          => which will repersent that if user request for any random route request.then we will gave this route component:
          => because it will only  works.when all the other uper routes path does not get match with the user's route request: */}
          <Route path="*" element={<Page404/>} exact />

        </Routes>

      </Router>
    </div>
  );
}

export default App;
