// here we create the (PostDetail) component:with the help of (function) component:

import { useEffect, useState } from "react";
import { firestore } from "../firebase";

// here we are importing the (useParams) hook:from the (react-router-dom) library:
// through this (useParams) hook:we will get our (post-id) from this (post-detail) component's (urL):
// and we will use that (post-id):To (fetch) the (data) of particular (post) from the (database):
import {useParams} from "react-router-dom";


function PostDetail(){


  // here we gave the (empty) object:To the UseState hook:as the initail-value of our post-detail component:

  const [post,setPost] = useState({});

  // here we save that (post-id) in the variable:which we are getting from the component's (urL):with the help of (useParams) hook:
  // IMP => the variable-name should be same as the (url):In which we are storing   that (post-id):
  // V-IMP => and also the (useParams) hook:will gave us the (object):we need to get the (post-id) from it:that why we put the (postId) variable in the curlly brackets:
  // To tell the (compiler) that we need the (postId) element from the (useParams) hook's object:
  const {postId} = useParams();



  // here we use (UseEffect) hook:To get the data from the database:
  useEffect(() => {

    // here we are using the (post-id):To get the (data) of particular (post) from the database:
    // because In the (url) of this component:we have the (id) of our (post):whose details we want to show on the browser:

    firestore.collection('posts').doc(postId).get().then((snapshot) => {

      console.log('snapshot', snapshot.data());
      
      // after getting the data of particular (post) from the database:
      // we need to gave that data to the (setPost) function of (useState) hook:
      // so that we can show that data on the browser:
      setPost(snapshot.data());

    });
    
    
  }, [postId]);



  return <div className="post-detail"> 

  <h1>{post.title}</h1>

  <p>{post.content}</p>

  </div>;
}

export default PostDetail;