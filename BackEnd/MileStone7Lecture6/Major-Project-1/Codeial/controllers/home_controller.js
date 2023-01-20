// here we are creating a (controller) or we can say (actions):
// for the (requests) and providing  them a (responses):


// here we create a (Controller):named as a (home):
// and we also had to (export) controllers:so we can (use) them or we can say connect them with the particular (routes):

module.exports.home = function(req,res){

  return res.end('<h1> Express is up for codial</h1>');
}