// here we import the (useState) function of (react):

// import { useState } from "react";

// here we import (fireStore):
// so that we can store the (data) of created (blog-post) in the (database):
import { firestore } from "../firebase";

// here we are importing the (custom-hook) :that we have created in the (hooks-file):
// => for getting the (data) of our (form's Input) with the help of (form's) event:and we will create (event-handler) function:for handling that (event)
// => so that we can gave that data to application (component) with the help of  (useState) function:
import { useFormInput } from "../hooks";

// here we are importing the (button-module) file of (css):which we have created:
// so that with the help of this style module-file:we can gave the style to our application components:
// import classes from './Button.module.css';

// here we are importing the (styled-component) library:
// we are alsoimporting the (css) property from the (styled-component) library:with the help of this (property) we can gave the different styles to our application component elements acc to there types or functionalities:like: its primary button or secondary button etx:
import styled, { css } from "styled-components";

// here we are creating the (component) with the help of (styled-component) library:
// through which we can gave the style to (button-element) of our application component:
// by simply passing that styled (component) to the button-element as a (tag):

const StyledButton = styled.button`
  /* we can also gave the style to buttons acc to there type:like they are normal, primary or secondary buttons: */

  /* => IMP = how we can do that with the help of styled-component library: we need to pass the callback the function to the (style) element  with the help of dollar-sign (&):which we want  to change acc to the (button) type:
  = we also need to pass the (props) in that callback function:
  => because when we click on the button:it will pass the  props to the styled-component:which we have created:
  => and gave the style to the button from the styled-component:acc to the reference which we getting in the props: */

  height: 33px;
  background: ${(props) => (props.primary ? "black" : "darkgrey")};
  border: 0;
  color: cyan;
  padding: 8px;
  font-size: 15px;
  border-radius: 3px;
  cursor: pointer;

  /* but If instead of giving the one-style to the element:acc to its function or property:
  =>  we want to gave the multiple styles to that element acc to its function or property:with the help of styled-component library:
  => for doing that here we are also creating the callback function:and we also need to pass the (props) to the callback function:
  => because when we click on the button:it will pass the props to the styled-component:which we have created:
  => and gave the style to the button from the styled-component:acc to the reference which we getting in the props:  */

  /* we can also gave the style to the styled-component:which we are getting  from the applcation component element: as a props:
  => we can pass that style to the styled-component:with the help of (template-literal) */

  ${(props) => props.primary && css`border: 1px solid ${props.bgcolor};`}


`;

// here we build the (Create-Post) component:with the help of (function) component:

