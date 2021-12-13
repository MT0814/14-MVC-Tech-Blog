const router = require('express').Router();
const Comment = require('../../models/Comment');




router.put('/edit-comment/:id', async (req, res) => {
    try {
        if (req.session.logged_in) {
            const commentData = await Comment.findAll({
                where: {
                    user_id: req.session.user_id
                },
                include: [
                    {
                        model: User,
                        attributes: ['name'],
                    }
                ]
            })

            if (commentData.length === 0) {
                console.log('there is no data, but here is the user name', req.session.username)
                res.render('edit-comment', {
                    logged_in: true,
                    username: req.session.username
                })
                return;
            }

            const comments = commentData.map((comment) =>
                comment.get({ plain: true })
            );

            res.render('account-comment', {
                comments,
                logged_in: req.session.logged_in,
                username: req.session.username
            });
        }
    } catch (err) {
        res.status(500).json(err)
    }
})

router.put('/edit-comment/:id', async (req, res) => {

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



module.exports = router;