const localStrategy = require("passport-local").Strategy;
const User = require("../models/user");

// Passport auth
passport.use(
    "login",
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


