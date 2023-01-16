// here we are using the (mongoose) to interact with the (mongoDB):
// mongoose is basically a (ODM): between the (express) app or (mongoDB) database:


// for that we have to import the (mongoose):
// for importing the things in the javascript we use the (require) function:

const mongoose = require('mongoose');


// here we are removing the (deprecation-warning): that is given by our (server):
// when we try  to connect the (mongoose) with our (server):
mongoose.set('strictQuery',true);




// after that we have to connect the (mongoose) with the (mongoDB) and also have to gave or provide  the name to the (database):

//  IMP = Information about (error): (error) is (Connect ECONNREFUSED::1:27017):
// here we have to gave the full (url) of (mongodb):while we are connection (mongodb) with the (mongoose):
// instaead of simply writing a (localHost): 
//  full (urL) of mongodb is (127.0.0.1:27017):


// here we gave him a name of database is (contact_list_db):
mongoose.connect('mongodb://127.0.0.1:27017/contact_list_db');


// mongoose.set('strictQuery', true);


// after connecting the (mongoose) with our (mongodb) database:know we have to use the that (database) connection through mongoose: so we can interact with our database:
// for that we have to store that (mongoose) connection: 
// for storing that connection in javascript: we can create the variable in that varaible we can store that (mongoose) connection:
// after that we can use that (mongoose) connection through that (variable):


const db = mongoose.connection;






// here we create  function  to check that (mongoose) is connected with the (mongodb) or not:

// 1 => if it does not connected to the (mongodb) then we will get the (error) message on our console:
// here we are using the antoher console function for printing the error in the console: and that function is (console.error.bind) function:
// meaning of code = when we (on) or try to connect with the (mongoose): at that time if we get ('error').then we have to print the (error) in the (console).that we have given to him:
db.on('error', console.error.bind(console,'error connecting to db'));

// 2 => if it is connected  to the database then we have to print this funciton's statement:
// meaning of code = if we (once) connect or (open) with the (mongoose).then we have to run this function and print the (statement) in the (console).that we have given to him:
db.once('open', function(){
  console.log('successfully connected to the database');
})


