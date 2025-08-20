// DOM => Document Object Model

// => getElementById
// => getElementByClassName



// const errors = document.getElementsByClassName("errors");

// for (let index = 0; index < errors.length; index++) {
//   errors[index].style.backgroundColor = "blue";

//   if (index % 2 === 0) {
//     document.body.removeChild(errors[index]);
//   }
// }

// console.log(message);
// console.log(errors);

/*
onClick
onChange
onFocus
onBlur
*/


// const message = document.getElementById("message");
// const btn = document.getElementById("btn");

// btn.addEventListener("click", () => {
//   console.log(message.value);
// });

// message.addEventListener("input", () => {
//   console.log(message.value);
// })

const emailInputs = document.getElementsByClassName('email');

for (let index = 0; index < emailInputs.length; index++) {
  emailInputs[index].addEventListener("input", (e) => {
    console.log("input change", index, e.target.value);
  })
}