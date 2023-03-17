// In this file: we basically create both the (environments):
// and all the important files related to that particular environment:will we store in its particular environment that we have created for it:
// IMP = so that we can remove the (load) from the (server):
// V.IMP = and also we can easily track on the important files or things on the (server) we can say:like => (authentication-passwords) of different libraries and etc:

// one of the (environment) is (development-environment):

// here we create a (development) environment:
const development = {

  // and we gave him a name as (development):
  name: 'development',

  // like here we store the path of the all the (assets) related to our (application):In the development environment:
  asset_path:'/assets',


}


// second (environment) is the (production-environment):
// here we create a (production) environment:
const production = {

  // and we give him a name as (production):
  name: 'production',
}



// here we are exporting the (development) environment:
// IMP = so that we can gave the reference of the (development) environment:to the application-files: those we were store in this (environment)file:
module.exports = development;

