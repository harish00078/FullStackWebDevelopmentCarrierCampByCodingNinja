// here we are importing the (Link) tag from the (react-router-dom) library:
// so that we can add the (Links) of different components in the (navbar) component:
import { Link } from "react-router-dom";

// here we are importing the (styled-components) library:so that with the help of this library we can gave the (style) to the (Link-tag):which we are using from the other third party library:
// here we are learning about that:how we can gave the style to the third party libraries:with the help of (styled-components) library:
import styled  from 'styled-components';


// here we are giving the style to (link-tag):which we are getting from the third party library named as (react-router-dom):
// for giving the style to the (link-tag):with the help of (styled-components) library:
// we simply have to put the (tag) or whatever which we are using from the third party library:In the simple-brackets:
// know after putting it in the (brackets):we can simply gave the style to it with the help of styled-components library:why using the (string-interpolation) = (``) marks after that (tag):

const StyledLink = styled(Link)`
  text-decoration:dashed;
  color:white;

  &:hover{
    
  text-decoration:2px underline cyan;

  }
`;



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
          <StyledLink to="/">Home</StyledLink>
        </li>

          {/* here we add the link of our (create post) component:In the (navbar): */}

        <li>
          <StyledLink to="/create-post">Create Post</StyledLink>
        </li>



      </ul>


    </div>


  );


}

export default Navbar;
