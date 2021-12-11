const router = require('express').Router();
const Comment = require('../../models/Comment');
const withAuth = require('../../utils/auth');



// route to create/add a comment  
router.post('/', withAuth, async (req, res) => {
  try {
    const commentData = await Comment.create({
      ...req.body,
      user_id:req.session.user_id,
      userName: req.session.username,
      

    });
    // console.log(commentData, 'the data')
    res.status(200).json(commentData);
  } catch (err) {
    res.status(400).json(err);
  }
});



module.exports = router;