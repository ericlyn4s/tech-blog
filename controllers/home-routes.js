const router = require('express').Router();
const { Post, User } = require('../models');
// Import the custom middleware
const withAuth = require('../utils/auth');

// GET all posts for homepage
router.get('/', async (req, res) => {
  try {
    const dbPostData = await Post.findAll({
      include: [
        {
          model: User,
          attributes: ['username'],
        },
      ],
    });

    const posts = dbPostData.map((post) =>
      post.get({ plain: true })
    );
    console.log(posts);
    res.render('homepage', {
      posts,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//GET one post
router.get('/post/:id', withAuth, async (req, res) => {
  try {
    const dbPostData = await Post.findByPk(req.params.id);

    const post = dbPostData.get({ plain: true });
    console.log(post);
    res.render('post', { post, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//GET all comments
router.get('/comment/:id', withAuth, async (req, res) => {
  try {
    const dbCommentData = await Comment.findByPk(req.params.id);

    const comment = dbCommentData.get({ plain: true });
    console.log(comment);
    res.render('comment', { comment, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;
