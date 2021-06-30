const { body, validationResult } = require('express-validator');
const Post = require("../models/post");

exports.get_post = function(req, res, next) {
    return res.json('Received a GET HTTP method');
}

exports.get_posts = function(req, res, next) {
    return res.json('Received a GET HTTP method');
}

exports.create_post = [

    // Validate and sanitize fields
    body("title").isLength({ min: 5 }).withMessage("Title must be at least 5 characters").escape(),
    body("body").isLength({ min: 20 }).withMessage("Body must be at least 20 characters").escape(),
  
    // Process request after validation and sanitization.
    async (req, res, next) => {

        // Extract the validation errors from a request.
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            // There are errors in the form data.
            return res.json({
                data: req.body,
                errors: errors.array(),
            });
        }
        
        // Data from form is valid.

        // Title, body, timestamp - default to created time, user, published - default to false
        const { title, body } = req.body;
        const post = new Post({
            title,
            body,
        });
        Post.save((err) => {
            if (err) {
                return next(err);
            }
            res.status(200).json({ 
                message: "Post saved",
            });
        });
    },
];

exports.edit_post = function(req, res, next) {
    return res.json('Received a PUT HTTP method');
}

exports.delete_post = function(req, res, next) {
    return res.json('Received a DELETE HTTP method');
}