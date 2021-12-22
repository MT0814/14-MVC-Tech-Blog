const router = require('express').Router();
const Comment = require('../../models/Comment');


router.put('/:id', async (req, res) => {

    // It is sending the data to the Model so that one comment can be updated with new data in the database.
    try {
        const comment = await Comment.update(
            {
                title: req.body.title,
                content: req.body.content,
            },
            {
                where: {
                    id: req.params.id,
                },
            }
        );

        // The updated data (comment) is then sent back to handler that dispatched the fetch request.
        res.status(200).json(comment);
    } catch (err) {
        res.status(500).json(err);
    }
});



// delete one comment by its id

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