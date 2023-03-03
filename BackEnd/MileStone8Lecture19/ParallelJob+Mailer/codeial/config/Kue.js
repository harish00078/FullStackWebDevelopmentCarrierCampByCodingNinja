// here we are setting-up the (Kue) in our (system):

// first we have to import the (kue) module:
const kue = require('kue');

// second we have to create the (queue's):with the the help of the (kue) module:
// for that we have to use the (createQueue) property of the (kue) module:

const queue = kue.createQueue();

// third we have to export those (queue)'s:
module.exports = queue;