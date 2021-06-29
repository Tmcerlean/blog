const passport = require("passport");
const User = require("./models/user");
const passportJWT = require("passport-jwt");
const LocalStrategy = require("passport-local").Strategy;
const JWTStrategy = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;
const bcrypt = require("bcryptjs");

// Passport login auth
// passport.use(
//     "login",
//     new LocalStrategy(
//       {
//         usernameField: "username",
//         passwordField: "password",
//       },
//       async (username, password, done) => {
//         try {
//           const user = await User.findOne({ username });
  
//           if (!user) {
//             return done(null, false, { message: "User not found" });
//           }

//           bcrypt.compare(password, user.password, (err, res) => {
//             if (res) {
//               // Passwords match! log user in
//               return done(null, user)
//             } else {
//               // Passwords do not match!
//               return done(null, false, { message: "Incorrect password" })
//             }
//           }) 
          
//           return done(null, user, { message: "Logged in Successfully" });
//         }
        
//         catch (error) {
//           return done(error);
//         }
//       }
//     )
// );

passport.use(
  new LocalStrategy((username, password, done) => {
      User.findOne({ username }, (err, user) => {
          if (err) return done(err);
          if (!user) return done(null, false, { msg: 'Incorrect data:' });
          bcrypt.compare(password, user.password, (error, res) => {
              if (res) {
                  return done(null, user);
              }
              return done(null, false, { msg: 'Incorrect data' });
          });
      });
  })
);


// Passport signup auth
passport.use(
  "signup",
  new LocalStrategy(
    {
      usernameField: "username",
      passwordField: "password",
    },
    async (username, password, done) => {
      try {
        const user = await User.create({ username, password });

        return done(null, user);
      } catch (error) {
        done(error);
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


passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    done(err, user);
  });
});


