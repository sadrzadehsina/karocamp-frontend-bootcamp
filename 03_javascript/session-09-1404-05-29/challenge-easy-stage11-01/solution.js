const user = {
  name: "John",
  email: "john@doe.com"
};

localStorage.setItem("username", "John");
localStorage.setItem("email", "john@doe.com");

// localStorage.clear();
localStorage.setItem("user", JSON.stringify(user));

console.log(
  localStorage.getItem("username"),
  localStorage.getItem("email"),
  JSON.parse(localStorage.getItem("user")),
  localStorage.length,
)


console.log(
  localStorage.getItem("username"),
  localStorage.getItem("email"),
  JSON.parse(localStorage.getItem("user"))
)