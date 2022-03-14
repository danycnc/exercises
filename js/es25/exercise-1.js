const person = {
  // ...

  firstName: "",
  lastName: "",

  get firstName() {
    return firstName;
  },

  get lastName() {
    return lastName;
  },

  set setfirstName(value) {
    firstName = value;
  },

  set setlastName(value) {
    lastName = value;
  },

  fullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },
};

let john = Object.create(person);
john.setfirstName = "Jonh";
john.setlastName = "Doe";
console.log(john.fullName()); // John Doe

let simon = Object.create(person);
simon.setfirstName = "Simon";
simon.setlastName = "Collins";

console.log(simon.fullName()); // Simon Collins
