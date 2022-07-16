const postTemplate = `
    <div class="post">
        <h1 class="title">Post Template</h1>
        <p class="text">This is a template for a post.</p>
        <h3 class="author">Template Author</h3>
    </div>
`
const contentDiv = document.getElementById('content');


function createPost(data,metadata) {
    /*
    let newPost = document.createElement(postTemplate);

    newPost.getElementByClassName('title').innerText = data[0];
    newPost.getElementByClassName('text').innerText = data[1];
    newPost.getElementByClassName('author').innerText = metadata[0];
    */
    var docFragment = document.createDocumentFragment();
    docFragment.appendChild(node1);
    docFragment.appendChild(node2);
    var newPost = docFragment.children;
};

setTimeout(createPost(["Test1","ball1ng"],["TetyBall1"]),3000);
setTimeout(createPost(["Test2","ball2ng"],["TetyBall2"]),3000);