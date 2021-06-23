const { body, validationResult } = require('express-validator');
const User = require("../models/user");
const jwt = require("jsonwebtoken");
const passport = require("passport");

exports.login_post = async (req, res, next) => {
    // return res.json('Received a POST HTTP method');
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

        // generate a signed son web token with the contents of user object and return it in the response

        const token = jwt.sign(user, 'your_jwt_secret');
            return res.json({user, token});
        });

    })(req, res);
};

exports.logout_post = function(req, res, next) {
    return res.json('Received a POST HTTP method');
}

exports.signup_post = function(req, res, next) {
    return res.json('Received a POST HTTP method');
}