async function newFormHandler(event) {
    event.preventDefault();
    console.log("inside")
    const content = document.querySelector('#content').value.trim();

    const response = await fetch('/api/comment/:id', {

        method: 'POST',
        body: JSON.stringify({
            content
        }),
        headers: {
            'Content-Type': 'application/json',
        },

    });
    console.log(response)
    //if the comment is added, the 'all' template will be rerendered
    if (response.ok) {
        document.location.replace('/comment/:id');
    } else {
        alert('Failed to add comment');
    }


}

document.querySelector('.new-comment-form').addEventListener('submit', newFormHandler);
