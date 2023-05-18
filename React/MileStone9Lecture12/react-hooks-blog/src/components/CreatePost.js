// here we import the (useState) function of (react):

import { useState } from "react";

// here we import (fireStore):
// so that we can store the (data) of created (blog-post) in the (database):
import {firestore} from '../firebase';


// here we build the (Create-Post) component:with the help of (function) component:


function CreatePost() {

  // here we use the (useState) function of (react):
  // through we which can (check) or (change) the (data) of our (blog) elements:

  const [title,setTitle] =useState();
  const [subTitle,setSubTitle] =useState();
  const [content,setContent] =useState();


  // here we create the function which will handle the (event) of our (form) element:
  // we also need to pass the (event) as (arguement) to this function: so that we can use the (data) of the this (event):
  function handleSubmit(e){

    // under this function: we will stopped the (default) working of our (event):because we did not want to (reload) our (web-page): again after (submitting) the (form):
    //Imp = because if we did not do that:then the (written) data on our (form) by the (user) got deleted (automatically):after the (form) get submitted:
    // IMP => that's why  we will stop the (default) submission working of the (form) element:why simply preventing its default -+(submission) event:

    e.preventDefault();

    // here  we print the value of (title,sub-title or content) on console:that we are getting with in this event handler:
    console.log('title',title);
    console.log('sub-title',subTitle);
    console.log('content',content);

    // here we use (firestore):In this (event-handler) function:
    // so that we can store the data of (created) blog-post:In the (database):that we are getting through the (event-handler):

    // => here we are creating the (collection) in the (firestore):if it was not already created:and we named it as (posts):
    // know after creating the (collection):we need to add the (posts) in that collection:for that we need to use the (add) function:
    // => so for adding the (post) document in the (collection):we need to define the structure of that (post):In the (add) function:
    // In the structuring of (post):we will only define the (fields) or (sections) of the (post) that we are using to create the (blog) post:
    // IMP => we can also add the other extra (fields) instead of the (fields) that we are using to create (blog-post):In the structuring of (post) document:like we can add the (time-stamp) field in it:so that we can easily track on the (particular) post:
    // we can add extra fields:by simply calling there functions with the (new) keyword:like we can call the (date) function for adding the (time-stamp) in the (post):

    firestore.collection('posts').add({
      title,
      content,
      subTitle,
      createdAt: new Date(),
    });



  }



  return (
    <div className="create-post">
      <h1>Create Post</h1>

      {/* we will create the (blog-post):with the help of (form) tag: */}

      {/* here we gave the (onSubmit) event-handler to this (form): 
      => so that when ever (form) get submited through the button:we will get its (data) in the (event-handler):
      => and we also gave the (handleSubmit) function to this (onSubmit) event-handler:through which we will handle the (data) of (form): that we are getting through this (event-handler): */}

      <form onSubmit={handleSubmit}>

        {/* for creating (blog-post):we need three things:
        => first is the (title) for that (post):
        => second is the (sub-title) for that (post):
        => third is the (content) for that (post): */}


        {/* here we are getting the (title) for (post): */}
        <div className="form-field">

          {/* with the help of (label) tag:we will gave the Label to our (input)tag:To tell the (user) that but kind of (input):they had to put in the which particular (input) tag: */}

          <label>Title</label>

          {/* and here with the help of this (input) tag:we will get the (data) from our (user): */}

          {/*IMP =>  here we gave the (value) to our (input) tag:from the (title) array of our (useState) function: */}

          {/* IMP => And useState function will get the value of our (input) tag:
          => through the (onChange) event-handler of our (input-tag):and the call-back function :that we have given to this (event-handler):
          => In this (callback) function will gave the (event-handler) data to the (setTitle) function of (useState): */}

          <input value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>


        {/* here we are getting the (sub-title) for (post): */}
        <div className="form-field">
          <label>Sub Title</label>
          <input value={subTitle} onChange={(e) => setSubTitle(e.target.value)} />

        </div>


        {/* here we are getting the (content) for (post): */}
        <div className="form-field">

          <label>Content</label>

          {/* here Instead of (input) tag:we are using the (textarea) tag:because we want the long-paragraph (blog) content from the (user): */}

          <textarea value={content} onChange={(e) => setContent(e.target.value)}></textarea>
        </div>


        {/* here we create the (button):which will create the (blog) post:
        => or we can say submit our (blog) post data: */}
        <button className="create-post-btn">Create Post</button>
      </form>


    </div>


  );


}

export default CreatePost;
