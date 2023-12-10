import { useEffect,useState } from "react";

// here we are creating the home-component for our application:
// here we are importing the (css-module) which we have created particularly for this (component) of our application:
import styles from "../styles/home.module.css";
// =>  here we are importing the functions.through which we are connecting to the (server):
// and the getting the (data) for the (component):
import { getPosts } from "../api";

// here we are importing the loader-component:
// we can simply use the (./) to import  our Loader-comonent:
// because our (app) or (loader) component both present in the same folder:
import { Loader } from "../components";

// we are creating the home page or component through  (Function) component type:
// so for creating the (home) page we can use the (arrow) function:instead of using casual function:
// and we can also use the (Const) variable-type on that arrow function:

// IMP = we can aslo direclty use the (export) on the arrow function or function component:
// so that we did not have to write the export method differently:
// export const Home = () => {

// here in the (home) page will get our (posts) prop:
// which we have pass to our home-component:In the app-component:
// we can also call the (posts) variable to this (posts) prop:
// which will have all the data related to the (posts):

export const Home = () => {
  // under this arrow function.we will write the (html) for our (home-page):
  // and return it from this function.
  // so that we can export it from this file: and use it in our (application):


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
  const[loading,setLoading] = useState(true);


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
  if(loading){
    // here we are returning the (Loader) component in our (app) component:
    return <Loader />;
  }



  // IMP => here we are converting our (posts) object into the (array):
  // because the (map) function only traverse on the (array):
  // const postsArray = Array.isArray(posts) ? posts : [];

  if (!Array.isArray(posts)) {
    console.error('Posts is not an array:', posts);
    return null; // or handle the error in another way
  }

  return (
    // IMP => here we are using the (css-module):with the help of creating (javascript) object in the (html) elements:
    // and under that object we will define the particular value of the (css-element):
    // which we wanna gave that to the particular element of the (html):
    // IMP => after creating the (object) we need to connect that (object) with the (className) method of the react:
    // V.IMP => so that react knows we are giving the (style) to our (html) elements through this (javascirpt-object):

    <div className={styles.postsList}>
      {/* post-wrapper is basically repersents the particular (post) */}
      {/* after getting the (posts) prop.
       => In our home-component:we need to use that (posts) props:
       => or we can say have to destruct that (posts) props:
      => so that we can use the (data) of that (posts) props:
        => In the (posts-component):which we have created or written in our (home-component): */}
      {/* for using the (posts) prop or (data) in it:
       => we simple need to use the (map) function on the (posts) prop:
      => so that we can get the (data) of each-post one by one in our home-component: */}
      {/* under that map function we will paste our (past-component) code:
        => so that we can pass the data of (posts) to the post-component elements:
       => we will pass  the (post) as a argument to the (map) function which we are running on the (posts) prop:
        => so that at one time we will only get one (posts) from the (posts) prop.
        => and gave that (post) data to our (post-component):  */}
      {posts.map((post) => (
        // IMP = after putting our (post-component):
        //    under the map-function.which we are running on the (posts) prop:
        //    It will have the (data) related to our (posts) in the (object) form:
        //   V.IMP => so we need to gave the (keys) of that (object).
        //   which will have the (data) related to our post-component's (html-elements):
        //    so that we can show that (data) on our component's browser-page:
        <div className={styles.postWrapper}>
          <div className={styles.postHeader}>
            <div className={styles.postAvatar}>
              <img
                src="https://cdn-icons-png.flaticon.com/128/13135/13135440.png"
                alt="user-pic"
              />
              <div>
                <span className={styles.postAuthor}>{post.user.name}</span>
                <span className={styles.postTime}>a minute ago</span>
              </div>
            </div>
            <div className={styles.postContent}>{post.content}</div>
            <div className={styles.postActions}>
              <div className={styles.postLike}>
                <img
                  src="https://cdn-icons-png.flaticon.com/128/126/126473.png"
                  alt="likes-icon"
                />
                <span>5</span>
              </div>
              <div className={styles.postCommentsIcon}>
                <img
                  src="https://cdn-icons-png.flaticon.com/128/1380/1380338.png"
                  alt="comments-icon"
                />
                <span>2</span>
              </div>
            </div>
            <div className={styles.postCommentBox}>
              <input placeholder="start typing a comment" />
            </div>

            <div className={styles.postCommentList}>
              <div className={styles.postCommentItem}>
                <div className={styles.postCommentHeader}>
                  <span className={styles.postCommentAuthor}>Bill</span>
                  <span className={styles.postCommentTime}>a minute ago</span>
                  <span className={styles.postCommentLikes}>22</span>
                </div>
                <div className={styles.postCommentContent}>random comment</div>
              </div>
            </div>
          </div>
        </div>
      ))}
      
    </div>
  );
};

// here we are exporting the (home-page) component:
export default Home;