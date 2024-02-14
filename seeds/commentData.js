const { Comment } = require('../models');

const commentdata = [
  {
    body: 'I agree, AI scares me for real!',
    user_id: 1,
    post_id: 1,
  },
  {
    body: 'AI? More like goodbye!!',
    user_id: 1,
    post_id: 1,
  },
  {
    body: 'Where am I?',
    user_id: 1,
    post_id: 2,
  },
  {
    body: 'This article seems like trash.',
    user_id: 1,
    post_id: 2,
  },

];

const seedComment = () => Comment.bulkCreate(commentdata);

module.exports = seedComment;
