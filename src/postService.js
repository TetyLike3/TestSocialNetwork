function createPost(data,metadata) {
    const post = document.createElement('div');

    post.className = 'post';
    post.innerHTML = `
        <h1>${data[0]}</h1>
        <p>${data[1]}</p>}
        <h3>${metadata[0]}</h3>
    `;

    document.getElementById('content').appendChild(post);
};