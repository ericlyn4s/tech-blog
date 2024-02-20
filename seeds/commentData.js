const { Comment } = require('../models');

// Starting data for the comment table
const commentdata = [
  {
    body: 'I agree, AI scares me for real!',
    user_id: 1,
    post_id: 1,
  },
  {
    body: 'This article was very informative. I feel more prepared for the oncoming AI revolution.',
    user_id: 1,
    post_id: 1,
  },
  {
    body: "Very helpful article! I'll be sure to try these tips.",
    user_id: 1,
    post_id: 2,
  },
  {
    body: "I can't believe tip #1!",
    user_id: 1,
    post_id: 2,
  },

];

const seedComment = () => Comment.bulkCreate(commentdata);

module.exports = seedComment;
