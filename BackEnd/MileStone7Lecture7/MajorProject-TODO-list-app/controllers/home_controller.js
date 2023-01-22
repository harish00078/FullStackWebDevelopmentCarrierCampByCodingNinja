const home = function(req,res){
  
  return res.render('home.ejs',{
    
    title:"home"
  });
};


module.exports = home;