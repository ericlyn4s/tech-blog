const router = require('express').Router();

const userRoutes = require('./user-routes');

const commentRoutes = require('./comment-routes');

const newPostRoute = require('./create-post-routes');

router.use('/users', userRoutes);

router.use('/comments', commentRoutes);

router.use('/createposts', newPostRoute);


module.exports = router;
