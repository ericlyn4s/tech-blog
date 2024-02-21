const newPostHandler =  async (event) => {
    event.preventDefault();
  
    const title = document.querySelector('#post-title').value;
    const content = document.querySelector('#post-content').value;
 
    // New post requires the title and content variables, this will then send a FETCH to the backend
    if (title && content) {
      const response = await fetch('/api/createposts', {
        method: 'POST',
        body: JSON.stringify({ title, content }),
        headers: { 'Content-Type': 'application/json' },
      });
      
      if (response.ok) {
        alert('Post added!');
        document.location.replace('/createpost');
      } else {
        alert('Failed to add post');
      }
    };
  };
/* Future development; adding a delete button
  const deleteHandler = async (event) => {
    alert('hey');
    const response = await fetch('/api/createpost', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      alert('Post deleted!');
      document.location.replace('/createpost');
    }
  };
  */
 
  document
    .querySelector('#new-post')
    .addEventListener('submit', newPostHandler);
 
    /* Future development; adding a delete button
  document  
    .getElementById('button-delete')
    .addEventListener('click', deleteHandler);