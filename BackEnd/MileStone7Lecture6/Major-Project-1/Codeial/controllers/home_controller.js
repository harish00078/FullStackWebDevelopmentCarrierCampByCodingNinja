// here we are creating a (controller) or we can say (action):
// for the (req):

module.exports.home = function(req,res){

  return res.end('<h1> Express is up for codial</h1>');
}