const person1 = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
};

const person2 = person1;

// Modifica la proprietà "firstName" di person2 in "Simon"

person2.firstName = "Simon";

//modificando il valore in person2 cambia annche in person1 perchè alla riga 7 viene fatta una copia per riferimento e non per valore. Quindi entrambe le istnaze dell'oggetto puntano alla stessa allocazione di memeoria

console.log(person1);
console.log(person2);
