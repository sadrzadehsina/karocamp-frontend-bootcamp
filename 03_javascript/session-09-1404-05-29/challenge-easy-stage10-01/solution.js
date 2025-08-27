const resource = "https://jsonplaceholder.typicode.com/users";

const userElements = document.getElementsByClassName("user");

const username = document.getElementById("name");

const userWebsite = document.getElementById("website");

//www.alibaba.ir/flights/THR-MHD?adult=1&child=0&infant=0&departing=1404-07-01

// [protocol]://[domain | host]/[url]?[query-string]

https: function fetchData() {
  // const roundTrip = await fetch(resource);
  // const users = await roundTrip.json();

  // adult=1&child=0&infant=0&departing=1404-07-01
  // {"adult":1,"child":0,"infant":0,"departing":"1404-07-01"}
  // {"adult"=1&"child"=0&"infant"=0&"departing"="1404-07-01"}
  // {adult=1&child=0&infant=0&departing=1404-07-01}
  // adult=1&child=0&infant=0&departing=1404-07-01
  const query = {
    adult: 1,
    child: 0,
    infant: 0,
    departing: "1404-07-01",
  };

  console.group("group 1");
  console.log(query);
  console.groupEnd();

  console.group("group 2");
  console.log("test");
  console.log("test");
  console.log("test");
  console.log("test");
  console.log("test");
  console.groupEnd();

  const objectString = '{"adult":1,"child":0,"infant":0,"departing":"1404-07-01"}';
  
  console.log(JSON.parse(objectString));

  console.log(
    JSON.stringify(query)
      .replace("{", "")
      .replace("}", "")
      .replaceAll(":", "=")
      .replaceAll('"', "")
      .split(",")
      .join("&")
  );
}

// async function fetchData() {
//   try {
//     const roundTrip = await fetch(resource);

//     try {
//       const users = await roundTrip.json();

//       throw new Error("Something went wrong");

//       for (let index = 0; index < 3; index++) {
//         const userElement = userElements[index];
//         const nameElement = userElement.getElementsByClassName("name");
//         const websiteElement = userElement.getElementsByClassName("website");

//         nameElement[0].innerText = users[index].name;
//         websiteElement[0].innerText = users[index].website;
//       }
//     } catch (error) {
//       console.error("response.json", error);
//     }
//   } catch (error) {
//     console.error("data.fetch", error);
//   }
// }

fetchData();

// fetch(resource)
//   .then((roundTrip) => {
//     roundTrip
//       .json()
//       .then((users) => {
//         for (let index = 0; index < 3; index++) {
//           const userElement = userElements[index];
//           const nameElement = userElement.getElementsByClassName("name");
//           const websiteElement = userElement.getElementsByClassName("website");

//           nameElement[0].innerText = users[index].name;
//           websiteElement[0].innerText = users[index].website;
//         }
//       })
//       .catch((error) => {
//         // toast
//         console.error("response.json", error);
//       });
//   })
//   .catch((error) => {
//     // toast
//     console.error("data.fetch", error);
//   });
