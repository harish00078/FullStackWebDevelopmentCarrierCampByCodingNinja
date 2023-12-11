// here we import the (prop-types) package:
// IMP => with the help of this package.
// we basically tell the (react) that the (prop) which we are passing to this component.
// that should be in the form of (array):so that we did not get (error) in application:
// while we are fetching the (data) from the (prop):
import PropTypes from "prop-types";

// here we are creating the home-component for our application:
// here we are importing the (css-module) which we have created particularly for this (component) of our application:
import styles from "../styles/home.module.css";

// we are creating the home page or component through  (Function) component type:
// so for creating the (home) page we can use the (arrow) function:instead of using casual function:
// and we can also use the (Const) variable-type on that arrow function:

// IMP = we can aslo direclty use the (export) on the arrow function or function component:
// so that we did not have to write the export method differently:
// export const Home = () => {

// here in the (home) page will get our (posts) prop:
// which we have pass to our home-component:In the app-component:
// we gonna pass that (posts) prop to our home-component as a (argument):
// which will have all the data related to the (posts):

// V.IMP = after installing the prop-types package:related to the (props):
// and create its (object) which has some properties related to (props)for the home-component:
// then we need to pass our (props) to this component: as a (object):
// because we have pass our (prop) to the (Object) of (package) which we have created:
// and we are accessing our (prop) from that (Object).
// that' why we need to pass the (prop) as object to the (component):

export const Home = ({ posts }) => {
  // under this arrow function.we will write the (html) for our (home-page):
  // and return it from this function.
  // so that we can export it from this file: and use it in our (application):

  // IMP => here we are converting our (posts) object into the (array):
  // because the (map) function only traverse on the (array):
  // const postsArray = Array.isArray(posts) ? posts : [];

  if (!Array.isArray(posts)) {
    console.log("posts: ", posts);
    console.error("Posts is not an array:", posts);
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

        // 1 =>  v.IMP = we also need to provide the (unique-key) or (identity) to the every-post:
        // otherwise we will get the (error) from the (react):Warning: Each child in a list should have a unique "key" prop.
        // because we are getting the every post from the (map) function:
        // so we need to separate them from each other by providing the unique key or identity:
        // IMP = we are going to gave them there (unique-ID).which we are getting with them from the server:
        // when we are fetching them from the server:which has been given them through the (server):

        // 2 => V.IMP => for the we need to use the (key) method:
        // and under that (key) method. we will basically define the (object):
        // which will have the (unique) identity for the every post:
        // those we are getting with the (posts) from the (server):

        // 3 => V.IMP => how we can do that:
        // 1 - we will use the (key) method:
        // 2 - and under that  (key) method.we will create the object:
        // 3 - under that object we gonna use the (string-interpolation) method:
        // 4 - To create a (key):and that will have a value of the (post) unique-key or identity:
        // here (post) is our key.and that key will have a value of post's (unique-identity):
        // 5 - IMP = for giving the value  of the (unique-identity) to the (post) key.
        //  we are going to use the ($) dollar-sign.and under that we gonna put the (post-id) which we are getting from the (server) with the (posts):
        // for giving that (id).we need to simply write the (post._id):the we are getting them from the (server):

        // 4 = V.IMp = Note: learn more about them from the (notes-page):
        // - The ($) character identifies a string-literal (" ") as an interpolated-string (` `).

        <div className={styles.postWrapper} key={`post-${post._id}`}>
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

// 1 => IMP = we can use the (Prop-types) package:
// BY define or giving some  properties to our function-component:
// related to the (prop) which we are passing to it:
// so that application did not get crash while we are fetching the (data) from the (prop):
// 1. to make sure that the data we are passing to our component is in the correct format.

// 2 = IMP => so how we gonna gave properties to our function-component.
// through the prop-types package:
// IMp => we will basically create the object of (properties):
// and gonna pass that object to our component with the help of (prop-types) package:
Home.prototype = {
  // 3 = IMP => under this (object) we gonna pass the (props).
  // which we wanna gave to this (component) as a (Key):
  // currently we are only passing the (posts) prop to this (home-component):

  // 4 = IMP => under this (posts) key we are going define the properties of the (prop-types) package:
  // so that our application does not get crash while fetcing the data from the (prop):

  // 5 = IMP => we are going to gave the prop-types properties to this (prop) posts-(key) as a (value);
  // under this value we gonna pass the prop-type package.and the (key) or (function) and (object) of the package with dot (.):
  //  which we gonna gave to this (prop) key:
  // V.IMP = In simple words we are basically defining the type of this (posts) prop-key:
  // with the help of (prop-types) package:

  // 6 => we also need to define that if any-one using this home-component:
  // then they need to pass this (posts) prop to the component:
  // for doing that we gonna gave the (isrequired) property of the (prop-types) package:
  // To this posts-prop key:
  posts: PropTypes.array.isRequired,
};

// here we are exporting the (home-page) component:
export default Home;
