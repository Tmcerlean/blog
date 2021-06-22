const { body, validationResult } = require('express-validator');

exports.get_post = function(req, res, next) {
    return res.json('Received a GET HTTP method');
}

exports.get_posts = function(req, res, next) {
    return res.json('Received a GET HTTP method');
}

exports.create_post = function(req, res, next) {
    return res.json('Received a POST HTTP method');
}

exports.edit_post = function(req, res, next) {
    return res.json('Received a PUT HTTP method');
}

exports.delete_post = function(req, res, next) {
    return res.json('Received a DELETE HTTP method');
}