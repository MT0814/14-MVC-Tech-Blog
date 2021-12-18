const router = require('express').Router();
const Comment = require('../../models/Comment');
const withAuth = require('../../utils/auth');



// get one comment by its id
router.get("/:id", async (req, res) => {
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

// route to create/add a comment for other post  
router.post('/:id', withAuth, async (req, res) => {
    try {
        const commentData = await Comment.create({
            ...req.body,
            user_id: req.session.user_id,
            username: req.session.username,
        });
        // console.log(commentData, 'the data')
        res.status(200).json(commentData);
    } catch (err) {
        res.status(400).json(err);
    }
});



module.exports = router;