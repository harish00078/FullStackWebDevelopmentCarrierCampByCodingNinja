// here we create the (Home) component:with the help of (function) component:

// here we import the (useState) function:
import { useEffect, useState } from "react";

// here we import the (firestore):
import { firestore } from "../firebase";

// here we import the (Link) tag from the (react-router-dom) library:
import { Link } from "react-router-dom";

// here we are importing the (styled-components) library:through which we can style our components:with the help of (css) under the (javascript):
import styled from "styled-components";


// =>  here we are styling our components with the help of (styled-components)  library:

// here we gave style to the heading-tag of our component:with the help of (styled-components) library:
// =>  for giving the style to the heading-tag of our component:with the help of (styled-components) library:
// => first we will create the variable and under that varaible:we will call the styled-component library:
// and then second: we have to use the inbuilt functions of it:acc to the element-type of component:which we want to style:
// => like: if we  want to gave the style to the heading-tag of our component:then we have to use the (h1 or other heading-tags) inbuild function of it:acc to our component-element:
// => after all that will use the (string-interpolation) = (``) signs or we can quotes:because we will able to write our (css) code under those (string-interpolation) quotes:
// => any of the (css) that we write under those (string-interpolation) quotes:will we pass as the (arguments) to the function of (styled-component) library:

// => V.IMP = this hole things will become the (component):It means that our (BlogHeading) variable will become the (component):know we can easily use this variable as a (component) in our react application:

const BlogHeading = styled.h1`
  text-align: center;
  color: #2196f3;
  margin-bottom: 2px;
  background-color:black;
  transition: 0.5s all ease-in-out;

`;

// how we can gave the styling to the (nesting-elements):with the help of styled-components library:

const Post = styled.div`
  border: 3px solid darkblue;
  padding: 10px 10px;
  border-radius: 5px;
  margin-top: 10px;
  background-color:black;

  /* how we can use the (sudo-classes) or we can say inbuild function of the (css):like (hover) and etc: In the styled-components library:
  
  => we want to use the (hover) function: on the (h3)-tag:
  => for doing that we have to use the (amparsent-sign or symbol) =  (&):
  => which will define to the compiler that we want to gave the (hover) function to the  element:which were present at the lower side of me:*/
  &:hover{
    color:rgb(7, 25, 61);
  transform: scale(1.5);
  }


  /* if we want to gave the style to the any other element:which is persent in the (post-div):or In main element we can say:
  => then we can simply do this why defining the (tag-name) of that element:
  => and  we will gave the (style) code to that tag: why simply using the curly bracket on it
  :*/
  h3{
    margin: auto;
  padding: 0;
  font-size: 25px;
  font-weight: bold;
  color: white;
  transition: 0.5s all ease-out;
  }
  a{
    text-decoration: none;
  color: white;
  }

  /* we can also use multiple things in it same as we do in the (css):like (media-queries) and etc: */
  /* @media (max-width:1100){
    color: cyan;
  } */



`;


