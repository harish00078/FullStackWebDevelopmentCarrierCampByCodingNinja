// here we are connecting our (web-site) with the (mongodb) database:
// through (mongoose):

// 1 = here we (Import) mongoose:
const mongoose = require('mongoose');


// removing the (error):
mongoose.set('strictQuery', true);


// 2 = connect mongoose with (database):
// for that we have to use (connect) functions:

mongoose.connect('mongodb://127.0.0.1:27017/codeial_development');


// 3 = put that (database)  connection with the (mongoose) in the (variable) so we can (export) it for our (server-file):
// we are storing this connection  in the (db) varaible: 

const db = mongoose.connection;


// 4 = after that we have to create the (listen) function:
// so we can check that our (database) is working fine with our server:

db.on('error', console.error.bind(console, "error connecting with mongodb"));

db.once('open', function(){
  console.log('connected to database :: mongoose');
});


// 5 = we have to (export) this (connection) for the (server-file):
module.exports = db;

