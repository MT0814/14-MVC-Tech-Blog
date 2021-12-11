const router = require('express').Router();
const userRoutes = require('./userRoutes');
const commentRoutes = require('./commentRoutes');
const addCommentRoutes = require('./addCommentRoutes');
const accountCommentRoutes = require('./accountCommentRoutes');



router.use('/users', userRoutes);
router.use('/comment', commentRoutes);
router.use('/add-comment', addCommentRoutes);
router.use('/account-comment', accountCommentRoutes);



module.exports = router;
