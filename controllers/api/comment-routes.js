const router = require('express').Router();
const { Comment } = require('../../models');

// CREATE new comment
router.post('/', async (req, res) => {
    try {
        
        const newComment = await Comment.create({
            body: req.body.body,
            user_id: req.session.user_id,
            post_id: req.body.post_id,
        });

        res.status(201).json(newComment);
        } catch (err) {
            console.log(err);
        }
});

// Export router
module.exports = router;
    
