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
// we can also call the (posts) variable to this (posts) prop:
// which will have all the data related to the (posts):

export const Home = (posts) => {
  // under this arrow function.we will write the (html) for our (home-page):
  // and return it from this function.
  // so that we can export it from this file: and use it in our (application):
  console.log(posts);

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
        //   V.IMP => so we need to gave the keys of that (object).
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
                <span className={styles.postAuthor}>harish kumar</span>
                <span className={styles.postTime}>a minute ago</span>
              </div>
            </div>
            <div className={styles.postContent}>Post Content</div>
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
      ;
    </div>
  );
};

// here we are exporting the (home-page) component:
export default Home;
