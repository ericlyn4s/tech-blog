const commentFormHandler = (event) => {
    alert('Form submitted!');
};

document
  .querySelector('.comment-form')
  .addEventListener('submit', commentFormHandler);