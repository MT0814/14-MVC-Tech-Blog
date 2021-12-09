const router = require("express").Router();
const Comment = require("../../models/Comment");

// get one comment by its id
router.get("/:id", async (req, res) => {
  try {
    const commentData = await Comment.findByPk(req.params.id);
    const comment = commentData.get({ plain: true });
    res.render("account-comment", {
      comment,
      logged_in: req.session.logged_in,
      username: req.session.username,
    })
  } catch (err) {
    res.status(500).json(err)
  }

})




// delete one recipe by its id

router.delete('/:id', async (req, res) => {
  try {
    const commentData = await Comment.destroy({ where: { id: req.params.id } })
    console.log('commentData: ', commentData),
    res.render('account-comment', {
      logged_in: req.session.logged_in,
      username: req.session.username
    })
  } catch (err) {
    res.status(500).json(err)
  }
})

module.exports = router;

