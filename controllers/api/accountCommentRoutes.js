const router = require('express').Router();
const Comment = require('../../models/Comment');
const withAuth = require('../../utils/auth');

router.put('/account-comment/:id', async (req, res) => {
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
                res.render('account-comment', {
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



module.exports = router;