function Home() {
  // here we use the (useState) hook:so that we can (get) the data of (create-post) from the (database): and stored that or we can say gave data to the (post) variable of (useState) function:

  // we need to gave the (initial) value to the (useState) hook:and here we are giving the (empty) array to the (useState) hook as the initial value:

  const [posts, setPosts] = useState([]);

  // IMP => here we are (fetching) the (data) of the (posts):from the (database):
  // with the help of the (useEffect) hook:

  useEffect(() => {
    // under (useEffect) hook:we use (firestore):which is our (database):
    // we have to fetch the (posts):from the (database):
    // we need to gave the collection name to the (firestore):to tell the (database) that what kind of data we want to fetch from the (database):

    // IMP => this (get) function will return us the (data):In the form of (promise):
    // know we have to use the (then) function:for handling that (promise):and the data which we are getting in that promise:

    // IMP => we will gave the (callback) function to the (then) function:
    // and To that (callback) function:we will gave the (snapshot) argument:and that (snapshot) argument:will have the (snap) or we can say (data) of our database:

    firestore
      .collection("posts")
      .get()
      .then((snapshot) => {
        // know for getting the (data):from the (snapshot) argument:
        // we need to go into its (docs) section:because In that (docs) section:we will have our (data) of (posts):
        // IMP => and for getting the (data) of every (post) from that  (snapshot's) (docs) section:we need to use the (map) function on that (docs) section of  (snapshot) argument:

        const posts = snapshot.docs.map((doc) => {
          // IMP => and from this (docs) section: we need to get or we can say retrun the two things:
          // first is the (doc-id):we need to get it separately:because it does not get along with the (data):
          // second is the (doc-data): where we have our (posts-data):we will get all the (data) which were present in the (docs) section:with the help of the (spread) operator:
          return {
            id: doc.id,
            ...doc.data(),
          };
        });

        console.log("posts", posts);

        // after getting the (posts-data):from the (database):
        // we need to gave this data to the (setPosts) function of (useState) method:
        // so that we can show this (posts) data on the browser:

        setPosts(posts);
      });

    // here we add the empty array in (useEffect) hook: so that (useEffect) hook does not run again and again on the every-time refresh of the (application):
  }, []);

  return (
    <div className="home">

      {/* => IMP =  here we gave the same classname:To this button which we have given to the (createPost) component:but here this classname did not work:because of the (css-modules):
      => so this is the reason that we have to use the (css-modules) for giving the styles to the (application) componenet-elements:instead of using the simple (css-stylesheets): */}

      <button className="createPostBtn">this is button</button>

      {/* <h1>Tech Blog</h1> */}

      {/* here use the variable-component:which we have created for giving the style to the (heading) of our home page: */}
      <BlogHeading>Tech Blogs</BlogHeading>

      {/* here we gave author-name to the blog: */}

      <div id="blog-by">
        {/* here we gave styling to our component:with the help of (inline-styling) method:
         */}
        {/* inline-styling: To style an element with the inline style attribute, the value must be a JavaScript object: 
      => Notice that the value of padding does not have a unit as React appends a 'px' suffix to some numeric inline style properties. In cases where you need to use other units, such as 'em' or 'rem', specify the unit with the value explicitly as a string
 */}

        <h2 style={{ fontSize: 50 }}>Harish</h2>
      </div>

      {/* here we are displaying the (posts):
    =>  for that we need to use the for-loop:so that we can display every (post):
    => In react we are using the (map) function as (for-loop):*/}

      {posts.map((post, index) => (
        // using this (div):we will display the (post-titles) on the browser:
        // we are also passing the (index) number to the (posts):so that we can differentiate between the multiple (posts): when we are using the (map) function to display them on the browser:

        // IMP =>  here we are giving the style to the (post-div):with the help of styled-component libraray:
        // for this (post-div) we have created the (Post) component:with the help of styled-component library:and we will use that (Post) component as (tag) instead of (div) tag:here in the (post-div) element:for giving the style to it:

        <Post className="post" key={`post-${index}`}>
          {/* under this (post-div):we have added the (link):
        => through which we will be connected to the (post-detail) page: 
        => IMP = where we show our (post) in the (details):*/}

          {/* IMP => so for connected to the (details-page) of the particular (post):
        => we need to connect this link to the (postdetail) page (url) or (route):which we have created for that (page):
        => and we also need to pass the (post-id):In that (urL):so that we can get the (detials) of the particular (post): */}
          <Link to={`/post/${post.id}`}>
            {/* post (title) will become our (link): */}
            <h3>{post.title}</h3>
          </Link>

          {/* we also add the (subtitle) of the (post):outside the linK:
        => so that user can have more clreaty related to the (post): */}
          <p>{post.subTitle}</p>
        </Post>
      ))}
    </div>
  );
}

export default Home;
