// here we create our own: middleware for the (flash) masseges:
// so we did not have to connect the (flash) messages:with the (responses) everytime: 

const { response } = require("express");

// middleware will have the three (arguments) with in it:
// 1 = first is (request):
// 2 = second is (response):
// 3 = third is (Next):

module.exports.setFlash = function(req,res,next){

  // here we get that (massege)  through the (req) argument:
  // and we set that (massege) in the response to the (locals):
  // so we can simply (accesss) it in anywhere of Our (app):
  res.locals.flash = {

    // => here we are doing that:if we get the (success) types (req.flash):from the (user_controller):or from the (other) sections of the (app):were we (use) that (success) type (req) flash:

    // => then In response we have to gave the (message) of the (success) type (req) flash: that we have written in the (controller):from were we are getting that (req):

    // => we have to gave that (message) to  were ever we use that (sccusss) (req)flash:
    // => that's why we are setting the (message) response to the (locals):
    // IMP => so that the (section) of the (app):will use that (message) on the (webpage):who ever created the (req) for that:

    'success': req.flash('success'),
    'error': req.flash('error')
  }

  next();

}

