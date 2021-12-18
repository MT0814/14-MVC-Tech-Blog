const router = require('express').Router();
const Comment = require('../../models/Comment');
const withAuth = require('../../utils/auth');



// get one comment by its id
router.get("/:id", withAuth, async (req, res) => {
    console.log("---------comment------------")
    try {
        const commentData = await Comment.findByPk(req.params.id)
        const comment = commentData.get({ plain: true });
        res.render("comment", {
            comment,
            logged_in: req.session.logged_in,
            username: req.session.username,
        })

    } catch (err) {
        res.status(500).json(err)
    }

})

module.exports = router;