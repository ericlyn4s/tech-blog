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
          include: [User],
        },
        {
          model: User,
          attributes: ['username'],
        },
      ],
    })

    if (!dbPostData) {
      return res.status(404).json('Post not found');
    }
    
    const post = dbPostData.get({ plain: true });

    res.render('comments', { 
      post, 
      loggedIn: req.session.loggedIn,
    });

  } catch (err) {
    console.log(err);
    res.status(500).json(err);
    }
  });

  // load the dashboard
  router.get('/dashboard/:id', withAuth, async (req, res) => {
    try {
      // Fetch the post by ID from the database
      const dbPostData = await Post.findByPk(req.params.id, {
        include: [
          {
            model: Comment, 
            attributes: ['body'],
            include: [User],
          },
          {
            model: User,
            attributes: ['username'],
          },
        ],
      })
  
      if (!dbPostData) {
        return res.status(404).json('Post not found');
      }
      
      const post = dbPostData.get({ plain: true });
  
      res.render('comments', { 
        post, 
        loggedIn: req.session.loggedIn,
      });
  
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

router.get('/createpost', withAuth, (req, res) => {

  if (req.session.loggedIn) {
    res.render('createpost', {
      loggedIn: req.session.loggedIn,
    });
  };

});


module.exports = router;
