function uncompletedNotes(notes) {
  // ...

  let uncomplete = [];

  for (let currentNote in notes) {
    for (let currentTodo in notes[currentNote].todos) {
      if (notes[currentNote].todos[currentTodo].done == false) {
        uncomplete.push(notes[currentNote]);
      }
    }
  }
  return uncomplete;
}

const notes = [
  {
    id: 1,
    description: "Workout program",
    todos: [
      {
        id: 1,
        name: "Push ups - 10 x 3",
        done: false,
      },
      {
        id: 2,
        name: "Abdominals - 20 x 3",
        done: true,
      },
      {
        id: 3,
        name: "Tapis Roulant - 15min",
        done: true,
      },
    ],
  },
  {
    id: 2,
    description: "Front-end Roadmap",
    todos: [
      {
        id: 1,
        name: "Learn HTML",
        done: true,
      },
      {
        id: 2,
        name: "Learn CSS",
        done: true,
      },
      {
        id: 3,
        name: "Learn JavaScript",
        done: true,
      },
      {
        id: 4,
        name: "Learn Angular",
        done: true,
      },
    ],
  },
];

const notesInProgress = uncompletedNotes(notes);
console.log("All notes: ", notes);
console.log("Notes In Progress: ", notesInProgress);
