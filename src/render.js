/*
// Create Post button
var ipc = require('electron').ipcRenderer;
var newPostButton = document.getElementById('newPostButton');

// Create listener for the button and response
newPostButton.addEventListener('click', function () {
    ipc.once('actionReply', function (event, response) {
    // Create the post
    const post = document.createElement('div');

    post.className = 'post';
    post.innerHTML = `
        <h1>${data[0]}</h1>
        <p>${data[1]}</p>}
        <h3>${metadata[0]}</h3>
    `;

    document.getElementById('content').appendChild(post);
    })
    // Tell main process that a new post is being made
    ipc.send('invokeAction', 'Placeholder Data');
});
*/

