const router = require('express').Router();
const { Post, User, Comment } = require('../models');
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
    // Fetch the post by ID from the database
    const dbPostData = await Post.findByPk(req.params.id, {
      include: [
        {
          model: Comment, 
          attributes: ['body'],
        },
      ],
    })

    if (!dbPostData) {
      return res.status(404).json('Post not found');
    }
    
    const post = dbPostData.get({ plain: true });
    
    res.render('post', { 
      post, 
      loggedIn: req.session.loggedIn,
    });

  } catch (err) {
    console.log(err);
    res.status(500).json(err);
    }
  });

  /*
  router.get('/post/:id', async (req, res) => {
    try {
      const dbCommentData = await Comment.findAll({
        include: [
          {
            model: User, 
            attributes: ['username'],
          },
        ],
      });
  
      const comments = dbCommentData.map((comment) =>
        comment.get({ plain: true })
      );
      console.log(comments);
      res.render('comments', {
        post,
        loggedIn: req.session.loggedIn,
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });

  */
router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;
