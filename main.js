const posts = [
  { title: 'Post One', id: 1 },
  { title: 'Post Two', id: 2 },
  { title: 'Post Three', id: 3 },
];

function getPosts() {
  posts.forEach(function (post) {
    const eachPost = document.createElement('li');
    eachPost.textContent = post.title;
    console.log(eachPost);
  })
  // setTimeout(() => {

  // }, 2000);
}

function addPost() {
  const newPost = { title: 'Post Four', id: 4 }
  posts.push(newPost)
  console.log(posts);
}

getPosts();
addPost()