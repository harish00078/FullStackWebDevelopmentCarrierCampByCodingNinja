const passport = require('passport');
const JWTStrategy = require('passport-jwt').Strategy;
const ExtractJWT = require('passport-jwt').ExtractJwt;

// here we are importing the (evironment) file:
// so that we can gave the (secret-key) to the (passport-jwt-strategy):that we have stored in the development environment object of the (environment) file:
const env = require('./environment');

const User = require('../models/user');


let opts = {
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),

    // here we are giving the secret-key path to the (passport-jwt-strategy):that we have stored in the development-environment object of the (environment) file:
    secretOrKey: env.jwt_secret,
}


passport.use(new JWTStrategy(opts, function(jwtPayLoad, done){

    User.findById(jwtPayLoad._id, function(err, user){
        if (err){console.log('Error in finding user from JWT'); return;}

        if (user){
            return done(null, user);
        }else{
            return done(null, false);
        }
    })

}));

module.exports = passport;
