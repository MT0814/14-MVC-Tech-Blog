const router = require('express').Router();
const Comment = require('../../models/Comment');
const withAuth = require('../../utils/auth');



// route to create/add a comment  
router.post('/', withAuth, async (req, res) => {
  try {
    console.log(req.body, "text")
    const commentData = await Comment.create({
      user_name: req.body.user_name,
      comment: req.body.comment,
      user_id: parseInt(req.body.idName),

    });
    // console.log(commentData, 'the data')
    res.status(200).json(commentData);
  } catch (err) {
    res.status(400).json(err);
  }
});




module.exports = router;