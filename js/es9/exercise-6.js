function getKeys(obj) {
  // ...
  // return Object.keys(obj);

  let keysArray = [];

  for (let key in obj) {
    keysArray.push(key);
  }

  return keysArray;
}

const person = {
  firstName: "John",
  lastName: "Doe",
  age: 32,
  city: "Rome",
  job: "Developer",
};

const keys = getKeys(person);
console.log(keys);
