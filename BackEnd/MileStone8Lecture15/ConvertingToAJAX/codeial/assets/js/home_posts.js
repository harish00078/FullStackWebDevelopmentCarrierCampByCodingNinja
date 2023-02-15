// here we are writing the (AJAX) code with the help of (jquery):for the (Posts):

// IMP = method for submit  the (form-data) for (new-post) using (ajax):

{
  // here we create (AJAX) function:through which we create our (posts):

  let createPost = function () {
    // UNDER This function:we are using a (form):through which (user) will able to create a(posts):
    // here we are getting that (form) from the (home.ejs) file:with the help of (jquery):
    let newPostForm = $("#new-post-form");

    // after that we have to create the (event) on the (submit) button of the (form):so that the  form does-not  get (submitted) automatically:
    // because we want to submit the form with the help (AJAX):if we are creating him with the help of (AJAX):

    // here  (e) repersents the (event):
    newPostForm.submit(function (e) {
      // here we create (event) on the submit button:so that it does not get (submitted) automatically:
      // for (preverting) the (form) does not get (submitted) automatically:
      // we have to use the (event) property (preventDefault):
      e.preventDefault();

      // know after that we can use (AJAX):for submitting that (form):
      // here we use (ajax) with the help (jquery):
      $.ajax({
        // we have to define the (type) to  the (ajax):
        type: "post",
        // after that we have to define the (url) of the (home.ejs):were we are submitting or creating the (form):
        // here in (url):we gave the (action) of the (form):
        url: "/posts/create",
        // after that we have to define the (data) to the (form):through that the (form) will be created:
        // serialize basically converts the (post) data into a (string-object) or we can say into the form of (JSON):
        data: newPostForm.serialize(),

        // after that we have to define the (success) function of the (ajax):
        // success:function will have the (data) of the (post-Form) in the form of (json):
        success: function (data) {
          // if (ajax) will get the (post-form) data successfully:
          // then  we have to (print) that (data) on the console of the (browser):
          // console.log(data);

          // if (ajax) will get the (post-form) data successfully:
          // then we have to create the (post):with the help of (newPostDom) function:that we have created:
          // we have to gave the (data) of  the (post) to  the (newPostDom) function:so that it can create the (post):
          // here use (json) data:for creating (post):
          let newPost = newPostDom(data.data.post);

          // after creating (post) with the help of (newPostDom) function:know we have to show that (post) on the (webpage):
          // so we are showing the (posts) on the (home) page:
          // here we are giving the (post-list-container) id  with the (unordered-list) to the (ajax):so that we can show the created post on the home page:

          // here we use (prepend) function of the (jquery):that will add the new (post) on the (top) of all the (posts):

          $("#post-list-container > ul").prepend(newPost);

          // if it not able to get the data:
        },

        error: function (error) {
          // then we have (print) the error message on the console:
          console.log(error.responseText);
        },
      });
    });
  };

  // method to create a post in (DOM) or on a (webpage) we can say:
  // here are giving the (post) data in this function:so that we can create the (post):
  let newPostDom = function (post) {
    return $(`<li id="post-${post._id}">
    <p>

            <small>
                <a class="delete-post-button" href="/posts/destroy/${post.id}">X</a>
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
                <input type="hidden" name="post" value="${post._id}">
                <input type="submit" value="Add Comment">
            </form>

     
                <div class="post-comments-list">
                    <ul id="post-comments-${post._id}">

                    </ul>
                </div>
    </div>

</li>`);


  };

  // here we are calling the (createPost) function:that we have created through (ajax):
  createPost();
}
