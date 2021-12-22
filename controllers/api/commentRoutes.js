const router = require('express').Router();
// const Comment = require('../../models/Comment');
const withAuth = require('../../utils/auth');
const Note = require('../../models/Note');


// route to create/add a comment for other post  
router.post('/:id', withAuth, async (req, res) => {
    try {
        console.log('Comment post Routes------------------')
        const noteData = await Note.create({
            ...req.body,
            user_id: req.session.user_id,
            // comment_id:req.params.id

        });
        console.log(noteData)
        res.status(200).json(noteData);
    } catch (err) {
        console.log(err)
        res.status(400).json(err);
    }
});

router.put('/:id', async (req, res) => {
    // It is sending the data to the Model so that one note can be updated with new data in the database.
    try {
        console.log('Comment update Routes------------------')
        const note = await Note.update(
            {
                ...req.body,
                user_id: req.session.user_id,
            },
            {
                where: {
                    id: req.params.id,
                },
            }
        );
   
        // The updated data (note) is then sent back to handler that dispatched the fetch request.
        res.status(200).json(note);
    } catch (err) {
        res.status(500).json(err);
    }
});



module.exports = router;