const commentFormHandler = async (event) => {
    // event.preventDefault();
    if (event.target.hasAttribute('data-id')) {
        const id = event.target.getAttribute('data-id');
        const content = document.querySelector('#content').value.trim();
        const response = await fetch(`/api/comment/${id}`, {

            method: 'POST',
            body: JSON.stringify({
                content,
                comment_id: id,
            }),
            headers: {
                'Content-Type': 'application/json',
            },

        });
        console.log(response)
        //if the comment is added, the 'all' template will be rerendered
        if (response.ok) {
            document.location.replace(`/comment/${id}`);
        } else {
            alert('Failed to add comment');
        }


        // const id = 1//replaced this with the id of the comment


    }

};
document.querySelector('.new-comment-form').addEventListener('#comment-btn', commentFormHandler);
