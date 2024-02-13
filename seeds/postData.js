const { Post } = require('../models');

const postdata = [
  {
    title: 'AI Stuff',
    content: 'We"re all doomed',
    creator_id: 1,
  },
  {
    title: 'Sample Data',
    content: 'Here"s some sample data',
    creator_id: 1,
  },
];

const seedPost = () => Post.bulkCreate(postdata);

module.exports = seedPost;
