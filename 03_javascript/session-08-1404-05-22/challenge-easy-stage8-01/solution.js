const userData = {
  personal: {
    firstName: "John",
    lastName: "Doe",
    age: 28,
    email: "john@example.com",
  },
  preferences: {
    theme: "dark",
    language: "en",
    notifications: true,
  },
  social: {
    twitter: "@johndoe",
    linkedin: "john-doe",
  },
};

function getCountryCityData() {
  return { country: "IRN", city: "ISF", street: "" };
}

const countryAndCity = getCountryCityData();
const { country, city } = countryAndCity;

console.log(countryAndCity);
console.log(country);
console.log(city);

const {
  personal: { firstName },
  preferences: { language },
  social,
} = userData;

console.log(userData);
console.log(userData.personal);
console.log(userData.preferences);
console.log(userData.social);

console.log("=========================");

// console.log(personal);
// console.log(preferences);
// console.log(social);

console.log(firstName);
console.log(language);

const newUserData = {
  ...userData,
  personal: {
    ...userData.personal,
    age: 120,
  },
  address: {},
};

console.log(newUserData);

const user = {
  firstName: "John",
  lastName: "Doe",
};

function assignJobTitleToUser(jobTitle = "DevOps Engineer") {
  return {
    ...user,
    jobTitle: jobTitle,
  };
}

const frontendDeveloper = assignJobTitleToUser("FrontEnd Developer");
const backendDeveloper = assignJobTitleToUser("Backend Developer");
const developer = assignJobTitleToUser();

console.log("|||||||||||||||||||||||||");

console.log(frontendDeveloper);
console.log(backendDeveloper);
console.log(developer);

console.log("AAAAAAAAAAAAAAAAAAAAAAAAA");

const person1 = {
  firstName: "John",
  lastName: "Doe",
  phone: "0101010",
};

const person2 = {
  firstName: "John",
  lastName: "Something",
  address: "IRN - ISF",
};

// shadow merge
const mergedPerson = {
  ...person2,
  ...person1,
};

// deep merge

console.log(mergedPerson);

// const mergedPerson = {
//   firstName: "John",
//   lastName: "Doe",
//   phone: "0101010", // X
//   firstName: "John", // => X
//   lastName: "Something", // X
//   address: "IRN - ISF", // X
// };

// {
//   firstName: 'John',
//   lastName: 'Something',
//   phone: "0101010",
//   address: "IRN - ISF"
// }

console.log("BBBBBBBBBBBBBBBBBBBBBBBBB");

function sayHi (name = "anonymous") {
  return `Hi ${name}, Welcome to this site`;
}

console.log(sayHi("John"));
console.log(sayHi());