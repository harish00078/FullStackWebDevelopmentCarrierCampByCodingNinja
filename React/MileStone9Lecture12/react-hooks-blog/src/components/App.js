// here under this (App) component file: we will create the (Routes):

// IMP => for doing: that we need to import the two things: (Switch) and (Route): from the (react-router-dom) library:

// => (Route) =  With the help of Route component, you can set the path of different components that you want to render at different times.


import {Switch, Route} from 'react-router-dom';


function App() {

  return (

    <div className="container">

      {/* here under the (App) component:we are creating our (routes) */}

      {/* we will basically create the (routes):under the (switch-tag):
      => that we have imported from the (react-router-dom) library: */}

      {/* with the help of (Route) component or function:that we have imported from the (react-router-dom) library:
      => we will create our (routes):under the (switch-tag):  */}

      {/* IMP => for creating (route):we need to gave the (three) things to the (route) component:
      => first = we need to write the (exact) function as (varaible):in our (route):
      => second = we need to define the (path) of the (route):
      => third = and second we need define the (component) for that (path):or we can say the (component) which we want to connect with that (route) path: */}

      {/* here we create (route) for our (home) component:
      => here we gave the forword-slash (/) route-path to our (home) component: */}
      <Route exact path='/' Component={Home}  />

      {/* here we create (route) for our (PostDetail) component:
      => here we gave the (/post/:postId) route-path to our (PostDetail) component: */}
      <Route exact path='/post/:postId' Component={PostDetail}  />

      {/* here we create (route) for our (CreatePost) component:
      => here we gave the (/create-post) route-path to our (CreatePost) component: */}
      <Route exact path='/create-post' Component={CreatePost}  />




    </div>

  );
}

export default App;
