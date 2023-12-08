// here we are creating the home-component for our application:

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
    <div className="posts-list">
      {/* post-wrapper is basically repersents the particular (post) */}
      <div className="post-wrapper">
        <div className="post-header">
          <div className="post-avatar">
            <img
              src="https://cdn-icons-png.flaticon.com/128/11589/11589468.png"
              alt="user-pic"
            />
            <div>
              <span className="post-author">harish</span>
              <span className="post-time">a minute ago</span>
            </div>
          </div>
          <div className="post-content">Post Content</div>
          <div className="post-actions">
            <div className="post-like">
              <img
                src="https://cdn-icons-png.flaticon.com/128/126/126473.png"
                alt="likes-icon"
              />
              <span>5</span>
            </div>
            <div className="post-comments-icon">
              <img
                src="https://cdn-icons-png.flaticon.com/128/1380/1380338.png"
                alt="comments-icon"
              />
              <span>2</span>
            </div>
          </div>
          <div className="post-comment-box">
            <input placeholder="start typing a comment" />
          </div>

          <div className="post-comments-list">
            <div className="post-comments-item">
              <div className="post-comment-header">
                <span className="post-comment-author">Bill</span>
                <span className="post-comment-time">a minute ago</span>
                <span className="post-comment-likes">22</span>
              </div>
              <div className="post-comment-content">random comment</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// here we are exporting the (home-page) component:
export default Home;