function CreatePost() {
  // here we use the (useState) function of (react):
  // through we which can (check) or (change) the (data) of our (blog) elements:

  // const [title,setTitle] = useState();
  // const [subTitle,setSubTitle] =useState();
  // const [content,setContent] =useState();

  // here we are using the (custom-hook) :that we have created in the (hooks-file):
  // => for getting the (data) of our (form's Input) with the help of (form's) event:and we will create(event-handler) function:fro handling that (event):
  // => so that we can gave that data to application (component) with the help of  (useState) function:

  const title = useFormInput("");
  const subTitle = useFormInput("");
  const content = useFormInput("");

  // here we create the function which will handle the (event) of our (form) element:
  // we also need to pass the (event) as (arguement) to this function: so that we can use the (data) of the this (event):
  function handleSubmit(e) {
    // under this function: we will stopped the (default) working of our (event):because we did not want to (reload) our (web-page): again after (submitting) the (form):
    //Imp = because if we did not do that:then the (written) data on our (form) by the (user) got deleted (automatically):after the (form) get submitted:
    // IMP => that's why  we will stop the (default) submission working of the (form) element:why simply preventing its default -+(submission) event:

    e.preventDefault();

    // here  we print the value of (title,sub-title or content) on console:that we are getting with in this event handler:
    console.log("title", title);
    console.log("sub-title", subTitle);
    console.log("content", content);

    // here we use (firestore):In this (event-handler) function:
    // so that we can store the data of (created) blog-post:In the (database):that we are getting through the (event-handler):

    // => here we are creating the (collection) in the (firestore):if it was not already created:and we named it as (posts):
    // know after creating the (collection):we need to add the (posts) in that collection:for that we need to use the (add) function:
    // => so for adding the (post) document in the (collection):we need to define the structure of that (post):In the (add) function:
    // In the structuring of (post):we will only define the (fields) or (sections) of the (post) that we are using to create the (blog) post:
    // IMP => we can also add the other extra (fields) instead of the (fields) that we are using to create (blog-post):In the structuring of (post) document:like we can add the (time-stamp) field in it:so that we can easily track on the (particular) post:
    // we can add extra fields:by simply calling there functions with the (new) keyword:like we can call the (date) function for adding the (time-stamp) in the (post):

    // if we are using the (custom-hook):for giving the value of our component elements:
    // then we also need to define the (key) of our (custom-hook's) return object:while giving the value to our (component) elements:
    // like here for creating the (post) in the (database): we need to use the (value) key key of our (custom-hook's) return object:
    //  because that (value) key have the (data) of our (post) Component elements:

    firestore.collection("posts").add({
      title: title.value,
      content: content.value,
      subTitle: subTitle.value,
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

          <label style={labelStyle}>Title</label>

          {/* and here with the help of this (input) tag:we will get the (data) from our (user): */}

          {/*IMP =>  here we gave the (value) to our (input) tag:from the (title) array of our (useState) function: */}

          {/* IMP => And useState function will get the value of our (input) tag:
          => through the (onChange) event-handler of our (input-tag):and the call-back function :that we have given to this (event-handler):
          => In this (callback) function will gave the (event-handler) data to the (setTitle) function of (useState): */}

          {/* <input value={title} onChange={(e) => setTitle(e.target.value)} /> */}

          {/* here we are giving the (custom-hook):To the (input-tag):
          =>through which we will handle all the related things to our component's particular element:
          =>like:the (data) of our (component) elements or there (event-handler) functions: */}
          {/* we will basically spread our (custom-hook):In the (input-tag):with the help of spread-operator:(...):
          => these triple dots repersent the (spread-operator):
          => Imp = we have stored our custom-hook:speartely for each of the component element:In the variables of component-element names:  */}

          <input {...title} />
        </div>

        {/* here we are getting the (sub-title) for (post): */}
        <div className="form-field">
          <label style={labelStyle}>Sub Title</label>
          {/* <input value={subTitle} onChange={(e) => setSubTitle(e.target.value)} /> */}

          {/* same as the (title):we also use the (custom-hook) here: */}
          <input {...subTitle} />
        </div>

        {/* here we are getting the (content) for (post): */}
        <div className="form-field">
          <label style={labelStyle}>Content</label>

          {/* here Instead of (input) tag:we are using the (textarea) tag:because we want the long-paragraph (blog) content from the (user): */}

          {/* <textarea value={content} onChange={(e) => setContent(e.target.value)}></textarea> */}

          {/* same as  the (title) or (subtitle):we are using the (custom-hook) here: */}
          <textarea {...content}></textarea>
        </div>

        {/* here we create the (button):which will create the (blog) post:
        => or we can say submit our (blog) post data: */}

        {/* <button className="create-post-btn">Create Post</button>*/}

        {/* here we gave style to our component (elements):with the help of (css-modules): 
        
        => V-IMP = for giving the style to our component element:through the (css-module):
        => we have to gave the reference of that css-module (object): under the (class-name) or (id) attribute: which we wanna gave to this (component-element):*/}

        {/* <button className={classes.createPostBtn}>Create Post</button> */}

        {/* here we are giving the style to the button element:
        =>with the help of (styled-component) library: */}

        {/*  we also gave the primary extension or function  to this button: for  declaring this button as primary button:*/}

        {/* => like the (primary) property or function: we can also pass the different (css) styles:to the elements:
        => so that we can get them as (propFs) in the styled-component:
        => and from there we can gave those styles to the elements: acc to there functionality: */}

        <StyledButton primary bgcolor="cyan">Create Post</StyledButton>
      </form>
    </div>
  );
}

export default CreatePost;

// here we gave style to our component with the help of creating a (style) atttribute separatly:
//  And we will gave this style attribute to our component elements:where we want to use this style:

// => style attributes: The style attribute accepts a JavaScript object with camelCased properties rather than a CSS string. This is consistent with the DOM style JavaScript property, is more efficient, and prevents XSS security holes.

const labelStyle = {
  color: "skyblue",
};
