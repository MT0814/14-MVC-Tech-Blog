const router = require('express').Router();
const Comment = require('../../models/Comment');
const User =require('../../models/User');

router.put('/:id', async (req, res) => {
    console.log("---------edit comment------------")
    try {
        if (req.session.logged_in) {
            await Comment.update(req.body,{
                where: {
                    id: req.params.id,
                    user_id:req.session.user_id
                },
            
            })
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

            // if (commentData.length === 0) {
            //     console.log('there is no data, but here is the user name', req.session.username)
            //     res.render('edit-comment', {
            //         logged_in: true,
            //         username: req.session.username
            //     })
            //     return;
            // }

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
        console.log(err)
        res.status(500).json(err)
    }
})




module.exports = router;