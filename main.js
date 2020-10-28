const posts = [
  { title: 'Post One', id: 1 },
  { title: 'Post Two', id: 2 },
  { title: 'Post Three', id: 3 },
];

function addPost(post) {
  setTimeout(() => {
    posts.push(post);

  }, 2000);
}

function getPosts() {
  setTimeout(() => {
    let output = ''
    posts.forEach(function (post) {
      // const eachPost = document.createElement('li');
      // eachPost.textContent = post.title;
      // console.log(eachPost);
      output += `<li>${post.title}</li>`;
      document.body.innerHTML = output;
    })
  }, 1000);
}

// getPosts();
addPost({ title: 'Post Four', id: 4 });
getPosts();