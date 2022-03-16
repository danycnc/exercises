function calculate() {
  // ...

  function operator() {
    add = function (value) {
      this.value += value;
    };
  }
  // (
  //   (add = function (number) {
  //     number += number;
  //   })
  // );
  sub = function (number) {
    number -= number;
  };
  multiply = function (number) {
    number *= number;
  };
  divide = function (number) {
    number /= number;
  };

  return operator;
}

const calculator = calculate();
console.log(typeof calculator);
console.log(calculator);
calculator.add(2).add(4).multiply(3).sub(1).sub(3).divide(2).printResult(); // Il risultato sarà: 7
