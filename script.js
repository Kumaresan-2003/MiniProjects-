document.addEventListener('DOMContentLoaded', function() {
  const postForm = document.getElementById('postForm');
  const postContent = document.getElementById('postContent');
  const feed = document.getElementById('feed');

  postForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const content = postContent.value;

    // Create a new post element
    const newPost = document.createElement('div');
    newPost.classList.add('post');
    newPost.textContent = content;

    // Add the new post to the feed
    feed.appendChild(newPost);

    // Clear the post content
    postContent.value = '';
  });
});
