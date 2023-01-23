// here we are creating a (controller) or we can say (actions):
// for the (requests) and providing  them a (responses):

// const router = require("../routes");


// here we create a (Controller):named as a (home):
// and we also had to (export) controllers:so we can (use) them or we can say connect them with the particular (routes):


module.exports.home = function(req, res){
    
    
  // return res.end('<h1> Express is up for codial</h1>');

  // here we are giving the (home.ejs) file in the (response) of (home) url('/'):

    return res.render('home', {

           // here we gave (home) value to the (title-key) of the (home.ejs) file:

        title: "Home"
    });
}

// module.exports.actionName = function(req, res){}