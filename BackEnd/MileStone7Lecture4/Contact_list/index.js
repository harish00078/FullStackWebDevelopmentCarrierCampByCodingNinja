const express = require('express');


const path = require('path');

const port = 8000;

const app = express();

app.set('view engine', 'ejs');

app.set('views' , path.join(__dirname, 'view'));


app.get('/',function(req,res){

  return res.render('home',{title:"contact List"});
})


app.listen(port, function (err) {
  if (err) {
    console.log("error in the running server", err);
  }

  console.log("yup! my Express server is running on the port:", port);
});