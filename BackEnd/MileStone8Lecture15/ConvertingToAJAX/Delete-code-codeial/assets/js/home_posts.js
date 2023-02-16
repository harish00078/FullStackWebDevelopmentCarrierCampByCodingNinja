{
  // method to submit the form data for new post using AJAX
  let createPost = function () {
    let newPostForm = $("#new-post-form");

    newPostForm.submit(function (e) {
      e.preventDefault();

      $.ajax({
        type: "post",
        url: "/posts/create",
        data: newPostForm.serialize(),
        success: function (data) {
          let newPost = newPostDom(data.data.post);
          $("#posts-list-container>ul").prepend(newPost);

          //   here we gave the (delete) function that we have created:
          //  to the (createpost)  function:so that when ever a post get created:
          //  our (delete) function:will also have the (id) of that (newPost)
          // so we are able to delete that (post):

          // IMP  =   we will get that newpost (id): through the (class) that we have created:in the (anchor-tag):which will have the (id) of the (newPost):

          // or we can say that we are connecting the (delete)button of the (newPost):with the (delete) function:
          // that we have created;so that we can delete that (post):through the (ajax):
          deletePost($(" .delete-post-button", newPost));

        },

        error: function (error) {
          console.log(error.responseText);
        },
      });
    });
  };

  // method to create a post in DOM
  let newPostDom = function (post) {
    return $(`<li id="post-${post._id}">
                    <p>
                        
                        <small>
                            <a class="delete-post-button"  href="/posts/destroy/${post._id}">X</a>
                        </small>
                       
                        ${post.content}
                        <br>
                        <small>
                        ${post.user.name}
                        </small>
                    </p>
                    <div class="post-comments">
                        
                            <form action="/comments/create" method="POST">
                                <input type="text" name="content" placeholder="Type Here to add comment..." required>
                                <input type="hidden" name="post" value="${post._id}" >
                                <input type="submit" value="Add Comment">
                            </form>
               
                
                        <div class="post-comments-list">
                            <ul id="post-comments-${post._id}">
                                
                            </ul>
                        </div>
                    </div>
                    
                </li>`);
  };

  // method to (delete) a (post) from the (DOM):
  // here (deleteLink) is basically the (anchor-tag):that we use to (delete) the post from the (webpage):which have created in the (_post.ejs) file:or we can say in the (code) of (post):
  let deletePost = function (deleteLink) {
    // here we create (event) on that (deleteLink):
    // if that (deleteLink) get (clicked):
    $("deleteLink").click(function (e) {
      // know after that first we have to (stop) the (natural) behavior of that (deleteLink):
      // so that we can (delete) the post from the (webpage):through the (AJAX) request:
      // here we are getting the (event) value in the (e) and set to the (preventdefault) value:
      e.preventDefault();

      // here we create (AJAX) request:for deleting that (post):

      $.ajax({
        type: "get",

        // we have to gave the (url) to the (ajax) request:
        // which will go to the (anchor-tag) of the (_post.ejs) file:and In  (response) will get the (id) or the (link) of the (post) that we have to delete:
        // for  that we have to use the (prop) function of the (jquery):and that will have a value (href):
        url: $(deleteLink).prop("href"),

        // after that we have to create the (success) function:
        // if the (AJAX) request successfully get executed:
        // then it means it will have the (response) (DATA) of the (AJAX) request:
        success: function (data) {
          // In that (response) data we will have the (id) of the (post) that we have to delete:
          // and we have to get the (post_id) from the (response) data:
          // so that we can delete that (post):
          // we will get that (post_id) from the (response) data:with the help of (jquery):
          // and on that (post_id) we will call the (remove) function:
          // for removing that (post):
          //  and under jquery we use the (interpolation) function:
          // Interpolation => String interpolation is a great programming language feature that allows injecting variables, function calls, arithmetic expressions directly into a string
          $(`#post-${data.data.post_id}`).remove();

          // if it does not get into  the (success) function:then it means that the (ajax) request have (error) in it:
        },
        error: function (error) {
          console.log(error.responseText);
        },
      });
    });
  };

  createPost();
}
