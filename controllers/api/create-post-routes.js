const router = require('express').Router();
const { Post } = require('../../models');


// CREATE new post
router.post('/', async (req, res) => {
    try {
        const newPost = await Post.create({
            title: req.body.title,
            content: req.body.content,
            user_id: req.session.user_id,
        });

        res.status(201).json(newPost);
        } catch (err) {
        console.log(err);
        }
});

// Export router
module.exports = router;