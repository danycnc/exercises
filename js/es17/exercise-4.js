function calculate() {
  // ...
  let currentValue = 0;

  return {
    add(value) {
      currentValue += value;
      return this;
    },
    sub(value) {
      currentValue -= value;
      return this;
    },
    multiply(value) {
      currentValue *= value;
      return this;
    },
    divide(value) {
      currentValue /= value;
      return this;
    },
    printResult() {
      console.log(currentValue);
    },
  };
}

const calculator = calculate();
// console.log(typeof calculator);
// console.log(calculator);
calculator.add(2).add(4).multiply(3).sub(1).sub(3).divide(2).printResult(); // Il risultato sarà: 7
