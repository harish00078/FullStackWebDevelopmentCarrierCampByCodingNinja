// here we create the (PostDetail) component:with the help of (function) component:

import { useEffect, useState } from "react";

// here we are importing the (useParams) hook:from the (react-router-dom) library:
// through this (useParams) hook:we will get our (post-id) from this (post-detail) component's (urL):
// and we will use that (post-id):To (fetch) the (data) of particular (post) from the (database):
import { useParams } from "react-router-dom";

// here we are importing the (radium) library:through which we can also gave the style to our application component:
// IMP => radium is basically a (higher order component):It basically take the component  as argument and return us with the newer component:
import Radium from "radium";

// how to use radium: =>
// 1 = Start by wrapping your component class with Radium(), like export default Radium(Component), or Component = Radium(Component):
// 2 = which works with classes,createClass, and stateless components (functions that take props and return a ReactElement).
// 3 =  Then, write a style object as you normally would with inline styles, and add in styles for interactive states and media queries. Pass the style object to your component via style={...} and let Radium do the rest!

import { firestore } from "../firebase";

function PostDetail() {
  // here we gave the (empty) object:To the UseState hook:as the initail-value of our post-detail component:

  const [post, setPost] = useState({});

  // here we save that (post-id) in the variable:which we are getting from the component's (urL):with the help of (useParams) hook:
  // IMP => the variable-name should be same as the (url):In which we are storing   that (post-id):
  // V-IMP => and also the (useParams) hook:will gave us the (object):we need to get the (post-id) from it:that why we put the (postId) variable in the curlly brackets:
  // To tell the (compiler) that we need the (postId) element from the (useParams) hook's object:
  const { postId } = useParams();

  // here we use (UseEffect) hook:To get the data from the database:
  useEffect(() => {
    // here we are using the (post-id):To get the (data) of particular (post) from the database:
    // because In the (url) of this component:we have the (id) of our (post):whose details we want to show on the browser:

    firestore
      .collection("posts")
      .doc(postId)
      .get()
      .then((snapshot) => {
        console.log("snapshot", snapshot.data());

        // after getting the data of particular (post) from the database:
        // we need to gave that data to the (setPost) function of (useState) hook:
        // so that we can show that data on the browser:
        setPost(snapshot.data());
      });
  }, [postId]);

  return (
    <div className="post-detail">
      <h1 style={styles.heading}>{post.title}</h1>

      <p>{post.content}</p>
    </div>
  );
}

// here we rap our application component:with in the (radium) library:which is our higher order component:
export default Radium(PostDetail);

// here we create styles-object:under that object we can create multiple objects acc to the elements of application component:and gave the styles to them:
// Its same as the inline-styling:but with the help of (radium): we can also add the multiple other style things in this inline-styling:like we can add the (hover) type sudo-classes and the ()in it:
const styles = {
  heading: {
    // backgroundColor: "black",
    color: "black",
    fontStyle: "oblique",
    transition: "0.5s all ease-in-out",
    // here we are adding the (hover) type sudo-class:
    ':hover': {
      // transform: 'scale(1.5)',
      color: "skyblue",
    backgroundColor: "black",

    },
  },
};
