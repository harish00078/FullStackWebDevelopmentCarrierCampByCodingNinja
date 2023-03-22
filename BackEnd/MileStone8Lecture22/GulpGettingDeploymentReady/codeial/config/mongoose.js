const mongoose = require('mongoose');
mongoose.set('strictQuery', false);

// here we import our (environment) file:through which we gave the name to our database:
// because we store the name of our database in the (environment) file:
const env = require('./environment');

mongoose.connect(`mongodb://localhost/${env.db}`);

const db = mongoose.connection;

db.on('error', console.error.bind(console, "Error connecting to MongoDB"));


db.once('open', function(){
    console.log('Connected to Database :: MongoDB');
});


module.exports = db;