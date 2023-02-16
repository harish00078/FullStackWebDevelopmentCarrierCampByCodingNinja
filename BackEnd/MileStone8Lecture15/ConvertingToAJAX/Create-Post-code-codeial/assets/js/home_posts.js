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
        // IMP =  here in (url):we gave the (action) of the (form):which means that the (form) is submitted:
        // because the  (action) of the (form) is only get (trigger) when the (form) is submitted:
        url: "/posts/create",

        // and here we convert the (newPostform) data  into the (json) form:
        // because we does not send the (ajax-req) data to the (browser) or the (server)  directly:
        data: newPostForm.serialize(),





        // after that we have to define the (success) function of the (ajax):
        // if the (ajax-request) is successful get (executed) or worked:
        // IMP = then it means that: we successfully have created a new post:in the form of (json) data:
        // IMP = and success:function will have the (data) of that (post) in the form of (json):in the (data) argument:

        success: function (data) {
          // if (ajax) will get the (post) data successfully:
          // then  we have to (print) that (data) on the console of the (browser):
          // console.log(data);

          // IMP = if (ajax)(req) execute:successfully:
          // then it means we have created a new post (successfully) in the (database):
          // and after it  will get the (data) of that (post) through (post-controller):that has been created through (json)data:
          // and then we have to show that (post) on (webpage):

          // with the help of (newPostDom) function:that we have created:for  creating posts on the (DOM) or we can say on the (webpage):

          // here use or gave (json) data to the (newPostDom) function for creating that (post) on the (webpage):
          // which will have the (data) of that new created (post) in the (database):

          let newPost = newPostDom(data.data.post);

          // after creating (post) with the help of (newPostDom) function:know we have to show that (post) on the (home-webpage):
          // so for  showing those (posts) on the (home) page:
          // here we are giving the (post-list-container) id  with the (unordered-list) of the (home.ejs) file to the (ajax):so that we can show the created post on the home page:
          // (post-list-container) is basically the (id) of the (container):through which we can show the created post on the (home-webpage):

          // here we use (prepend) function of the (jquery):that will add the new (post) on the (top) of all the (posts):

          $("#post-list-container>ul").prepend(newPost);

          // if it not able to get  the data of the (created) post:
          // then its means there is error in the (ajax) request:
        },

        error: function (error) {
          // then we have (print) that error message on the console:
          console.log(error.responseText);

        },


      });


    });


  };

  // method to create a post in (DOM) or on a (webpage) we can say:
  // here are giving the (post) data in this function:so that we can create the (post):
  let newPostDom = function (post) {

    // here we get the (post-id) of the post:so that we can delete this  post through the (ajax):

    // IMP = we also have to (convert) this (creating-post) code text into the (html) text:because we are try to create the (post) under the (js) file:
    // we try to create (post) with the help of (jquery): so we have to (convert) this (code) text into the (html) text:
    // for that we have to use the (back-ticks = ` `):that will (interpolate) the (html) text:

    // (INTERPOLATION) = String interpolation is a great programming language feature that allows injecting variables, function calls, arithmetic expressions directly into a string. String interpolation was absent in JavaScript before ES6. String interpolation is a new feature of ES6, that can make multi-line strings without the need for an escape character. We can use apostrophes and quotes easily that they can make our strings and therefore our code easier to read as well. These are some of the reasons to use string interpolation over string concatenation.

    return $(`<li id="post-${post._id}">
    <p>

            <small>

            // here also gave the (class) to the (delete) button:

            <a class="delete-post-button" href="/posts/destroy/${post.id}">X</a>
            </small>
  
            // HERE WE USE (JQUERY):
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
