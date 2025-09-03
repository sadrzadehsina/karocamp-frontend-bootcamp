const postsUrl = "https://jsonplaceholder.typicode.com/posts";
const usersUrl = "https://jsonplaceholder.typicode.com/users";

// 1.
async function fetchAllPosts() {
  // fetch posts
  const response = await fetch(postsUrl);

  const posts = await response.json();

  return posts;
}

// 2.
// function fetchAllPostsV2() {
//   fetch(postsUrl).then(response => {
//     response.json().then(posts => {
//       return posts;
//     })
//   })
// }

async function fetchAllUsers() {
  // fetch users
  const response = await fetch(usersUrl);

  const users = await response.json();

  return users;
}

function filterPostsByUserId(posts, userId) {
  return posts.filter((post) => post.userId === userId);
}

function filterPostsByTitle(posts, title) {
  return posts.filter((post) => post.title.includes(title));
}

async function main() {
  const posts = await fetchAllPosts();
  const users = await fetchAllUsers();


  users.forEach(user => {
    const filteredPostsByUserId = filterPostsByUserId(posts, user.id);

    console.log(user.name)
    console.log(filteredPostsByUserId);
    console.log(filteredPostsByUserId.length);
    console.log("===================");
  })

  const title = "sit";

  const filteredPostsByTitle = filterPostsByTitle(posts, title);

  console.log("===================");
  console.log(filteredPostsByTitle);
}

main();
