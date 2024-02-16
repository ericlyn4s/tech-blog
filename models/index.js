const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

Post.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

Comment.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

// since we are going to be retrieving the post and then its associated comments, we would use Post.hasMany
Post.hasMany(Comment, {
  foreignKey: 'post_id',
  onDelete: 'CASCADE',
});

module.exports = { User, Post, Comment };

/*
What view the user hits determines what controller they hit
What controller is hit determines what model is hit and for what data
What model is hit determines what data comes back
*/
