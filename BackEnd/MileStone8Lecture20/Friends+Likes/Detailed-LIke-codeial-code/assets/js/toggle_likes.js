// here we are creating the functionality for the (toggle-button):

// we are creating that functionality:with  the help of (class):
// we already learn about that how  can be create the (class) function in the (javascript):


// => create a class to toggle likes:when a link is clicked,using (AJAX):
class ToggleLike{

  // here we create constructor under the (class):through which we can create the (objects):
  constructor(toggleELement){
    this.toggler = toggleELement;
    this.toggleLike();


  }

  // here we are creating the function:under the (class):through which we can (toggle) the click (link):
  toggleLike(){

    $(this.toggler).click(function(e){

      e.preventDefault();
      let self = this;

      // this is the new way of writing (AJAX) which you might be studied, it looks like the same as (promises):
      // here we are writing the (AJAX) request for the (toggle-button) or link:with the help of (jquery):
      $.ajax({
        type:'POST',
        url:$(self).attr('href'),
      })
      .done(function(data){
        // here we are changing the (count) of the (like) link:
        let likesCount = parseInt($(self).attr('data-likes'));

        console.log(likesCount);
        if(data.data.deleted == true){
          likesCount -= 1;
        }else{
          likesCount += 1;
        }
        
        $(self).attr('data-likes', likesCount);
        $(self).html(`${likesCount}Likes`);




      })
      .fail(function(errData){

        console.log('error in completing the request')


      });
    



    });

  }


}