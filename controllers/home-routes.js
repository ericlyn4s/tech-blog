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
          attributes: ['body', 'createdAt'],
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
    console.log(post);
    
    res.render('comments', { 
      post, 
      loggedIn: req.session.loggedIn,
    });

  } catch (err) {
    console.log(err);
    res.status(500).json(err);
    }
  });

// LOGIN route
router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

// GET route for dashboard button, which leads to a create new post function
router.get('/createpost', withAuth, async (req, res) => {

    const postData = await Post.findAll({
        include: [
          {
            model: User,
            attributes: ['username'],
          },
        ],
        where: {
          user_id: req.session.user_id,
        }
      });
    
      const postArray = postData.map((post) =>
      post.get({ plain: true })
      );

  if (req.session.loggedIn) {
    res.render('createpost', {
      postArray,
      loggedIn: req.session.loggedIn,
    });
  };

});

// Export router
module.exports = router;