
const User = require('./User');
const Comment = require('./Comment');


// ???
User.hasMany(Comment, {
  foreignKey:'comment_id',
  onDelete:'CASCADE'
});

Comment.belongsTo(User, {
  foreignKey: 'user_id',
});

module.exports = { User, Comment };
