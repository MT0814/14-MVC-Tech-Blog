async function newFormHandler(event) {
  event.preventDefault();
  console.log("inside")
  const title = document.querySelector('#title').value.trim();
  const content = document.querySelector('#content').value.trim();
  const image ="images/default.jpg";

  if (content && title) {
    // Send fetch request to add a new comment
    const response = await fetch(`/api/add-comment`, {
      method: 'POST',
      body: JSON.stringify({
        title,
        content,
        image
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
