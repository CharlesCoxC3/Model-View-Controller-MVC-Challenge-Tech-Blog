async function editFormHandler(event) {
    event.preventDefault();

    const title = document.querySelector("#blog-name").value;
    const content = document.querySelector("#blog-desc").value;
  
    // use the update route to update the post
    const response = await fetch(`/api/blogs/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
          title,
          content
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      });
    // if the edit action is successful, redirect to the dashboard page, otherwise display the error
    if (response.ok) {
        document.location.replace('/dashboard');
        } else {
        alert(response.statusText);
        }
  
  }
  
  document.querySelector('.edit-blog-form').addEventListener('submit', editFormHandler);