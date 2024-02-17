const newPostHandler =  async (event) => {
    event.preventDefault();
  
    const title = document.querySelector('#post-title').value;
    const content = document.querySelector('#post-content').value;
 
    if (title && content) {
      const response = await fetch('/api/createposts', {
        method: 'POST',
        body: JSON.stringify({ title, content }),
        headers: { 'Content-Type': 'application/json' },
      });
      
      if (response.ok) {
        alert('Post added!');
        document.location.replace('/');
      } else {
        alert('Failed to add post');
      }
    };
  };
  
  document
    .querySelector('#new-post')
    .addEventListener('submit', newPostHandler);