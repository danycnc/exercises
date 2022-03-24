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

const jobs = [
  {
    id: 1,
    jobTitle: "CEO",
  },
  {
    id: 2,
    jobTitle: "Project Manager",
  },
  {
    id: 3,
    jobTitle: "Developer",
  },
];

// core here

const fetchPersonById = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const person = persons.find((person) => person.id === id);

      if (person) {
        resolve(person);
      }

      reject(`Person with id ${id} doesn't exist`);
    }, 1000);
  });
};

const fetchJobById = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const job = jobs.find((job) => job.id === id);

      if (job) {
        resolve(job);
      }

      reject(`Job with id ${id} doesn't exist`);
    }, 2000);
  });
};

let employee = Promise.all([fetchPersonById(3), fetchJobById(3)])
  .then((fetchedData) => {
    [a, b] = fetchedData;
    console.log(a, b);
  })
  .catch((err) => console.log(err));
