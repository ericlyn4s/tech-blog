const { Post } = require('../models');

// Starting data for the post table
const postdata = [
  {
    title: 'The Double-Edged Sword: Exploring the Potential Dangers of AI',
    content: "Artificial intelligence (AI) has revolutionized our world, from powering self-driving cars to personalizing online experiences.", 
    user_id: 1,
  },
  {
    title: 'Tiny Tech Tricks: Mastering Your Smartphone Battery',
    content: "Smartphones are lifelines, but sometimes their batteries feel more like lifelines on the verge of snapping. Here are some quick tips to squeeze the most out of your phone's charge: 1. Location, Location, Location.",
    user_id: 1,
  },
];

const seedPost = () => Post.bulkCreate(postdata);

module.exports = seedPost;
