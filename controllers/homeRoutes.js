const router = require('express').Router();
const { User } = require('../models');
const Comment = require('../models/Comment');
const withAuth = require('../utils/auth');


// route to get all comments
router.get('/', async (req, res) => {
  try {
    const commentData = await Comment.findAll({
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    const comments = commentData.map((comment) =>
      comment.get({ plain: true })
    );

    if (req.session.logged_in) {
      res.render('homepage', {
        comments,
        logged_in: req.session.logged_in,
        username: req.session.username
      });
    } else {
      res.render('homepage', {
        comments
      });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


// Use withAuth middleware to prevent access to route
router.get('/add-comment', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Comment }],
    });

    const user = userData.get({ plain: true });
    const username = user.name.split(' ').join('');
    res.render('add-comment', {
      ...user,
      username: username,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});



router.get('/signup', (req, res) => {
  if (req.session.signed_up) {
    res.redirect('/comment');
    return;
  }
  res.render('signup');
});


// User login area
router.get('/login', (req, res) => {
  // If a session exists, redirect the request to the homepage
  if (req.session.logged_in) {
    res.redirect('/comment');
    return;
  }

  res.render('login');
});


module.exports = router;
