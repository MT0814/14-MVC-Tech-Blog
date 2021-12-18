async function newFormHandler(event) {
    event.preventDefault();

    const response = await fetch('/api/comment/:id', {
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

}

document.querySelector('.new-comment-form').addEventListener('submit', newFormHandler);
