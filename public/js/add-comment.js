async function newFormHandler(event) {
  event.preventDefault();
  console.log("inside")
  // const userName = document.querySelector('#user-name').value.trim();
  const content = document.querySelector('#content').value.trim();
  const title = document.querySelector('#title').value.trim();
  // const idName = document.querySelector('#id-name').value.trim();

  if (content && title) {
    // Send fetch request to add a new comment
    const response = await fetch(`/api/add-comment`, {
      method: 'POST',
      body: JSON.stringify({
        // userName,
        content,
        title
        // idName
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    //if the comment is added, the 'all' template will be rerendered
    if (response.ok) {
      document.location.replace('/account-comment');
    } else {
      alert('Failed to add comment');
    }
  }


};

document.querySelector('.new-comment-form').addEventListener('submit', newFormHandler);
console.log("outside")
