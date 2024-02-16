const router = require('express').Router();
const { Comment } = require('../../models');

router.post('/', async (req, res) => {
    try {
    const newComment = await Comment.create({
        body: req.body.body,
        user_id: req.user.id,
        post_id: req.params.postID,
    });
    res.status(201).json(newComment);
    } catch (err) {
    console.log(err);
    }});
