// import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { Comment, Loader, FriendsList, CreatePost } from "../components";
// import { getPosts } from "../api";
import styles from "../styles/home.module.css";
import { useAuth } from "../hooks";
import { usePosts } from "../hooks";

const Home = () => {
  // const [posts, setPosts] = useState([]);
  // const [loading, setLoading] = useState([]);
  const auth = useAuth();
  // here we are using the (usePosts) custom-hook:
  // through which we are gonna be able to access or use the (posts-context) in our application components:
  const posts = usePosts();
  console.log('usePost-context',posts);

  // useEffect(() => {
  //   const fetchPosts = async () => {
  //     const response = await getPosts();

  //     if (response.success) {
  //       setPosts(response.data.posts);
  //     }

  //     setLoading(false);
  //   };

  //   fetchPosts();
  // }, []);

  // IMP = here we are using the (usePosts) custom-hook:for providing state-value to the  (loader) component:
  if(posts.loading){
    return <Loader/>
  }




  return (
    <div className={styles.home}>
      <div className={styles.postsList}>
        {/* here we are calling the (createPost) component:In our (home) component */}
        <CreatePost />
        {posts.data.map((post) => (
          <div className={styles.postWrapper} key={`post-${post._id}`}>
            <div className={styles.postHeader}>
              <div className={styles.postAvatar}>
                <img
                  src="https://cdn-icons-png.flaticon.com/128/13135/13135440.png"
                  alt="user-pic"
                />
                <div>
                  <Link
                    to={{
                      pathname: `/user/${post.user._id}`,
                      state: {
                        user: post.user,
                      },
                    }}
                    className={styles.postAuthor}
                  >
                    {post.user.name}
                  </Link>
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
                  <span>{post.likes.length}</span>
                </div>

                <div className={styles.postCommentsIcon}>
                  <img
                    src="https://cdn-icons-png.flaticon.com/128/1380/1380338.png"
                    alt="comments-icon"
                  />
                  <span>{post.comments.length}</span>
                </div>
              </div>
              <div className={styles.postCommentBox}>
                <input placeholder="Start typing a comment" />
              </div>

              <div className={styles.postCommentsList}>
                {post.comments.map((comment) => (
                  <Comment comment={comment} />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      {auth.user && <FriendsList />}
    </div>
  );
};

export default Home;
