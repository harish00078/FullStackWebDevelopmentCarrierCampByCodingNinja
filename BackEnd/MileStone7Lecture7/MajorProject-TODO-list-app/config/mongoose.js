const mongoose = require('mongoose');

// removing the (error):
mongoose.set('strictQuery', true);


// connect mongoose with mongodb database:
mongoose.connect('mongodb://127.0.0.1:27017/TodoList-app');


// here we put mongoose connection with database in the (db) varaibles:
// we will use this varaible everywhere:
const db = mongoose.connection;


// here we create the listner function of the database to check that its working or not:

db.on('error', console.error.bind(console,'error connecting to db'));

db.once('open',function(){
  console.log('successfully connected to the database');
});