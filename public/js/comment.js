const { Comment } = require('../../models');

const commentFormHandler =  async (event) => {

  const body = document.querySelector('#comment-body').value;
  const user_id = 1;
  const post_route = window.location.pathname.lastIndexOf('/');
  const post_id = window.location.pathname.substring(post_route + 1);

  const newComment = {
    'body' : body, 
    'user_id' : parseInt(user_id),
    'post_id' : parseInt(post_id),
  };

  await new Comment(newComment);

};

document
  .querySelector('#comment-form')
  .addEventListener('submit', commentFormHandler);