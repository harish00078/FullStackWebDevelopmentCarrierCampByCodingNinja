// here we create the (Home) component:with the help of (function) component:

// here we import the (useState) function:
import { useEffect, useState } from "react";

// here we import the (firestore):
import {firestore} from '../firebase';

// here we import the (Link) tag from the (react-router-dom) library:
import {Link} from 'react-router-dom';



function Home(){

  // here we use the (useState) hook:so that we can (get) the data of (create-post) from the (database): and stored that or we can say gave data to the (post) variable of (useState) function:

  // we need to gave the (initial) value to the (useState) hook:and here we are giving the (empty) array to the (useState) hook as the initial value:

  const [posts,setPosts] = useState([]);


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

    firestore.collection('posts').get().then((snapshot) => {

      // know for getting the (data):from the (snapshot) argument:
      // we need to go into its (docs) section:because In that (docs) section:we will have our (data) of (posts):
      // IMP => and for getting the (data) of every (post) from that  (snapshot's) (docs) section:we need to use the (map) function on that (docs) section of  (snapshot) argument:

      const posts = snapshot.docs.map((doc) => {

        // IMP => and from this (docs) section: we need to get or we can say retrun the two things:
        // first is the (doc-id):we need to get it separately:because it does not get along with the (data):
        // second is the (doc-data): where we have our (posts-data):we will get all the (data) which were present in the (docs) section:with the help of the (spread) operator:
        return{
          id:doc.id,
          ...doc.data()
        };


      });


      console.log('posts',posts);


      // after getting the (posts-data):from the (database):
      // we need to gave this data to the (setPosts) function of (useState) method:
      // so that we can show this (posts) data on the browser:

      setPosts(posts);




    });

   


    // here we add the empty array in (useEffect) hook: so that (useEffect) hook does not run again and again on the every-time refresh of the (application):
  }, []);




  return <div className="home">
    <h1>Tech Blog</h1>
    {/* here we gave author-name to the blog: */}

    <div id="blog-by">
      <h2>Harish</h2>
      </div>

    {/* here we are displaying the (posts):
    =>  for that we need to use the for-loop:so that we can display every (post):
    => In react we are using the (map) function as (for-loop):*/}

    {posts.map((post,index)=> (

      // using this (div):we will display the (post-titles) on the browser:
      // we are also passing the (index) number to the (posts):so that we can differentiate between the multiple (posts): when we are using the (map) function to display them on the browser:
      <div className="post" key={`post-${index}`}>

        {/* under this (post-div):we have added the (link):
        => through which we will be connected to the (post-detail) page: 
        => IMP = where we show our (post) in the (details):*/}

        {/* IMP => so for connected to the (details-page) of the particular (post):
        => we need to connect this link to the (postdetail) page (url) or (route):which we have created for that (page):
        => and we also need to pass the (post-id):In that (urL):so that we can get the (detials) of the particular (post): */
        
        }
        <Link to={`/post/${post.id}`}>
          {/* post (title) will become our (link): */}
          <h3>{post.title}</h3>

        </Link>

        {/* we also add the (subtitle) of the (post):outside the linK:
        => so that user can have more clreaty related to the (post): */}
        <p>{post.subTitle}</p>


      </div>

    ))}

  </div>;
}

export default Home;