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
      const person = persons.find((item) => item.id === id);

      if (person) {
        resolve(JSON.stringify(person));
      }

      reject(`Person with id: ${id} doesn't exist`);
    }, 1000);
  });
}

async function asyncFetch() {
  try {
    let person = await fetchPersonById(2);
    console.log(JSON.parse(person));
  } catch (err) {
    console.log(err);
  }
}
asyncFetch();
