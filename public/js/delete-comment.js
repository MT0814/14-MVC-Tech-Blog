const delButtonHandler = async (event) => {
    
    console.log("hello 1")
    if (event.target.hasAttribute('data-id')) {
        const id = event.target.getAttribute('data-id');
        console.log("hello2")
        const response = await fetch(`/api/comment/${id}`, {
            method: 'DELETE',
        });

        if (response.ok) {
            document.location.replace('/account-comment');
        } else {
            alert('Failed to delete this comment, please try it later.');
        }
    }
};


document
    .querySelector('.comment-list')
    .addEventListener('click', delButtonHandler);

