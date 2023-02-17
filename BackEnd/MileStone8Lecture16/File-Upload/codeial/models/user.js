const mongoose = require('mongoose');

// here we are importing the (multer) in (user) file:
// because we are (specifically) setting up the (multer) for the (user's) only:
// or we can say only the (user's):will able to upload (image) on its (profile_page):
// so that's why we are setting up the (multer) here:

// 1= first we have to import the (multer):
const multer = require('multer');
// 2 = second we have to (import) the (path) function or libray also:
// so that (multer) can connect with the (images) through the (path) of the (folder):which will have the (images) of the (user) that will (user) want to use in its (profile_page:
const path = require('path');

// 3 = third we gave the (folder) path of the (images) or the (avatar's) of the (user) to the (multer):with the (help) of (path) library:
// because we are getting the (folder) in the (string):so converting it into the (path) object: we are using the (path) library:
// so that (multer): can figure out that this is the (path) of the (folder):
// were (user) have put all its  (images) that they want to use in its (profile_page):

// we can gave that (path) with the help of (join) function of the (path) library:
const AVATAR_PATH = path.join('/upload/users/avatars');



const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});


const User = mongoose.model('User', userSchema);

module.exports = User;