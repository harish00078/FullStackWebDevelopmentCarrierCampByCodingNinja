// here we create the helper function for the (views):

// IMP = we are sending this function to our (app) localy or we can say (openly):
// so that we can use this function in anywhere of my application:
// that's why we pass our (app) as argument to this (function):

// => here we are importing the (environment) file:
// so that we can check that from which kind of environment that file is coming from:


const env = require('./environment');

// => here we are importing the (filesystem) module:so that we can gave the (compressed) file path to the (browser)::

const fs = require('fs');

// here we are importing the (path) module:so that we can gave the (path) of the (compressed) file to the (browser):
const path = require('path');




module.exports = (app) => {

  // here we are giving this function to our (app) localy or openly we can say:
  // and we gave a name to this function is (assetPath):

  // we are giving the filePath argument to this (function):which will have the simple file path:
  // this function will find out the compressed file path:and give it to the browser:

  app.locals.assetPath = function(filePath){

    // first we have to check the (environment):that but kind of environment we are using:
    // or we can say we have to check that from which kind of environment that file or filepath is coming from:
    // because we only have to change the file-path:if the (environment) is in (production) mode:

    // if the file is coming from the (development) environment:then we did not have to do anything:
    if(env.name == 'development'){

      // we will simply gave that file or filepath again the (browser):
      return filePath;

    }

    // but if the file or file path is coming from the (production) environment:
    // then we have to gave the compressed file path to the (browser):
    // (parse) fucntion => it basically Converts a JavaScript Object Notation (JSON) string into an object.A function that transforms the results. This function is called for each member of the object. If a member contains nested objects, the nested objects are transformed before the parent object is.


    return '/' + JSON.parse(fs.readFileSync(path.join(__dirname, '../public/assets/rev-manifest.json')))[filePath];




  }

}