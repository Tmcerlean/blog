const { body, validationResult } = require('express-validator');
const Comment = require("../models/comment");

exports.get_comment = async function (req, res, next) {
    try {
        const comment = await Comment.findById(req.params.commentid);
        if (!comment) {
            return res
                .status(404).json({ 
                    err: `Comment with id ${req.params.commentid} does not exist` 
                });
        }
        res.status(200).json({ 
            comment 
        });
    } catch (err) {
        next(err);
    }
};

exports.get_comments = async function (req, res, next) {
    try {
        const allComments = await Comment.find({});
        const comments = allComments.filter(
            (comment) => comment.postId === req.params.postid
        );
        if (!comments) {
            return res.status(404).json({ 
                err: `No comments found` 
            });
        }
        res.status(200).json({ 
            comments 
        });
    } catch (err) {
        next(err);
    }
};

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