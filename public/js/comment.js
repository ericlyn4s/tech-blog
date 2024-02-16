const commentFormHandler =  async (event) => {
  event.preventDefault();

  const body = document.querySelector('#comment-body').value;
  const user_id = parseInt(1);
  const post_route = window.location.pathname.lastIndexOf('/');
  const post_id = parseInt(window.location.pathname.substring(post_route + 1));

  if (body) {
    const response = await fetch('/api/comments', {
      method: 'POST',
      body: JSON.stringify({ body, user_id, post_id }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace(window.location.pathname);
    } else {
      alert('Failed to leave comment');
    }
  };
};

document
  .querySelector('#comment-form')
  .addEventListener('submit', commentFormHandler);

