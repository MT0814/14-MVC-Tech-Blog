async function newFormHandler(event) {
  event.preventDefault();
  console.log("inside")
  const userName = document.querySelector('#user-name').value.trim();
  const comment = document.querySelector('#comment').value.trim();
  const date = document.querySelector('#date').value.trim();
  const idName = document.querySelector('#id-name').value.trim();


  // Send fetch request to add a new comment
  const response = await fetch(`/api/add-comment`, {
    method: 'POST',
    body: JSON.stringify({
      userName,
      comment,
      idName,
      date
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

document.querySelector('.new-comment-form').addEventListener('submit', newFormHandler);
console.log("outside")
