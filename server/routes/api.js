const express = require('express');
const router = express.Router();
const passport = require('passport');

const commentController = require('../controllers/comments');
const postController = require('../controllers/posts');
const userController = require('../controllers/users');



///// COMMENTS

// GET single comment - /api/posts/:postid/comments/:commentid
router.get('/posts/:postid/comments/:commentid', commentController.get_comment)

// GET all comments - /api/posts/:postid/comments
router.get('/posts/:postid/comments', commentController.get_comments)

// POST create comment - /api/posts/:postid/comments
router.post('/posts/:postid/comments', [
  // passport.authenticate('jwt', {session: false}),
  commentController.create_comment
])

// PUT edit comment - /api/posts/:postid/comments/:commentid
router.put('/posts/:postid/comments/:commentid', [
  // passport.authenticate('jwt', {session: false}),
  commentController.edit_comment
])

// DELETE single comment - /api/posts/:postid/comments/:commentid
router.delete('/posts/:postid/comments/:commentid', [
  // passport.authenticate('jwt', {session: false}),
  commentController.delete_comment
])

// DELETE all of single post's comments
router.delete('/posts/:postid/comments', [
    // passport.authenticate("jwt", { session: false }),
    comment_controller.delete_post_comments
])



///// POSTS

// GET all posts
router.get('/', postController.get_posts)

// POST create post
router.post('/', [
  // passport.authenticate('jwt', {session: false}),
  postController.create_post
])

// GET post
router.get('/:postId', postController.get_post)

// PUT edit post
router.put('/:postId', [
  // passport.authenticate('jwt', {session: false}),
  postController.edit_post
])

// DELETE post
router.delete('/:postId', [
  // passport.authenticate('jwt', {session: false}),
  postController.delete_post
])

// PUT/POST publish post

// PUT/POST unpublish post



///// USERS

// GET login page
router.get('/log-in', userController.login_get)

// POST request for user log in.
router.post('/log-in', userController.login_post);

// POST request for log out.
router.post('/log-out', userController.logout_post);

// GET request for user sign up.
router.get('/sign-up', userController.sign_up_get);

// POST request for user sign up.
router.post('/sign-up', userController.sign_up_post);


module.exports = router;