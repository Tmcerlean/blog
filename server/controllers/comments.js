const { body, validationResult } = require('express-validator');
const Comment = require("../models/comment");

exports.get_comment = function(req, res, next) {
    return res.json('Received a GET HTTP method');
}

exports.get_comments = function(req, res, next) {
    return res.json('Received a GET HTTP method');
}

exports.create_comment = [
    body("user").trim().isLength({ min: 1 }).withMessage("Empty user field").escape(),
    body("body").trim().isLength({ min: 1 }).withMessage("Empty comment field").escape(),
  
    async function (req, res, next) {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            res.json({
                data: req.body,
                errors: errors.array(),
            });
        return;
        }

        const { body, user } = req.body;
        const postId = req.params.postid;
        const comment = new Comment({ body, user, postId });
        comment.save((err) => {
            if (err) {
                return next(err);
            }
            res.status(200).json({ 
                message: "Comment posted" 
            });
        });
    },
];

exports.edit_comment = function(req, res, next) {
    return res.json('Received a PUT HTTP method');
}

exports.delete_comment = function(req, res, next) {
    return res.json('Received a DELETE HTTP method');
}

exports.delete_comments = function(req, res, next) {
    return res.json('Received a DELETE HTTP method');
}