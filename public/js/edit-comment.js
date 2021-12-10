async function editFormHandler(event) {
    event.preventDefault();
    const title = document.querySelector('#title').value.trim();
    const content = document.querySelector('#content').value.trim();
  
    // window.location gives us access to the URL. We then use the .split() method to access the number at the end of the URL and set that equal to id.
    const id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];
  
    // What part of our application will handle this 'put' request?
    // The Controller will handle this 'put' request.
    console.log("hello edit")
    const response = await fetch(`/api/comment/${id}`, {
      method: 'PUT',
      body: JSON.stringify({
         title,
        content
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  
    // What happens if the response is ok?
    // If the response is ok, that means that the comment was updated successfully. 
    if (response.ok) {
      document.location.replace(`/account-comment/${id}`);
    } else {
      alert('Failed to edit comment');
    }
  }
  
  document.querySelector('.edit-comment-form').addEventListener('submit', editFormHandler);
  