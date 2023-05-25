// here we are importing the (Link) tag from the (react-router-dom) library:
// so that we can add the (Links) of different components in the (navbar) component:
import { Link } from "react-router-dom";


// here we create the (Navbar) component:with the help of (function) component:

function Navbar() {

  return (

    <div>

      {/* we create (navbar) component:with the help of  (unordered-list):
    => and that (unordered-list):will have multiple (lists) in it:and those (lists) are basically the (links) to our (app) components:
    => and we will connect those (lists) with our (app) components with the help of (Link) tag:
     */}

    {/* we also need to gave the (url) to the (link-tag):we can do that with the help of (to) function:
        =>V.IMP = we need to gave the (urL) to the (link-tag):acc to the path that we have define for  the (every) component: In the (Routes) tag: */}

      {/* 
      Link: It provides declarative and accessible navigation around the application.
      Internal linking and external linking can be done through this. We can use this to link a string, object, function, components etc. */}

      <ul id="nav">

        {/* here we add the link of our (home) component:In the (navbar): */}

        <li>
          <Link to="/">Home</Link>
        </li>

          {/* here we add the link of our (create post) component:In the (navbar): */}

        <li>
          <Link to="/create-post">Create Post</Link>
        </li>



      </ul>


    </div>


  );


}

export default Navbar;
