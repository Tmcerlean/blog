const localStrategy = require("passport-local").Strategy;
const User = require("../models/user");
const passportJWT = require("passport-jwt");
const JWTStrategy = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;

// Passport auth
passport.use(
    new localStrategy(
      {
        usernameField: "username",
        passwordField: "password",
      },
      async (username, password, done) => {
        try {
          const user = await User.findOne({ username });
  
          if (!user) {
            return done(null, false, { message: "User not found" });
          }
  
          const validate = await user.isValidPassword(password);
  
          if (!validate) {
            return done(null, false, { message: "Wrong Password" });
          }
  
          return done(null, user, { message: "Logged in Successfully" });
        } catch (error) {
            return done(error);
        }
      }
    )
);


// NEED TO MOVE SECRET KEY TO DOTENV FILE
passport.use(new JWTStrategy({
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey : 'your_jwt_secret'
},
function (jwtPayload, cb) {

    //find the user in db if needed. This functionality may be omitted if you store everything you'll need in JWT payload.
    return UserModel.findOneById(jwtPayload.id)
        .then(user => {
            return cb(null, user);
        })
        .catch(err => {
            return cb(err);
        });
}
));