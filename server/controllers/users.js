const { body, validationResult } = require('express-validator');

exports.login_post = function(req, res, next) {
    return res.json('Received a POST HTTP method');
}

exports.logout_post = function(req, res, next) {
    return res.json('Received a POST HTTP method');
}

exports.signup_post = function(req, res, next) {
    return res.json('Received a POST HTTP method');
}