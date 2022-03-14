const person = {
  firstName: "Mario",
  lastName: "Rossi",
  age: 25,
};

for (let key of Object.keys(person)) {
  console.log(key + " " + person[key]);
}

// Print values of person using Object.keys
