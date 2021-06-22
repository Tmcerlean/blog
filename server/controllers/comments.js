const { body, validationResult } = require('express-validator');

exports.get_comment = function(req, res, next) {
    return res.json('Received a GET HTTP method');
}

exports.get_comments = function(req, res, next) {
    return res.json('Received a GET HTTP method');
}

exports.create_comment = function(req, res, next) {
    return res.json('Received a POST HTTP method');
}

exports.edit_comment = function(req, res, next) {
    return res.json('Received a PUT HTTP method');
}

exports.delete_comment = function(req, res, next) {
    return res.json('Received a DELETE HTTP method');
}

exports.delete_comments = function(req, res, next) {
    return res.json('Received a DELETE HTTP method');
}