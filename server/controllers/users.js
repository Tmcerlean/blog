const { body, validationResult } = require('express-validator');
const User = require("../models/user");
const jwt = require("jsonwebtoken");
const passport = require("passport");

exports.login_post = async (req, res, next) => {
    passport.authenticate('local', {session: false}, async (err, user, info) => {
        if (err || !user) {
            return res.status(400).json({
                message: 'Something is not right',
                user : user
            });
        }

        req.login(user, {session: false}, async (err) => {
            if (err) {
                res.send(err);
            }

        // Generate a signed json web token with the contents of user object and return it in the response

        const token = jwt.sign(user, 'your_jwt_secret');
            return res.json({user, token});
        });

    })(req, res);
};

exports.logout_post = function(req, res, next) {
    return res.json('Received a POST HTTP method');
}

exports.signup_post = [

    // Validate and sanitize fields
    body('username').trim().isLength({ min: 1 }).escape().withMessage('Username must be specified')
    .isAlphanumeric().withMessage('Username has non-alphanumeric characters')
    .custom(async (username) => {
        try {
          const existingUsername = await User.findOne({ username: username });
          if (existingUsername) {
            throw new Error("Username already in use");
          }
        } catch (err) {
          throw new Error(err);
        }
    }),
    body("password").isLength({ min: 6 }).withMessage("Password must contain at least 6 characters"),

    // Process request after validation and sanitization.
    (req, res, next) => {

        // Extract the validation errors from a request.
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            // There are errors. Render form again with sanitized values/errors messages.
            res.render('author_form', { title: 'Create Author', author: req.body, errors: errors.array() });
            return;
        }
        else {
            // Data from form is valid.

            // Create a User object with escaped and trimmed data.
            var user = new User(
                {
                    username: req.body.username,
                    password: req.body.password
                });
            user.save(function (err) {
                if (err) { return next(err); }
                // Successful - display message
                res.json(user.url);
            });
        }
    }
];