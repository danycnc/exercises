const person = {
  firstName: "Mario",
  lastName: "Rossi",
  age: 25,
};

const getValues = () => {
  let valuesArray = Object.values(person);

  for (let index of valuesArray) {
    console.log(index);
  }
};
// Print values of person using Object.values

getValues();
