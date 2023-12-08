// here we are creating the home-component for our application:
// here we are importing the (css-module) which we have created particularly for this (component) of our application:
import styles from '../styles/home.module.css'


// we are creating the home page or component through  (Function) component type:
// so for creating the (home) page we can use the (arrow) function:instead of using casual function:
// and we can also use the (Const) variable-type on that arrow function:

// IMP = we can aslo direclty use the (export) on the arrow function or function component:
// so that we did not have to write the export method differently:
// export const Home = () => {

export const Home = () => {
  // under this arrow function.we will write the (html) for our (home-page):
  // and return it from this function.
  // so that we can export it from this file: and use it in our (application):

  return (
    // IMP => here we are using the (css-module):with the help of creating (javascript) object in the (html) elements:
    // and under that object we will define the particular value of the (css-element):
    // which we wanna gave that to the particular element of the (html):
    // IMP => after creating the (object) we need to connect that (object) with the (className) method of the react:
    // V.IMP => so that react knows we are giving the (style) to our (html) elements through this (javascirpt-object):
    <div className={styles.postList}>
      {/* post-wrapper is basically repersents the particular (post) */}
      <div className={styles.postWrapper}>
        <div className={styles.postHeader}>
          <div className={styles.postAvatar}>
            <img
              src="https://cdn-icons-png.flaticon.com/128/13135/13135440.png"
              alt="user-pic"
            />
            <div>
              <span className={styles.postAuthor}>harish</span>
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
              <div className={styles.postCommentContent }>random comment</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// here we are exporting the (home-page) component:
export default Home;
