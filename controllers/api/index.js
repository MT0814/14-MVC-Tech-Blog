const router = require('express').Router();
const userRoutes = require('./userRoutes');
const commentRoutes = require('./commentRoutes');
const addCommentRoutes = require ('./addCommentRoutes');



router.use('/users', userRoutes);
router.use('/comment', commentRoutes);
router.use('/add-comment', addCommentRoutes);



module.exports = router;
