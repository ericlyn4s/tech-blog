const { User } = require('../models');

// Starting data for the user table
const userdata = 
  {
    username: 'henry',
    email: 'henry3@gmail.com',
    password: 'Password123',
  };


const seedUser = () => User.create(userdata);

module.exports = seedUser;