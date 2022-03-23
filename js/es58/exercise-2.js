const persons = [
  {
    id: 1,
    firstName: "Mario",
    lastName: "Rossi",
    age: 25,
  },
  {
    id: 2,
    firstName: "Maria",
    lastName: "Verdi",
    age: 32,
  },
  {
    id: 3,
    firstName: "Giovanni",
    lastName: "Rossi",
    age: 35,
  },
];

function fetchPersonById(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let verifiedPerson = persons.find((item) => item.id === id);
      if (verifiedPerson) {
        resolve(verifiedPerson);
      } else {
        reject(new Error("No person associated with this ID"));
      }
    }, 1000);
  });
}

fetchPersonById(1)
  .then((person) => console.log(person))
  .catch((err) => console.log(err));
