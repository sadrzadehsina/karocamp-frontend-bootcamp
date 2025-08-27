const resource = "https://jsonplaceholder.typicode.com/users";


const userElements = document.getElementsByClassName("user");

const username = document.getElementById("name");

const userWebsite = document.getElementById("website");

fetch(resource).then((roundTrip) => {
  roundTrip.json().then(users => {
    for (let index = 0; index < 3; index++) {

      const userElement = userElements[index];
      const nameElement = userElement.getElementsByClassName("name");
      const websiteElement = userElement.getElementsByClassName("website");

      nameElement[0].innerText = users[index].name;
      websiteElement[0].innerText = users[index].website;
    }
  })
});